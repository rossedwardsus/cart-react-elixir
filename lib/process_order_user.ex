defmodule Sconely.ProcessOrderUser do
  #import Bamboo.Email

  alias SconeHomeElixir.Repo

  alias Sconely.Registration
  alias Sconely.MailingListGuestRegistration
  alias Sconely.User
  
  alias Sconely.CompleteOrderResolverHelper

  use Timex

  import Ecto.DateTime
  import Ecto.Query
  
  #stripe payment
  
  #email receipts-order id
  #items
  #date time
  #contact
  #name
  #cost
  #pool order-delivery address
  #database inserts
  #get menu
  #time zone
  #format datetime

  formatted_datetime = nil
  subtotal = nil
  promo_code = nil
  promo_code_discount = nil

  #delivery address/datetim gotten from front end for social as a string
  #for pool gotten from teh database so date time is type date but time is a string

  test_cart = %{menu_item_id: 000001, quantit: 12, size: "regular"}
  #test_order_datetime = Ecto.Datetime.utc()
  test_order_datetime_formatted = nil
  test_delivery_datetime = nil
  test_args = %{first_name: "ross", last_name: "edwards", email: "", mobile: ""}


  #{:ok, date} = Ecto.Date.dump(pool_order.delivery_date)
  #{:ok, date_from_erl} = Date.from_erl(date)    

  #IO.inspect(Date.day_of_week(date_from_erl))           

                  

  #@spec
  def getUser(email, mobile, first_name, last_name, about_me) do

     #query = from mi in MenuItem, select: %{"menu_item_id": mi.menu_item_id, "name": mi.name}
     #       menu_items = Repo.all(query)

     #user = Repo.get_by(MailingListGuestRegistration, %{email: email})
     # IO.inspect(user)


     #check if the user exists in the registreation table

     #if user == nil do

       #move into contexts
       #mailing_list_registration_changeset = MailingListGuestRegistration.changeset(%MailingListGuestRegistration{}, %{email: args[:user_contact_email], password: "", registration_datetime: Ecto.DateTime.utc})  

       #MyRepo.insert %Post{title: "Ecto is great"}

       #{:ok, registration_response} = Repo.insert(registration_changeset)
       #IO.inspect(mailing_list_registration_response)


     #  {:ok, registration_response} -> IO.inspect(response)

            #user_changeset = User.changeset(%User{}, %{user_id: registration_response.user_id, first_name: user_first_name, last_name: user_last_name, email: email, mobile: mobile, about_me: "", stripe_customer_id: ""})
                
            #case Repo.insert(user_profile_changeset) do
              #    {:ok, user_profile_response} -> IO.inspect(response)
              #  user_id = response.user_id
            #end

     #end


  end

 
end
