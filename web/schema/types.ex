defmodule Sconely.Schema.Types do
  use Absinthe.Schema.Notation

  object :order do
  	field :session_id, :string
  	field :delivery_address_street, :string
  	field :delivery_address_city, :string
  	field :order_items, :menu_item_input
  end


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


  object :login do
  	field :email, :string
  	field :password, :string
  	field :session_id, :string
  end

  object :registration do
 	field :email, :string
 	field :password, :string
 	field :password_again, :string
  end


  object :sconely_signature_order do
    field :order_id, :string
    field :host_id, :string
    field :event_name, :string
    field :event_datetime, :string
    field :status, :string
  end



  #object :item do
  #	field :item_id, :string
  #end

  input_object :item do
	field :item_id, (:string)
  end

  object :sconely_social_order do
    field :first, :string
    field :last, :string
    field :email, :string
    field :phone, :string
    field :date, :string
    field :time, :string
    field :street1, :string
    field :street2, :string
  	field :cart_items, list_of(:item)
  end



  #object :user_payment do
  #  field :order_id, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_datetime, :string
  #end

  #object :user_delivery_address do
  #  field :order_id, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_datetime, :string
  #end





  object :sconely_signature_order_event_details do
    field :order_id, :string
    field :host_id, :string
    field :event_name, :string
    field :event_date, :string
  	field :event_time, :string
  	field :guest_count, :string
  	field :code, :string
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