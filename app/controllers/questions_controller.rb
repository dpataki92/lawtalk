class QuestionsController < ApplicationController
    def questions_list
        questions = []
        if params[:followed] === "true"
            followed = User.find_by(username: params[:username]).followed_questions.sorted_and_ordered(params[:order], params[:field], params[:jurisdiction], params[:searchWord])
            created = User.find_by(username: params[:username]).created_questions.sorted_and_ordered(params[:order], params[:field], params[:jurisdiction], params[:searchWord])
            questions = followed + created
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
        render json: {questionData: question.question_serializer}
    end

    def update
        question = Question.find_by(id: params[:id])
        user = User.find_by(username: params[:username])
        question.update(title: params[:title], jurisdiction: params[:jurisdiction], field: params[:field], content: params[:content], creator: user)
        if question
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

    def replies
        question = Question.find_by(id: params[:id])
        render json: {answerData: question.question_answer_serializer}
    end

end