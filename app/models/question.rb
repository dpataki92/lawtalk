class Question < ApplicationRecord
    belongs_to :creator, class_name: 'User'
    has_many :followings
    has_many :followers, through: :followings, source: :user
    has_many :answers
    has_many :comments, through: :answers
    
    scope :recent, -> { order(created_at: :desc) }
    scope :relevant, -> { order('followings_count DESC') }


    def creation_date_in_words
        self.created_at.strftime("%B %d, %Y")
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
                title: q.title, 
                jurisdiction: q.jurisdiction,
                field: q.field,
                replies: q.answers.size,
                creator: q.creator.username,
                creatorId: q.creator.id,
                lastResponseDate: q.last_response_data[0],
                lastRespondent: q.last_response_data[1],
                lastRespondentAvatar: q.last_response_data[2],
                lastRespondentId: q.last_response_data[3]
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
            Question.all.select {|q| q.title.include?(word.strip.downcase)}
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
            title: self.title, 
            content: self.content,
            jurisdiction: self.jurisdiction,
            field: self.field,
            creatorAvatar: self.creator.avatar,
            creator: self.creator.username,
            creatorId: self.creator.id,
            creation: self.created_at.to_s[0..-14],
            replies: self.answers.size,
        }
    end

    def question_answer_serializer
    end
end