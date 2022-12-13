<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateAccountMoneyRequest;
use App\Http\Resources\AccountResource;
use App\Services\API\AccountService;
use App\Models\Account;
use Validate;
use Exception;
use Request;

class AccountController extends Controller
{
    /** @var App\Services\API\AccountService */
    protected $accountService;

    /**
     * UserController constructor.
     *
     * @param App\Services\API\AccountService $accountService
     */

    /**
     * UserController constructor.
     *
     * @param App\Services\API\AccountService $accountService
     */
    public function __construct(AccountService $accountService)
    {
        $this->accountService = $accountService;
    }

    public function index()
    {
        return view('account.addAccount');
    }

    public function histories()
    {
        try {
            $account = $this->accountService->getAccount();
            $this->response['data'] = AccountResource::collection($account);
        } catch (Exception $e) {
            $this->response = [
                'error' => $e->getMessage(),
                'code' => 500,
            ];
        }
        
        return response()->json($this->response);

    }

    public function loads(CreateAccountMoneyRequest $request)   
    {
        $request->validated();
        try {
            $formData = [
                'gcash' =>  $request->getGcash(),
                'wallet' =>  $request->getWallet(),
            ];
   
            $account = $this->accountService->create($formData);
            $this->response['data'] = new AccountResource($account);
        } catch (Exception $e) {
            $this->response = [
                'error' => $e->getMessage(),
                'code' => 500,
            ];
        }// @codeCoverageIgnoreEnd
        return response()->json($this->response);
    }

    public function destroy($id)
    {   
        $account = $this->accountService->delete($id);
        return response()->json($this->response);
    }

}
