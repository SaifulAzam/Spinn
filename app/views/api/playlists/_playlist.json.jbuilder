json.playlist do
  json.extract! playlist, :id, :name, :author_id
  json.imageUrl asset_path(playlist.image(:large))
  json.author playlist.author.email
  json.trackIds playlist.track_ids
  json.background playlist.background
end

json.tracks do
  playlist.tracks.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track', track: track
    end
  end
end
