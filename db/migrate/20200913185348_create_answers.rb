class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.string :content
      t.integer :upvotes, default: 0
      t.integer :downvotes, default: 0
      t.integer :user_id
      t.integer :question_id

      t.timestamps
    end
  end
end
