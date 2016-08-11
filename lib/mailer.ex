defmodule SconeHomeElixir.Mailer do
  use Bamboo.Mailer, otp_app: :scone_home_elixir
  
  use Mailgun.Client,
      domain: "sandbox60cd8c923f214e8b90257138647a028e.mailgun.org",
      key: "key-22e98444fc043c1e72943865de283d39"


  #def welcome_email(email) do
   # send_email to: email,
    #      from: "us@example.com",
     #     subject: "Welcome!",
      #    html: "Welcome to HelloPhoenix!"
  #end
end
