json.extract! artist, :id, :name
json.image_url asset_path(artist.image.url)
json.albumIds artist.albums.map(&:id)
json.trackIds artist.tracks.map(&:id)