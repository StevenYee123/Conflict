# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ServerMembership.delete_all
Channel.delete_all
Server.delete_all
User.delete_all

#Our demo user!
u1 = User.create!({email: "sallyseashell@gmail.com", username: "sillysally", password: "password" })
u2 = User.create!({email: "johnnydoe@gmail.com", username: "ScubaSteve", password: "password"})

s1 = Server.create!({name: "BananaRama", leader_id: u1.id, private_status: false, invite_link: "pwEzQ_8z7rbksMzm0jszEQ"})
s2 = Server.create!({name: "ScubaLand", leader_id: u1.id, private_status: false, invite_link: "POmAE1kIpRTkEfwzt2S7pg"})
s3 = Server.create!({name: "TestServer", leader_id: u2.id, private_status: false, invite_link: "hVKcDAeg7wt1xsJXTatN5w"})

sm1 = ServerMembership.create!({server_id: s1.id, member_id: u1.id})
sm2 = ServerMembership.create({server_id: s2.id, member_id: u1.id})
sm3 = ServerMembership.create!({server_id: s3.id, member_id: u2.id})

c1 = Channel.create!({name: "Seashell Shore", server_id: s1.id})
c2 = Channel.create!({name: "Land Hoooo", server_id: s2.id})
c3 = Channel.create!({name: "Other Server", server_id: s3.id})
c4 = Channel.create!({name: "Testy Boi", server_id: s3.id})
c5 = Channel.create!({name: "Running out of names", server_id: s1.id})
c6 = Channel.create!({name: "Keeping it even", server_id: s2.id})
