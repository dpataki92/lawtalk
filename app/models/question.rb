class Question < ApplicationRecord
    belongs_to :creator, class_name: 'User'
    has_many :followings
    has_many :followers, through: :followings, source: :user
    has_many :answers
    has_many :comments, through: :answers
    
    scope :recent, -> { order(created_at: :desc) }
    scope :relevant, -> { order('followings_count DESC') }

    validates :title, presence: true
    validates :jurisdiction, presence: true
    validates :field, presence: true

    def creation_date_in_words
        self.created_at.strftime("%B %d, %Y")
    end

    def update_date_in_words
        if self.created_at === self.updated_at
            self.updated_at.strftime("%B %d, %Y")
        else
            self.updated_at.strftime("%B %d, %Y, at %I:%M %p")
        end
    end

    def last_response_data
        last_response = self.answers.recent.first
        if last_response
            last_response_creation_date = last_response.creation_date_in_words
            last_response_user = last_response.user.username
            last_response_user_avatar = last_response.user.avatar
            last_response_user_id = last_response.user.id
            [last_response_creation_date, last_response_user, last_response_user_avatar, last_response_user_id]
        else
            ["No reply yet", "-", "default.jpg"]
        end
    end

    def self.questions_data_for_list(questions)
        questions_data_array = []
        questions.each do |q|
            question_data_hash = {
                id: q.id,
                title: q.title, 
                jurisdiction: q.jurisdiction,
                field: q.field,
                replies: q.answers.size,
                creator: q.creator.username,
                creatorId: q.creator.id,
                lastResponseDate: q.last_response_data[0],
                lastRespondent: q.last_response_data[1],
                lastRespondentAvatar: q.last_response_data[2],
                lastRespondentId: q.last_response_data[3],
                followers: q.followers.size,
                followersNames: q.followers.collect{ |f| f.username}.join(", ")
            }
           questions_data_array << question_data_hash
        end
        questions_data_array
    end

    def self.field(field)
        if (field.empty?)
            where('field != ""')
        else
            where(field: field)  
        end
    end

    def self.jurisdiction(jurisdiction)
        if (jurisdiction.empty?)
            where('jurisdiction != ""')
        else
            where(jurisdiction: jurisdiction)  
        end
    end

    def self.search_word(word)
        if (word.empty?)
            where('title != ""')
        else
            Question.all.select {|q| q.title.downcase.include?(word.strip.downcase)}
        end 
    end

    def self.page_cut(questions, page_number)
        if !page_number.empty?
            page_number = page_number.to_i
        end
        if page_number == "" || page_number == 1
            questions[0..5]
        elsif (page_number-1)*6 < questions.size 
            questions[(page_number-1)*6..page_number*6-1]
        else
            []
        end
    end

    def self.sorted_questions(field, jurisdiction, search_word)
        self.field(field).jurisdiction(jurisdiction).search_word(search_word)
    end

    def self.ordered_questions(order)
        if order === "creation"
            self.recent
        elsif order === "relevance"
            self.relevant
        end
    end

    def self.sorted_and_ordered(order, field, jurisdiction, search_word)
        self.ordered_questions(order).sorted_questions(field, jurisdiction, search_word)
    end

    def question_serializer
        question_data_hash = {
            id: self.id,
            title: self.title, 
            content: self.content,
            jurisdiction: self.jurisdiction,
            field: self.field,
            creatorAvatar: self.creator.avatar,
            creator: self.creator.username,
            creatorId: self.creator.id,
            creation: self.creation_date_in_words,
            update: self.update_date_in_words,
            replies: self.answers.size,
            followersNames: self.followers.collect{ |f| f.username}.join(", "),
            followers: self.followers.size
        }
    end

    def question_answer_serializer
        ranked_answers = Answer.ranked(self.answers)
        result = []
        ranked_answers.each do |a|
            answer_hash = {
                answerId: a.id,
                content: a.content,
                answerCreator: a.user.username,
                answerCreatorId: a.user.id,
                creation: a.creation_date_in_words,
                upvotes: a.votes.select {|v| v.upvote}.size,
                downvotes: a.votes.select {|v| v.downvote}.size,
                commentsNum: a.comments.size
            }
            result << answer_hash
        end
        result
    end
end