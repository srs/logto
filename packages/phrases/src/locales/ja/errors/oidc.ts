const oidc = {
  aborted: 'エンドユーザが操作を中止しました。',
  /** UNTRANSLATED */
  invalid_scope: 'Invalid scope: {{error_description}}.',
  invalid_token: '提供されたトークンが無効です。',
  invalid_client_metadata: '提供されたクライアントメタデータが無効です。',
  /** UNTRANSLATED */
  insufficient_scope: 'Token missing scope `{{scope}}`.',
  invalid_request: 'リクエストが無効です。',
  invalid_grant: '付与要求が無効です。',
  invalid_redirect_uri:
    '`` `redirect_uri`` `は、クライアントの登録された一つにも一致しませんでした```redirect_uris`。',
  access_denied: 'アクセスが拒否されました。',
  invalid_target: '無効なリソース指示子です。',
  unsupported_grant_type: '要求された`grant_type`はサポートされていません。',
  unsupported_response_mode: '要求された`response_mode`はサポートされていません。',
  unsupported_response_type: '要求された`response_type`はサポートされていません。',
  provider_error: 'OIDC内部エラー:{{message}}。',
  /** UNTRANSLATED */
  server_error: 'An unknown OIDC error occurred. Please try again later.',
  /** UNTRANSLATED */
  provider_error_fallback: 'An OIDC error occurred: {{code}}.',
  /** UNTRANSLATED */
  key_required: 'At least one key is required.',
  /** UNTRANSLATED */
  key_not_found: 'Key with ID {{id}} is not found.',
};

export default Object.freeze(oidc);
