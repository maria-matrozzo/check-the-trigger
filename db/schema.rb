# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_07_025007) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authors", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "image"
    t.string "pages"
    t.string "description"
    t.string "publication_date"
    t.string "publisher"
    t.string "genre"
    t.bigint "author_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["author_id"], name: "index_books_on_author_id"
  end

  create_table "content_warnings", force: :cascade do |t|
    t.bigint "book_id"
    t.string "abandonment"
    t.string "ableism"
    t.string "abortion"
    t.string "acephobia"
    t.string "addiction"
    t.string "adult_minor_relationship"
    t.string "alcohol"
    t.string "alcoholism"
    t.string "animal_cruelty"
    t.string "animal_death"
    t.string "antisemitism"
    t.string "biphobia"
    t.string "blood"
    t.string "body_horror"
    t.string "body_shaming"
    t.string "bullying"
    t.string "cancer"
    t.string "cannibalism"
    t.string "car_accident"
    t.string "child_abuse"
    t.string "child_death"
    t.string "chronic_illness"
    t.string "classism"
    t.string "colonization"
    t.string "confinement"
    t.string "cultural_appropriation"
    t.string "cursing"
    t.string "deadnaming"
    t.string "death"
    t.string "death_of_a_parent"
    t.string "dementia"
    t.string "domestic_abuse"
    t.string "drug_abuse"
    t.string "drug_use"
    t.string "dysphoria"
    t.string "eating_disorder"
    t.string "emotional_abuse"
    t.string "excrement"
    t.string "fatphobia"
    t.string "fire"
    t.string "forced_institutionalization"
    t.string "gaslighting"
    t.string "genocide"
    t.string "gore"
    t.string "grief"
    t.string "gun_violence"
    t.string "hate_crime"
    t.string "homophobia"
    t.string "incest"
    t.string "infertility"
    t.string "infidelity"
    t.string "injury"
    t.string "islamophobia"
    t.string "kidnapping"
    t.string "lesbophobia"
    t.string "mass_shooting"
    t.string "medical_content"
    t.string "medical_trauma"
    t.string "mental_illness"
    t.string "miscarriage"
    t.string "misogyny"
    t.string "murder"
    t.string "outing"
    t.string "panic_attack"
    t.string "pedophilia"
    t.string "physical_abuse"
    t.string "police_brutality"
    t.string "pregnancy"
    t.string "racial_slur"
    t.string "racism"
    t.string "rape"
    t.string "religious_bigotry"
    t.string "schizophrenia"
    t.string "school_shooting"
    t.string "self_harm"
    t.string "sexism"
    t.string "sexual_assault"
    t.string "sexual_harrassment"
    t.string "sexual_violence"
    t.string "slavery"
    t.string "stalking"
    t.string "suicidal_thoughts"
    t.string "suicide"
    t.string "suicide_attempt"
    t.string "terminal_illness"
    t.string "torture"
    t.string "toxic_friendship"
    t.string "toxic_relationship"
    t.string "trafficking"
    t.string "transphobia"
    t.string "violence"
    t.string "vomit"
    t.string "war"
    t.string "xenophobia"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["book_id"], name: "index_content_warnings_on_book_id"
  end

end
