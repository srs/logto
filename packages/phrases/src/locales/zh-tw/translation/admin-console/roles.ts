const roles = {
  page_title: '角色',
  title: '角色',
  subtitle:
    'RBAC 是一種訪問控制方法，它使用角色來決定用戶可以做什麼事情，包括授予用戶訪問特定資源的權限。',
  create: '建立角色',
  role_name: '角色名稱',
  role_type: '角色類型',
  type_user: '使用者',
  type_machine_to_machine: '機器對機器',
  role_description: '描述',
  role_name_placeholder: '輸入你的角色名稱',
  role_description_placeholder: '輸入你的角色描述',
  col_roles: '角色',
  col_type: '類型',
  col_description: '描述',
  col_assigned_entities: '已分配',
  user_counts: '{{count}} 個使用者',
  application_counts: '{{count}} 個應用程式',
  user_count: '{{count}} 個使用者',
  application_count: '{{count}} 個應用程式',
  assign_permissions: '分配權限',
  create_role_title: '建立角色',
  create_role_description: '使用角色來組織權限並分配給使用者。',
  create_role_button: '建立角色',
  role_created: '角色 {{name}} 已成功建立。',
  search: '按角色名稱、描述或 ID 搜尋',
  placeholder_title: '角色',
  placeholder_description: '角色是可以分配給使用者的權限分組。在建立角色之前，請確保先新增權限。',
  assign_roles: '分配角色',
  management_api_access_notification:
    '要訪問 Logto 管理 API，請選擇具有管理 API 權限的角色 <flag/>。',
  with_management_api_access_tip: '此機器對機器角色包含 Logto 管理 API 權限',
  role_creation_hint: '找不到合適的角色？<a>建立角色</a>',
};

export default Object.freeze(roles);
