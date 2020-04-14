class ReCreate < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false
      t.text :body, null: false
      t.references :thread, polymorphic: true, null: false

      t.timestamps

      t.index :author_id
    end

    add_index :messages, [:thread_type, :thread_id, :created_at]
  end
end
