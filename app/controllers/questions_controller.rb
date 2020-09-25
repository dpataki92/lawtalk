class QuestionsController < ApplicationController
    skip_before_action :authorized, only: [:show]

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
        answers = question.answers
        render json: {questionData: QuestionSerializer.new(question).to_serialized_json, answerData: AnswerSerializer.new(answers).to_serialized_json}
    end

end