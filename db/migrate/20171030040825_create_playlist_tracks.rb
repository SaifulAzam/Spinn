class CreatePlaylistTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :playlist_tracks do |t|
      t.integer :track_id
      t.integer :playlist_id

      t.timestamps
    end
    add_index :playlist_tracks, :track_id
    add_index :playlist_tracks, :playlist_id
  end
end
