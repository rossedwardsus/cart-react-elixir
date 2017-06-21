defmodule Sconely.Schema do
  use Absinthe.Schema
  import_types Sconely.Schema.Types
 


  query do

  	field :login_user, :login do
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

    field :get_user_order, type: :order do

      resolve &Sconely.SconelySignatureOrderResolver.get/2
  
    end


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


  	
  	field :complete_order, type: :order do
  		arg :order_type, non_null(:string)
      arg :order_first_name, :string
  		arg :order_last_name, :string
  		arg :order_contact_email, :string
      arg :order_company_name, :string
  		arg :order_contact_mobile, :string
    	arg :order_delivery_address_street1, :string
    	arg :order_delivery_address_street2, :string
    	arg :order_delivery_address_city, :string
    	arg :order_delivery_address_state, :string
      arg :order_delivery_address_zipcode, :string
      arg :order_datetime_date, :string
      #arg :time, :string
    	arg :order_payment_name_on_card, :string
    	arg :order_payment_card_number, :string
    	arg :order_payment_expiry_month, :string
    	arg :order_payment_expiry_year, :string
      arg :order_payment_security_code, :string
  		#arg :cart_items, list_of(:item)
      #arg :terms
      #arg :mailing_list

  		resolve &Sconely.CompleteOrderResolver.complete_yours_order/2
  	end

  


	field :create_sconely_signature_order, type: :sconely_signature_order do
      #arg :order_id, non_null(:string)
      arg :event_name, :string
      #arg :code, :string
      #arg :guest_count, :string
      #arg :delivery_date, :string
      #arg :delivery_time, :string
   
      resolve &Sconely.SconelySignatureOrderResolver.create/2
  end

  field :save_sconely_signature_order, type: :sconely_signature_order do
	    arg :order_id, non_null(:string)
	    #arg :event_name, :string
	    #arg :delivery_datetime, :string
	    
	    resolve &Sconely.SconelySignatureOrderResolver.save/2
	end

  field :complete_sconely_signature_order, type: :sconely_signature_order do
      arg :order_id, non_null(:string)
      #arg :event_name, :string
      #arg :delivery_datetime, :string
      
      resolve &Sconely.SconelySignatureOrderResolver.save/2
  end

  field :save_sconely_signature_guest_choice, type: :sconely_signature_order_guest do
      arg :order_id, non_null(:string)
      arg :item_id, :string
      arg :first_name, :string
      arg :last_name, :string
     
      resolve &Sconely.SconelySignatureOrderResolver.save_guest_choice/2
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