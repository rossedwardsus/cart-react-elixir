defmodule SconeHomeElixir.Repo.Migrations.CreatePoolOrdersTable do
  use Ecto.Migration

  def change do

  	create table(:pool_orders) do
      add :user_id, :uuid
      add :order_id, :uuid
  	  add :order_type, :string
      #add :delivery_contact_address_id, :Ecto.UUID
      #add :delivery_contact_first_name
      #add :delivery_contact_last_name
      #add :delivery_contact_email
      #add :delivery_contact_mobile
      #add :delivery_address_street1
      #add :delivery_address_street2
      #add :delivery_address_city
      #add :delivery_address_state
      #add :delivery_address_zipcode
      add :delivery_date, :date
      add :specific_delivery_time, :string
      add :delivery_time_range, :string
      #add :payment_method_id, Ecto.UUID
      #delivery note
      add :created_at, :datetime
      #status
    end
  end
end
