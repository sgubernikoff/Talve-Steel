# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'seeding begin'

User.create(username:'admin',password:'password',isAdmin: true)
User.create(username:'guest',password:'password',isAdmin:false)

Coil.create(grade:'304L 2B',com_spec:'0.40 MM X 1219 MM X C',net:10872,gross:11066,quantity:1,pkgs:1)
Coil.create(grade:'304L 2B',com_spec:'0.50 MM X 1219 MM X C',net:6876,gross:7020,quantity:1,pkgs:1)

puts 'seeding complete'