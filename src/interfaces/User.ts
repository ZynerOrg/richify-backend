import { IRole } from "./Role"

export interface IUser {
id:number,email:string
isAdmin:boolean
has2FA:boolean
prefs: []
password:string
mfa_secret:string
roles:IRole[]
blocked_code: string
blocked:boolean
created_at?: Date
updated_at?: Date
remember_token?: string
reset?:string
  * @property-read \Illuminate\Database\Eloquent\Collection|Account[]              $accounts
  * @property-read \Illuminate\Database\Eloquent\Collection|Attachment[]           $attachments
  * @property-read \Illuminate\Database\Eloquent\Collection|AvailableBudget[]      $availableBudgets
  * @property-read \Illuminate\Database\Eloquent\Collection|Bill[]                 $bills
  * @property-read \Illuminate\Database\Eloquent\Collection|Budget[]               $budgets
  * @property-read \Illuminate\Database\Eloquent\Collection|Category[]             $categories
  * @property-read \Illuminate\Database\Eloquent\Collection|Client[]               $clients
  * @property-read \Illuminate\Database\Eloquent\Collection|CurrencyExchangeRate[] $currencyExchangeRates
  * @property-read DatabaseNotificationCollection|DatabaseNotification[]           $notifications
  * @property-read \Illuminate\Database\Eloquent\Collection|PiggyBank[]            $piggyBanks
  * @property-read \Illuminate\Database\Eloquent\Collection|Preference[]           $preferences
  * @property-read \Illuminate\Database\Eloquent\Collection|Recurrence[]           $recurrences
  * @property-read \Illuminate\Database\Eloquent\Collection|RuleGroup[]            $ruleGroups
  * @property-read \Illuminate\Database\Eloquent\Collection|Rule[]                 $rules
  * @property-read \Illuminate\Database\Eloquent\Collection|Tag[]                  $tags
  * @property-read \Illuminate\Database\Eloquent\Collection|Token[]                $tokens
  * @property-read \Illuminate\Database\Eloquent\Collection|TransactionGroup[]     $transactionGroups
  * @property-read \Illuminate\Database\Eloquent\Collection|TransactionJournal[]   $transactionJournals
  * @property-read \Illuminate\Database\Eloquent\Collection|Transaction[]          $transactions
  * @method static Builder|User newModelQuery()
  * @method static Builder|User newQuery()
  * @method static Builder|User query()
  * @method static Builder|User whereBlocked($value)
  * @method static Builder|User whereBlockedCode($value)
  * @method static Builder|User whereCreatedAt($value)
  * @method static Builder|User whereEmail($value)
  * @method static Builder|User whereId($value)
  * @method static Builder|User wherePassword($value)
  * @method static Builder|User whereRememberToken($value)
  * @method static Builder|User whereReset($value)
  * @method static Builder|User whereUpdatedAt($value)
  * @mixin Eloquent
  * @property string|null                                                          $objectguid
  * @property-read int|null                                                        $accounts_count
  * @property-read int|null                                                        $attachments_count
  * @property-read int|null                                                        $available_budgets_count
  * @property-read int|null                                                        $bills_count
  * @property-read int|null                                                        $budgets_count
  * @property-read int|null                                                        $categories_count
  * @property-read int|null                                                        $clients_count
  * @property-read int|null                                                        $currency_exchange_rates_count
  * @property-read int|null                                                        $notifications_count
  * @property-read int|null                                                        $piggy_banks_count
  * @property-read int|null                                                        $preferences_count
  * @property-read int|null                                                        $recurrences_count
  * @property-read int|null                                                        $roles_count
  * @property-read int|null                                                        $rule_groups_count
  * @property-read int|null                                                        $rules_count
  * @property-read int|null                                                        $tags_count
  * @property-read int|null                                                        $tokens_count
  * @property-read int|null                                                        $transaction_groups_count
  * @property-read int|null                                                        $transaction_journals_count
  * @property-read int|null                                                        $transactions_count
  * @method static Builder|User whereMfaSecret($value)
  * @method static Builder|User whereObjectguid($value)
  * @property string|null                                                          $provider
  * @method static Builder|User whereProvider($value)
  * @property-read \Illuminate\Database\Eloquent\Collection|ObjectGroup[]          $objectGroups
  * @property-read int|null                                                        $object_groups_count
  * @property-read \Illuminate\Database\Eloquent\Collection|Webhook[]              $webhooks
  * @property-read int|null                                                        $webhooks_count
  * @property string|null                                                          $two_factor_secret
  * @property string|null                                                          $two_factor_recovery_codes
  * @property string|null                                                          $guid
  * @property string|null                                                          $domain
  * @method static Builder|User whereDomain($value)
  * @method static Builder|User whereGuid($value)
  * @method static Builder|User whereTwoFactorRecoveryCodes($value)
  * @method static Builder|User whereTwoFactorSecret($value)
  * @property int|null                                                             $user_group_id
  * @property-read \Illuminate\Database\Eloquent\Collection|GroupMembership[]      $groupMemberships
  * @property-read int|null                                                        $group_memberships_count
  * @property-read UserGroup|null                                                  $userGroup
  * @method static Builder|User whereUserGroupId($value)
}
