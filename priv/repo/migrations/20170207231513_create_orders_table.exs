defmodule SconeHomeElixir.Repo.Migrations.CreateOrdersTable do
  use Ecto.Migration

  def change do
    create table(:orders) do
      add :user_id, :string #uuid or "guest"
      add :order_id, :integer
  	  add :order_type, :string
      add :delivery_contact_first_name
      add :delivery_contact_last_name
      add :delivery_contact_email
      add :delivery_contact_mobile
      add :delivery_address_street1
      add :delivery_address_street2
      add :delivery_address_city
      add :delivery_address_state
      add :delivery_address_zipcode
      add :delivery_date, :date
      add :delivery_time, :string
      add :delivery_time_range, :string
      add :created_at, :datetime
      add :stripe_token, :string
      #add :payment_confirmation, :string
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
