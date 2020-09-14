class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :title
      t.string :content
      t.integer :creator_id
      t.string :jurisdiction
      t.string :field

      t.timestamps

    end
  end
end
