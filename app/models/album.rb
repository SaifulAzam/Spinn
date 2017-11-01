class Album < ApplicationRecord
  validates :title, presence: true, length: { maximum: 40 }

  has_attached_file :artwork, default_url: 'album_default.jpg'
  validates_attachment_content_type :artwork, content_type: /\Aimage\/.*\Z/

  belongs_to :artist
  has_many :tracks
  has_many :genres, through: :artist, source: :genres
end