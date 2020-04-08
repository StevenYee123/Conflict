# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Server.delete_all
ServerMembership.delete_all
Channel.delete_all

#Our demo user!
u1 = User.create!({email: "sallyseashell@gmail.com", username: "sillysally", password: "password" })
s1 = Server.create!({name: "BananaRama", leader_id: u1.id, private_status: false, invite_link: "3kQ_EeIXWS2Gj3fzE1iltw"})
sm1 = ServerMembership.create!({server_id: s1.id, member_id: u1.id})
c1 = Channel.create!({name: "Seashell Shore", server_id: s1.id})
