# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_18_193039) do

  create_table "answers", force: :cascade do |t|
    t.string "content"
    t.integer "upvotes", default: 0
    t.integer "downvotes", default: 0
    t.integer "user_id"
    t.integer "question_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string "content"
    t.integer "upvotes", default: 0
    t.integer "downvotes", default: 0
    t.integer "user_id"
    t.integer "answer_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "followings", force: :cascade do |t|
    t.integer "user_id"
    t.integer "question_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.integer "creator_id"
    t.string "jurisdiction"
    t.string "field"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "followings_count", default: 0
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "location"
    t.string "fields"
    t.string "avatar"
    t.string "bio"
    t.integer "upvotes", default: 0
    t.integer "downvotes", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
