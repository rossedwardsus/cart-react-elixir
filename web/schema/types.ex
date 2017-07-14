defmodule Sconely.Schema.Types do
  use Absinthe.Schema.Notation


  object :login do
    #field :email, :string
    #field :password, :string
    field :user, :string
  end

  object :registration do
    field :user_id, :string
    #field :first, :string
    #field :last, :string
    #field :email, :string
    #field :password, :string
    #field :status, :string
  end


  #user


  #object :user_payment do
  #  field :order_id, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_datetime, :string
  #end

  object :user_delivery_contact_address do
  #  field :order_id, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_datetime, :string
  end




  #orders


  object :signature_guest_response_order_details do
    field :parent_order_id, :string
    field :event_full_name, :string
    field :invited_guest_message, :string
    #field :menu_items, :string
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
    field :item_id, :string
  #  field :title, :string
  #  field :description, :string
  end

  #length
  #input_object :registration do
  #  field :user_id, :string
  #  field :first, :string
  #  field :last, :string
  #  field :email, :string
  #  field :password, :string
  #  #field :status, :string
  #end




 
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

 

  #object :sconely_signature_order_additional_items do
  #  field :items, :menu_item
  #end


  #object :items do
  #  field :item_id, :string
  #  field :title, :string
  #  field :description, :string
  
  #end


  input_object :update_order_params do
	field :event_name, (:string)
  end

  #input_object :menu_item do
  #	field :order_id, (:string)
	#field :item_id, (:string)
	#field :quantity, (:string)
  #end

end