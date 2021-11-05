# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all

@admin = User.create!(username: 'hummingbirdssss', email: 'hummbirdssss@email.com', password: '123456')

puts "#{User.count} users created"

10.times do
  Post.create!(
    image: 'https://picsum.photos/200',
    category: 'Meta',
    title: Faker::FunnyName.name,
    subtitle: 'If I dont do nothin Ima ball',
    content: Faker::Quote.famous_last_words,
    user: @admin
  )
end

puts "#{Post.count} posts created"

5.times do
  Comment.create!(
    content: Faker::FunnyName.name,
    user: @admin,
    post: Post.ids
  )
end

puts "#{Comment.count} comments created"
