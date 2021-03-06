# Creates demo user
u0 = User.create(username: "Demo User", avatar: "demo_user.jpg", email: "demoUser@gmail.com", password_digest: BCrypt::Password.create("demoUserPassword"), fields: "tax, employment", location: "Hungary", bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.")

# Creates users who asked questions related to EU law
u1= User.create(username: "user01", email: "user01@gmail.com", password_digest: BCrypt::Password.create("user01pw"), location: "Hungary")
u2 = User.create(username: "user233", email: "ttfdc@gmail.com", password_digest: BCrypt::Password.create("pkfnjbhrpewrt"), location: "United Kingdom")
u3= User.create(username: "user123", email: "eeddw@gmail.com", password_digest: BCrypt::Password.create("wgretbger"), location: "United States")
u4= User.create(username: "user417", email: "wefeq@gmail.com", password_digest: BCrypt::Password.create("rebtrbn"), location: "United Kingdom")
u5 = User.create(username: "user213", email: "rtgbbtvrbb@gmail.com", password_digest: BCrypt::Password.create("brtwnbh45z"), location: "Germany")
u6 = User.create(username: "user066", email: "fevevr@gmail.com", password_digest: BCrypt::Password.create("wrbtrnzt"), location: "United States")
u7 = User.create(username: "user554", email: "qwwx@gmail.com", password_digest: BCrypt::Password.create("rtnztne"), location: "United States")
u8= User.create(username: "user221", email: "nzjtz23@gmail.com", password_digest: BCrypt::Password.create("ergtbt4"), location: "Brazil")
u9 = User.create(username: "user372", email: "ewfefvh4@gmail.com", password_digest: BCrypt::Password.create("rvrtbmtréb"), location: "Nigeria")
u10 = User.create(username: "user010", email: "1333tg5h@gmail.com", password_digest: BCrypt::Password.create("354t3"), location: "South Korea")
u11 = User.create(username: "user951", email: "nttzum@gmail.com", password_digest: BCrypt::Password.create("user11pw"), location: "United States")

# Creates users who answered questions related to EU law
u12 = User.create(username: "user000", email: "user12@gmail.com", password_digest: BCrypt::Password.create("user12pw"), fields: "tax, immigration", location: "Austria")
u13 = User.create(username: "user111", email: "mmkmn@gmail.com", password_digest: BCrypt::Password.create("userpw03445"), fields: "tax", location: "Hungary")
u14 = User.create(username: "user222", email: "mknohvu@gmail.com", password_digest: BCrypt::Password.create("lawpw0342"), fields: "family", location: "France")
u15 = User.create(username: "user333", email: "obibv@gmail.com", password_digest: BCrypt::Password.create("legalpw0324"), fields: "family, immigration", location: "Spain")
u16 = User.create(username: "user444", email: "lnibvuotci@gmail.com", password_digest: BCrypt::Password.create("attorneypw23r"), fields: "immigration", location: "France")
u17 = User.create(username: "user555", email: "oubvct@gmail.com", password_digest: BCrypt::Password.create("pw2er3"), fields: "immigration", location: "Spain")
u18 = User.create(username: "user666", email: "ergt4r@gmail.com", password_digest: BCrypt::Password.create("rth4j5"), fields: "immigration, tax", location: "Spain")
u19 = User.create(username: "user777", email: "tbrthhz@gmail.com", password_digest: BCrypt::Password.create("g35th4wh"), fields: "immigration", location: "Ireland")
u20 = User.create(username: "user888", email: "weffw@gmail.com", password_digest: BCrypt::Password.create("43z4h6h"), fields: "labour", location: "Germany")
u21 = User.create(username: "user999", email: "fwf@gmail.com", password_digest: BCrypt::Password.create("345h5"), fields: "criminal", location: "Portugal")
u22 = User.create(username: "user090909", email: "0909@gmail.com", password_digest: BCrypt::Password.create("efwggw"), fields: "criminal, tax", location: "Slovenia")

# Creates users who asked questions related to US law
u23 = User.create(username: "USuser23", email: "USuser01@gmail.com", password_digest: BCrypt::Password.create("USuser23pw"), location: "United States")
u24 = User.create(username: "USuser233", email: "USttf@gmail.com", password_digest: BCrypt::Password.create("USpkfnjbhrpew"), location: "Peru")
u25 = User.create(username: "USuser123", email: "USeed@gmail.com", password_digest: BCrypt::Password.create("USwgretbg"), location: "India")
u26 = User.create(username: "USuser417", email: "USwef@gmail.com", password_digest: BCrypt::Password.create("USrebtr"), location: "Austria")
u27 = User.create(username: "USuser213", email: "USrtgbbtvr@gmail.com", password_digest: BCrypt::Password.create("USbrtwnbh4"), location: "United States")
u28 = User.create(username: "USuser066", email: "USfeve@gmail.com", password_digest: BCrypt::Password.create("USwrbtrn"), location: "United States")
u29 = User.create(username: "USuser554", email: "USqw@gmail.com", password_digest: BCrypt::Password.create("USrtnzt"), location: "Russia")
u30 = User.create(username: "USuser221", email: "USnzjtz@gmail.com", password_digest: BCrypt::Password.create("USergtb"), location: "United States")
u31 = User.create(username: "USuser372", email: "USewfefv@gmail.com", password_digest: BCrypt::Password.create("USrvrtbmtr"), location: "Mexico")
u32 = User.create(username: "USuser010", email: "US1333tg@gmail.com", password_digest: BCrypt::Password.create("US354"), location: "Portugal")
u33 = User.create(username: "USuser951", email: "USnttz@gmail.com", password_digest: BCrypt::Password.create("USuser33pw"), location: "India")

# Creates users who answered questions related to US law
u34 = User.create(username: "USuser000", email: "USuser34@gmail.com", password_digest: BCrypt::Password.create("USuser34pw"), fields: "tax", location: "United States")
u35 = User.create(username: "USuser111", email: "USttfdc@gmail.com", password_digest: BCrypt::Password.create("USpkfnjbhrpewrt"), fields: "tax, immigration", location: "United States")
u36 = User.create(username: "USuser222", email: "USeeddw@gmail.com", password_digest: BCrypt::Password.create("USwgretbger"), fields: "tax, immigration", location: "United States")
u37 = User.create(username: "USuser333", email: "USwefeq@gmail.com", password_digest: BCrypt::Password.create("USrebtrbn"), fields: "tax, immigration", location: "United States")
u38 = User.create(username: "USuser444", email: "USrtgbbtvrbb@gmail.com", password_digest: BCrypt::Password.create("USbrtwnbh45z"), fields: "immigration", location: "United States")
u39 = User.create(username: "USuser555", email: "USfevevr@gmail.com", password_digest: BCrypt::Password.create("USwrbtrnzt"), fields: "tax, immigration", location: "United States")
u40 = User.create(username: "USuser666", email: "USqwwx@gmail.com", password_digest: BCrypt::Password.create("USrtnztne"), fields: "family", location: "United States")
u41 = User.create(username: "USuser777", email: "USnzjtz23@gmail.com", password_digest: BCrypt::Password.create("USergtbt4"), fields: "family", location: "United States")
u42 = User.create(username: "USuser888", email: "USewfefvh4@gmail.com", password_digest: BCrypt::Password.create("USrvrtbmtréb"), fields: "environmental", location: "United States")
u43 = User.create(username: "USuser999", email: "US1333tg5h@gmail.com", password_digest: BCrypt::Password.create("US354t3"), fields: "environmental",  location: "United States")
u44 = User.create(username: "USuser0909", email: "USnttzum@gmail.com", password_digest: BCrypt::Password.create("USuser44pw"), fields: "environmental", location: "United States")

# assigns avatars to users
def avatar_assign
    counter = 1
    29.times {
        shuffled_users = User.all.shuffle
        user = shuffled_users.find {|u| u.avatar === nil}
        user.avatar = "user_#{counter}.jpg"
        counter += 1
        user.save
    }

    User.all.each do |u|
        if u.avatar === nil
            u.avatar = "default.jpg"
            u.save
        end
    end
end
avatar_assign

# Creates questions (EU law threads)
q1 = Question.create(creator: u0, title: "Are there any EU rules on how much registration tax I have to pay in Cyprus?", content: "I have retired and am going to live full-time in my holiday home in Cyprus. I am bringing my car, which was bought and registered in Hungary.", jurisdiction: "Republic of Cyprus", field: "Tax Law")
q2 = Question.create(creator: u0, title: "Tax exemptions on purchases of property", content: "I am planning to move to the Republic of Cyprus from Hungary where I work and pay taxes. If I buy or build a home in another Member State, am I eligible for a tax deduction in my home country?", jurisdiction: "Hungary", field: "Tax Law")
q3 = Question.create(creator: u3, title: "Isn't double taxation prohibited under EU law?", content: "I have inherited property and am being taxed in both the country where I normally pay taxes(Italy) and the country where the inherited property is located(Austria).", jurisdiction: "Austria", field: "Tax Law")
q4 = Question.create(creator: u4, title: "What are the legal consequences of a divorce under French law as regards the obligation to pay maintenance to the other spouse?", content: "I am an Italian citizen who lives in France and we are about to divorce with my French wife in France.", jurisdiction: "France", field: "Family Law")
q5 = Question.create(creator: u5, title: "What are the grounds for divorce in Spain?", content: "I am Litvanian and I want a divorce with my Spanish wife. We have been living in Spain together for 4 years now and we have been married for 2,5 years.", jurisdiction: "Spain", field: "Family Law")
q6 = Question.create(creator: u6, title: "Visa rules in Spain", content: "I am Italian and my husband and children are Colombian nationals. Will they need a visa to travel with me from Brazil, where we live, to Spain?", jurisdiction: "Spain", field: "Immigration Law")
q7 = Question.create(creator: u7, title: "Moving to Ireland with a son from my wife's previous marriage", content: "I am moving to Ireland and my Japanese spouse and I would like to be joined there by her 22-yeal old Japanese son of a previous marriage, who is dependent on us, so that he can undertake studies there? Is that possible?", jurisdiction: "Ireland", field: "Immigration Law")
q8 = Question.create(creator: u8, title: "Holiday entitlement in Germany", content: "How much paid leave I can get if I only work 5 months in Germany?", jurisdiction: "Germany", field: "Labour Law")
q9 = Question.create(creator: u8, title: "Missing employment contract from German employer", content: "I started to work for a German company 6 weeks ago and I was told I would get my contract signed after the first week. I still haven't gotten anything but they keep giving me new tasks to do. Is it legal?", jurisdiction: "Germany", field: "Labour Law")
q10 = Question.create(creator: u9, title: "Using phone conversations in a criminal case as evidence", content: "Is it mandatory for a telecom company to produce electronic evidence if it can be used in a criminal case. I will have a criminal court hearing in Portugal and the only evidence I have would be a previous conversation with the alleged victim.", jurisdiction: "Portugal", field: "Criminal Law")

q21 = Question.create(creator: u0, title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem?", content: "Accusantium doloremque laudantium, totam rem aperiam, inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "California", field: "Tax Law")
q22 = Question.create(creator: u23, title: "Ut perspiciatis unde omnis iste natus error sit voluptatem?", content: "Accusantium doloremque laudantium, rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Federal", field: "Immigration Law") 
q23 = Question.create(creator: u23, title: "Sed perspiciatis unde omnis iste natus error sit voluptatem?", content: "Accusantium doloremque , totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Federal", field: "Immigration law") 
q24 = Question.create(creator: u24, title: "Omnis ut perspiciatis iste natus error sit voluptatem?", content: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Federal", field: "Immigration Law") 
q25 = Question.create(creator: u25, title: "Error sit voluptatem?", content: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Arizona", field: "Tax Law") 
q26 = Question.create(creator: u26, title: "Sed ut perspiciatis unde omnis?", content: "Laudantium, totam rem , eaque ipsa quae ab illo  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Washington", field: "Tax Law") 
q27 = Question.create(creator: u27, title: "Voluptatem sed ut perspiciatis unde omnis error sit voluptatem?", content: "Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Florida", field: "Tax Law") 
q28 = Question.create(creator: u28, title: "Perspiciatis unde omnis iste natus error sit voluptatem omnis iste natus?", content: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Oregon", field: "Family Law") 
q29 = Question.create(creator: u28, title: "Unde ut perspiciatis unde omnis iste natus omnis iste natus error sit voluptatem?", content: "Accusantium doloremque laudantium, totam rem aperiam, eallo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Washington", field: "Environmental Law") 
q30 = Question.create(creator: u29, title: "Ut Sed ut perspiciatis unde?", content: "Accusantium doloremque laudantium, totam rem , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Oregon", field: "Environmental Law") 

# Creates questions (US law threads)
q11 = Question.create(creator: u23, title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem?", content: "Accusantium doloremque laudantium, totam rem aperiam, inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "California", field: "Tax Law")
q12 = Question.create(creator: u23, title: "Ut perspiciatis unde omnis iste natus error sit voluptatem?", content: "Accusantium doloremque laudantium, rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Federal", field: "Immigration Law") 
q13 = Question.create(creator: u23, title: "Sed perspiciatis unde omnis iste natus error sit voluptatem?", content: "Accusantium doloremque , totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Federal", field: "Immigration law") 
q14 = Question.create(creator: u24, title: "Omnis ut perspiciatis iste natus error sit voluptatem?", content: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Federal", field: "Immigration Law") 
q15 = Question.create(creator: u25, title: "Error sit voluptatem?", content: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Arizona", field: "Tax Law") 
q16 = Question.create(creator: u26, title: "Sed ut perspiciatis unde omnis?", content: "Laudantium, totam rem , eaque ipsa quae ab illo  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Washington", field: "Tax Law") 
q17 = Question.create(creator: u27, title: "Voluptatem sed ut perspiciatis unde omnis error sit voluptatem?", content: "Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Florida", field: "Tax Law") 
q18 = Question.create(creator: u28, title: "Perspiciatis unde omnis iste natus error sit voluptatem omnis iste natus?", content: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Oregon", field: "Family Law") 
q19 = Question.create(creator: u28, title: "Unde ut perspiciatis unde omnis iste natus omnis iste natus error sit voluptatem?", content: "Accusantium doloremque laudantium, totam rem aperiam, eallo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Washington", field: "Environmental Law") 
q20 = Question.create(creator: u29, title: "Ut Sed ut perspiciatis unde?", content: "Accusantium doloremque laudantium, totam rem , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Oregon", field: "Environmental Law") 

q31 = Question.create(creator: u23, title: "Ut perspiciatis unde omnis iste natus error sit voluptatem?", content: "Accusantium doloremque laudantium, totam rem aperiam, inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Arizona", field: "Tax Law")
q32 = Question.create(creator: u23, title: "Perspiciatis unde omnis iste natus error sit voluptatem?", content: "Accusantium doloremque laudantium, rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Federal", field: "Competition Law") 
q33 = Question.create(creator: u23, title: "Sed perspiciatis unde omnis iste natus error sit voluptatem?", content: "Accusantium doloremque , totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Oregon", field: "Competition law") 
q34 = Question.create(creator: u24, title: "Iste natus error sit voluptatem?", content: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Federal", field: "Immigration Law") 
q35 = Question.create(creator: u25, title: "Sed error sit voluptatem?", content: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Georgia", field: "Tax Law") 
q36 = Question.create(creator: u26, title: "Sed perspiciatis unde omnis?", content: "Laudantium, totam rem , eaque ipsa quae ab illo  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Washington", field: "Tax Law") 
q37 = Question.create(creator: u27, title: "Voluptatem perspiciatis unde omnis error sit voluptatem?", content: "Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Washington", field: "Criminal Law") 
q38 = Question.create(creator: u28, title: "Unde omnis iste natus error sit voluptatem omnis iste natus?", content: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Oregon", field: "Family Law") 
q39 = Question.create(creator: u28, title: "Unde ut perspiciatis unde omnis iste natus omnis iste natus error sit voluptatem?", content: "Accusantium doloremque laudantium, totam rem aperiam, eallo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Washington", field: "Environmental Law") 
q40 = Question.create(creator: u29, title: "Ut Sed ut perspiciatis?", content: "Accusantium doloremque laudantium, totam rem , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", jurisdiction: "Washington", field: "Environmental Law") 

# Adds additional questions with answers and comments
40.times {
    # Creates question properties
    user = User.all[rand(0..User.all.size-1)]
    title = "Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint?"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit, consectetur adipiscing elit. ui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
    jurisdiction = ["Hungary", "Germany", "New York", "Calfornia"][rand(0..3)]
    field = ["Tax Law", "Immigration Law", "Employment Law", "Criminal Law"][rand(0..3)]
    
    question = Question.create(creator: user, title: title, content: content, jurisdiction: jurisdiction, field: field)

    # creates 2 answers
    2.times {
        user = User.all[rand(0..User.all.size-1)]
        content = "Sit amet, consectetur adipiscing elit, ipsum dolor sit, consectetur adipiscing elit. Tque corrupti quos dolores et quas molestias excepturi."
        question.answers.create(content: content, user: user)
        question.save
    }
}

# make users follow a thread
User.all.each do |u|
    question = Question.all[rand(0..Question.all.size-1)]
    u.followed_questions << question
end

# Creates answers (EU law threads)
q1.answers.create(content: "NO. If you move to another EU country for more than 6 months, you must under EU rules register your car in the new country.For registration taxes, however, there are no EU-wide rules. Countries may levy car-registration taxes or not, as they choose. Some –including Cyprus–do NOT tax you if you had to pay a similar tax when you bought the car new.", user: u12)
u12.followed_questions << q1
q1.answers.create(content: "If a country does tax imported second-hand cars, it must take account of the residual value when setting the amount of registration tax. Example: your type of car has a value in the new country of€10,000 when new and the tax on such a car would be €2,500 so that the car would cost €12,500 intotal and the tax component of the price would be 20%. Assume that you move the car when it is 5 years old and that after 5 years a similar car in the new country would be expected to have lost 30% of its value and only to be worth about €8,750. In that case the tax to be applied in the newcountry could only be 20% of €8,750 i.e. €1750. ", user: u13)
u13.followed_questions << q1
q2.answers.create(content: "MAYBE. Under EU law, a country cannot limit tax deductions for residents to houses or apartmentsbought or built on its own territory.However, countries ARE allowed to apply different rules to different situations. Example: somecountries allow a tax deduction for the purchase of primary homes but NOT for holiday homes or investment properties. In such a situation, it might NOT be illegal for your country to refuse you a tax deduction for property located abroad if that property will not become your primary home immediately after purchase.", user: u12)
u12.followed_questions << q2
q3.answers.create(content: "NO. If you inherit property located in an EU country other than the country in which you live, you may be subject to the inheritance-tax laws of both countries and there is nothing in EU law that prohibits double taxation", user: u13)
u13.followed_questions << q3
q4.answers.create(content: "The payment of maintenance by one spouse to the other is an interim measure, i.e. maintenance is paid only until the divorce is granted. Once the divorce has been granted, one spouse may claim only a compensatory payment (prestation compensatoire) or damages from the other spouse. This can be set amicably in a divorce by judicial or non-judicial mutual consent or by the judge in other cases.", user: u14)
u14.followed_questions << q4
q4.answers.create(content: "The aim of this compensatory payment is to compensate for the disparity that the breakdown of the marriage may create in the respective living conditions of the spouses. Its amount is set by the judge according to the incomes and needs of each spouse. It is by nature a lump sum that is paid, in principle, in the form of capital: either through the payment of a sum of money for which terms of payment may be agreed; or through the allocation of owned assets or a right of use, habitation or usufruct, either on a temporary basis or for life.", user: u15)
u15.followed_questions << q4
q4.answers.create(content: "Exceptionally, the compensatory payment may be set as a life annuity, which may, in the event of changes in the resources or needs of the spouses, be revised downwards. Damages can be awarded to a spouse if the divorce has particularly severe consequences for him/her: where he/she is the respondent in a divorce due to irretrievable breakdown of the marriage and has not applied for divorce; or where the divorce is granted against the other spouse and the blame lies entirely with the latter.", user: u16)
u16.followed_questions << q4
q5.answers.create(content: "Since the reform introduced by Law 15/2005, divorce in Spain does not require any grounds, since maintaining the marriage bond is considered to be a manifestation of the free will of the spouses.", user: u17)
u17.followed_questions << q5
q6.answers.create(content: "They will need a visa because Colombia is on the list of countries whose nationals require a visa. However, as family members of an EU citizen travelling with you, they have a right to obtain thevisa and can get it free of charge and under an accelerated procedure. Besides, a uniform short stayvisa will be valid for all countries of the Schengen area.", user: u18)
u18.followed_questions << q6
q7.answers.create(content: "Yes. Since he is your wife’s son and dependent on you, he can join you in Ireland.", user: u19)
u19.followed_questions << q7
q8.answers.create(content: "Workers are entitled to at least 24 working days of paid annual leave per calendar year. That is four weeks’ holiday per year, as Saturdays also count as working days. You only gain this entitlement after being employed for six months. If you are employed for a shorter period than six months, you are entitled to holiday leave on a pro rata basis (two working days per month). Your holiday entitlement is set out in your employment contract. If a collective agreement applies to your employment relationship, the amount of holiday to which you are entitled is usually higher.", user: u20)
u20.followed_questions << q8
q9.answers.create(content: "Your employer is required to give you a written employment contract no later than 1 month after the start of the employment relationship. You and the employer both sign the employment contract. Even if a contract has been concluded orally, your employer must give you a written document setting out the main terms of the contract no later than 1 month after the start of the employment relationship. The employer must sign the document setting out the terms of the contract.", user: u20)
u20.followed_questions << q9
q10.answers.create(content: "Yes, the European Preservation Order and the European Production Order made this mandatory and they are legally binding.", user: u21)
u21.followed_questions << q10

# Creates answers (US law threads)
q11.answers.create(content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", user: u34)
u34.followed_questions << q11
q11.answers.create(content: "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", user: u35)
u35.followed_questions << q11
q12.answers.create(content: "Eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", user: u35)
u35.followed_questions << q12
q12.answers.create(content: "Et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", user: u36)
u36.followed_questions << q12
q12.answers.create(content: "Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", user: u37)
u37.followed_questions << q12
q13.answers.create(content: "Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", user: u38)
u38.followed_questions << q13
q14.answers.create(content: "Iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", user: u39)
u39.followed_questions << q14
q14.answers.create(content: "At dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", user: u40)
u40.followed_questions << q14
q15.answers.create(content: "Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ", user: u41)
u41.followed_questions << q15
q16.answers.create(content: "Ducimus vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ", user: u42)
u42.followed_questions << q16
q17.answers.create(content: "Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", user: u43)
u43.followed_questions << q17
q18.answers.create(content: "Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", user: u43)
u43.followed_questions << q18

# Creates comments
Answer.all.each do |a|
    n = rand(6)
    n.times {
        user = User.all[rand(0..User.all.size-1)]
        a.comments.create(content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", user: user)
        user.followed_questions << a.question
    }
end

# Makes certain users follow threads
u0.followed_questions << q3
u0.followed_questions << q10
u0.followed_questions << q7
u0.followed_questions << q6
u0.followed_questions << q9
u23.followed_questions << q14
u36.followed_questions << q12
u36.followed_questions << q13
u4.followed_questions << q19
u21.followed_questions << q33
u26.followed_questions << q34
u28.followed_questions << q38
u36.followed_questions << q40
u37.followed_questions << q39
u23.followed_questions << q13
u36.followed_questions << q11
u36.followed_questions << q12
u4.followed_questions << q18
u21.followed_questions << q32
u26.followed_questions << q33
u28.followed_questions << q37
u36.followed_questions << q39
u37.followed_questions << q40

# Adds fake bios to random users
User.all.each do |u|
    add_bio = [true, false][rand(0..1)]
    if add_bio
        u.bio = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        u.save
    end
end

# Creates random user reactions to answers and comments (40% - ignore, 40% - upvote 20% - downvote)
User.all.each do |u|
    10.times {
        answer = Answer.all[rand(0..Answer.all.size-1)]
        if answer.user != u
            num = rand(1..10)
            if num > 3 && num <= 7
                if !u.votes.find {|v| v.answer === answer}
                    answer.votes.create(user: u, answer: answer, upvote: true) 
                    answer.user.upvotes += 1
                    answer.user.save
                end
            elsif num > 8 && num <= 10
                if !u.votes.find {|v| v.answer === answer}
                    answer.votes.create(user: u, answer: answer, downvote: true) 
                    answer.user.downvotes += 1
                    answer.user.save
                end
            end
        end
    }
    
    5.times {
        comment = Comment.all[rand(0..Comment.all.size-1)]
        if comment.user != u 
            num = rand(1..10)
            if num > 5 && num < 10
                if !u.votes.find {|v| v.comment === comment}
                    comment.votes.create(user: u, comment: comment, upvote: true)
                    comment.user.upvotes += 1
                    comment.user.save
                end
            elsif num === 10
                if !u.votes.find {|v| v.comment === comment}
                    comment.votes.create(user: u, comment: comment, downvote: true)
                    comment.user.downvotes += 1
                    comment.user.save
                end
            end
        end
    }  
end

# creates conversations
User.all.each do |u|
    3.times {
        receiver = User.all[rand(0..User.all.size-1)]
        if receiver != u && (!u.authored_conversations.find {|c| c.receiver === receiver} && !u.received_conversations.find {|c| c.author === receiver})
            conversation = Conversation.create(author: u, receiver: receiver)
            6.times {
                message1 = Message.create(content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis?", user: u)
                conversation.messages << message1
                message2 = Message.create(content: "Et iusto odio dignissimos ducimus qui voluptatum.", user: receiver)
                conversation.messages << message2
            }
        end
    }

    2.times {
        author = User.all[rand(0..User.all.size-1)]
        if author != u && (!u.authored_conversations.find {|c| c.receiver === author} && !u.received_conversations.find {|c| c.author === author})
            conversation = Conversation.create(author: author, receiver: u)
            6.times {
                message1 = Message.create(content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis?", user: author)
                conversation.messages << message1
                message2 = Message.create(content: "Et iusto odio dignissimos ducimus qui voluptatum.", user: u)
                conversation.messages << message2

            }
        end
    }
end
