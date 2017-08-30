defmodule Sconely.Schema.Types do
  use Absinthe.Schema.Notation


  object :login do
    #field :email, :string
    #field :password, :string
    field :user, :string
  end

  object :registration do
    field :token, :string
  end


  #user


  object :user_delivery_contact_address do
    field :delivery_contact_address_name, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_datetime, :string
  end

  object :user_payment_method do
    field :payment_method_name, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_datetime, :string
  end

  object :user_order do
    field :order_id, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_datetime, :string
  end


  object :user do
    field :first_name, :string
    field :delivery_contacts_addresses, list_of(:user_delivery_contact_address)
  #  field :event_name, :string
  #  field :event_datetime, :string
  end




  #orders


  object :signature_guest_response_order_details do
    field :parent_order_id, :string
    field :event_long_name, :string
    field :invited_guest_message, :string
    field :delivery_date, :string
  end

  object :signature_guest_response do
    field :status, :string
  end

  #object :order do
  #	field :session_id, :string
  #	field :delivery_address_street, :string
  #	field :delivery_address_city, :string
  #	field :order_items, :menu_item_input
  #end


  input_object :menu_item_input do
    field :item_id, :string
    #field :title, :string
    #field :description, :string
  end

  object :menu_item do
    field :id, :string
    field :name, :string
    field :description, :string
    field :ingredients, :string
  end


 
  #object :item do
  #	field :item_id, :string
  #end

  input_object :item do
	 field :item_id, :string
   field :item_type, :string
   field :quantity, :string
  end

  object :order do
  	#field :order_id, :string
    #field :order_first_name, :string
    #field :order_last_name, :string
    #field :order_company_name, :string
    #field :order_contact_email, :string
    #field :order_contact_mobile, :string
    #field :order_delivery_address_street1, :string
    #field :order_delivery_address_street2, :string
    #field :order_delivery_address_city, :string
    #field :order_delivery_address_state, :string
    #field :order_delivery_address_zipcode, :string
    field :delivery_datetime, :string
    #field :order_stripe_auth_code, :string
    #field :status, :string
  end

  input_object :yours_social_cart_items_input do
    #field :item_id, :string
    field :twelveortwentyfourminis, :string
    #field :quantity, :string
  end

  object :process_yours_social_order_response do
    field :status, :string
    field :sconely_user_token, :string
    #field :stripe__token, :string
    field :error_reason, :string
  end
  


  #object :sconely_signature_order_delivery_contact do
  #  #field :order_id, :string
  #  field :first_name, :string
    #field :email, :string
  #end

  input_object :signature_order_delivery_contact_input do
    #field :order_id, :string
    field :first_name, :string
    #field :email, :string
  end

  input_object :signature_order_delivery_address_input do
    field :order_id, :string
    field :street1, :string
    field :street2, :string
  end

  input_object :sconely_signature_order_guest_response do
    #field :order_id, :string
    field :first_name, :string
    #field :last_name, :string
    #field :email, :string
    #field :choice, :string
    #field :mailing_list, :string  
  end

  input_object :signature_order_suborder_input do
    #field :parent_order_id, :string
    field :suborder_id, :string
    #field :order_type, :string
    field :stripe_token, :string
    #field :items, :sconely_signature_order_suborder_items
  end

  object :signature_order_suborder do
    #field :parent_order_id, :string
    field :suborder_id, :string
    #field :order_type, :string
    field :stripe_token, :string
    #field :items, :sconely_signature_order_suborder_items
  end

  object :sconely_signature_order_suborder_items do
    #field :parent_order_id, :string
    field :suborder_id, :string
    field :item_id, :string
    field :mini, :string
    field :quantity, :integer
  end

  object :sconely_signature_order do
    field :order_id, :string
    #field :event_name, :string
    #field :invited_guest_count, :string
    #field :invited_guest_message, :string
    #field :delivery_contact, :signature_order_delivery_contact_input
    #field :delivery_address, :sconely_signature_order_delivery_address
    #field :guest_responses, :sconely_signature_order_guest_response
    field :suborders, list_of(:signature_order_suborder)
    #field :items, :sconely_signature_order_delivery_contact
    field :status, :string
  end

 
  #object :items do
  #  field :item_id, :string
  #  field :title, :string
  #  field :description, :string
  
  #end


  input_object :update_order_params do
	field :event_name, (:string)
  end


end