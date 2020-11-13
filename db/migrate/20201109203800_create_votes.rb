class CreateVotes < ActiveRecord::Migration[6.0]
  def change
    create_table :votes do |t|
      t.integer :answer_id
      t.integer :user_id
      t.integer :comment_id
      t.boolean :upvote, default: false
      t.boolean :downvote, default: false

      t.timestamps
    end
  end
end
