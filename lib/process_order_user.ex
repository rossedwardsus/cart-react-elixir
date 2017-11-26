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
  import Sconely.ProcessStripePayment

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

                  


  def getUser(email) do

     #query = from mi in MenuItem, select: %{"menu_item_id": mi.menu_item_id, "name": mi.name}
     #       menu_items = Repo.all(query)

     #       user = Repo.get_by(MailingListGuestRegistration, %{email: args[:user_contact_email]})
     #       IO.inspect(user)


            #check if the user exists in the registreation table

     #       if user == nil do

     #         registration_changeset = MailingListGuestRegistration.changeset(%MailingListGuestRegistration{}, %{email: args[:user_contact_email], password: "", registration_datetime: Ecto.DateTime.utc})  

     #         case Repo.insert(registration_changeset) do

      #          {:ok, response} -> IO.inspect(response)

      #              user_id = response.user_id


  end

 
end
