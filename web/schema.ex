defmodule Sconely.Schema do
  use Absinthe.Schema
  import_types Sconely.Schema.Types
 


  query do

  	field :login, :login do
  	  arg :email, :string
  	  arg :password, :string
      resolve &Sconely.LoginResolver.login/2
    end


    #field :get_user_delivery_addresses, list_of(:sconely_signature_order) do
    #  resolve &Sconely.OrderResolver.all/2
    #end

    #field :get_user_payment_methods, type: :sconely_signature_order do
    #    arg :order_id, non_null(:string)
	    
    #    resolve &Sconely.OrderResolver.get_order/2
    #end




    #field :user_orders, list_of(:sconely_signature_order) do
    #    arg :host_id, non_null(:string)
	    
    #    resolve &Sconely.OrderResolver.user_orders/2
    #end
  end

  #input_object :update_order_params do
	#field :event_name, (:string)
  #end



  mutation do



  	field :register, type: :registration do
      arg :first, (:string)
      arg :last, (:string)
    	arg :email, non_null(:string)
    	arg :mobile, (:string)
    	arg :password, (:string)

    	resolve &Sconely.RegistrationResolver.create_user/2
  	end


  	
  	field :complete_order, type: :sconely_yours_order do
  		arg :order_first_name, :string
  		arg :order_last_name, :string
  		arg :order_contact_email, :string
  		arg :order_contact_mobile, :string
    	#arg :street1, :string
    	#arg :street2, :string
    	#arg :city, :string
    	#arg :state, :string
    	#arg :zipcode, :string
      #arg :date, :string
      #arg :time, :string
    	#arg :name_on_card, :string
    	#arg :card_number, :string
    	#arg :expiry_date, :string
    	#arg :security_code, :string
  		#arg :cart_items, list_of(:item)

  		resolve &Sconely.CompleteOrderResolver.complete_yours_order/2
  	end



	field :save_sconely_signature_order_event_details, type: :sconely_signature_order_event_details do
	    arg :order_id, non_null(:string)
	    arg :event_name, :string
	    arg :event_date, :string
	    arg :event_time, :string
	 
	    resolve &Sconely.OrderResolver.save_sconely_signature_order_event_details/2
	end


	#field :save_sconely_signature_order_additional_items, type: :sconely_signature_order_additional_items do
	#    arg :order_id, non_null(:string)
	#    arg :items, list_of(:menu_item)
	#    #arg :quantity, :string
	 
	#    resolve &Sconely.OrderResolver.save_sconely_signature_order_additional_items/2
	#end


	field :complete_sconely_signature_order, type: :sconely_signature_order do
	    arg :order_id, :string
	    arg :amount, :integer
	 
	    resolve &Sconely.OrderResolver.complete_sconely_signature_order/2
	end
  end
end