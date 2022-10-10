export interface ITransaction{
  id:number
  created_at?:Date
  updated_at?:Date
  deleted_at?:Date
  reconciled:boolean
  account_id:number
  transaction_journal_id:number
  description?:string
  transaction_currency_id?:number
  * @property string                          $modified
  * @property string                          $modified_foreign
  * @property string                          $date
  * @property string                          $max_date
  * @property string                          $amount
  * @property string|null                     $foreign_amount
  * @property int|null                        $foreign_currency_id
  * @property int                             $identifier
  * @property-read Account                    $account
  * @property-read Collection|Budget[]        $budgets
  * @property-read int|null                   $budgets_count
  * @property-read Collection|Category[]      $categories
  * @property-read int|null                   $categories_count
  * @property-read TransactionCurrency|null   $foreignCurrency
  * @property-read TransactionCurrency|null   $transactionCurrency
  * @property-read TransactionJournal         $transactionJournal
  * @property int                             $the_count
}