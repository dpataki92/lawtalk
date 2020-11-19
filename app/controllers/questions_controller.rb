class QuestionsController < ApplicationController
    def questions_list
        questions = []

        if params[:followed] === "true"
            followed = User.find_by(username: params[:username]).followed_questions.sorted_and_ordered(params[:order], params[:field], params[:jurisdiction], params[:searchWord])
            created = User.find_by(username: params[:username]).created_questions.sorted_and_ordered(params[:order], params[:field], params[:jurisdiction], params[:searchWord])
            
            if params[:order] === "creation" || !params[:order]
                questions = (followed + created).sort {|a,b| b.created_at <=> a.created_at}
            else 
                questions = (followed + created).sort {|a,b| b.followers.size <=> a.followers.size}
            end
        else
            questions = Question.all.sorted_and_ordered(params[:order], params[:field], params[:jurisdiction], params[:searchWord])
        end

        cut_questions = Question.page_cut(questions, params[:pageNumber])
        render json: {questions: Question.questions_data_for_list(cut_questions)} 
    end

    def create
        user = User.find_by(username: params[:username])
        question = Question.create(title: params[:title], jurisdiction: params[:jurisdiction], field: params[:field], content: params[:content], creator: user)

        if question.valid?
            user.created_questions << question
            render json: {message: "success"}
        else
            render json: {message: "failure"}
        end
    end

    def show
        question = Question.find_by(id: params[:id])
        question_hash = question.question_serializer

        if current_user.followed_questions.include?(question) || current_user.created_questions.include?(question)
            question_hash["followed"] = "true"
        else
            question_hash["followed"] = "false"
        end

        render json: {questionData: question_hash}
    end

    def update
        question = Question.find_by(id: params[:id])
        user = User.find_by(username: params[:username])

        if question.update(title: params[:title], jurisdiction: params[:jurisdiction], field: params[:field], content: params[:content], creator: user)
            render json: {message: "success"}
        else
            render json: {message: "failure"}
        end
    end

    def destroy
        question = Question.find_by(id: params[:id])

        if question.destroy
            render json: {message: "success"}
        else
            render json: {message: "failure"}
        end
    end

    def follow_thread
        question = Question.find_by(id: params[:id])
        current_user.followed_questions << question
        current_user.save

        render json: {message: "You are now following this thread. You will find it under the 'My questions' tab."}
    end

    def unfollow_thread
        question = Question.find_by(id: params[:id])
        current_user.followed_questions.delete(question)
        current_user.save

        render json: {message: "You unfollowed this thread"}
    end

    def replies
        question = Question.find_by(id: params[:id])
        
        render json: {answerData: question.question_answer_serializer}
    end

end