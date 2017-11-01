json.playlist do
  json.extract! playlist, :id, :name, :author_id
  json.trackIds playlist.tracks.map(&:id)
  json.image_url asset_path(playlist.image.url)
end

json.tracks do
  playlist.tracks.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track', track: track
    end
  end
end