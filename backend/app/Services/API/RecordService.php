<?php

namespace App\Services\API;

use App\Exceptions\AccountNotCreatedFoundException;
use App\Models\AddCustomer;
use App\Models\Customer;
use DB;

class AccountService
{

    /**
     * @var App\Models\Customer
     */
    protected $customer;

    
    /**
     * AccountService constructor.
     *
     * @param App\Models\Customer $customer
     */
    public function __construct(Customer $customer, AddCustomer $addCustomer)
    {
        $this->customer = $customer;
        $this->addCustomer = $addCustomer;
    }

    public function edit($id)
    {
        try {
            $customer = $this->findById($id);

            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            throw $e;
        }

        return $customer;
    }


    public function findById(int $id)
    {
        // retrieve the user
        $addCustomer = $this->addCustomer->find($id);

        if (!($addCustomer instanceof User)) {
            throw new CustomerNotFoundException;
        }

        return $addCustomer;
    }

}