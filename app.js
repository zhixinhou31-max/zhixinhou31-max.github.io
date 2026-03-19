/**
 * Wahool SaaS - Affiliate 板块
 * Role 切换：直播服务 | Affiliate（一级菜单整体替换）
 * Hash 路由: #/affiliate/creators | #/affiliate/discover | #/affiliate/outreach | #/affiliate/analytics
 */

(function () {
  // ==================== i18n ====================
  var LANG_KEY = 'wahool_lang';
  function getLang() { return localStorage.getItem(LANG_KEY) || 'en'; }
  function setLang(lang) { localStorage.setItem(LANG_KEY, lang); }
  function t(key) { var l = getLang(); return (i18n[l] && i18n[l][key]) || (i18n.en && i18n.en[key]) || key; }

  var i18n = {
    en: {
      // nav
      'nav.dashboard': 'Dashboard', 'nav.live_calendar': 'Live Calendar', 'nav.live_console': 'Live Console',
      'nav.live_settings': 'Live Settings', 'nav.live_products': 'Live Products', 'nav.merchant': 'Merchant Center',
      'nav.find_creators': 'Find Creators', 'nav.outreach': 'Outreach', 'nav.creator_crm': 'Creator CRM',
      'nav.analytics': 'Analytics', 'nav.tenant_center': 'Tenant Center', 'nav.profile': 'Profile', 'nav.account': 'Account',
      // common
      'common.all': 'All', 'common.cancel': 'Cancel', 'common.edit': 'Edit', 'common.retry': 'Retry', 'common.save': 'Save', 'common.hint': 'Hint',
      'common.search': 'Search', 'common.reset': 'Reset', 'common.results': 'results',
      'common.name': 'Name', 'common.subject': 'Subject', 'common.creator': 'Creator',
      'common.updated': 'Updated', 'common.actions': 'Actions', 'common.status': 'Status',
      'common.yes': 'Yes', 'common.no': 'No', 'common.any': 'Any', 'common.min': 'Min', 'common.max': 'Max',
      // crm
      'crm.title': 'Creator CRM',
      'crm.desc': 'Manage partners and leads: status, tags, outreach history.',
      'crm.btn.add': 'Add creators', 'crm.filter.mine': 'My creators',
      'crm.filter.all_status': 'All status', 'crm.filter.partner': 'Partner',
      'crm.filter.lead': 'Not partnered',
      'crm.filter.coop': 'Partnership',
      'crm.status.partner': 'Partner',
      'crm.status.lead': 'Not partnered',
      'crm.action.delete': 'Delete',
      'crm.delete_confirm': 'Delete this creator? This cannot be undone.',
      'crm.deleted': 'Creator removed', 'crm.filter.all_sources': 'All sources',
      'crm.filter.has_email': 'Has email', 'crm.filter.no_email': 'No email',
      'crm.filter.email_any': 'Email: Any', 'crm.filter.data_all': 'Data: All',
      'crm.filter.btn': 'Filters', 'crm.filter.clear': 'Clear all',
      'crm.filter.status': 'Status', 'crm.filter.source': 'Source', 'crm.filter.email': 'Email', 'crm.filter.data': 'Data', 'crm.filter.tag': 'Tag',
      'crm.search': 'Search name, handle or email...',
      'crm.empty.filter': 'No creators match your filters.',
      'crm.empty.none': 'No creators yet. Add or discover creators to get started.',
      'crm.stat.total': 'Total', 'crm.stat.partners': 'Partners', 'crm.stat.enriched': 'Enriched',
      'crm.stat.enriching': 'Enriching', 'crm.stat.failed': 'Failed', 'crm.stat.success': 'Enriched',
      'crm.progress': 'Enriching creators...', 'crm.progress.completed': 'completed',
      'crm.th.creator': 'Creator', 'crm.th.followers': 'Followers', 'crm.th.category': 'Category',
      'crm.th.video_live': 'Live / Video', 'crm.th.gmv_30d': 'GMV (30d)', 'crm.th.contact': 'Contact',
      'crm.th.tags': 'Tags', 'crm.th.source': 'Source',
      'crm.th.owner': 'Owner', 'crm.th.data': 'Data', 'crm.th.last_outreach': 'Last outreach',
      'crm.outreach_times': '{0} times',
      'crm.no_email': 'No email', 'crm.email_edit': 'Edit', 'crm.email_save': 'Save', 'crm.enriching': 'Enriching', 'crm.queued': 'Queued',
      'crm.batch.selected': 'creators selected', 'crm.batch.outreach': 'Create outreach task',
      'crm.batch.tags': 'Manage tags', 'crm.batch.delete': 'Delete',
      'crm.batch.delete_confirm': 'Delete {0} selected creators? This cannot be undone.',
      'crm.tags.title': 'Manage Tags', 'crm.tags.add_new': 'Add new tag', 'crm.tags.ph': 'New tag name...',
      'crm.tags.used_by': 'creators', 'crm.tags.delete_confirm': 'Delete this tag and remove from all creators?',
      'crm.tags.apply': 'Apply', 'crm.tags.add_to': 'Add tags', 'crm.tags.remove_from': 'Remove tags',
      'crm.tags.toast_applied': 'Tags updated for {0} creators', 'crm.tags.search': 'Search tags...',
      'crm.tags.no_tags': 'No tags yet', 'crm.tags.all_added': 'All tags already added', 'crm.tags.existing': 'Current tags on selected creators',
      'crm.ot.title': 'Create Outreach Task', 'crm.ot.task_name': 'Task name',
      'crm.ot.send_from': 'Send from', 'crm.ot.reply_to': 'Reply to',
      'crm.ot.select_sender': 'Select sending account', 'crm.ot.select_reply': 'Select reply account',
      'crm.ot.template': 'Email template', 'crm.ot.select_tpl': 'Select template',
      'crm.ot.create': 'Create task', 'crm.ot.with_email': 'with email (will receive)',
      'crm.ot.no_email': 'without email (will be skipped)',
      'crm.add.title': 'Add Creators',
      'crm.add.desc': 'Upload a list of TikTok handles. Our system will automatically fetch and enrich creator profiles (followers, category, email, etc.).',
      'crm.add.drop': 'Drag & drop file here, or click to browse',
      'crm.add.formats': 'Supports .csv and .xlsx formats',
      'crm.add.format_title': 'File format',
      'crm.add.format_desc': 'Only one column is required. Each row should contain a TikTok handle (e.g. <code>@glowwithholly</code>).',
      'crm.add.download': 'Download template',
      'crm.add.enrich_title': 'Auto-enrichment',
      'crm.add.enrich_desc': 'After import, the system will automatically crawl TikTok to populate: followers, category, bio, email, video metrics, engagement rate, and more. This usually takes a few minutes depending on the number of creators.',
      'crm.add.import': 'Import & enrich',
      // discover
      'discover.title': 'Find Creators',
      'discover.desc': 'Discover and qualify TikTok creators for your affiliate programs',
      'discover.ai': 'AI Search', 'discover.filter': 'Manual Filter',
      'discover.ai.placeholder': 'e.g. beauty creators with 100k-500k followers who post skincare content',
      'discover.ai.hint': 'Describe the creators you need in natural language. AI will match and recommend relevant TikTok creators.',
      'discover.ai.conversation': 'Conversation',
      'discover.ai.welcome': 'Tell me what kind of creators you are looking for and I will find the best matches.',
      'discover.ai.indev_badge': 'In dev',
      'discover.ai.indev_title': 'We’re polishing this AI search',
      'discover.ai.indev_desc': 'Today this is a guided demo. Real-time creator matching and history will be enabled soon.',
      'discover.results': 'Results', 'discover.add_leads': 'Add selected to leads',
      'discover.found': 'creators found', 'discover.test_data': 'Test data',
      'discover.added': 'Added', 'discover.add_single': 'Add to leads',
      'discover.toast.success': 'Added {0} creators to CRM',
      'discover.toast.partial': 'Added {0}, skipped {1} (already in CRM)',
      'discover.toast.duplicate': 'All selected creators are already in CRM',
      'discover.toast.no_selection': 'Please select at least one creator first',
      'discover.filter.by': 'Filter by',
      'discover.filter.dim_creators': 'Creators', 'discover.filter.dim_followers': 'Followers', 'discover.filter.dim_performance': 'Performance',
      'discover.filter.product_category': 'Product category', 'discover.filter.avg_commission': 'Avg. commission rate',
      'discover.filter.content_type': 'Content type', 'discover.filter.creator_agency': 'Creator agency',
      'discover.filter.category_pro': 'Category Pro', 'discover.filter.fast_growing': 'Fast growing', 'discover.filter.live_creators': 'LIVE creators',
      'discover.filter.follower_age': 'Follower age', 'discover.filter.follower_count': 'Follower count', 'discover.filter.follower_gender': 'Follower gender',
      'discover.filter.items_sold': 'Items sold', 'discover.filter.avg_views_video': 'Average views per video',
      'discover.filter.avg_viewers_live': 'Average viewers per LIVE', 'discover.filter.engagement_rate': 'Engagement rate',
      'discover.filter.brand_collabs': 'Brand collaborations', 'discover.filter.brand_search_ph': 'Search brands...',
      'discover.filter.brand_no_match': 'No matching brands',
      'discover.filter.basic': 'Basic Info', 'discover.filter.audience': 'Audience & Performance',
      'discover.filter.video': 'Video Metrics', 'discover.filter.live': 'Live Metrics',
      'discover.filter.outreach': 'Outreach Status',
      'discover.filter.category': 'Category', 'discover.filter.all_cat': 'All categories',
      'discover.filter.country': 'Country', 'discover.filter.all_country': 'All countries',
      'discover.filter.region': 'Selection Region', 'discover.filter.all_regions': 'All regions',
      'discover.filter.has_email': 'Has Email',
      'discover.filter.followers': 'Follower Count', 'discover.filter.gender': 'Top Follower Gender',
      'discover.filter.sold': 'Units Sold', 'discover.filter.gmv': 'Median GMV Revenue',
      'discover.filter.vid_views': 'Video Avg Views', 'discover.filter.vid_eng': 'Video Engagement',
      'discover.filter.vid_pub': 'Videos Published (30d)', 'discover.filter.ec_vid_eng': 'E-Com Video Engagement',
      'discover.filter.live_cnt': 'Live Streams (30d)', 'discover.filter.live_views': 'Live Median Views',
      'discover.filter.live_eng': 'Live Engagement', 'discover.filter.gpm': 'GPM',
      'discover.filter.reached': 'Reached Out', 'discover.filter.success': 'Successful Outreach',
      'discover.filter.never': 'Never',
      'discover.filter.reset': 'Reset', 'discover.filter.search': 'Search creators',
      'discover.filter.more': 'More filters', 'discover.filter.less': 'Less',
      // outreach
      'outreach.title': 'Outreach',
      'outreach.tab.tasks': 'Tasks', 'outreach.tab.templates': 'Templates', 'outreach.tab.accounts': 'Email Accounts',
      'outreach.tasks.title': 'Outreach Tasks',
      'outreach.tasks.desc': 'Send bulk emails and track delivery, open, click, and reply rates.',
      'outreach.tasks.new': 'New outreach task', 'outreach.tasks.empty': 'No outreach tasks yet.',
      'outreach.tasks.created': 'Created', 'outreach.tasks.recipients': 'recipients',
      'outreach.tasks.delivered': 'Delivered', 'outreach.tasks.opened': 'Opened',
      'outreach.tasks.clicked': 'Clicked', 'outreach.tasks.replied': 'Replied',
      'outreach.tasks.scheduled': 'Scheduled', 'outreach.tasks.sending': 'Sending',
      'outreach.tasks.completed': 'Completed', 'outreach.tasks.failed': 'Failed',
      'outreach.modal.title': 'New Outreach Task', 'outreach.modal.name': 'Task name',
      'outreach.modal.name_ph': 'e.g. March Beauty Campaign',
      'outreach.modal.send_from': 'Send from', 'outreach.modal.reply_to': 'Reply to',
      'outreach.modal.select_sender': 'Select sending account', 'outreach.modal.select_reply': 'Select reply account',
      'outreach.modal.template': 'Email template', 'outreach.modal.select_tpl': 'Select template',
      'outreach.modal.audience': 'Audience',
      'outreach.modal.by_tags': 'By creator tags', 'outreach.modal.upload': 'Upload spreadsheet',
      'outreach.modal.tag_ph': 'Search and select tags...',
      'outreach.modal.drop': 'Drag & drop a .csv or .xlsx file here, or click to browse',
      'outreach.modal.file_hint': 'File should contain columns: email (required), name (optional)',
      'outreach.modal.create': 'Create task',
      'outreach.tpl.title': 'Email Templates',
      'outreach.tpl.desc': 'Create reusable email templates with variables like {{name}}, {{brand}}.',
      'outreach.tpl.new': 'Create template', 'outreach.tpl.mine': 'My templates',
      'outreach.tpl.search': 'Search by name or subject...',
      'outreach.tpl.empty.filter': 'No templates match your filters.',
      'outreach.tpl.empty.none': 'No templates yet. Create one to get started.',
      'outreach.acct.title': 'Email Accounts',
      'outreach.acct.desc': 'Connect SMTP accounts for sending and IMAP accounts for receiving replies.',
      'outreach.acct.add': 'Add account', 'outreach.acct.sending': 'Sending', 'outreach.acct.receiving': 'Receiving',
      'outreach.acct.no_send': 'No sending accounts configured.', 'outreach.acct.no_recv': 'No receiving accounts configured.',
      'outreach.acct.modal_title': 'Add Email Account', 'outreach.acct.type': 'Account type',
      'outreach.acct.email': 'Email address', 'outreach.acct.email_ph': 'e.g. outreach@yourcompany.com',
      'outreach.acct.app_pw': 'App password', 'outreach.acct.app_pw_hint': '(third-party client security password)',
      'outreach.acct.app_pw_ph': 'Paste your app-specific password here',
      'outreach.acct.pw_note': 'This is <strong>not</strong> your regular email login password. You need to generate a dedicated app password from your email provider:',
      'outreach.acct.pw_gmail': '<strong>Gmail</strong>: Google Account &rarr; Security &rarr; 2-Step Verification &rarr; App passwords',
      'outreach.acct.pw_outlook': '<strong>Outlook</strong>: Microsoft Account &rarr; Security &rarr; App passwords',
      'outreach.acct.pw_qq': '<strong>QQ / 163</strong>: Settings &rarr; Account Security &rarr; Generate authorization code',
      'outreach.acct.pw_note2': 'This password is only used for secure third-party client access.',
      'outreach.acct.connect': 'Connect',
      'outreach.acct.remove_confirm_title': 'Remove email account',
      'outreach.acct.remove_confirm_msg': 'Remove this account? You can add it again later.',
      'outreach.acct.remove_confirm_btn': 'Remove', 'outreach.acct.removed': 'Account removed.',
      'outreach.acct.badge_verified': 'Verified',
      'outreach.acct.badge_pending': 'Pending',
      'outreach.acct.badge_connected': 'Connected',
      'outreach.acct.meta_verified': 'Can be used to create sending tasks',
      'outreach.acct.meta_pending': 'Please complete verification in your email inbox before using',
      'outreach.acct.pending_suffix': ' (Pending)',
      'outreach.acct.verify_popup_title': 'Sending email pending verification',
      'outreach.acct.verify_popup_desc': 'Please complete the verification/confirmation in your email inbox. After verification is completed and takes effect, this sending email can be used to create sending tasks.',
      'outreach.acct.verify_popup_ok': 'Got it',
      'outreach.acct.toast_sending_pending': 'Sending account added: Pending verification. Please complete confirmation in your email inbox to use it.',
      'outreach.modal.hint_select_sender': 'Please select a sending email account (Sending).',
      'outreach.modal.hint_sender_verified': 'This sending email is verified and can be used to create tasks.',
      'outreach.modal.hint_sender_pending': 'This sending email is not verified. Please complete confirmation in your email inbox before creating tasks.',
      'outreach.modal.hint_sender_unusable': 'This sending email cannot be used to create tasks.',
      'outreach.modal.alert_select_verified_sender': 'Please select a verified sending email before creating a task.',
      // dashboard
      'dashboard.title': 'Dashboard',
      'dashboard.desc': 'Live service home. Switch to Affiliate in the top bar to manage creators.',
      // analytics
      'analytics.title': 'Analytics', 'analytics.coming': 'Coming in a future release.',
      'tc.plan_benefits': 'Plan & Benefits', 'tc.plan_usage': 'Plan & Usage', 'tc.billing_usage': 'Billing & Usage', 'tc.billing_invoices': 'Billing',
      'tc.affiliate_plan': 'Affiliate Plan', 'tc.live_plan': 'Live Plan', 'tc.current_plan': 'Current Plan', 'tc.orders': 'Orders', 'tc.invoices': 'Invoices',
      'tc.tenant': 'Tenant', 'tc.profile': 'Profile', 'tc.live_account': 'Live Account', 'tc.tenant_tts': 'TAP Seller', 'tc.tenant_host': 'Tenant Host', 'tc.admin': 'Admin', 'tc.account_settings': 'Account settings',
      'tc.cancel_subscription': 'Cancel Subscription', 'tc.benefits_store': 'Benefits Store',
      'tc.benefits_store_desc_live': 'Plans for Live streaming',
      'tc.benefits_store_desc_affiliate': 'Plans for Affiliate', 'tc.benefits_usage': 'Benefits & Usage', 'tc.available_days': 'Available Days',
      'tc.show_more': 'Show More', 'tc.liveq_basic': 'LiveQ Basic', 'tc.liveq_pro': 'LiveQ PRO', 'tc.additional_seats': 'Additional Seats - 60 days', 'tc.pending': 'Pending',
      'tc.days_remaining': 'days remaining', 'tc.current_billing_period': 'Current Billing Period', 'tc.plan_effect_date': 'Your plan will take effect on Mar 1, 2026.',
      'tc.set_remaining': 'Set remaining / Total', 'tc.chatbot_assistant': 'ChatBot Assistant', 'tc.comprehensive_schedule': 'Comprehensive Live Schedule Management',
      'tc.total_days': 'Total', 'tc.per_6_months': '/ 6 Months', 'tc.per_day': '/ Day', 'tc.price_49': '$49.00', 'tc.price_1999': '$19.99',
      'tc.affiliate_benefit_creators': 'Creator CRM seats', 'tc.affiliate_benefit_find': 'Find Creators', 'tc.affiliate_benefit_outreach': 'Outreach tasks',
      'tc.live_benefit_sets': 'Live Account sets', 'tc.live_benefit_hours': 'General Live Hours', 'tc.live_benefit_schedule': 'Host Scheduling & Mobile App',
      'tc.orders_invoices_placeholder': 'Orders and invoices will appear here.',
      'tc.tenant_placeholder': 'Tenant profile and account settings.',
      'tc.admin_placeholder': 'Account and security settings.',
      'tc.tts.title': 'TikTok Shop authorizations',
      'tc.tts.desc': 'Connect your TikTok Shops via TikTok authorization. After you confirm on TikTok, authorized shops will appear below.',
      'tc.tts.auth_btn': 'Authorize TikTok Shop',
      'tc.tts.shop_id': 'Shop ID',
      'tc.tts.marketplace': 'Marketplace',
      'tc.tts.auth_status': 'Auth status',
      'tc.tts.auth_active': 'Active',
      'tc.tts.auth_revoked': 'Revoked',
      'tc.tts.last_update': 'Last update',
      'tc.tts.renew': 'Renew',
      'tc.tts.remove': 'Remove',
      'tc.tts.remove_confirm': 'Disconnect this TikTok Shop? Find Creators for this marketplace will no longer be available.',
      'tc.tts.empty_title': 'No TikTok Shop connected yet',
      'tc.tts.empty_desc': 'Connect at least one TikTok Shop to use Find Creators and other affiliate features.',
      'tc.tts.empty_cta': 'Authorize TikTok Shop',
      'tc.tts.na': '—',
      'tc.tts.toast_connected': 'TikTok Shop connected',
      'tc.tts.toast_removed': 'Authorization removed',
      'tc.tts.toast_renewed': 'Authorization renewed',
      'tc.host_affiliate': 'Host & Affiliate', 'tc.ha_manage': 'Management', 'tc.ha_settlement': 'Settlement',
      'tc.ha_manage_desc': 'Manage Host & Affiliate profiles and link them with your tenant.',
      'tc.ha_settlement_desc': 'Create statements and approve creator payouts.',
      'tc.ha.settle_tab_batch': 'Statements',
      'tc.ha.settle_tab_withdraw': 'Withdrawals',
      'tc.ha.settle_tab_past_lives': 'Live Sessions',
      'tc.ha.settle_tab_abnormal': 'Issues',
      'tc.ha.settle_tab_rules': 'Rules',
      'tc.ha.settle_tab_other_rewards': 'Bonuses',
      'tc.ha.settle_batch_title': 'Statements',
      'tc.ha.settle_withdraw_title': 'Withdrawals',
      'tc.ha.settle_batch_desc': 'Generate statements from live session data, review and confirm, then send to creators.',
      'tc.ha.settle_withdraw_desc': 'Review and approve payout requests from creators after their statements are confirmed.',
      'tc.ha.batch_detail': 'Statement details',
      'tc.ha.back_to_batches': 'Back to statements',
      'tc.ha.batch_creators': 'Creator breakdown',
      'tc.ha.th_creators': 'Creators',
      'tc.ha.th_creator': 'Creator',
      'tc.ha.batch_period': 'Period',
      'tc.ha.batch_total': 'Batch total',
      'tc.ha.live_room_id': 'Room ID',
      'tc.ha.live_event_name': 'Event name',
      'tc.ha.live_start_end': 'Start–End',
      'tc.ha.live_duration': 'Duration',
      'tc.ha.live_gmv': 'GMV',
      'tc.ha.live_hourly_rate': 'Hourly rate',
      'tc.ha.live_settle_amount': 'Amount',
      'tc.ha.live_cps_rate': 'CPS rate',
      'tc.ha.other_rewards_count': 'Items',
      'tc.ha.withdraw_paypal': 'Payout account',
      'tc.ha.withdraw_approve_all': 'Approve all',
      'tc.ha.withdraw_approve_selected': 'Approve selected',
      'tc.ha.withdraw_approve_all_confirm': 'Approve all pending withdrawal requests?',
      'tc.ha.withdraw_approve_selected_confirm': 'Approve selected withdrawal requests?',
      'tc.ha.withdraw_approve_confirm': 'Please confirm the transfer has been completed before approving this withdrawal request.',
      'tc.ha.withdraw_reject_confirm': 'Reject this withdrawal request? After rejection, the host/creator can resubmit a new request.',
      'tc.ha.withdraw_confirm_modal_title': 'Second confirmation',
      'tc.ha.withdraw_approve_all_done': 'All pending withdrawals approved.',
      'tc.ha.withdraw_approve_selected_done': 'Selected withdrawals approved.',
      'tc.ha.preview': 'Preview',
      'tc.ha.view': 'View',
      'tc.ha.confirm_push': 'Confirm & send',
      'tc.ha.confirm_push_confirm': 'Send this statement to creators? This will notify them and cannot be undone.',
      'tc.ha.push_to_hosts': 'Send to creators',
      'tc.ha.generate_batch': 'Generate statement',
      'tc.ha.generate_modal_title': 'Generate statement',
      'tc.ha.generate_modal_period': 'Period',
      'tc.ha.generate_modal_include': 'When "Bonuses" is checked, pre-defined bonuses from the Bonuses tab are included. You can add custom entries after generation.',
      'tc.ha.generate_modal_settle_types': 'Include',
      'tc.ha.generate_modal_include_hourly': 'Hourly pay',
      'tc.ha.generate_modal_include_commission': 'CPS (Commission)',
      'tc.ha.generate_modal_include_other_rewards': 'Bonuses',
      'tc.ha.generate_modal_types_required': 'Select at least one.',
      'tc.ha.generate_date_invalid': 'Start date must be before end date.',
      'tc.ha.generate_modal_country_scope': 'Country',
      'tc.ha.generate_modal_country_all': 'All countries',
      'tc.ha.generate_modal_country_specific': 'Specific country',
      'tc.ha.bonus_other': 'Bonuses',
      'tc.ha.stat_draft': 'Draft',
      'tc.ha.stat_confirmed': 'Confirmed',
      'tc.ha.stat_pending': 'Pending',
      'tc.ha.stat_approved': 'Approved',
      'tc.ha.stat_rejected': 'Rejected',
      'tc.ha.withdraw_empty': 'No withdrawal requests yet.',
      'tc.ha.batch_empty': 'No statements yet. Generate one to get started.',
      'tc.ha.stat_total': 'Total',
      'tc.ha.filter_period': 'Period',
      'tc.ha.select_all': 'Select all',
      'tc.ha.approve': 'Approve',
      'tc.ha.reject': 'Reject',
      'tc.ha.export_pending': 'Export pending',
      'tc.ha.export_selected': 'Export selected',
      'tc.ha.invite_host': 'Invite Host', 'tc.ha.invite_affiliate': 'Invite Affiliate', 'tc.ha.all': 'All', 'tc.ha.host': 'Host', 'tc.ha.affiliate': 'Affiliate',
      'tc.ha.search_name': 'Name', 'tc.ha.search_contact': 'Email / Phone', 'tc.ha.search': 'Search',
      'tc.ha.empty_all': 'No users yet', 'tc.ha.empty_all_desc': 'Invite hosts or affiliates to get started.',
      'tc.ha.empty_host': 'No hosts yet', 'tc.ha.empty_host_desc': 'Hosts are scheduled creators. You assign Live Events to them; they go live per Event. No live account authorization required.',
      'tc.ha.empty_affiliate': 'No affiliates yet', 'tc.ha.empty_affiliate_desc': 'Affiliates can use Quick Go Live. They need to authorize their live streaming account (e.g. TikTok) to broadcast.',
      'tc.ha.invite_hint': 'Recipients can register using phone or email.',
      'tc.ha.invite_host_title': 'Invite Hosts', 'tc.ha.invite_affiliate_title': 'Invite Affiliates',
      'tc.ha.host_method': 'Scheduled host: Merchant sets schedule and pushes to host; host goes live per schedule.',
      'tc.ha.affiliate_method': 'Affiliate: Self-authorizes live account in APP, one-click go live without merchant scheduling.',
      'tc.ha.invite_note_host': 'Please make sure your hosts register using this invitation link only, so their accounts can be correctly linked to your tenant.',
      'tc.ha.invite_note_affiliate': 'Please make sure your affiliates register using this invitation link only, so their accounts can be correctly linked to your tenant.',
      'tc.ha.copy_link': 'COPY LINK', 'tc.ha.copied': 'COPIED', 'tc.ha.note': 'NOTE',
      'tc.ha.account_info': 'Account Info', 'tc.ha.active': 'Active', 'tc.ha.inactive': 'Inactive',
      'tc.ha.host_card_desc': 'Scheduled host. Assigned Live Events by merchant. No live account auth required. Go live per Event.',
      'tc.ha.affiliate_card_desc': 'Can use Quick Go Live. Must authorize live streaming account. Flexible broadcast anytime.',
      'tc.ha.rules_title': 'Rules',
      'tc.ha.rules_desc': 'Set payout rules for hourly pay and commission. Used when generating statements.',
      'tc.ha.rules_merchant': 'Merchant default',
      'tc.ha.rules_priority': 'Settlement priority',
      'tc.ha.rules_priority_hint': 'Creator > Live Account',
      'tc.ha.rules_dimension_merchant': 'Merchant default',
      'tc.ha.rules_country_filter': 'Country',
      'tc.ha.rules_dimension_live_account': 'Live Account',
      'tc.ha.rules_dimension_creator': 'Creator',
      'tc.ha.rules_live_account_special': 'Custom rules by live account',
      'tc.ha.rules_live_account_special_hint': 'Only accounts with custom rules appear here.',
      'tc.ha.rules_live_account_add': 'Add Live Account',
      'tc.ha.rules_live_account_remove': 'Remove',
      'tc.ha.rules_live_account_empty': 'No custom rules yet.',
      'tc.ha.rules_live_account_empty_hint': 'Add a live account to set custom rules.',
      'tc.ha.rules_live_account_select_first': 'Select a live account to add.',
      'tc.ha.rules_live_account_select': 'Select live account',
      'tc.ha.rules_hourly': 'Hourly rate',
      'tc.ha.rules_hourly_ph': 'per hour',
      'tc.ha.rules_hourly_hint': 'Hourly rate × live duration',
      'tc.ha.rules_hourly_by_period': 'Hourly rate by period',
      'tc.ha.rules_hourly_period_hint': 'Multiple periods allowed. The most recent one applies.',
      'tc.ha.rules_hourly_year': 'Year',
      'tc.ha.rules_hourly_year_all': 'All',
      'tc.ha.rules_hourly_start': 'Start',
      'tc.ha.rules_hourly_end': 'End',
      'tc.ha.rules_hourly_add': 'Add period',
      'tc.ha.rules_hourly_periods': 'periods',
      'tc.ha.rules_creator_special': 'Custom rules by creator',
      'tc.ha.rules_creator_special_hint': 'Only creators with custom rules appear here.',
      'tc.ha.rules_creator_add': 'Add creator',
      'tc.ha.rules_creator_add_search_ph': 'Search by name...',
      'tc.ha.rules_creator_add_filter_all': 'All',
      'tc.ha.rules_creator_add_no_match': 'No matching creators.',
      'tc.ha.rules_creator_remove': 'Remove',
      'tc.ha.rules_creator_remove_confirm': 'Remove this creator\'s custom rules? They\'ll use the live account default.',
      'tc.ha.rules_live_account_remove_confirm': 'Remove this live account\'s custom rules? Creators will use other account rules.',
      'tc.ha.rules_live_account_column': 'Live Account',
      'tc.ha.rules_creator_empty': 'No custom rules yet.',
      'tc.ha.rules_creator_empty_hint': 'Add a creator to override live account rules.',
      'tc.ha.rules_creator_select_first': 'Select a creator to add.',
      'tc.ha.rules_cps': 'CPS tiers',
      'tc.ha.rules_cps_mode_per_hour': 'By GMV per hour',
      'tc.ha.rules_cps_mode_per_session': 'By total GMV per session',
      'tc.ha.rules_cps_hint': 'Based on Direct GMV per hour. Match tier to get CPS rate.',
      'tc.ha.rules_cps_hint_per_session': 'Based on total Direct GMV per session. Match tier to get CPS rate.',
      'tc.ha.rules_cps_min': 'Min amount / hour',
      'tc.ha.rules_cps_max': 'Max amount / hour',
      'tc.ha.rules_cps_min_session': 'Min amount',
      'tc.ha.rules_cps_max_session': 'Max amount',
      'tc.ha.rules_cps_summary_session': '(session)',
      'tc.ha.rules_cps_max_unlimited': 'Unlimited',
      'tc.ha.rules_cps_rate': 'CPS %',
      'tc.ha.rules_cps_effective_period': 'Effective period',
      'tc.ha.rules_cps_effective_start': 'Start',
      'tc.ha.rules_cps_effective_end': 'End',
      'tc.ha.rules_cps_effective_hint': 'One period for all tiers. Leave empty for always effective.',
      'tc.ha.rules_v2_title': 'Rules',
      'tc.ha.rules_v2_desc': 'Create rules by country and period. Records are immutable—create a new one to replace.',
      'tc.ha.rules_v2_create_new': 'Create new',
      'tc.ha.rules_effective_period': 'Effective period',
      'tc.ha.rules_v2_hourly_effective': 'Hourly effective',
      'tc.ha.rules_v2_cps_effective': 'CPS effective',
      'tc.ha.rules_section_hourly': 'Hourly rates',
      'tc.ha.rules_section_cps': 'CPS tiers',
      'tc.ha.rules_v2_subject': 'Subject',
      'tc.ha.rules_v2_meta': 'Created',
      'tc.ha.rules_v2_hourly_summary': 'Hourly',
      'tc.ha.rules_v2_cps_summary': 'CPS',
      'tc.ha.rules_v2_created_by': 'Created by',
      'tc.ha.rules_v2_created_at': 'Created at',
      'tc.ha.rules_v2_empty_title': 'No rules yet',
      'tc.ha.rules_v2_empty': 'Create rules above to set hourly rates and CPS tiers for live accounts or creators.',
      'tc.ha.rules_v2_create': 'Create',
      'tc.ha.rules_v2_dimension': 'Dimension',
      'tc.ha.rules_v2_tab_merchant': 'Merchant default',
      'tc.ha.rules_v2_tab_live_account': 'Live Account',
      'tc.ha.rules_v2_tab_creator': 'Creator',
      'tc.ha.rules_v2_history': 'Settings history',
      'tc.ha.rules_v2_status': 'Status',
      'tc.ha.rules_cps_add': 'Add tier',
      'tc.ha.rules_bonus': 'Fixed rewards',
      'tc.ha.rules_bonus_hint': 'By date. Multiple rewards on the same date are summed.',
      'tc.ha.rules_bonus_date': 'Date',
      'tc.ha.rules_bonus_default': 'Default',
      'tc.ha.rules_bonus_title': 'Title',
      'tc.ha.rules_bonus_amount': 'Amount',
      'tc.ha.rules_bonus_currency': 'Currency',
      'tc.ha.rules_bonus_add': 'Add reward',
      'tc.ha.rules_creator': 'Creator overrides',
      'tc.ha.rules_creator_hint': 'Override Live Account rules for specific creators.',
      'tc.ha.rules_creator_name': 'Creator',
      'tc.ha.rules_creator_multi_hint': 'Search and add multiple creators as tags',
      'tc.ha.rules_summary': 'Summary',
      'tc.ha.rules_creator_hourly': 'Hourly',
      'tc.ha.rules_creator_cps': 'CPS tiers',
      'tc.ha.rules_creator_bonus': 'Rewards',
      'tc.ha.rules_creator_edit': 'Edit',
      'tc.ha.rules_set_btn': 'Set rules',
      'tc.ha.rules_creator_use_default': 'Use default',
      'tc.ha.rules_save': 'Save rules',
      'tc.ha.rules_saved': 'Rules saved',
      'tc.ha.rules_preview': 'Preview',
      'tc.ha.rules_preview_hint': 'Example: 2.5h live, GMV $6,000 → $2,400/hr → 5% CPS → $300',
      'tc.ha.batch_generated': 'Statement generated',
      'tc.ha.custom_entries': 'Custom entries',
      'tc.ha.custom_entries_hint': 'Add custom entries to this statement. They\'ll be sent to creators with the statement.',
      'tc.ha.custom_entry_add': 'Add entry',
      'tc.ha.bonus_entry_add': 'Add bonus',
      'tc.ha.bonus_entry_title': 'Bonus name',
      'tc.ha.bonus_empty': 'No bonuses yet. Add one below.',
      'tc.ha.other_rewards_title': 'Pre-defined bonuses',
      'tc.ha.other_rewards_hint': 'Define bonuses here. They\'re automatically included when generating statements for matching periods and creators.',
      'tc.ha.other_rewards_period': 'Period',
      'tc.ha.other_rewards_period_hint': 'Start–End dates. Bonus applies to statements generated for this period.',
      'tc.ha.other_rewards_add': 'Add bonus',
      'tc.ha.other_rewards_empty': 'No bonuses defined yet.',
      'tc.ha.other_rewards_saved': 'Saved',
      'tc.ha.other_rewards_cannot_delete': 'Can\'t delete—used in a statement',
      'tc.ha.other_rewards_period_filter': 'Period filter',
      'tc.ha.other_rewards_export_excel': 'Export Excel',
      'tc.ha.other_rewards_created_by': 'Created by',
      'tc.ha.other_rewards_settlement_status': 'Settlement status',
      'tc.ha.custom_entry_creator': 'Creator',
      'tc.ha.custom_entry_title': 'Title',
      'tc.ha.custom_entry_amount': 'Amount',
      'tc.ha.custom_entry_currency': 'Currency',
      'tc.ha.rules_currency': 'Settlement currency',
      'tc.ha.currency': 'Currency',
      'tc.ha.rules_currency_hint': 'Each live account has one currency. Creators inherit it.',
      'tc.ha.live_account': 'Country',
      'tc.ha.batch_by_live_account': 'By Country',
      'tc.ha.rules_currency_default': 'Use default',
      'tc.ha.filter_live_account': 'Country',
      'tc.ha.filter_live_account_all': 'All countries',
      'tc.ha.filter_live_account_hint': 'Each country has separate stats and statements.',
      'tc.ha.batch_id': 'Batch ID',
      'tc.ha.sn': 'Statement #',
      'tc.ha.th_lives': 'Lives',
      'tc.ha.th_hourly_total': 'Hourly total',
      'tc.ha.th_commission_total': 'Commission total',
      'tc.ha.batch_created_by': 'Created by',
      'tc.ha.batch_created_at': 'Created at',
      'tc.ha.batch_confirmed_by': 'Confirmed by',
      'tc.ha.batch_confirmed_at': 'Confirmed at',
      'tc.ha.batch_empty_filtered': 'No statements for this account.',
      'tc.ha.pager_total': 'Total {n}',
      'tc.ha.past_lives_title': 'Live Sessions',
      'tc.ha.past_lives_desc': 'View all live sessions. Edit GMV and fix sessions with missing data.',
      'tc.ha.past_lives_filter_host': 'Host',
      'tc.ha.past_lives_filter_room': 'Room ID',
      'tc.ha.past_lives_filter_la': 'Live account',
      'tc.ha.past_lives_filter_date': 'Date range',
      'tc.ha.past_lives_filter_settled': 'Settlement status',
      'tc.ha.past_lives_th_schedule_id': 'Schedule ID',
      'tc.ha.past_lives_th_room_id': 'Room ID',
      'tc.ha.past_lives_th_event': 'Event',
      'tc.ha.past_lives_th_host': 'Host',
      'tc.ha.past_lives_th_planned': 'Scheduled',
      'tc.ha.past_lives_th_actual': 'Actual',
      'tc.ha.past_lives_th_duration': 'Duration',
      'tc.ha.past_lives_th_gmv': 'GMV',
      'tc.ha.past_lives_th_settled': 'Settlement',
      'tc.ha.past_lives_th_batch_sn': 'Statement #',
      'tc.ha.past_lives_export': 'Export',
      'tc.ha.past_lives_fix_abnormal': 'Fix issues',
      'tc.ha.past_lives_empty': 'No sessions match filters.',
      'tc.ha.abnormal_empty': 'No sessions need attention.',
      'tc.ha.settled': 'Settled',
      'tc.ha.unsettled': 'Unsettled',
      'tc.ha.abnormal_title': 'Sessions needing attention',
      'tc.ha.abnormal_desc': 'Sessions missing Room ID or actual start/end times. Add the missing data to fix.',
      'tc.ha.abnormal_th_room': 'Room ID',
      'tc.ha.abnormal_th_host': 'Host',
      'tc.ha.abnormal_th_start': 'Start',
      'tc.ha.abnormal_th_end': 'End',
      'tc.ha.abnormal_add_segment': 'Add host segment',
      'tc.ha.abnormal_save': 'Save',
      'tc.ha.back_to_past_lives': 'Back to Live Sessions',
      'tc.ha.abnormal_type1': 'No live broadcast detected',
      'tc.ha.abnormal_type2': 'Host hasn\'t checked in',
      'tc.ha.abnormal_th_reason': 'Issue',
      'tc.ha.abnormal_th_flow': 'How to fix',
      'tc.ha.abnormal_flow_type1': 'Add Room ID and actual start/end times',
      'tc.ha.abnormal_flow_type2': 'Add host actual start/end times. You can add multiple hosts.',
      'tc.ha.request_id': 'Request ID',
      'tc.ha.amount': 'Amount',
      'tc.ha.created_at': 'Created at',
      'tc.ha.stat_batches': 'Batches'
    },
    zh: {
      // nav
      'nav.dashboard': '仪表盘', 'nav.live_calendar': '直播日历', 'nav.live_console': '直播控制台',
      'nav.live_settings': '直播设置', 'nav.live_products': '直播商品', 'nav.merchant': '商家中心',
      'nav.find_creators': '找达人', 'nav.outreach': '达人触达', 'nav.creator_crm': '达人管理',
      'nav.analytics': '数据分析', 'nav.tenant_center': '租户中心', 'nav.profile': '个人资料', 'nav.account': '账户设置',
      // common
      'common.all': '全部', 'common.cancel': '取消', 'common.edit': '编辑', 'common.retry': '重试', 'common.save': '保存',
      'common.search': '搜索', 'common.reset': '重置', 'common.results': '条结果',
      'common.name': '名称', 'common.subject': '主题', 'common.creator': '创建人',
      'common.updated': '更新时间', 'common.actions': '操作', 'common.status': '状态',
      'common.yes': '是', 'common.no': '否', 'common.any': '不限', 'common.min': '最小', 'common.max': '最大',
      // crm
      'crm.title': '达人管理',
      'crm.desc': '管理合作达人与线索：状态、标签、触达记录。',
      'crm.btn.add': '添加达人', 'crm.filter.mine': '我的达人',
      'crm.filter.all_status': '全部状态', 'crm.filter.partner': '合作中',
      'crm.filter.lead': '未合作',
      'crm.filter.coop': '是否合作',
      'crm.status.partner': '合作中',
      'crm.status.lead': '未合作',
      'crm.action.delete': '删除',
      'crm.delete_confirm': '确定删除该达人？此操作不可恢复。',
      'crm.deleted': '已移除', 'crm.filter.all_sources': '全部来源',
      'crm.filter.has_email': '有邮箱', 'crm.filter.no_email': '无邮箱',
      'crm.filter.email_any': '邮箱：不限', 'crm.filter.data_all': '数据：全部',
      'crm.filter.btn': '筛选', 'crm.filter.clear': '清除全部',
      'crm.filter.status': '状态', 'crm.filter.source': '来源', 'crm.filter.email': '邮箱', 'crm.filter.data': '数据', 'crm.filter.tag': '标签',
      'crm.search': '搜索名称、handle 或邮箱...',
      'crm.empty.filter': '没有符合筛选条件的达人。',
      'crm.empty.none': '暂无达人数据。添加或发现达人开始使用。',
      'crm.stat.total': '总数', 'crm.stat.partners': '合作中', 'crm.stat.enriched': '已完善',
      'crm.stat.enriching': '完善中', 'crm.stat.failed': '失败', 'crm.stat.success': '已完善',
      'crm.progress': '正在完善达人数据...', 'crm.progress.completed': '已完成',
      'crm.th.creator': '达人', 'crm.th.followers': '粉丝数', 'crm.th.category': '分类',
      'crm.th.video_live': '直播/视频', 'crm.th.gmv_30d': '最新30天GMV', 'crm.th.contact': '邮箱',
      'crm.th.tags': '标签', 'crm.th.source': '来源',
      'crm.th.owner': '负责人', 'crm.th.data': '数据状态', 'crm.th.last_outreach': '最后触达',
      'crm.outreach_times': '{0} 次',
      'crm.no_email': '无邮箱', 'crm.email_edit': '编辑', 'crm.email_save': '保存', 'crm.enriching': '完善中', 'crm.queued': '排队中',
      'crm.batch.selected': '个达人已选中', 'crm.batch.outreach': '创建触达任务',
      'crm.batch.tags': '管理标签', 'crm.batch.delete': '删除',
      'crm.batch.delete_confirm': '确定删除选中的 {0} 个达人？此操作不可恢复。',
      'crm.tags.title': '标签管理', 'crm.tags.add_new': '添加新标签', 'crm.tags.ph': '输入标签名...',
      'crm.tags.used_by': '个达人', 'crm.tags.delete_confirm': '确定删除标签并从所有达人中移除？',
      'crm.tags.apply': '应用', 'crm.tags.add_to': '添加标签', 'crm.tags.remove_from': '移除标签',
      'crm.tags.toast_applied': '已为 {0} 个达人更新标签', 'crm.tags.search': '搜索标签...',
      'crm.tags.no_tags': '暂无标签', 'crm.tags.all_added': '已添加全部标签', 'crm.tags.existing': '已选达人当前标签',
      'crm.ot.title': '创建触达任务', 'crm.ot.task_name': '任务名称',
      'crm.ot.send_from': '发送邮箱', 'crm.ot.reply_to': '回复邮箱',
      'crm.ot.select_sender': '选择发送账户', 'crm.ot.select_reply': '选择回复账户',
      'crm.ot.template': '邮件模板', 'crm.ot.select_tpl': '选择模板',
      'crm.ot.create': '创建任务', 'crm.ot.with_email': '有邮箱（将收到邮件）',
      'crm.ot.no_email': '无邮箱（将被跳过）',
      'crm.add.title': '添加达人',
      'crm.add.desc': '上传 TikTok handle 列表，系统将自动抓取并完善达人信息（粉丝数、类目、邮箱等）。',
      'crm.add.drop': '拖拽文件到此处，或点击浏览',
      'crm.add.formats': '支持 .csv 和 .xlsx 格式',
      'crm.add.format_title': '文件格式',
      'crm.add.format_desc': '仅需一列，每行填写一个 TikTok handle（如 <code>@glowwithholly</code>）。',
      'crm.add.download': '下载模板',
      'crm.add.enrich_title': '自动补全',
      'crm.add.enrich_desc': '导入后，系统将自动爬取 TikTok 补全数据：粉丝数、类目、简介、邮箱、视频指标、互动率等。通常需要几分钟，取决于达人数量。',
      'crm.add.import': '导入并补全',
      // discover
      'discover.title': '找达人',
      'discover.desc': '发现并筛选适合联盟合作的 TikTok 达人',
      'discover.ai': 'AI 搜索', 'discover.filter': '手动筛选',
      'discover.ai.placeholder': '例如：粉丝数 10 万到 50 万的美妆达人，经常发护肤内容',
      'discover.ai.hint': '用自然语言描述你需要的达人，AI 会匹配并推荐相关的 TikTok 达人。',
      'discover.ai.conversation': '对话',
      'discover.ai.welcome': '告诉我你要找什么样的达人，我会为你匹配最佳结果。',
      'discover.ai.indev_badge': '内测中',
      'discover.ai.indev_title': 'AI 搜索正在打磨中',
      'discover.ai.indev_desc': '当前为引导式 Demo，后续会接入实时达人匹配与历史记录。',
      'discover.results': '结果', 'discover.add_leads': '添加所选到线索',
      'discover.found': '个达人', 'discover.test_data': '测试数据',
      'discover.added': '已添加', 'discover.add_single': '添加到线索',
      'discover.toast.success': '已添加 {0} 个达人到 CRM',
      'discover.toast.partial': '已添加 {0} 个，跳过 {1} 个（已存在）',
      'discover.toast.duplicate': '所选达人已全部存在于 CRM',
      'discover.toast.no_selection': '请先选择至少一个达人',
      'discover.filter.by': '筛选维度',
      'discover.filter.dim_creators': '达人', 'discover.filter.dim_followers': '粉丝', 'discover.filter.dim_performance': '表现',
      'discover.filter.product_category': '产品类目', 'discover.filter.avg_commission': '平均佣金率',
      'discover.filter.content_type': '内容类型', 'discover.filter.creator_agency': '达人机构',
      'discover.filter.category_pro': '类目专业', 'discover.filter.fast_growing': '快速成长', 'discover.filter.live_creators': '直播达人',
      'discover.filter.follower_age': '粉丝年龄', 'discover.filter.follower_count': '粉丝数', 'discover.filter.follower_gender': '粉丝性别',
      'discover.filter.items_sold': '销量', 'discover.filter.avg_views_video': '视频平均播放',
      'discover.filter.avg_viewers_live': '直播平均观看', 'discover.filter.engagement_rate': '互动率',
      'discover.filter.brand_collabs': '品牌合作', 'discover.filter.brand_search_ph': '搜索品牌...',
      'discover.filter.brand_no_match': '无匹配品牌',
      'discover.filter.basic': '基本信息', 'discover.filter.audience': '受众与表现',
      'discover.filter.video': '视频数据', 'discover.filter.live': '直播数据',
      'discover.filter.outreach': '触达状态',
      'discover.filter.category': '类目', 'discover.filter.all_cat': '全部类目',
      'discover.filter.country': '国家', 'discover.filter.all_country': '全部国家',
      'discover.filter.region': '选品区域', 'discover.filter.all_regions': '全部区域',
      'discover.filter.has_email': '有邮箱',
      'discover.filter.followers': '粉丝数', 'discover.filter.gender': '粉丝主要性别',
      'discover.filter.sold': '销售量', 'discover.filter.gmv': 'GMV 中位数',
      'discover.filter.vid_views': '视频平均播放', 'discover.filter.vid_eng': '视频互动率',
      'discover.filter.vid_pub': '30 天发布视频数', 'discover.filter.ec_vid_eng': '电商视频互动率',
      'discover.filter.live_cnt': '30 天直播次数', 'discover.filter.live_views': '直播中位播放',
      'discover.filter.live_eng': '直播互动率', 'discover.filter.gpm': 'GPM',
      'discover.filter.reached': '已触达', 'discover.filter.success': '成功触达',
      'discover.filter.never': '从未',
      'discover.filter.reset': '重置', 'discover.filter.search': '搜索达人',
      'discover.filter.more': '更多筛选', 'discover.filter.less': '收起',
      // outreach
      'outreach.title': '达人触达',
      'outreach.tab.tasks': '任务', 'outreach.tab.templates': '模板', 'outreach.tab.accounts': '邮箱账户',
      'outreach.tasks.title': '触达任务',
      'outreach.tasks.desc': '批量发送邮件并跟踪投递、打开、点击和回复率。',
      'outreach.tasks.new': '新建触达任务', 'outreach.tasks.empty': '暂无触达任务。',
      'outreach.tasks.created': '创建于', 'outreach.tasks.recipients': '个收件人',
      'outreach.tasks.delivered': '已投递', 'outreach.tasks.opened': '已打开',
      'outreach.tasks.clicked': '已点击', 'outreach.tasks.replied': '已回复',
      'outreach.tasks.scheduled': '待执行', 'outreach.tasks.sending': '发送中',
      'outreach.tasks.completed': '已完成', 'outreach.tasks.failed': '失败',
      'outreach.modal.title': '新建触达任务', 'outreach.modal.name': '任务名称',
      'outreach.modal.name_ph': '例如：3 月美妆达人推广',
      'outreach.modal.send_from': '发送邮箱', 'outreach.modal.reply_to': '回复邮箱',
      'outreach.modal.select_sender': '选择发送账户', 'outreach.modal.select_reply': '选择回复账户',
      'outreach.modal.template': '邮件模板', 'outreach.modal.select_tpl': '选择模板',
      'outreach.modal.audience': '受众',
      'outreach.modal.by_tags': '按达人标签', 'outreach.modal.upload': '上传表格',
      'outreach.modal.tag_ph': '搜索并选择标签...',
      'outreach.modal.drop': '拖拽 .csv 或 .xlsx 文件到此处，或点击浏览',
      'outreach.modal.file_hint': '文件需包含列：email（必填）、name（选填）',
      'outreach.modal.create': '创建任务',
      'outreach.tpl.title': '邮件模板',
      'outreach.tpl.desc': '创建可复用的邮件模板，支持变量如 {{name}}、{{brand}}。',
      'outreach.tpl.new': '创建模板', 'outreach.tpl.mine': '我的模板',
      'outreach.tpl.search': '搜索名称或主题...',
      'outreach.tpl.empty.filter': '没有符合条件的模板。',
      'outreach.tpl.empty.none': '暂无模板，创建一个开始使用。',
      'outreach.acct.title': '邮箱账户',
      'outreach.acct.desc': '配置发送和接收邮件的邮箱账户。',
      'outreach.acct.add': '添加账户', 'outreach.acct.sending': '发送', 'outreach.acct.receiving': '接收',
      'outreach.acct.no_send': '暂未配置发送账户。', 'outreach.acct.no_recv': '暂未配置接收账户。',
      'outreach.acct.modal_title': '添加邮箱账户', 'outreach.acct.type': '账户类型',
      'outreach.acct.email': '邮箱地址', 'outreach.acct.email_ph': '例如：outreach@yourcompany.com',
      'outreach.acct.app_pw': '应用专用密码', 'outreach.acct.app_pw_hint': '（第三方客户端安全密码）',
      'outreach.acct.app_pw_ph': '粘贴您的应用专用密码',
      'outreach.acct.pw_note': '这<strong>不是</strong>您的常规邮箱登录密码。您需要从邮箱服务商生成专用的应用密码：',
      'outreach.acct.pw_gmail': '<strong>Gmail</strong>：Google 账户 &rarr; 安全性 &rarr; 两步验证 &rarr; 应用专用密码',
      'outreach.acct.pw_outlook': '<strong>Outlook</strong>：Microsoft 账户 &rarr; 安全性 &rarr; 应用密码',
      'outreach.acct.pw_qq': '<strong>QQ / 163</strong>：设置 &rarr; 账户安全 &rarr; 生成授权码',
      'outreach.acct.pw_note2': '此密码仅用于安全的第三方客户端访问。',
      'outreach.acct.connect': '连接',
      'outreach.acct.remove_confirm_title': '删除邮箱账户',
      'outreach.acct.remove_confirm_msg': '确定要移除此账户吗？之后可再次添加。',
      'outreach.acct.remove_confirm_btn': '删除', 'outreach.acct.removed': '已移除。',
      'common.hint': '提示',
      'outreach.acct.badge_verified': '已验证',
      'outreach.acct.badge_pending': '未验证',
      'outreach.acct.badge_connected': '已连接',
      'outreach.acct.meta_verified': '可用于创建发送任务',
      'outreach.acct.meta_pending': '请到自己的邮箱完成确认后再使用',
      'outreach.acct.pending_suffix': '（待验证）',
      'outreach.acct.verify_popup_title': '发送邮箱待验证',
      'outreach.acct.verify_popup_desc': '请尽快去你刚添加的邮箱完成验证确认。验证完成并生效后，该发送邮箱才会可用于创建发送任务。',
      'outreach.acct.verify_popup_ok': '我知道了',
      'outreach.acct.toast_sending_pending': '已添加发送邮箱：待验证（请到自己的邮箱完成确认后使用）',
      'outreach.modal.hint_select_sender': '请先选择发送邮箱（Sending）。',
      'outreach.modal.hint_sender_verified': '该发送邮箱已验证，可用于创建任务。',
      'outreach.modal.hint_sender_pending': '该发送邮箱未验证，请到自己的邮箱完成确认后再创建任务。',
      'outreach.modal.hint_sender_unusable': '该发送邮箱不可用于创建任务。',
      'outreach.modal.alert_select_verified_sender': '请选择已验证的发送邮箱后再创建任务。',
      // dashboard
      'dashboard.title': '仪表盘',
      'dashboard.desc': '直播服务首页。在顶部切换到 Affiliate 板块管理达人。',
      // analytics
      'analytics.title': '数据分析', 'analytics.coming': '即将上线，敬请期待。',
      'tc.plan_benefits': '套餐与权益', 'tc.plan_usage': '套餐与用量', 'tc.billing_usage': '账单与使用', 'tc.billing_invoices': '账单',
      'tc.affiliate_plan': 'Affiliate 套餐', 'tc.live_plan': 'Live 套餐', 'tc.current_plan': '当前套餐', 'tc.orders': '订单', 'tc.invoices': '发票',
      'tc.tenant': '租户', 'tc.profile': '个人资料', 'tc.live_account': '直播账号', 'tc.tenant_tts': 'TAP Seller', 'tc.tenant_host': '租户主持', 'tc.admin': '管理', 'tc.account_settings': '账户设置',
      'tc.cancel_subscription': '取消订阅', 'tc.benefits_store': '权益商店',
      'tc.benefits_store_desc_live': '直播业务套餐',
      'tc.benefits_store_desc_affiliate': '联盟达人业务套餐', 'tc.benefits_usage': '权益与使用', 'tc.available_days': '可用天数',
      'tc.show_more': '显示更多', 'tc.liveq_basic': 'LiveQ Basic', 'tc.liveq_pro': 'LiveQ PRO', 'tc.additional_seats': '附加席位 - 60 天', 'tc.pending': '待生效',
      'tc.days_remaining': '天剩余', 'tc.current_billing_period': '当前账单周期', 'tc.plan_effect_date': '您的套餐将于 2026年3月1日 生效。',
      'tc.set_remaining': '套剩余 / 共', 'tc.chatbot_assistant': 'ChatBot 助手', 'tc.comprehensive_schedule': '直播排期综合管理',
      'tc.total_days': '共', 'tc.per_6_months': '/ 6 个月', 'tc.per_day': '/ 天', 'tc.price_49': '$49.00', 'tc.price_1999': '$19.99',
      'tc.affiliate_benefit_creators': '达人管理席位', 'tc.affiliate_benefit_find': '找达人', 'tc.affiliate_benefit_outreach': '触达任务',
      'tc.live_benefit_sets': '直播账号套数', 'tc.live_benefit_hours': '直播时长', 'tc.live_benefit_schedule': '排期与移动端',
      'tc.orders_invoices_placeholder': '订单与发票将在此展示。',
      'tc.tenant_placeholder': '租户资料与账号设置。',
      'tc.admin_placeholder': '账户与安全设置。',
      'tc.tts.title': 'TikTok Shop 授权',
      'tc.tts.desc': '通过 TikTok 授权连接您的店铺。在 TikTok 完成授权后，已授权店铺将显示在下方。',
      'tc.tts.auth_btn': '授权 TikTok Shop',
      'tc.tts.shop_id': 'Shop ID',
      'tc.tts.marketplace': 'Marketplace',
      'tc.tts.auth_status': '授权状态',
      'tc.tts.auth_active': '有效',
      'tc.tts.auth_revoked': '已撤销',
      'tc.tts.last_update': '最近更新',
      'tc.tts.renew': '续期',
      'tc.tts.remove': '移除',
      'tc.tts.remove_confirm': '确定要断开此 TikTok Shop 吗？该市场的 Find Creators 功能将不可用。',
      'tc.tts.empty_title': '暂无已连接的 TikTok Shop',
      'tc.tts.empty_desc': '连接至少一个 TikTok Shop 以使用 Find Creators 等联盟功能。',
      'tc.tts.empty_cta': '授权 TikTok Shop',
      'tc.tts.na': '—',
      'tc.tts.toast_connected': 'TikTok Shop 已连接',
      'tc.tts.toast_removed': '授权已移除',
      'tc.tts.toast_renewed': '授权已续期',
      'tc.host_affiliate': '合作主播&达人', 'tc.ha_manage': '合作主播&达人', 'tc.ha_settlement': '主播&达人结算',
      'tc.ha_manage_desc': '管理 Host 与 Affiliate 账号，并与当前租户绑定。',
      'tc.ha_settlement_desc': '将直播排期生成 Creator 结算批次，并对 Creator 提现申请进行审批。',
      'tc.ha.settle_tab_batch': '结算单',
      'tc.ha.settle_tab_withdraw': '提现',
      'tc.ha.settle_tab_past_lives': '主播直播场次',
      'tc.ha.settle_tab_abnormal': '异常场次',
      'tc.ha.settle_tab_rules': '规则',
      'tc.ha.settle_tab_other_rewards': '主播其他奖励',
      'tc.ha.settle_batch_title': '结算单',
      'tc.ha.settle_withdraw_title': '提现',
      'tc.ha.settle_batch_desc': '基于 Creator 直播排期生成结算批次，按批次汇总本次需向所有 Creator 支付的金额，并在确认后推送结算单给 Creator。',
      'tc.ha.settle_withdraw_desc': '在结算单确认并推送后，Creator 可发起提现申请。商家在此进行审核与批准。',
      'tc.ha.batch_detail': '批次明细',
      'tc.ha.back_to_batches': '返回批次列表',
      'tc.ha.batch_creators': 'Creator 明细',
      'tc.ha.th_creators': 'Creator 数',
      'tc.ha.th_creator': 'Creator',
      'tc.ha.batch_period': '结算周期',
      'tc.ha.batch_total': '批次合计',
      'tc.ha.live_room_id': 'Room ID',
      'tc.ha.live_event_name': '活动名称',
      'tc.ha.live_start_end': '开始–结束',
      'tc.ha.live_duration': '直播时长',
      'tc.ha.live_gmv': '直播GMV',
      'tc.ha.live_hourly_rate': '结算时薪',
      'tc.ha.live_settle_amount': '结算金额',
      'tc.ha.live_cps_rate': 'CPS比例',
      'tc.ha.other_rewards_count': '条目数',
      'tc.ha.withdraw_paypal': '收款账户',
      'tc.ha.withdraw_approve_all': '批量通过待审批',
      'tc.ha.withdraw_approve_selected': '通过已选',
      'tc.ha.withdraw_approve_all_confirm': '确认要批量通过当前筛选条件下的所有待审批提现吗？',
      'tc.ha.withdraw_approve_selected_confirm': '确认通过所选提现申请？',
      'tc.ha.withdraw_approve_confirm': '请确认已经完成转账后再通过该提现申请。',
      'tc.ha.withdraw_reject_confirm': '确定要驳回该提现申请吗？驳回后，主播/达人侧可重新发起申请。',
      'tc.ha.withdraw_confirm_modal_title': '二次确认',
      'tc.ha.withdraw_approve_all_done': '已批量通过所有待审批提现。',
      'tc.ha.withdraw_approve_selected_done': '已通过所选提现申请。',
      'tc.ha.preview': '预览',
      'tc.ha.view': '查看',
      'tc.ha.confirm_push': '确认并推送',
      'tc.ha.confirm_push_confirm': '确定要将此结算单发送给主播吗？将通知主播且无法撤销。',
      'tc.ha.push_to_hosts': '推送给 Creator',
      'tc.ha.generate_batch': '生成批次',
      'tc.ha.generate_modal_title': '生成结算批次',
      'tc.ha.generate_modal_period': '结算周期',
      'tc.ha.generate_modal_include': '勾选「其他奖励」时，将自动带入「主播其他奖励」Tab 中预录入的奖励。也可在批次生成后于结算单详情页手动添加。',
      'tc.ha.generate_modal_settle_types': '结算类型',
      'tc.ha.generate_modal_include_hourly': '时薪',
      'tc.ha.generate_modal_include_commission': 'CPS',
      'tc.ha.generate_modal_include_other_rewards': '其他奖励',
      'tc.ha.generate_modal_types_required': '请至少选择一项。',
      'tc.ha.generate_date_invalid': '开始日期不能晚于结束日期。',
      'tc.ha.generate_modal_country_scope': '国家范围',
      'tc.ha.generate_modal_country_all': '全部国家',
      'tc.ha.generate_modal_country_specific': '指定国家',
      'tc.ha.bonus_other': '其他奖励',
      'tc.ha.stat_draft': '草稿',
      'tc.ha.stat_confirmed': '已确认',
      'tc.ha.stat_pending': '待审',
      'tc.ha.stat_approved': '已通过',
      'tc.ha.stat_rejected': '已驳回',
      'tc.ha.withdraw_empty': '暂无提现申请。',
      'tc.ha.batch_empty': '暂无结算批次。生成批次开始使用。',
      'tc.ha.stat_total': '合计',
      'tc.ha.filter_period': '结算周期',
      'tc.ha.select_all': '全选',
      'tc.ha.approve': '通过',
      'tc.ha.reject': '驳回',
      'tc.ha.export_pending': '导出待提现明细',
      'tc.ha.export_selected': '导出已选',
      'tc.ha.invite_host': '邀请主播', 'tc.ha.invite_affiliate': '邀请达人', 'tc.ha.all': '全部', 'tc.ha.host': '主播', 'tc.ha.affiliate': '达人',
      'tc.ha.search_name': '姓名', 'tc.ha.search_contact': '邮箱 / 手机', 'tc.ha.search': '搜索',
      'tc.ha.empty_all': '暂无用户', 'tc.ha.empty_all_desc': '邀请主播或达人开始使用。',
      'tc.ha.empty_host': '暂无主播', 'tc.ha.empty_host_desc': '主播为排期创作者。您为其分配直播活动，主播按活动开播。无需授权直播账号。',
      'tc.ha.empty_affiliate': '暂无达人', 'tc.ha.empty_affiliate_desc': '达人可使用快速开播。需在 APP 中授权直播账号（如 TikTok）方可开播。',
      'tc.ha.invite_hint': '收件人可使用手机或邮箱注册。',
      'tc.ha.invite_host_title': '邀请主播', 'tc.ha.invite_affiliate_title': '邀请达人',
      'tc.ha.host_method': '排期主播：商家设置排期并推送给主播；主播按排期开播。',
      'tc.ha.affiliate_method': '达人：在 APP 中自行授权直播账号，一键开播，无需商家排期。',
      'tc.ha.invite_note_host': '请确保主播仅通过此邀请链接注册，以便正确绑定到您的租户。',
      'tc.ha.invite_note_affiliate': '请确保达人仅通过此邀请链接注册，以便正确绑定到您的租户。',
      'tc.ha.copy_link': '复制链接', 'tc.ha.copied': '已复制', 'tc.ha.note': '注意',
      'tc.ha.account_info': '账号信息', 'tc.ha.active': '启用', 'tc.ha.inactive': '停用',
      'tc.ha.host_card_desc': '排期主播。商家分配直播活动。无需授权直播账号。按活动开播。',
      'tc.ha.affiliate_card_desc': '可使用快速开播。需授权直播账号。灵活开播。',
      'tc.ha.rules_title': '规则',
      'tc.ha.rules_desc': '配置 Creator 结算计算规则，用于生成结算批次时自动计算时薪和 CPS。',
      'tc.ha.rules_merchant': '商家级默认',
      'tc.ha.rules_priority': '结算优先级',
      'tc.ha.rules_priority_hint': 'Creator > Live Account',
      'tc.ha.rules_dimension_merchant': '商家默认',
      'tc.ha.rules_country_filter': '国家',
      'tc.ha.rules_dimension_live_account': 'Live Account',
      'tc.ha.rules_dimension_creator': 'Creator',
      'tc.ha.rules_live_account_special': '已设置 Live Account 特殊结算',
      'tc.ha.rules_live_account_special_hint': '仅展示设置了特殊结算的 Live Account，需要时再添加。',
      'tc.ha.rules_live_account_add': '添加 Live Account',
      'tc.ha.rules_live_account_remove': '移除',
      'tc.ha.rules_live_account_empty': '暂无 Live Account 特殊结算。',
      'tc.ha.rules_live_account_empty_hint': '添加 Live Account 以设置结算规则。',
      'tc.ha.rules_live_account_select_first': '请先选择要添加的 Live Account。',
      'tc.ha.rules_live_account_select': '请选择直播账号',
      'tc.ha.rules_hourly': '主播时薪',
      'tc.ha.rules_hourly_ph': '每小时',
      'tc.ha.rules_hourly_hint': '时薪 × 直播时长（小时）',
      'tc.ha.rules_hourly_by_period': '按时段设置时薪',
      'tc.ha.rules_hourly_period_hint': '可设置多个时段；相同时段多条时薪按最新创建的一条生效。',
      'tc.ha.rules_hourly_year': '年',
      'tc.ha.rules_hourly_year_all': '不限',
      'tc.ha.rules_hourly_start': '开始',
      'tc.ha.rules_hourly_end': '结束',
      'tc.ha.rules_hourly_add': '新增时段',
      'tc.ha.rules_hourly_periods': '时段',
      'tc.ha.rules_creator_special': '已设置主播特殊结算',
      'tc.ha.rules_creator_special_hint': '仅展示设置了特殊结算的主播，需要时再添加。',
      'tc.ha.rules_creator_add': '添加主播',
      'tc.ha.rules_creator_add_search_ph': '按名称搜索...',
      'tc.ha.rules_creator_add_filter_all': '全部',
      'tc.ha.rules_creator_add_no_match': '暂无匹配的主播。',
      'tc.ha.rules_creator_remove': '移除',
      'tc.ha.rules_creator_remove_confirm': '确定要移除此主播的特殊结算规则吗？将回退至 Live Account 规则。',
      'tc.ha.rules_live_account_remove_confirm': '确定要移除此 Live Account 的特殊结算规则吗？其下的主播将使用其他 Live Account 规则。',
      'tc.ha.rules_live_account_column': 'Live Account',
      'tc.ha.rules_creator_empty': '暂无主播特殊结算。',
      'tc.ha.rules_creator_empty_hint': '添加主播以覆盖 Live Account 规则。',
      'tc.ha.rules_creator_select_first': '请先选择要添加的主播。',
      'tc.ha.rules_creator_multi_hint': '搜索并添加多个主播标签',
      'tc.ha.rules_cps': 'CPS 阶梯',
      'tc.ha.rules_cps_mode_per_hour': '按每小时 GMV',
      'tc.ha.rules_cps_mode_per_session': '按每场总 GMV',
      'tc.ha.rules_cps_hint': '按每小时 Direct GMV 时效匹配阶梯，确定本场 CPS 比例。',
      'tc.ha.rules_cps_hint_per_session': '按每场直播总 Direct GMV 匹配阶梯，确定本场 CPS 比例。',
      'tc.ha.rules_cps_min': '下限金额 /时',
      'tc.ha.rules_cps_max': '上限金额 /时',
      'tc.ha.rules_cps_min_session': '下限金额',
      'tc.ha.rules_cps_max_session': '上限金额',
      'tc.ha.rules_cps_summary_session': '(场)',
      'tc.ha.rules_cps_max_unlimited': '不限',
      'tc.ha.rules_cps_rate': 'CPS %',
      'tc.ha.rules_cps_effective_period': '生效时段',
      'tc.ha.rules_cps_effective_start': '开始',
      'tc.ha.rules_cps_effective_end': '结束',
      'tc.ha.rules_cps_effective_hint': '下方所有阶梯共用此时段，留空表示始终生效。',
      'tc.ha.rules_v2_title': '规则',
      'tc.ha.rules_v2_desc': '按国家与生效期创建规则记录。记录不可删除；需替换时创建相同生效期的新记录。',
      'tc.ha.rules_v2_create_new': '新建',
      'tc.ha.rules_effective_period': '规则生效期',
      'tc.ha.rules_v2_hourly_effective': '时薪生效期',
      'tc.ha.rules_v2_cps_effective': 'CPS 生效期',
      'tc.ha.rules_section_hourly': '时薪阶梯',
      'tc.ha.rules_section_cps': 'CPS 阶梯',
      'tc.ha.rules_v2_subject': '主体',
      'tc.ha.rules_v2_meta': '创建',
      'tc.ha.rules_v2_hourly_summary': '时薪',
      'tc.ha.rules_v2_cps_summary': 'CPS',
      'tc.ha.rules_v2_created_by': '创建人',
      'tc.ha.rules_v2_created_at': '创建时间',
      'tc.ha.rules_v2_empty_title': '暂无规则',
      'tc.ha.rules_v2_empty': '在上方创建规则，为直播账号或 Creator 配置时薪与 CPS 阶梯。',
      'tc.ha.rules_v2_create': '创建',
      'tc.ha.rules_v2_dimension': '维度',
      'tc.ha.rules_v2_tab_merchant': '商家默认',
      'tc.ha.rules_v2_tab_live_account': '直播账号',
      'tc.ha.rules_v2_tab_creator': 'Creator',
      'tc.ha.rules_v2_history': '设置历史',
      'tc.ha.rules_v2_status': '生效状态',
      'tc.ha.rules_cps_add': '新增阶梯',
      'tc.ha.rules_bonus': '每场固定奖励',
      'tc.ha.rules_bonus_hint': '按发生日期录入。同一天多条奖励累加。支持多币种。',
      'tc.ha.rules_bonus_date': '发生日期',
      'tc.ha.rules_bonus_default': '默认',
      'tc.ha.rules_bonus_title': '名称',
      'tc.ha.rules_bonus_amount': '金额',
      'tc.ha.rules_bonus_currency': '币种',
      'tc.ha.rules_bonus_add': '新增奖励',
      'tc.ha.rules_creator': 'Creator 级覆盖',
      'tc.ha.rules_creator_hint': '为指定 Creator 覆盖 Live Account 规则。',
      'tc.ha.rules_creator_name': 'Creator',
      'tc.ha.rules_summary': '摘要',
      'tc.ha.rules_creator_hourly': '时薪',
      'tc.ha.rules_creator_cps': 'CPS 阶梯',
      'tc.ha.rules_creator_bonus': '奖励',
      'tc.ha.rules_creator_edit': '编辑',
      'tc.ha.rules_set_btn': '设置规则',
      'tc.ha.rules_creator_use_default': '使用默认',
      'tc.ha.rules_save': '保存规则',
      'tc.ha.rules_saved': '规则已保存',
      'tc.ha.rules_preview': '计算预览',
      'tc.ha.rules_preview_hint': '示例：2.5h 直播、GMV $6,000 → 时效 $2,400/h → 5% → CPS $300',
      'tc.ha.batch_generated': '批次已生成',
      'tc.ha.custom_entries': '自定义结算数据',
      'tc.ha.custom_entries_hint': '针对本结算单添加自定义数据，随批次批量推送给主播。',
      'tc.ha.custom_entry_add': '添加自定义数据',
      'tc.ha.bonus_entry_add': '添加其他奖励',
      'tc.ha.bonus_entry_title': '奖励名称',
      'tc.ha.bonus_empty': '暂无其他奖励，点击下方按钮添加。',
      'tc.ha.other_rewards_title': '主播其他奖励（预录入）',
      'tc.ha.other_rewards_hint': '在此预录入奖励，生成结算时将自动带入匹配周期和主播的结算单。',
      'tc.ha.other_rewards_period': '结算周期',
      'tc.ha.other_rewards_period_hint': '开始–结束日期。该奖励将带入该周期生成的结算单。',
      'tc.ha.other_rewards_add': '添加奖励',
      'tc.ha.other_rewards_empty': '暂无预录入奖励。',
      'tc.ha.other_rewards_saved': '已保存',
      'tc.ha.other_rewards_cannot_delete': '已生成结算单，不可删除',
      'tc.ha.other_rewards_period_filter': '时间段筛选',
      'tc.ha.other_rewards_export_excel': '导出 Excel',
      'tc.ha.other_rewards_created_by': '创建人',
      'tc.ha.other_rewards_settlement_status': '结算状态',
      'tc.ha.custom_entry_creator': 'Creator',
      'tc.ha.custom_entry_title': '名称',
      'tc.ha.custom_entry_amount': '金额',
      'tc.ha.custom_entry_currency': '币种',
      'tc.ha.rules_currency': '结算币种',
      'tc.ha.currency': '币种',
      'tc.ha.rules_currency_hint': '每个直播账号仅一种币种，主播继承其直播账号的币种。',
      'tc.ha.live_account': '国家',
      'tc.ha.batch_by_live_account': '按国家',
      'tc.ha.rules_currency_default': '使用默认',
      'tc.ha.filter_live_account': '国家',
      'tc.ha.filter_live_account_all': '全部国家',
      'tc.ha.filter_live_account_hint': '不同国家对应独立统计与结算单。',
      'tc.ha.batch_id': '批次ID',
      'tc.ha.sn': 'Statement #',
      'tc.ha.th_lives': '直播场次',
      'tc.ha.th_hourly_total': '时薪合计',
      'tc.ha.th_commission_total': 'CPS合计',
      'tc.ha.batch_created_by': '创建人',
      'tc.ha.batch_created_at': '创建时间',
      'tc.ha.batch_confirmed_by': '确认人',
      'tc.ha.batch_confirmed_at': '确认时间',
      'tc.ha.batch_empty_filtered': '当前筛选下暂无批次。',
      'tc.ha.pager_total': '共 {n} 条',
      'tc.ha.past_lives_title': '主播直播场次',
      'tc.ha.past_lives_desc': '查看所有主播直播场次。可修正 GMV、处理异常场次。',
      'tc.ha.past_lives_filter_host': '主播名称/ID',
      'tc.ha.past_lives_filter_room': 'Room ID',
      'tc.ha.past_lives_filter_la': '直播账号',
      'tc.ha.past_lives_filter_date': '直播日期范围',
      'tc.ha.past_lives_filter_settled': '结算状态',
      'tc.ha.past_lives_th_schedule_id': '排期ID',
      'tc.ha.past_lives_th_room_id': 'Room ID',
      'tc.ha.past_lives_th_event': '排期主题',
      'tc.ha.past_lives_th_host': '主播',
      'tc.ha.past_lives_th_planned': '计划上播–下播',
      'tc.ha.past_lives_th_actual': '实际上播–下播',
      'tc.ha.past_lives_th_duration': '时长(H)',
      'tc.ha.past_lives_th_gmv': 'Direct GMV',
      'tc.ha.past_lives_th_settled': '结算',
      'tc.ha.past_lives_th_batch_sn': '批次单号',
      'tc.ha.past_lives_export': '导出',
      'tc.ha.past_lives_fix_abnormal': '处理异常',
      'tc.ha.past_lives_empty': '暂无符合条件的主播直播场次。',
      'tc.ha.abnormal_empty': '暂无异常场次。',
      'tc.ha.settled': '已结算',
      'tc.ha.unsettled': '未结算',
      'tc.ha.abnormal_title': '异常场次',
      'tc.ha.abnormal_desc': '缺少 Room ID 或实际上/下播时间的场次。可补充 Room ID 及主播上下播记录。',
      'tc.ha.abnormal_th_room': 'Room ID',
      'tc.ha.abnormal_th_host': '主播',
      'tc.ha.abnormal_th_start': '上播',
      'tc.ha.abnormal_th_end': '下播',
      'tc.ha.abnormal_add_segment': '添加主播段',
      'tc.ha.abnormal_save': '保存',
      'tc.ha.back_to_past_lives': '返回主播直播场次',
      'tc.ha.abnormal_type1': '未连接到直播间',
      'tc.ha.abnormal_type2': '主播未在APP上播打卡',
      'tc.ha.abnormal_th_reason': '异常原因',
      'tc.ha.abnormal_th_flow': '操作流程',
      'tc.ha.abnormal_flow_type1': '补充 Room ID、实际上播时间、实际下播时间',
      'tc.ha.abnormal_flow_type2': '补充主播实际上/下播时间，支持新增主播',
      'tc.ha.request_id': '申请ID',
      'tc.ha.amount': '金额',
      'tc.ha.created_at': '申请时间',
      'tc.ha.stat_batches': '批次数'
    }
  };

  function showToast(msg, type) {
    type = type || 'success';
    var el = document.createElement('div');
    el.className = 'wahool-toast wahool-toast--' + type;
    var icon = type === 'success' ? 'fa-check-circle' : type === 'warn' ? 'fa-exclamation-triangle' : 'fa-info-circle';
    el.innerHTML = '<i class="fas ' + icon + '"></i><span>' + msg + '</span>';
    document.body.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('wahool-toast--visible'); });
    setTimeout(function () {
      el.classList.remove('wahool-toast--visible');
      setTimeout(function () { el.remove(); }, 300);
    }, 3000);
  }

  var HOURLY_PAY_RULES_KEY = 'wahool_host_hourly_pay_rules';
  var TTS_AUTH_KEY = 'wahool_tts_auth';

  var haCountryTimeZones = {
    US: 'America/Los_Angeles',
    CN: 'Asia/Shanghai',
    DE: 'Europe/Berlin',
    GB: 'Europe/London',
    DEFAULT: 'UTC'
  };
  function haGetTimeZoneForCountry(country) {
    return haCountryTimeZones[country] || haCountryTimeZones.DEFAULT;
  }
  function haFormatDateTimeForCountry(dateTimeStr, country) {
    if (!dateTimeStr) return '';
    var tz = haGetTimeZoneForCountry(country);
    try {
      var iso = dateTimeStr.replace(' ', 'T');
      var d = new Date(iso);
      return new Intl.DateTimeFormat(getLang() === 'zh' ? 'zh-CN' : 'en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: tz
      }).format(d);
    } catch (e) {
      return dateTimeStr;
    }
  }
  function formatTtsDate(dateTimeStr, country) {
    if (!dateTimeStr) return '';
    try {
      var d = new Date(dateTimeStr.replace(' ', 'T'));
      var tz = haGetTimeZoneForCountry(country || 'US');
      return new Intl.DateTimeFormat(getLang() === 'zh' ? 'zh-CN' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: getLang() !== 'zh',
        timeZone: tz
      }).format(d);
    } catch (e) {
      return dateTimeStr;
    }
  }

  function loadTtsAuth() {
    try {
      var raw = localStorage.getItem(TTS_AUTH_KEY);
      var list = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(list)) list = [];
      return list;
    } catch (e) {
      return [];
    }
  }
  function saveTtsAuth(list) {
    try { localStorage.setItem(TTS_AUTH_KEY, JSON.stringify(list || [])); } catch (e) {}
  }
  function getActiveMarketplaces() {
    return loadTtsAuth().filter(function (a) { return a.status === 'active'; });
  }
  function getHourlyPayRules() {
    return fetch('/api/host/hourly-pay-rules').then(function (r) {
      if (r.ok) return r.json();
      throw new Error('Not found');
    }).catch(function () {
      try {
        var raw = localStorage.getItem(HOURLY_PAY_RULES_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return { mode: 'session', ladder: [{ min_gmv: 0, max_gmv: 300, hourly_rate: 50 }, { min_gmv: 300, max_gmv: 1500, hourly_rate: 75 }, { min_gmv: 1500, max_gmv: null, hourly_rate: 100 }] };
    });
  }
  function saveHourlyPayRules(data) {
    return fetch('/api/host/hourly-pay-rules', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(function (r) {
      if (r.ok) return r.json();
      throw new Error('Save failed');
    }).catch(function () {
      try { localStorage.setItem(HOURLY_PAY_RULES_KEY, JSON.stringify(data)); } catch (e) {}
      return data;
    });
  }

  const ROLE_KEY = 'wahool_role';
  const ROUTES = {
    'affiliate/creators': 'creators',
    'affiliate/discover': 'discover',
    'affiliate/outreach': 'outreach',
    'affiliate/analytics': 'analytics',
    'affiliate/settlement': 'settlement',
    'benefits-store': 'benefits-store',
    'hosts/hourly-pay-rules': 'hourly-pay-rules'
  };

  function getRole() { return localStorage.getItem(ROLE_KEY) || 'live'; }
  function setRole(role) { localStorage.setItem(ROLE_KEY, role); applyRoleUI(); }
  function applyRoleUI() {
    var role = getRole();
    var navLive = document.getElementById('navLive');
    var navHosts = document.getElementById('navHosts');
    var navAffiliate = document.getElementById('navAffiliate');
    var sectionLive = document.getElementById('sectionLive');
    if (navLive) { navLive.classList.toggle('hidden', role === 'affiliate'); }
    if (navHosts) { navHosts.classList.toggle('hidden', role === 'affiliate'); }
    if (navAffiliate) { navAffiliate.classList.toggle('visible', role === 'affiliate'); }
    if (sectionLive) { sectionLive.classList.toggle('hidden', role === 'affiliate'); }
    var switcher = document.getElementById('roleSwitcher');
    if (switcher) switcher.classList.toggle('role--affiliate', role === 'affiliate');
    document.querySelectorAll('.role-switcher-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-role') === role);
    });
  }

  // ---------- Mock data ----------
  let creators = [
    { id: '1', source: 'Find Creators', owner: 'u1', enrichStatus: 'enriched', tiktokId: '@stylewithholly', name: 'stylewithholly', fans: '125k', category: 'Beauty', videoCount: 48, liveCount: 3, gmv30d: 12500, email: 'holly@example.com', isPartner: true, stage: 'Partner', tags: ['Beauty', 'KOL'], lastReach: '2024-02-20', reachCount: 3, samples: [{ sku: 'LIP-001', sentAt: '2024-02-01', status: 'Shipped' }] },
    { id: '2', source: 'Import', owner: 'u2', enrichStatus: 'enriched', tiktokId: '@zee_fashion', name: 'zee_the_fashionqueen', fans: '89k', category: 'Fashion', videoCount: 32, liveCount: 0, gmv30d: 0, email: 'zee@example.com', isPartner: false, stage: 'Lead', tags: ['Fashion'], lastReach: '2024-02-18', reachCount: 1, samples: [] },
    { id: '3', source: 'Find Creators', owner: 'u1', enrichStatus: 'enriched', tiktokId: '@sevenisa_trend', name: 'sevenisa_trend', fans: '210k', category: 'Fashion', videoCount: 65, liveCount: 5, gmv30d: 28900, email: 'seven@example.com', isPartner: true, stage: 'Partner', tags: ['Fashion', 'Beta'], lastReach: '2024-02-22', reachCount: 5, samples: [{ sku: 'DRESS-02', sentAt: '2024-02-10', status: 'Received' }] },
    { id: '4', source: 'Find Creators', owner: 'u3', enrichStatus: 'enriched', tiktokId: '@chloe_skincare', name: 'chloe_skincare', fans: '310k', category: 'Beauty', videoCount: 92, liveCount: 8, gmv30d: 45600, email: 'chloe@example.com', isPartner: false, stage: 'Negotiating', tags: ['Beauty'], lastReach: '2024-03-01', reachCount: 2, samples: [] },
    { id: '5', source: 'Import', owner: 'u2', enrichStatus: 'enriched', tiktokId: '@techbro_jay', name: 'techbro_jay', fans: '475k', category: 'Tech', videoCount: 120, liveCount: 12, gmv30d: 78200, email: 'jay@example.com', isPartner: true, stage: 'Partner', tags: ['Tech', 'KOL'], lastReach: '2024-02-25', reachCount: 4, samples: [{ sku: 'GADGET-05', sentAt: '2024-02-15', status: 'Received' }] },
    { id: '6', source: 'Import', owner: 'u1', enrichStatus: 'enriching', tiktokId: '@makeup_luna', name: '', fans: '', category: '', videoCount: 0, liveCount: 0, gmv30d: 0, email: '', isPartner: false, stage: 'Lead', tags: [], lastReach: '', reachCount: 0, samples: [] },
    { id: '7', source: 'Import', owner: 'u1', enrichStatus: 'enriching', tiktokId: '@fitgirl_anna', name: '', fans: '', category: '', videoCount: 0, liveCount: 0, gmv30d: 0, email: '', isPartner: false, stage: 'Lead', tags: [], lastReach: '', reachCount: 0, samples: [] },
    { id: '8', source: 'Import', owner: 'u3', enrichStatus: 'queued', tiktokId: '@homechef_mike', name: '', fans: '', category: '', videoCount: 0, liveCount: 0, gmv30d: 0, email: '', isPartner: false, stage: 'Lead', tags: [], lastReach: '', reachCount: 0, samples: [] },
    { id: '9', source: 'Import', owner: 'u1', enrichStatus: 'failed', tiktokId: '@deleted_user_99', name: '', fans: '', category: '', videoCount: 0, liveCount: 0, gmv30d: 0, email: '', isPartner: false, stage: '', tags: [], lastReach: '', reachCount: 0, samples: [] }
  ];

  var globalTags = ['Beauty', 'Fashion', 'Tech', 'KOL', 'Beta', 'New', 'VIP', 'Micro'];

  let emailAccounts = [
    { id: 'e1', type: 'sending', email: 'outreach@wahool.com', provider: 'SMTP', status: 'Verified' },
    { id: 'e2', type: 'sending', email: 'marketing@wahool.com', provider: 'SMTP', status: 'Pending' },
    { id: 'e3', type: 'receiving', email: 'reply@wahool.com', provider: 'IMAP', status: 'connected' }
  ];

  let emailTemplates = [
    { id: 'tpl1', name: 'Initial Outreach', subject: 'Collaboration Opportunity with {{brand}}', createdBy: 'u1', updatedAt: '2024-03-01' },
    { id: 'tpl2', name: 'Follow-up Reminder', subject: 'Just checking in — {{brand}}', createdBy: 'u2', updatedAt: '2024-03-04' },
    { id: 'tpl3', name: 'Free Sample Offer', subject: 'We would love to send you a free sample', createdBy: 'u1', updatedAt: '2024-02-28' },
    { id: 'tpl4', name: 'New Product Launch', subject: 'Exciting new drop from {{brand}}', createdBy: 'u3', updatedAt: '2024-03-06' },
    { id: 'tpl5', name: 'Re-engagement', subject: 'We miss you! Let us reconnect', createdBy: 'u2', updatedAt: '2024-02-25' }
  ];

  var currentUser = { id: 'u1', name: 'Alex Chen', avatar: 'AC' };
  var teamMembers = [
    { id: 'u1', name: 'Alex Chen', avatar: 'AC' },
    { id: 'u2', name: 'Sarah Liu', avatar: 'SL' },
    { id: 'u3', name: 'Mike Wang', avatar: 'MW' },
    { id: 'u4', name: 'Emma Zhang', avatar: 'EZ' }
  ];

  let outreachTasks = [
    { id: 't1', name: 'March Beauty Creators', createdAt: '2024-03-01 10:00', createdBy: 'u1', assignee: 'u2', audienceCount: 45, audienceTags: ['Beauty', 'KOL'], delivered: 0, opened: 0, clicked: 0, replied: 0, status: 'pending' },
    { id: 't2', name: 'Fashion New Arrivals', createdAt: '2024-03-03 14:00', createdBy: 'u2', assignee: 'u2', audienceCount: 30, audienceTags: ['Fashion'], delivered: 30, opened: 12, clicked: 4, replied: 1, status: 'sending' },
    { id: 't3', name: 'VIP Creators Follow-up', createdAt: '2024-03-05 09:30', createdBy: 'u1', assignee: 'u3', audienceCount: 12, audienceTags: ['Beauty', 'Beta'], delivered: 12, opened: 10, clicked: 6, replied: 3, status: 'completed' },
    { id: 't4', name: 'Expired Offer Reminder', createdAt: '2024-03-06 18:00', createdBy: 'u3', assignee: 'u1', audienceCount: 20, audienceTags: ['Fashion'], delivered: 5, opened: 0, clicked: 0, replied: 0, status: 'failed' }
  ];

  function getRoute() {
    var hash = (window.location.hash || '#/').slice(1).replace(/^\/+/, '');
    if (hash === '' && getRole() === 'affiliate') return 'affiliate/discover';
    if (hash === '' || hash === '/') return '';
    return hash;
  }

  function setSidebarActive(routeId) {
    document.querySelectorAll('.sidebar-primary-icon[data-route]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-route') === routeId);
    });
  }

  var crmFilter = { owner: 'all', status: '', source: '', email: '', data: '', tag: '', search: '' };
  var crmSelected = [];

  function getFilteredCreators() {
    return creators.filter(function (c) {
      if (crmFilter.owner === 'mine' && c.owner !== currentUser.id) return false;
      if (crmFilter.status) {
        var isPartner = c.isPartner || c.stage === 'Partner';
        if (crmFilter.status === 'partner' && !isPartner) return false;
        if (crmFilter.status === 'lead' && isPartner) return false;
      }
      if (crmFilter.source && c.source !== crmFilter.source) return false;
      if (crmFilter.email === 'yes' && !c.email) return false;
      if (crmFilter.email === 'no' && c.email) return false;
      if (crmFilter.data && c.enrichStatus !== crmFilter.data) return false;
      if (crmFilter.tag && (!c.tags || c.tags.indexOf(crmFilter.tag) === -1)) return false;
      if (crmFilter.search) {
        var q = crmFilter.search.toLowerCase();
        var nameMatch = (c.name || '').toLowerCase().indexOf(q) !== -1;
        var idMatch = (c.tiktokId || '').toLowerCase().indexOf(q) !== -1;
        var emailMatch = (c.email || '').toLowerCase().indexOf(q) !== -1;
        if (!nameMatch && !idMatch && !emailMatch) return false;
      }
      return true;
    });
  }

  function crmCell(val) { return val ? val : '<span class="crm-skeleton"></span>'; }

  function renderCreators() {
    var filtered = getFilteredCreators();
    var statusPartner = function (c) { return c.isPartner || c.stage === 'Partner'; };
    var statusLabel = function (c) { return statusPartner(c) ? t('crm.status.partner') : t('crm.status.lead'); };
    var sourceMap = { 'Find Creators': 'crm-src--discover', 'Import': 'crm-src--import' };
    var sourceIcon = { 'Find Creators': 'fa-wand-magic-sparkles', 'Import': 'fa-file-import' };
    var enrichBadge = {
      enriched: '<span class="crm-data-badge crm-data--enriched"><i class="fas fa-check-circle"></i> ' + t('crm.stat.success') + '</span>',
      enriching: '<span class="crm-data-badge crm-data--enriching"><i class="fas fa-sync-alt fa-spin"></i> ' + t('crm.enriching') + '</span>',
      queued: '<span class="crm-data-badge crm-data--queued"><i class="fas fa-clock"></i> ' + t('crm.queued') + '</span>',
      failed: '<span class="crm-data-badge crm-data--failed"><i class="fas fa-exclamation-circle"></i> ' + t('crm.stat.failed') + '</span>'
    };

    var rows = filtered.map(function (c) {
      var m = findMemberName(c.owner);
      var isEnriched = c.enrichStatus === 'enriched';
      var canSelect = isEnriched;
      var checked = crmSelected.indexOf(c.id) !== -1;
      var cbDisabled = !canSelect ? ' disabled' : '';
      var rowCls = !isEnriched ? ' class="crm-row--pending"' : '';
      var srcCls = sourceMap[c.source] || '';
      var srcIcn = sourceIcon[c.source] || 'fa-question';
      var samplesText = (c.samples && c.samples.length) ? c.samples.map(function (s) { return s.sku + ' (' + s.status + ')'; }).join(', ') : '-';

      var dataTd = enrichBadge[c.enrichStatus] || '';
      if (c.enrichStatus === 'failed') {
        dataTd += ' <button class="btn btn-secondary btn-sm crm-retry-enrich" data-id="' + c.id + '">' + t('common.retry') + '</button>';
      }

      var actionsHtml = isEnriched
        ? '<div class="table-actions"><button type="button" class="btn btn-ghost btn-sm crm-delete-creator" data-id="' + c.id + '"><i class="fas fa-trash-alt"></i> ' + t('crm.action.delete') + '</button></div>'
        : '';

      var videoLiveStr = isEnriched ? ((c.videoCount != null || c.liveCount != null) ? ((c.liveCount || 0) + ' / ' + (c.videoCount || 0)) : '-') : '';
      var gmv30dStr = isEnriched && c.gmv30d != null && c.gmv30d > 0 ? (typeof c.gmv30d === 'number' ? '$' + c.gmv30d.toLocaleString() : c.gmv30d) : (isEnriched ? '-' : '');
      var emailDisplay = (c.email || '').trim();
      var emailCellHtml = isEnriched
        ? '<td class="crm-email-cell" data-id="' + c.id + '">' +
          '<div class="crm-email-cell-inner">' +
          '<span class="crm-email-display">' + (emailDisplay ? emailDisplay.replace(/</g, '&lt;') : '<span class="crm-no-email">' + t('crm.no_email') + '</span>') + '</span>' +
          '<input type="email" class="crm-email-input" value="' + (emailDisplay || '').replace(/"/g, '&quot;') + '" placeholder="' + t('crm.no_email') + '" style="display:none" data-id="' + c.id + '">' +
          '<button type="button" class="btn btn-ghost btn-xs crm-email-edit" data-id="' + c.id + '" title="' + t('crm.email_edit') + '"><i class="fas fa-pen"></i></button>' +
          '<button type="button" class="btn btn-primary btn-xs crm-email-save" data-id="' + c.id + '" style="display:none"><i class="fas fa-check"></i></button>' +
          '</div></td>'
        : '<td>' + crmCell('') + '</td>';
      return '<tr data-id="' + c.id + '"' + rowCls + '>' +
        '<td><input type="checkbox" class="crm-cb" data-id="' + c.id + '"' + (checked ? ' checked' : '') + cbDisabled + '></td>' +
        '<td><strong>' + (c.name || c.tiktokId) + '</strong><br><span class="crm-handle">' + c.tiktokId + '</span></td>' +
        '<td>' + (isEnriched ? (c.fans || '-') : crmCell('')) + '</td>' +
        '<td>' + (isEnriched ? (c.category || '-') : crmCell('')) + '</td>' +
        '<td>' + (isEnriched ? videoLiveStr : crmCell('')) + '</td>' +
        '<td>' + (isEnriched ? gmv30dStr : crmCell('')) + '</td>' +
        emailCellHtml +
        '<td>' + (isEnriched ? '<select class="crm-status-select" data-id="' + c.id + '">' +
          '<option value="lead"' + (!statusPartner(c) ? ' selected' : '') + '>' + t('crm.status.lead') + '</option>' +
          '<option value="partner"' + (statusPartner(c) ? ' selected' : '') + '>' + t('crm.status.partner') + '</option>' +
          '</select>' : crmCell('')) + '</td>' +
        '<td class="crm-last-outreach-cell">' + (isEnriched && c.lastReach ? '<span class="crm-last-outreach" title="' + (c.reachCount ? t('crm.outreach_times').replace('{0}', c.reachCount) : '') + '">' + c.lastReach + '</span>' : (isEnriched ? '<span class="crm-no-outreach">–</span>' : crmCell(''))) + '</td>' +
        '<td class="crm-tags-cell"' + (isEnriched ? ' data-id="' + c.id + '"' : '') + '>' + (isEnriched ? (c.tags && c.tags.length ? '<span class="crm-tags-wrap">' + c.tags.map(function (tg) { return '<span class="crm-tag" data-tag="' + tg + '">' + tg + '<i class="fas fa-times crm-tag-remove-one"></i></span>'; }).join('') + '</span>' : '') + '<button type="button" class="crm-tag-edit-btn" data-id="' + c.id + '" title="' + t('crm.tags.add_to') + '"><i class="fas fa-plus"></i></button>' : crmCell('')) + '</td>' +
        '<td><span class="crm-source ' + srcCls + '"><i class="fas ' + srcIcn + '"></i> ' + (c.source || '-') + '</span></td>' +
        '<td><span class="tpl-creator"><span class="avatar-mini">' + m.avatar + '</span> ' + m.name + '</span></td>' +
        '<td>' + dataTd + '</td>' +
        '<td>' + actionsHtml + '</td></tr>';
    }).join('');

    var ownerBtns =
      '<button type="button" class="tpl-filter-btn' + (crmFilter.owner === 'all' ? ' tpl-filter-btn--active' : '') + '" data-crm-owner="all">' + t('common.all') + '</button>' +
      '<button type="button" class="tpl-filter-btn' + (crmFilter.owner === 'mine' ? ' tpl-filter-btn--active' : '') + '" data-crm-owner="mine">' + t('crm.filter.mine') + '</button>';

    function selOpt(val, cur) { return val === cur ? ' selected' : ''; }

    var activeFilters = [];
    var tagLabelMap = {}; globalTags.forEach(function (tg) { tagLabelMap[tg] = tg; });
    var filterLabels = { status: { partner: t('crm.filter.partner'), lead: t('crm.filter.lead') }, source: { 'Find Creators': t('discover.title'), 'Import': 'Import' }, email: { yes: t('crm.filter.has_email'), no: t('crm.filter.no_email') }, data: { enriched: t('crm.stat.enriched'), enriching: t('crm.stat.enriching'), queued: t('crm.queued'), failed: t('crm.stat.failed') }, tag: tagLabelMap };
    ['status', 'source', 'email', 'data', 'tag'].forEach(function (key) {
      if (crmFilter[key]) {
        activeFilters.push({ key: key, label: (filterLabels[key] && filterLabels[key][crmFilter[key]]) || crmFilter[key] });
      }
    });
    var activeTagsHtml = activeFilters.map(function (f) {
      return '<span class="crf-active-tag">' + f.label + '<button type="button" class="crf-active-remove" data-clear="' + f.key + '">&times;</button></span>';
    }).join('');
    var filterCnt = activeFilters.length;

    var filterPanel =
      '<div class="crf-panel-wrap" id="crfPanelWrap">' +
        '<button type="button" class="crf-trigger" id="crfTrigger"><i class="fas fa-sliders-h"></i> ' + t('crm.filter.btn') + (filterCnt ? ' <span class="crf-badge">' + filterCnt + '</span>' : '') + '</button>' +
        '<div class="crf-panel crf-panel--hidden" id="crfPanel">' +
          '<div class="crf-panel-row"><label class="crf-label">' + t('crm.filter.coop') + '</label>' +
            '<select class="select crf-select" id="crmFilterStatus">' +
              '<option value="">' + t('common.all') + '</option><option value="partner"' + selOpt('partner', crmFilter.status) + '>' + t('crm.filter.partner') + '</option>' +
              '<option value="lead"' + selOpt('lead', crmFilter.status) + '>' + t('crm.filter.lead') + '</option></select></div>' +
          '<div class="crf-panel-row"><label class="crf-label">' + t('crm.filter.source') + '</label>' +
            '<select class="select crf-select" id="crmFilterSource">' +
              '<option value="">' + t('common.all') + '</option><option value="Find Creators"' + selOpt('Find Creators', crmFilter.source) + '>' + t('discover.title') + '</option>' +
              '<option value="Import"' + selOpt('Import', crmFilter.source) + '>Import</option></select></div>' +
          '<div class="crf-panel-row"><label class="crf-label">' + t('crm.filter.email') + '</label>' +
            '<select class="select crf-select" id="crmFilterEmail">' +
              '<option value="">' + t('common.any') + '</option><option value="yes"' + selOpt('yes', crmFilter.email) + '>' + t('crm.filter.has_email') + '</option>' +
              '<option value="no"' + selOpt('no', crmFilter.email) + '>' + t('crm.filter.no_email') + '</option></select></div>' +
          '<div class="crf-panel-row"><label class="crf-label">' + t('crm.filter.data') + '</label>' +
            '<select class="select crf-select" id="crmFilterData">' +
              '<option value="">' + t('common.all') + '</option><option value="enriched"' + selOpt('enriched', crmFilter.data) + '>' + t('crm.stat.enriched') + '</option>' +
              '<option value="enriching"' + selOpt('enriching', crmFilter.data) + '>' + t('crm.stat.enriching') + '</option>' +
              '<option value="queued"' + selOpt('queued', crmFilter.data) + '>' + t('crm.queued') + '</option>' +
              '<option value="failed"' + selOpt('failed', crmFilter.data) + '>' + t('crm.stat.failed') + '</option></select></div>' +
          '<div class="crf-panel-row"><label class="crf-label">' + t('crm.filter.tag') + '</label>' +
            '<select class="select crf-select" id="crmFilterTag">' +
              '<option value="">' + t('common.all') + '</option>' +
              globalTags.map(function (tg) { return '<option value="' + tg + '"' + selOpt(tg, crmFilter.tag) + '>' + tg + '</option>'; }).join('') +
            '</select></div>' +
          (filterCnt ? '<button type="button" class="crf-clear-all" id="crfClearAll">' + t('crm.filter.clear') + '</button>' : '') +
        '</div>' +
      '</div>';

    var hasAny = crmFilter.search || crmFilter.owner === 'mine' || crmFilter.status || crmFilter.source || crmFilter.email || crmFilter.data || crmFilter.tag;
    var emptyRow = '<tr><td colspan="13" class="or-empty-table"><i class="fas fa-users"></i><p>' +
      (hasAny ? t('crm.empty.filter') : t('crm.empty.none')) +
      '</p></td></tr>';

    var enrichedCnt = creators.filter(function (c) { return c.enrichStatus === 'enriched'; }).length;
    var enrichingCnt = creators.filter(function (c) { return c.enrichStatus === 'enriching' || c.enrichStatus === 'queued'; }).length;
    var failedCnt = creators.filter(function (c) { return c.enrichStatus === 'failed'; }).length;
    var partnerCnt = creators.filter(function (c) { return (c.isPartner || c.stage === 'Partner') && c.enrichStatus === 'enriched'; }).length;

    var progressHtml = '';
    if (enrichingCnt > 0) {
      var pct = Math.round(enrichedCnt / (enrichedCnt + enrichingCnt + failedCnt) * 100);
      progressHtml = '<div class="crm-progress">' +
        '<div class="crm-progress-bar"><div class="crm-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<span class="crm-progress-text"><i class="fas fa-sync-alt fa-spin"></i> ' + t('crm.progress') + ' ' + enrichedCnt + ' / ' + (enrichedCnt + enrichingCnt + failedCnt) + ' ' + t('crm.progress.completed') + '</span>' +
      '</div>';
    }

    return '<div class="crm-top">' +
        '<div class="crm-top-left">' +
          '<h1 class="page-title">' + t('crm.title') + '</h1>' +
          '<p class="crm-desc">' + t('crm.desc') + '</p>' +
        '</div>' +
        '<button class="btn btn-primary" id="btnAddCreator"><i class="fas fa-plus"></i> ' + t('crm.btn.add') + '</button>' +
      '</div>' +

      '<div class="crm-stats-row">' +
        '<div class="crm-stat"><span class="crm-stat-num">' + creators.length + '</span><span class="crm-stat-label">' + t('crm.stat.total') + '</span></div>' +
        '<div class="crm-stat"><span class="crm-stat-num crm-stat--partner">' + partnerCnt + '</span><span class="crm-stat-label">' + t('crm.stat.partners') + '</span></div>' +
        '<div class="crm-stat"><span class="crm-stat-num crm-stat--lead">' + enrichedCnt + '</span><span class="crm-stat-label">' + t('crm.stat.enriched') + '</span></div>' +
        (enrichingCnt ? '<div class="crm-stat"><span class="crm-stat-num crm-stat--enriching">' + enrichingCnt + '</span><span class="crm-stat-label">' + t('crm.stat.enriching') + '</span></div>' : '') +
        (failedCnt ? '<div class="crm-stat"><span class="crm-stat-num crm-stat--failed">' + failedCnt + '</span><span class="crm-stat-label">' + t('crm.stat.failed') + '</span></div>' : '') +
      '</div>' +

      progressHtml +

      '<div class="crm-filter-bar">' +
        '<div class="tpl-filter-group">' + ownerBtns + '</div>' +
        '<div class="tpl-search-wrap"><i class="fas fa-search"></i><input type="text" class="tpl-search-input" id="crmSearchInput" placeholder="' + t('crm.search') + '" value="' + (crmFilter.search || '') + '"></div>' +
        filterPanel +
        '<span class="tpl-count">' + filtered.length + ' ' + t('common.results') + '</span>' +
        '<button class="btn btn-secondary btn-sm" id="btnManageTags"><i class="fas fa-cog"></i> ' + t('crm.batch.tags') + '</button>' +
      '</div>' +
      (activeTagsHtml ? '<div class="crf-active-tags">' + activeTagsHtml + '</div>' : '') +

      '<div class="card table-wrap crm-table-wrap"><table class="crm-table"><thead><tr>' +
        '<th><input type="checkbox" id="crmSelectAll"></th>' +
        '<th>' + t('crm.th.creator') + '</th><th>' + t('crm.th.followers') + '</th><th>' + t('crm.th.category') + '</th><th>' + t('crm.th.video_live') + '</th><th>' + t('crm.th.gmv_30d') + '</th><th>' + t('crm.th.contact') + '</th><th>' + t('common.status') + '</th><th>' + t('crm.th.last_outreach') + '</th><th>' + t('crm.th.tags') + '</th><th>' + t('crm.th.source') + '</th><th>' + t('crm.th.owner') + '</th><th>' + t('crm.th.data') + '</th><th>' + t('common.actions') + '</th>' +
      '</tr></thead><tbody>' + (rows || emptyRow) + '</tbody></table></div>' +

      '<div class="crm-batch-bar crm-batch--hidden" id="crmBatchBar">' +
        '<div class="crm-batch-left"><i class="fas fa-check-circle"></i> <strong id="crmBatchCount">0</strong> ' + t('crm.batch.selected') + '</div>' +
        '<div class="crm-batch-right">' +
          '<button class="btn btn-secondary btn-sm crm-batch-delete" id="crmBatchDelete"><i class="fas fa-trash-alt"></i> ' + t('crm.batch.delete') + '</button>' +
          '<button class="btn btn-secondary btn-sm" id="crmBatchCancel"><i class="fas fa-times"></i></button>' +
          '<span class="crm-batch-sep"></span>' +
          '<button class="btn btn-primary btn-sm" id="crmBatchTag"><i class="fas fa-tags"></i> ' + t('crm.batch.tags') + '</button>' +
          '<button class="btn btn-primary btn-sm" id="crmBatchOutreach"><i class="fas fa-paper-plane"></i> ' + t('crm.batch.outreach') + '</button>' +
        '</div>' +
      '</div>' +

      '<div class="modal-overlay" id="crmOutreachModal">' +
        '<div class="modal">' +
          '<button type="button" class="modal-close" id="closeCrmOutreach"><i class="fas fa-times"></i></button>' +
          '<h3 class="modal-title">' + t('crm.ot.title') + '</h3>' +
          '<div class="crm-outreach-audience" id="crmOutreachAudience"></div>' +
          '<div class="form-group"><label class="form-label">' + t('crm.ot.task_name') + '</label>' +
            '<input type="text" class="input" id="crmOtName" placeholder="' + t('outreach.modal.name_ph') + '"></div>' +
          '<div class="form-row">' +
            '<div class="form-group form-group--half"><label class="form-label">' + t('crm.ot.send_from') + '</label>' +
              '<select class="select" id="crmOtSender"><option value="">' + t('crm.ot.select_sender') + '</option>' +
              emailAccounts.filter(function(a){return a.type==='sending'}).map(function(a){return '<option value="'+a.id+'">'+a.email+'</option>'}).join('') +
              '</select></div>' +
            '<div class="form-group form-group--half"><label class="form-label">' + t('crm.ot.reply_to') + '</label>' +
              '<select class="select" id="crmOtReply"><option value="">' + t('crm.ot.select_reply') + '</option>' +
              emailAccounts.filter(function(a){return a.type==='receiving'}).map(function(a){return '<option value="'+a.id+'">'+a.email+'</option>'}).join('') +
              '</select></div>' +
          '</div>' +
          '<div class="form-group"><label class="form-label">' + t('crm.ot.template') + '</label>' +
            '<select class="select" id="crmOtTemplate"><option value="">' + t('crm.ot.select_tpl') + '</option>' +
            emailTemplates.map(function(tp){return '<option value="'+tp.id+'">'+tp.name+'</option>'}).join('') +
            '</select></div>' +
          '<div class="modal-footer">' +
            '<button class="btn btn-secondary" id="cancelCrmOutreach">' + t('common.cancel') + '</button>' +
            '<button class="btn btn-primary" id="confirmCrmOutreach"><i class="fas fa-paper-plane"></i> ' + t('crm.ot.create') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="modal-overlay" id="addCreatorModal">' +
        '<div class="modal">' +
          '<button type="button" class="modal-close" id="closeAddCreator"><i class="fas fa-times"></i></button>' +
          '<h3 class="modal-title">' + t('crm.add.title') + '</h3>' +
          '<p class="modal-desc">' + t('crm.add.desc') + '</p>' +

          '<div class="crm-import-zone" id="acImportZone">' +
            '<i class="fas fa-cloud-upload-alt"></i>' +
            '<p class="crm-import-zone-title">' + t('crm.add.drop') + '</p>' +
            '<p class="crm-import-zone-hint">' + t('crm.add.formats') + '</p>' +
            '<input type="file" id="acImportFile" accept=".csv,.xlsx,.xls" class="or-upload-input">' +
          '</div>' +

          '<div class="crm-import-cols">' +
            '<div class="crm-import-cols-title"><i class="fas fa-info-circle"></i> ' + t('crm.add.format_title') + '</div>' +
            '<p class="crm-import-cols-desc">' + t('crm.add.format_desc') + '</p>' +
            '<div class="crm-import-cols-grid">' +
              '<span class="crm-import-col crm-import-col--req">tiktok_handle *</span>' +
            '</div>' +
            '<a href="#" class="crm-import-download" id="acDownloadTpl"><i class="fas fa-download"></i> ' + t('crm.add.download') + '</a>' +
          '</div>' +

          '<div class="crm-enrich-note">' +
            '<i class="fas fa-magic"></i>' +
            '<div>' +
              '<strong>' + t('crm.add.enrich_title') + '</strong>' +
              '<p>' + t('crm.add.enrich_desc') + '</p>' +
            '</div>' +
          '</div>' +

          '<div class="modal-footer">' +
            '<button class="btn btn-secondary" id="cancelAddCreator">' + t('common.cancel') + '</button>' +
            '<button class="btn btn-primary" id="confirmAddCreator"><i class="fas fa-file-import"></i> ' + t('crm.add.import') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="modal-overlay" id="batchTagModal">' +
        '<div class="modal">' +
          '<button type="button" class="modal-close" id="closeBatchTag"><i class="fas fa-times"></i></button>' +
          '<h3 class="modal-title"><i class="fas fa-tags"></i> ' + t('crm.batch.tags') + '</h3>' +
          '<div class="form-group">' +
            '<label class="form-label">' + t('crm.tags.add_to') + '</label>' +
            '<div class="ms-wrap" id="btMsWrap">' +
              '<div class="ms-selected" id="btMsSelected"></div>' +
              '<input type="text" class="ms-input" id="btMsInput" placeholder="' + t('crm.tags.search') + '">' +
              '<div class="ms-dropdown ms-dropdown--hidden" id="btMsDropdown"></div>' +
            '</div>' +
          '</div>' +
          '<div class="form-group">' +
            '<label class="form-label">' + t('crm.tags.existing') + '</label>' +
            '<div class="tm-existing-tags" id="btExistingTags"></div>' +
          '</div>' +
          '<div class="modal-footer">' +
            '<button class="btn btn-secondary" id="cancelBatchTag">' + t('common.cancel') + '</button>' +
            '<button class="btn btn-primary" id="applyBatchTag"><i class="fas fa-check"></i> ' + t('crm.tags.apply') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="modal-overlay" id="manageTagsModal">' +
        '<div class="modal">' +
          '<button type="button" class="modal-close" id="closeManageTags"><i class="fas fa-times"></i></button>' +
          '<h3 class="modal-title"><i class="fas fa-tags"></i> ' + t('crm.tags.title') + '</h3>' +
          '<div class="tm-list" id="tmList"></div>' +
          '<div class="tm-add-row">' +
            '<input type="text" class="input" id="tmNewTagInput" placeholder="' + t('crm.tags.ph') + '">' +
            '<button class="btn btn-primary btn-sm" id="tmAddTag"><i class="fas fa-plus"></i> ' + t('crm.tags.add_new') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function refreshCrm() {
    var app = document.getElementById('app');
    if (app) { app.innerHTML = renderCreators(); bindCrmEvents(); }
  }

  function updateBatchBar() {
    var bar = document.getElementById('crmBatchBar');
    var cnt = document.getElementById('crmBatchCount');
    if (!bar) return;
    if (crmSelected.length > 0) {
      bar.classList.remove('crm-batch--hidden');
      if (cnt) cnt.textContent = crmSelected.length;
    } else {
      bar.classList.add('crm-batch--hidden');
    }
  }

  function bindCrmEvents() {
    // --- Add Creator modal ---
    var addModal = document.getElementById('addCreatorModal');
    function toggleAddModal(show) { if (addModal) addModal.classList.toggle('active', show); }
    var btnAdd = document.getElementById('btnAddCreator');
    if (btnAdd) btnAdd.addEventListener('click', function () { toggleAddModal(true); });
    var closeAdd = document.getElementById('closeAddCreator');
    var cancelAdd = document.getElementById('cancelAddCreator');
    if (closeAdd) closeAdd.addEventListener('click', function () { toggleAddModal(false); });
    if (cancelAdd) cancelAdd.addEventListener('click', function () { toggleAddModal(false); });
    if (addModal) addModal.addEventListener('click', function (e) { if (e.target === addModal) toggleAddModal(false); });

    var importZone = document.getElementById('acImportZone');
    var importFile = document.getElementById('acImportFile');
    if (importZone && importFile) {
      importZone.addEventListener('click', function (e) { if (e.target !== importFile) importFile.click(); });
      importFile.addEventListener('change', function () {
        if (importFile.files && importFile.files.length) {
          importZone.querySelector('.crm-import-zone-title').textContent = importFile.files[0].name;
          importZone.querySelector('.crm-import-zone-hint').textContent = 'File selected. Click "Import & enrich" to proceed.';
          importZone.classList.add('crm-import-zone--has-file');
        }
      });
    }
    var downloadTpl = document.getElementById('acDownloadTpl');
    if (downloadTpl) downloadTpl.addEventListener('click', function (e) {
      e.preventDefault();
      alert('In production, this would download a CSV template with a single column: tiktok_handle');
    });
    var confirmAdd = document.getElementById('confirmAddCreator');
    if (confirmAdd) confirmAdd.addEventListener('click', function () {
      if (!importFile || !importFile.files || !importFile.files.length) { alert('Please select a file to import.'); return; }
      alert('File "' + importFile.files[0].name + '" uploaded. The system will now crawl TikTok to enrich creator profiles.');
      toggleAddModal(false);
    });

    // --- Tag management modal ---
    var manageTagsModal = document.getElementById('manageTagsModal');
    var closeManageTags = document.getElementById('closeManageTags');
    var btnManageTags = document.getElementById('btnManageTags');

    var tmDirty = false;
    function toggleManageTagsModal(show) {
      if (manageTagsModal) manageTagsModal.classList.toggle('active', show);
      if (show) { tmDirty = false; renderTmList(); }
      if (!show && tmDirty) refreshCrm();
    }

    function tagUsageCount(tag) {
      var count = 0;
      creators.forEach(function (c) { if (c.tags && c.tags.indexOf(tag) !== -1) count++; });
      return count;
    }

    function renderTmList() {
      var container = document.getElementById('tmList');
      if (!container) return;
      if (!globalTags.length) {
        container.innerHTML = '<div class="tm-empty">' + t('crm.tags.no_tags') + '</div>';
        return;
      }
      container.innerHTML = globalTags.map(function (tag, idx) {
        return '<div class="tm-item" data-idx="' + idx + '">' +
          '<span class="tm-item-name" data-tag="' + tag + '">' + tag + '</span>' +
          '<span class="tm-item-count">' + tagUsageCount(tag) + ' ' + t('crm.tags.used_by') + '</span>' +
          '<div class="tm-item-actions">' +
            '<button class="tm-action-btn tm-rename" data-idx="' + idx + '" title="Rename"><i class="fas fa-pen"></i></button>' +
            '<button class="tm-action-btn tm-delete" data-idx="' + idx + '" title="Delete"><i class="fas fa-trash"></i></button>' +
          '</div>' +
        '</div>';
      }).join('');

      container.querySelectorAll('.tm-rename').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var idx = parseInt(btn.getAttribute('data-idx'));
          var oldName = globalTags[idx];
          var item = btn.closest('.tm-item');
          var nameEl = item.querySelector('.tm-item-name');
          var input = document.createElement('input');
          input.type = 'text';
          input.className = 'input tm-rename-input';
          input.value = oldName;
          nameEl.replaceWith(input);
          input.focus();
          input.select();

          function doRename() {
            var newName = input.value.trim();
            if (!newName || newName === oldName) { renderTmList(); return; }
            if (globalTags.indexOf(newName) !== -1) { renderTmList(); return; }
            globalTags[idx] = newName; tmDirty = true;
            creators.forEach(function (c) {
              if (c.tags) {
                var i = c.tags.indexOf(oldName);
                if (i !== -1) c.tags[i] = newName;
              }
            });
            renderTmList();
          }
          input.addEventListener('blur', doRename);
          input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); doRename(); } });
        });
      });

      container.querySelectorAll('.tm-delete').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var idx = parseInt(btn.getAttribute('data-idx'));
          var tag = globalTags[idx];
          if (!confirm(t('crm.tags.delete_confirm'))) return;
          globalTags.splice(idx, 1); tmDirty = true;
          creators.forEach(function (c) {
            if (c.tags) {
              var i = c.tags.indexOf(tag);
              if (i !== -1) c.tags.splice(i, 1);
            }
          });
          renderTmList();
        });
      });
    }

    if (btnManageTags) btnManageTags.addEventListener('click', function () { toggleManageTagsModal(true); });
    if (closeManageTags) closeManageTags.addEventListener('click', function () { toggleManageTagsModal(false); });
    if (manageTagsModal) manageTagsModal.addEventListener('click', function (e) {
      if (e.target === manageTagsModal) toggleManageTagsModal(false);
    });

    var tmAddTag = document.getElementById('tmAddTag');
    var tmNewTagInput = document.getElementById('tmNewTagInput');
    if (tmAddTag) tmAddTag.addEventListener('click', function () {
      var val = (tmNewTagInput ? tmNewTagInput.value : '').trim();
      if (!val) return;
      if (globalTags.indexOf(val) !== -1) { showToast('"' + val + '" already exists', 'warn'); return; }
      globalTags.push(val); tmDirty = true;
      if (tmNewTagInput) tmNewTagInput.value = '';
      renderTmList();
    });
    if (tmNewTagInput) tmNewTagInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); if (tmAddTag) tmAddTag.click(); }
    });

    // --- Table actions: 状态切换、Tag 增删、删除 ---
    var crmTable = document.querySelector('.crm-table');
    if (crmTable) {
      crmTable.addEventListener('change', function (e) {
        var sel = e.target.closest('.crm-status-select');
        if (sel) {
          var id = sel.getAttribute('data-id');
          var c = creators.filter(function (x) { return x.id === id; })[0];
          if (c) {
            c.isPartner = sel.value === 'partner';
            c.stage = sel.value === 'partner' ? 'Partner' : 'Lead';
            refreshCrm();
          }
        }
      });
      crmTable.addEventListener('click', function (e) {
        var delBtn = e.target.closest('.crm-delete-creator');
        if (delBtn) {
          e.stopPropagation();
          var id = delBtn.getAttribute('data-id');
          if (!confirm(t('crm.delete_confirm'))) return;
          creators = creators.filter(function (c) { return c.id !== id; });
          crmSelected = crmSelected.filter(function (s) { return s !== id; });
          refreshCrm();
          updateBatchBar();
          showToast(t('crm.deleted'), 'success');
          return;
        }
        var tagRemove = e.target.closest('.crm-tag-remove-one');
        if (tagRemove) {
          e.stopPropagation();
          var tagEl = tagRemove.closest('.crm-tag');
          var cell = tagRemove.closest('.crm-tags-cell');
          if (tagEl && cell) {
            var creatorId = cell.getAttribute('data-id');
            var tag = tagEl.getAttribute('data-tag');
            var c = creators.filter(function (x) { return x.id === creatorId; })[0];
            if (c && c.tags) {
              var idx = c.tags.indexOf(tag);
              if (idx !== -1) { c.tags.splice(idx, 1); refreshCrm(); }
            }
          }
          return;
        }
        var tagEditBtn = e.target.closest('.crm-tag-edit-btn');
        if (tagEditBtn) {
          e.stopPropagation();
          var creatorId = tagEditBtn.getAttribute('data-id');
          openCreatorTagPopover(tagEditBtn, creatorId);
          return;
        }
        var emailEditBtn = e.target.closest('.crm-email-edit');
        if (emailEditBtn) {
          e.stopPropagation();
          var id = emailEditBtn.getAttribute('data-id');
          var cell = emailEditBtn.closest('.crm-email-cell');
          if (!cell) return;
          var disp = cell.querySelector('.crm-email-display');
          var inp = cell.querySelector('.crm-email-input');
          var saveBtn = cell.querySelector('.crm-email-save');
          if (disp && inp && saveBtn) {
            disp.style.display = 'none';
            inp.style.display = 'inline-block';
            inp.value = (creators.filter(function (x) { return x.id === id; })[0] || {}).email || '';
            saveBtn.style.display = 'inline-block';
            emailEditBtn.style.display = 'none';
            inp.focus();
          }
          return;
        }
        var emailSaveBtn = e.target.closest('.crm-email-save');
        if (emailSaveBtn) {
          e.stopPropagation();
          var id = emailSaveBtn.getAttribute('data-id');
          var cell = emailSaveBtn.closest('.crm-email-cell');
          if (!cell) return;
          var inp = cell.querySelector('.crm-email-input');
          var c = creators.filter(function (x) { return x.id === id; })[0];
          if (c && inp) {
            c.email = (inp.value || '').trim();
            refreshCrm();
          }
          return;
        }
      });
    }
    document.querySelectorAll('.crm-retry-enrich').forEach(function (btn) {
      btn.addEventListener('click', function () { alert('Retrying enrichment for creator: ' + btn.getAttribute('data-id')); });
    });

    function openCreatorTagPopover(anchor, creatorId) {
      var existing = document.getElementById('crmTagPopover');
      if (existing) existing.remove();
      var c = creators.filter(function (x) { return x.id === creatorId; })[0];
      if (!c) return;
      var currentTags = c.tags || [];
      var toAdd = globalTags.filter(function (tg) { return currentTags.indexOf(tg) === -1; });
      if (!toAdd.length) { showToast(t('crm.tags.all_added'), 'warn'); return; }
      var pop = document.createElement('div');
      pop.id = 'crmTagPopover';
      pop.className = 'crm-tag-popover';
      pop.innerHTML = '<div class="crm-tag-popover-title">' + t('crm.tags.add_to') + '</div>' +
        '<div class="crm-tag-popover-list">' + toAdd.map(function (tg) {
          return '<button type="button" class="crm-tag-popover-item" data-tag="' + tg + '">' + tg + '</button>';
        }).join('') + '</div>';
      document.body.appendChild(pop);
      var rect = anchor.getBoundingClientRect();
      pop.style.left = rect.left + 'px';
      pop.style.top = (rect.bottom + 4) + 'px';
      pop.querySelectorAll('.crm-tag-popover-item').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          var tag = btn.getAttribute('data-tag');
          if (!c.tags) c.tags = [];
          if (c.tags.indexOf(tag) === -1) c.tags.push(tag);
          closePopover();
          refreshCrm();
        });
      });
      function closePopover(e) {
        if (e && e.target && pop.contains(e.target)) return;
        if (pop.parentNode) pop.remove();
        document.removeEventListener('click', closePopover);
      }
      setTimeout(function () { document.addEventListener('click', closePopover); }, 10);
    }

    // --- Checkbox selection ---
    var selectAll = document.getElementById('crmSelectAll');
    if (selectAll) {
      selectAll.addEventListener('change', function () {
        var filtered = getFilteredCreators().filter(function (c) { return c.enrichStatus === 'enriched'; });
        if (selectAll.checked) {
          crmSelected = filtered.map(function (c) { return c.id; });
        } else {
          crmSelected = [];
        }
        document.querySelectorAll('.crm-cb').forEach(function (cb) {
          if (!cb.disabled) cb.checked = selectAll.checked;
        });
        updateBatchBar();
      });
    }
    document.querySelectorAll('.crm-cb').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var id = cb.getAttribute('data-id');
        if (cb.checked) {
          if (crmSelected.indexOf(id) === -1) crmSelected.push(id);
        } else {
          crmSelected = crmSelected.filter(function (s) { return s !== id; });
        }
        if (selectAll) {
          var allEnriched = getFilteredCreators().filter(function (c) { return c.enrichStatus === 'enriched'; });
          selectAll.checked = allEnriched.length > 0 && crmSelected.length === allEnriched.length;
        }
        updateBatchBar();
      });
    });

    // --- Batch bar ---
    var batchCancel = document.getElementById('crmBatchCancel');
    if (batchCancel) batchCancel.addEventListener('click', function () {
      crmSelected = [];
      document.querySelectorAll('.crm-cb').forEach(function (cb) { cb.checked = false; });
      if (selectAll) selectAll.checked = false;
      updateBatchBar();
    });

    var batchDelete = document.getElementById('crmBatchDelete');
    if (batchDelete) batchDelete.addEventListener('click', function () {
      if (!crmSelected.length) return;
      var msg = t('crm.batch.delete_confirm').replace('{0}', crmSelected.length);
      if (!confirm(msg)) return;
      creators = creators.filter(function (c) { return crmSelected.indexOf(c.id) === -1; });
      crmSelected = [];
      document.querySelectorAll('.crm-cb').forEach(function (cb) { cb.checked = false; });
      if (selectAll) selectAll.checked = false;
      refreshCrm();
      updateBatchBar();
      showToast(t('crm.deleted'), 'success');
    });

    var batchOutreach = document.getElementById('crmBatchOutreach');
    if (batchOutreach) batchOutreach.addEventListener('click', function () {
      if (!crmSelected.length) return;
      var selected = creators.filter(function (c) { return crmSelected.indexOf(c.id) !== -1; });
      var withEmail = selected.filter(function (c) { return !!c.email; });
      var noEmail = selected.length - withEmail.length;

      var audHtml = '<div class="crm-ot-summary">' +
        '<div class="crm-ot-stat"><i class="fas fa-users"></i> <strong>' + selected.length + '</strong> ' + t('crm.batch.selected') + '</div>' +
        '<div class="crm-ot-stat crm-ot-stat--ok"><i class="fas fa-envelope"></i> <strong>' + withEmail.length + '</strong> ' + t('crm.ot.with_email') + '</div>';
      if (noEmail > 0) {
        audHtml += '<div class="crm-ot-stat crm-ot-stat--warn"><i class="fas fa-exclamation-triangle"></i> <strong>' + noEmail + '</strong> ' + t('crm.ot.no_email') + '</div>';
      }
      audHtml += '</div>';
      audHtml += '<div class="crm-ot-handles">' + selected.slice(0, 5).map(function (c) {
        return '<span class="crm-ot-handle">' + c.tiktokId + '</span>';
      }).join('') + (selected.length > 5 ? '<span class="crm-ot-more">+' + (selected.length - 5) + ' more</span>' : '') + '</div>';

      var audEl = document.getElementById('crmOutreachAudience');
      if (audEl) audEl.innerHTML = audHtml;

      var otModal = document.getElementById('crmOutreachModal');
      if (otModal) otModal.classList.add('active');
    });

    // --- Batch tag modal ---
    var batchTagBtn = document.getElementById('crmBatchTag');
    var batchTagModal = document.getElementById('batchTagModal');
    var closeBatchTag = document.getElementById('closeBatchTag');
    var cancelBatchTag = document.getElementById('cancelBatchTag');
    var applyBatchTag = document.getElementById('applyBatchTag');
    var btTagsToAdd = [];
    var btTagsToRemove = [];

    function toggleBatchTagModal(show) {
      if (batchTagModal) batchTagModal.classList.toggle('active', show);
    }

    function renderBtExistingTags() {
      var container = document.getElementById('btExistingTags');
      if (!container) return;
      var selected = creators.filter(function (c) { return crmSelected.indexOf(c.id) !== -1; });
      var unionTags = [];
      selected.forEach(function (c) {
        if (c.tags) c.tags.forEach(function (tg) { if (unionTags.indexOf(tg) === -1) unionTags.push(tg); });
      });
      if (!unionTags.length) {
        container.innerHTML = '<span class="tm-empty"><i class="fas fa-tag"></i> ' + t('crm.tags.no_tags') + '</span>';
        return;
      }
      container.innerHTML = unionTags.map(function (tg) {
        var marked = btTagsToRemove.indexOf(tg) !== -1;
        return '<span class="tm-tag-chip' + (marked ? ' tm-tag-chip--remove' : '') + '" data-tag="' + tg + '">' +
          tg + ' <i class="fas fa-times"></i></span>';
      }).join('');
      container.querySelectorAll('.tm-tag-chip').forEach(function (chip) {
        chip.addEventListener('click', function () {
          var tag = chip.getAttribute('data-tag');
          var idx = btTagsToRemove.indexOf(tag);
          if (idx !== -1) btTagsToRemove.splice(idx, 1); else btTagsToRemove.push(tag);
          renderBtExistingTags();
        });
      });
    }

    function renderBtDropdown(filter) {
      var dd = document.getElementById('btMsDropdown');
      if (!dd) return;
      var q = (filter || '').toLowerCase();
      var items = globalTags.filter(function (tg) {
        return btTagsToAdd.indexOf(tg) === -1 && (!q || tg.toLowerCase().indexOf(q) !== -1);
      });
      if (!items.length) { dd.classList.add('ms-dropdown--hidden'); return; }
      dd.innerHTML = items.map(function (tg) {
        return '<div class="ms-option" data-val="' + tg + '">' + tg + '</div>';
      }).join('');
      dd.classList.remove('ms-dropdown--hidden');
      dd.querySelectorAll('.ms-option').forEach(function (opt) {
        opt.addEventListener('click', function () {
          var val = opt.getAttribute('data-val');
          if (btTagsToAdd.indexOf(val) === -1) btTagsToAdd.push(val);
          renderBtSelected();
          renderBtDropdown('');
          var inp = document.getElementById('btMsInput');
          if (inp) inp.value = '';
        });
      });
    }

    function renderBtSelected() {
      var container = document.getElementById('btMsSelected');
      if (!container) return;
      container.innerHTML = btTagsToAdd.map(function (tg) {
        return '<span class="ms-tag">' + tg + '<i class="fas fa-times ms-tag-remove" data-val="' + tg + '"></i></span>';
      }).join('');
      container.querySelectorAll('.ms-tag-remove').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var val = btn.getAttribute('data-val');
          btTagsToAdd = btTagsToAdd.filter(function (x) { return x !== val; });
          renderBtSelected();
          renderBtDropdown('');
        });
      });
    }

    if (batchTagBtn) batchTagBtn.addEventListener('click', function () {
      if (!crmSelected.length) return;
      btTagsToAdd = [];
      btTagsToRemove = [];
      renderBtSelected();
      renderBtExistingTags();
      renderBtDropdown('');
      toggleBatchTagModal(true);
    });

    var btMsInput = document.getElementById('btMsInput');
    if (btMsInput) {
      btMsInput.addEventListener('focus', function () { renderBtDropdown(btMsInput.value); });
      btMsInput.addEventListener('input', function () { renderBtDropdown(btMsInput.value); });
    }
    document.addEventListener('click', function (e) {
      var wrap = document.getElementById('btMsWrap');
      var dd = document.getElementById('btMsDropdown');
      if (wrap && dd && !wrap.contains(e.target)) dd.classList.add('ms-dropdown--hidden');
    });

    if (closeBatchTag) closeBatchTag.addEventListener('click', function () { toggleBatchTagModal(false); });
    if (cancelBatchTag) cancelBatchTag.addEventListener('click', function () { toggleBatchTagModal(false); });
    if (batchTagModal) batchTagModal.addEventListener('click', function (e) {
      if (e.target === batchTagModal) toggleBatchTagModal(false);
    });

    if (applyBatchTag) applyBatchTag.addEventListener('click', function () {
      var count = 0;
      creators.forEach(function (c) {
        if (crmSelected.indexOf(c.id) === -1) return;
        if (!c.tags) c.tags = [];
        btTagsToAdd.forEach(function (tg) {
          if (c.tags.indexOf(tg) === -1) c.tags.push(tg);
        });
        btTagsToRemove.forEach(function (tg) {
          var idx = c.tags.indexOf(tg);
          if (idx !== -1) c.tags.splice(idx, 1);
        });
        count++;
      });
      showToast(t('crm.tags.toast_applied').replace('{0}', count), 'success');
      toggleBatchTagModal(false);
      refreshCrm();
    });

    // --- Outreach modal ---
    var otModal = document.getElementById('crmOutreachModal');
    var closeOt = document.getElementById('closeCrmOutreach');
    var cancelOt = document.getElementById('cancelCrmOutreach');
    function toggleOtModal(show) { if (otModal) otModal.classList.toggle('active', show); }
    if (closeOt) closeOt.addEventListener('click', function () { toggleOtModal(false); });
    if (cancelOt) cancelOt.addEventListener('click', function () { toggleOtModal(false); });
    if (otModal) otModal.addEventListener('click', function (e) { if (e.target === otModal) toggleOtModal(false); });

    var confirmOt = document.getElementById('confirmCrmOutreach');
    if (confirmOt) confirmOt.addEventListener('click', function () {
      var name = (document.getElementById('crmOtName').value || '').trim();
      var sender = document.getElementById('crmOtSender').value;
      var tpl = document.getElementById('crmOtTemplate').value;
      if (!name) { alert('Please enter a task name.'); return; }
      if (!sender) { alert('Please select a sending account.'); return; }
      if (!tpl) { alert('Please select an email template.'); return; }

      var selected = creators.filter(function (c) { return crmSelected.indexOf(c.id) !== -1 && !!c.email; });
      outreachTasks.push({
        id: 't' + (outreachTasks.length + 1),
        name: name,
        createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
        createdBy: currentUser.id,
        assignee: currentUser.id,
        audienceCount: selected.length,
        audienceTags: [],
        delivered: 0, opened: 0, clicked: 0, replied: 0,
        status: 'pending'
      });
      alert('Outreach task "' + name + '" created with ' + selected.length + ' recipients.');
      toggleOtModal(false);
      crmSelected = [];
      refreshCrm();
    });

    // --- Filters ---
    document.querySelectorAll('[data-crm-owner]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        crmFilter.owner = btn.getAttribute('data-crm-owner');
        crmSelected = [];
        refreshCrm();
      });
    });

    // Filter panel toggle
    var crfTrigger = document.getElementById('crfTrigger');
    var crfPanel = document.getElementById('crfPanel');
    var crfWrap = document.getElementById('crfPanelWrap');
    if (crfTrigger && crfPanel) {
      crfTrigger.addEventListener('click', function (e) {
        e.stopPropagation();
        crfPanel.classList.toggle('crf-panel--hidden');
      });
      document.addEventListener('click', function (e) {
        if (crfWrap && !crfWrap.contains(e.target)) crfPanel.classList.add('crf-panel--hidden');
      });
    }

    ['crmFilterStatus:status', 'crmFilterSource:source', 'crmFilterEmail:email', 'crmFilterData:data', 'crmFilterTag:tag'].forEach(function (pair) {
      var parts = pair.split(':');
      var el = document.getElementById(parts[0]);
      if (el) el.addEventListener('change', function () {
        crmFilter[parts[1]] = el.value;
        crmSelected = [];
        refreshCrm();
      });
    });

    // Active filter tag removal
    document.querySelectorAll('.crf-active-remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-clear');
        crmFilter[key] = '';
        crmSelected = [];
        refreshCrm();
      });
    });
    var clearAll = document.getElementById('crfClearAll');
    if (clearAll) clearAll.addEventListener('click', function () {
      crmFilter.status = ''; crmFilter.source = ''; crmFilter.email = ''; crmFilter.data = ''; crmFilter.tag = '';
      crmSelected = [];
      refreshCrm();
    });

    var searchInput = document.getElementById('crmSearchInput');
    var searchTimer = null;
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(function () {
          crmFilter.search = searchInput.value.trim();
          crmSelected = [];
          refreshCrm();
          var inp = document.getElementById('crmSearchInput');
          if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
        }, 250);
      });
    }

    updateBatchBar();
  }

  var discoverMode = 'filter';
  var filterDimension = 'creators';
  var discoverAppliedFilters = [];
  var BRAND_LIST = ['Nike', 'Adidas', 'Zara', 'H&M', 'Uniqlo', 'L\'Oréal', 'Maybelline', 'Estée Lauder', 'Dior', 'Chanel', 'Gucci', 'Louis Vuitton', 'Prada', 'MAC', 'Fenty Beauty', 'Sephora', 'Samsung', 'Apple', 'Sony', 'Lululemon', 'Under Armour', 'Puma', 'New Balance', 'Levi\'s', 'Gap', 'COS', 'Mango', 'ASOS', 'Shein', 'TikTok Shop'];

  function renderDiscoverAI() {
    return '<div class="fc-ai-panel">' +
      '<div class="fc-ai-indev">' +
        '<span class="fc-ai-pill">' +
          '<span class="fc-ai-pill-dot"></span>' +
          '<span class="fc-ai-pill-text">' + t('discover.ai.indev_badge') + '</span>' +
        '</span>' +
        '<div class="fc-ai-indev-copy">' +
          '<div class="fc-ai-indev-title">' + t('discover.ai.indev_title') + '</div>' +
          '<p class="fc-ai-indev-desc">' + t('discover.ai.indev_desc') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="fc-prompt-row">' +
        '<span class="discover-ai-icon"><i class="fas fa-wand-magic-sparkles"></i></span>' +
        '<input type="text" class="input" id="discoverInput" placeholder="' + t('discover.ai.placeholder') + '">' +
        '<button class="btn btn-primary" id="discoverSend" disabled><i class="fas fa-paper-plane"></i> ' + t('common.search') + '</button>' +
      '</div>' +
      '<div class="fc-hint">' + t('discover.ai.hint') + '</div>' +

      '<div class="fc-divider"></div>' +
      '<div class="fc-section-title">' + t('discover.ai.conversation') + '</div>' +
      '<div class="discover-messages fc-conversation" id="discoverMessages">' +
        '<div class="discover-msg bot">' + t('discover.ai.welcome') + '</div>' +
      '</div>' +
    '</div>';
  }

  function renderDiscoverFilter() {
    var creatorsActive = filterDimension === 'creators' ? ' fc-filter-dim--active' : '';
    var followersActive = filterDimension === 'followers' ? ' fc-filter-dim--active' : '';
    var perfActive = filterDimension === 'performance' ? ' fc-filter-dim--active' : '';

    var creatorsPanel = '<div class="fc-filter-dim-panel' + (filterDimension === 'creators' ? '' : ' fc-filter-dim-panel--hidden') + '" data-dim="creators">' +
      '<div class="fc-filter-dim-row">' +
        '<div class="fc-ff"><label class="form-label fc-label-with-hint"><span>' + t('discover.filter.product_category') + '</span><i class="fas fa-circle-question fc-label-hint" title="Select creator product category"></i></label>' +
          '<select class="select fc-select" id="ffCategory"><option value="">' + t('discover.filter.all_cat') + '</option>' +
          '<option>Beauty</option><option>Fashion</option><option>Food</option><option>Tech</option>' +
          '<option>Fitness</option><option>Lifestyle</option><option>Gaming</option><option>Education</option>' +
          '<option>Entertainment</option><option>Travel</option><option>Pets</option><option>Home</option></select></div>' +
        '<div class="fc-ff"><label class="form-label fc-label-with-hint"><span>' + t('discover.filter.avg_commission') + '</span><i class="fas fa-circle-question fc-label-hint" title="Average commission rate range"></i></label>' +
          '<select class="select fc-select" id="ffCommission"><option value="">' + t('common.any') + '</option><option>0-5%</option><option>5-10%</option><option>10-20%</option><option>20%+</option></select></div>' +
        '<div class="fc-ff"><label class="form-label fc-label-with-hint"><span>' + t('discover.filter.content_type') + '</span><i class="fas fa-circle-question fc-label-hint" title="Video, LIVE, or both"></i></label>' +
          '<select class="select fc-select" id="ffContentType"><option value="">' + t('common.any') + '</option><option>Video</option><option>LIVE</option><option>Both</option></select></div>' +
        '<div class="fc-ff"><label class="form-label">' + t('discover.filter.creator_agency') + '</label>' +
          '<select class="select fc-select" id="ffAgency"><option value="">' + t('common.any') + '</option><option>Yes</option><option>No</option></select></div>' +
        '<button type="button" class="fc-filter-clear" title="Clear"><i class="fas fa-times"></i></button>' +
      '</div>' +
      '<div class="fc-filter-dim-row">' +
        '<div class="fc-ff"><label class="form-label fc-label-with-hint"><span>' + t('discover.filter.category_pro') + '</span><i class="fas fa-circle-question fc-label-hint" title="Category professional creators"></i></label>' +
          '<select class="select fc-select" id="ffCategoryPro"><option value="">' + t('common.any') + '</option><option>Yes</option><option>No</option></select></div>' +
        '<div class="fc-ff fc-ff-check"><label class="fc-check-label"><input type="checkbox" class="fc-check" id="ffFastGrowing"> <span>' + t('discover.filter.fast_growing') + '</span><i class="fas fa-circle-question fc-label-hint" title="Rapidly growing creators"></i></label></div>' +
        '<div class="fc-ff fc-ff-check"><label class="fc-check-label"><input type="checkbox" class="fc-check" id="ffLiveCreators"> <span>' + t('discover.filter.live_creators') + '</span><i class="fas fa-circle-question fc-label-hint" title="Creators who do LIVE streams"></i></label></div>' +
      '</div></div>';

    var followersPanel = '<div class="fc-filter-dim-panel' + (filterDimension === 'followers' ? '' : ' fc-filter-dim-panel--hidden') + '" data-dim="followers">' +
      '<div class="fc-filter-dim-row">' +
        '<div class="fc-ff"><label class="form-label">' + t('discover.filter.follower_age') + '</label>' +
          '<select class="select fc-select" id="ffFollowerAge"><option value="">' + t('common.any') + '</option><option>18-24</option><option>25-34</option><option>35-44</option><option>45+</option></select></div>' +
        '<div class="fc-ff"><label class="form-label">' + t('discover.filter.follower_count') + '</label>' +
          '<div class="fc-range-row"><input type="text" class="input fc-input-sm" id="ffFollowerMin" placeholder="' + t('common.min') + '"><span class="fc-range-sep">&ndash;</span><input type="text" class="input fc-input-sm" id="ffFollowerMax" placeholder="' + t('common.max') + '"></div></div>' +
        '<div class="fc-ff"><label class="form-label">' + t('discover.filter.follower_gender') + '</label>' +
          '<select class="select fc-select" id="ffGender"><option value="">' + t('common.any') + '</option><option>Male</option><option>Female</option></select></div>' +
        '<button type="button" class="fc-filter-clear" title="Clear"><i class="fas fa-times"></i></button>' +
      '</div></div>';

    var perfPanel = '<div class="fc-filter-dim-panel' + (filterDimension === 'performance' ? '' : ' fc-filter-dim-panel--hidden') + '" data-dim="performance">' +
      '<div class="fc-filter-dim-row">' +
        '<div class="fc-ff"><label class="form-label fc-label-with-hint"><span>' + t('discover.filter.gmv') + '</span><i class="fas fa-circle-question fc-label-hint" title="Gross merchandise value"></i></label>' +
          '<div class="fc-range-row"><input type="text" class="input fc-input-sm" id="ffGmvMin" placeholder="' + t('common.min') + '"><span class="fc-range-sep">&ndash;</span><input type="text" class="input fc-input-sm" id="ffGmvMax" placeholder="' + t('common.max') + '"></div></div>' +
        '<div class="fc-ff"><label class="form-label fc-label-with-hint"><span>' + t('discover.filter.items_sold') + '</span><i class="fas fa-circle-question fc-label-hint" title="Number of items sold"></i></label>' +
          '<div class="fc-range-row"><input type="text" class="input fc-input-sm" id="ffSoldMin" placeholder="' + t('common.min') + '"><span class="fc-range-sep">&ndash;</span><input type="text" class="input fc-input-sm" id="ffSoldMax" placeholder="' + t('common.max') + '"></div></div>' +
        '<div class="fc-ff"><label class="form-label">' + t('discover.filter.avg_views_video') + '</label>' +
          '<div class="fc-range-row"><input type="text" class="input fc-input-sm" id="ffVidViewMin" placeholder="' + t('common.min') + '"><span class="fc-range-sep">&ndash;</span><input type="text" class="input fc-input-sm" id="ffVidViewMax" placeholder="' + t('common.max') + '"></div></div>' +
        '<div class="fc-ff"><label class="form-label">' + t('discover.filter.avg_viewers_live') + '</label>' +
          '<div class="fc-range-row"><input type="text" class="input fc-input-sm" id="ffLiveViewMin" placeholder="' + t('common.min') + '"><span class="fc-range-sep">&ndash;</span><input type="text" class="input fc-input-sm" id="ffLiveViewMax" placeholder="' + t('common.max') + '"></div></div>' +
        '<button type="button" class="fc-filter-clear" title="Clear"><i class="fas fa-times"></i></button>' +
      '</div>' +
      '<div class="fc-filter-dim-row">' +
        '<div class="fc-ff"><label class="form-label fc-label-with-hint"><span>' + t('discover.filter.engagement_rate') + '</span><i class="fas fa-circle-question fc-label-hint" title="Engagement rate percentage"></i></label>' +
          '<div class="fc-range-row"><input type="text" class="input fc-input-sm" id="ffVidEngMin" placeholder="' + t('common.min') + ' %"><span class="fc-range-sep">&ndash;</span><input type="text" class="input fc-input-sm" id="ffVidEngMax" placeholder="' + t('common.max') + ' %"></div></div>' +
        '<div class="fc-ff"><label class="form-label fc-label-with-hint"><span>' + t('discover.filter.brand_collabs') + '</span><i class="fas fa-circle-question fc-label-hint" title="Brand collaboration history"></i></label>' +
          '<div class="fc-brand-wrap" id="fcBrandWrap">' +
            '<input type="text" class="input fc-select fc-brand-input" id="ffBrandCollabs" placeholder="' + t('discover.filter.brand_search_ph') + '" autocomplete="off">' +
            '<i class="fas fa-chevron-down fc-brand-chevron"></i>' +
            '<div class="fc-brand-dropdown fc-brand-dropdown--hidden" id="fcBrandDropdown"></div>' +
          '</div></div>' +
      '</div></div>';

    return '<div class="fc-filter-panel">' +
      '<div class="fc-filter-by">' +
        '<span class="fc-filter-by-label">' + t('discover.filter.by') + '</span>' +
        '<div class="fc-filter-dims">' +
          '<button type="button" class="fc-filter-dim' + creatorsActive + '" data-dim="creators">' + t('discover.filter.dim_creators') + '</button>' +
          '<button type="button" class="fc-filter-dim' + followersActive + '" data-dim="followers">' + t('discover.filter.dim_followers') + '</button>' +
          '<button type="button" class="fc-filter-dim' + perfActive + '" data-dim="performance">' + t('discover.filter.dim_performance') + '</button>' +
        '</div>' +
        '<select class="select fc-marketplace-inline" id="discoverMarketplace" disabled>' +
          '<option value="US" selected>US Marketplace</option>' +
        '</select>' +
      '</div>' +
      creatorsPanel + followersPanel + perfPanel +
      '<div class="fc-filter-actions">' +
        '<button type="button" class="btn btn-secondary" id="filterReset"><i class="fas fa-undo"></i> ' + t('discover.filter.reset') + '</button>' +
        '<button type="button" class="btn btn-primary" id="filterSearch"><i class="fas fa-search"></i> ' + t('discover.filter.search') + '</button>' +
      '</div>' +
    '</div>';
  }

  function renderDiscover() {
    var activeMarkets = getActiveMarketplaces();
    if (!activeMarkets.length) {
      return '<div class="fc-page-header">' +
        '<h1 class="page-title">' + t('discover.title') + '</h1>' +
        '<p class="fc-page-desc">' + t('discover.desc') + '</p>' +
        '</div>' +
        '<div class="card fc-card">' +
          '<div class="fc-empty-tts">' +
            '<h2>Connect TikTok Shop to start</h2>' +
            '<p>Go to Tenant Center &gt; Tenant to connect at least one TikTok Shop by country.</p>' +
            '<button class="btn btn-primary" id="btnGoTenant"><i class="fas fa-building"></i> ' + t('nav.tenant_center') + '</button>' +
          '</div>' +
        '</div>';
    }
    var aiActive = discoverMode === 'ai' ? ' fc-mode-tab--active' : '';
    var filterActive = discoverMode === 'filter' ? ' fc-mode-tab--active' : '';

    return '<div class="fc-page-header">' +
      '<h1 class="page-title">' + t('discover.title') + '</h1>' +
      '<p class="fc-page-desc">' + t('discover.desc') + '</p>' +
      '</div>' +
      '<div class="card fc-card">' +
        '<div class="fc-mode-tabs-wrap">' +
          '<div class="fc-mode-tabs" id="discoverModeTabs">' +
            '<button class="fc-mode-tab' + aiActive + '" data-mode="ai"><i class="fas fa-wand-magic-sparkles"></i> ' + t('discover.ai') + '</button>' +
            '<button class="fc-mode-tab' + filterActive + '" data-mode="filter"><i class="fas fa-sliders-h"></i> ' + t('discover.filter') + '<span class="crf-badge fc-filter-badge" id="discoverFilterBadge"' + (discoverAppliedFilters.length ? '' : ' style="display:none"') + '>' + (discoverAppliedFilters.length || '') + '</span></button>' +
          '</div>' +
        '</div>' +
        '<div id="discoverModeBody">' + (discoverMode === 'ai' ? renderDiscoverAI() : renderDiscoverFilter()) + '</div>' +
        '<div id="discoverResultsSection" class="fc-results-section fc-results-section--hidden">' +
          '<div class="fc-divider"></div>' +
          '<div class="fc-results-bar">' +
            '<div class="fc-results-left">' +
              '<div class="fc-section-title" style="margin:0">' + t('discover.results') + ' <span class="fc-results-badge">' + t('discover.test_data') + '</span></div>' +
              '<div class="fc-meta" id="discoverMeta">&mdash;</div>' +
            '</div>' +
            '<button class="btn btn-primary btn-sm btn--disabled-look" id="discoverBatchAdd"><i class="fas fa-plus"></i> ' + t('discover.add_leads') + '</button>' +
          '</div>' +
          '<div class="crf-active-tags" id="discoverActiveTags"></div>' +
          '<div id="discoverResults" class="fc-results"></div>' +
        '</div>' +
      '</div>';
  }

  var activeOutreachTab = 'tasks';

  function renderOutreachTabContent(tab) {
    if (tab === 'accounts') return renderOutreachAccounts();
    if (tab === 'templates') return renderOutreachTemplates();
    return renderOutreachTasks();
  }

  function renderOutreachAccounts() {
    var sendingAccounts = emailAccounts.filter(function (a) { return a.type === 'sending'; });
    var receivingAccounts = emailAccounts.filter(function (a) { return a.type === 'receiving'; });

    function accountCard(a) {
        var badgeHtml = '';
        var metaText = '';
        if (a.type === 'sending') {
          if (a.status === 'Verified') {
            badgeHtml = '<span class="badge badge-success">' + t('outreach.acct.badge_verified') + '</span>';
            metaText = t('outreach.acct.meta_verified');
          } else {
            badgeHtml = '<span class="badge badge-warning">' + t('outreach.acct.badge_pending') + '</span>';
            metaText = t('outreach.acct.meta_pending');
          }
        } else {
          badgeHtml = '<span class="badge badge-secondary">' + t('outreach.acct.badge_connected') + '</span>';
        }

        return '<div class="or-account-card">' +
          '<div class="or-account-info">' +
            '<div class="or-account-icon-wrap"><i class="fas ' + (a.type === 'sending' ? 'fa-paper-plane' : 'fa-inbox') + '"></i></div>' +
            '<div>' +
              '<div class="or-account-email">' + a.email + '</div>' +
              '<div class="or-account-meta">' + badgeHtml + (metaText ? '<span>' + metaText + '</span>' : '') + '</div>' +
            '</div>' +
          '</div>' +
          '<button class="btn btn-secondary btn-sm or-remove-account" data-id="' + a.id + '" title="Remove"><i class="fas fa-trash-alt"></i></button>' +
        '</div>';
    }

    return '<div class="or-tab-header"><div><h2 class="or-tab-title">' + t('outreach.acct.title') + '</h2>' +
      '<p class="or-tab-desc">' + t('outreach.acct.desc') + '</p></div>' +
      '<button class="btn btn-primary" id="btnAddEmail"><i class="fas fa-plus"></i> ' + t('outreach.acct.add') + '</button></div>' +
      '<div class="or-accounts-grid">' +
        '<div class="or-accounts-col">' +
          '<div class="or-col-label"><i class="fas fa-arrow-up"></i> ' + t('outreach.acct.sending') + '</div>' +
          (sendingAccounts.length ? sendingAccounts.map(accountCard).join('') : '<div class="or-empty-col"><i class="fas fa-paper-plane"></i><p>' + t('outreach.acct.no_send') + '</p></div>') +
        '</div>' +
        '<div class="or-accounts-col">' +
          '<div class="or-col-label"><i class="fas fa-arrow-down"></i> ' + t('outreach.acct.receiving') + '</div>' +
          (receivingAccounts.length ? receivingAccounts.map(accountCard).join('') : '<div class="or-empty-col"><i class="fas fa-inbox"></i><p>' + t('outreach.acct.no_recv') + '</p></div>') +
        '</div>' +
      '</div>' +

      '<div class="modal-overlay" id="addEmailModal">' +
        '<div class="modal">' +
          '<button type="button" class="modal-close" id="closeEmailModal"><i class="fas fa-times"></i></button>' +
          '<h3 class="modal-title">' + t('outreach.acct.modal_title') + '</h3>' +

          '<div class="form-group"><label class="form-label">' + t('outreach.acct.type') + '</label>' +
            '<div class="or-audience-tabs">' +
              '<button type="button" class="or-aud-tab or-aud-tab--active" data-email-type="sending"><i class="fas fa-paper-plane"></i> ' + t('outreach.acct.sending') + '</button>' +
              '<button type="button" class="or-aud-tab" data-email-type="receiving"><i class="fas fa-inbox"></i> ' + t('outreach.acct.receiving') + '</button>' +
            '</div>' +
          '</div>' +

          '<div class="form-group"><label class="form-label">' + t('outreach.acct.email') + '</label>' +
            '<input type="email" class="input" id="emailAddr" placeholder="' + t('outreach.acct.email_ph') + '"></div>' +

          '<div id="emailReplyFields" style="display:none">' +
            '<div class="form-group">' +
              '<label class="form-label">' + t('outreach.acct.app_pw') + ' <span class="form-label-hint">' + t('outreach.acct.app_pw_hint') + '</span></label>' +
              '<input type="password" class="input" id="emailAppPassword" placeholder="' + t('outreach.acct.app_pw_ph') + '">' +
              '<div class="form-field-note">' +
                '<i class="fas fa-info-circle"></i>' +
                '<div>' +
                  '<p>' + t('outreach.acct.pw_note') + '</p>' +
                  '<ul>' +
                    '<li>' + t('outreach.acct.pw_gmail') + '</li>' +
                    '<li>' + t('outreach.acct.pw_outlook') + '</li>' +
                    '<li>' + t('outreach.acct.pw_qq') + '</li>' +
                  '</ul>' +
                  '<p>' + t('outreach.acct.pw_note2') + '</p>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<div style="display:flex;justify-content:flex-end;gap:var(--space-md);margin-top:var(--space-xl)">' +
            '<button class="btn btn-secondary" id="cancelEmail">' + t('common.cancel') + '</button>' +
            '<button class="btn btn-primary" id="confirmEmail"><i class="fas fa-plug"></i> ' + t('outreach.acct.connect') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="modal-overlay" id="sendingVerifyPopupModal">' +
        '<div class="modal">' +
          '<button type="button" class="modal-close" id="closeSendingVerifyPopup"><i class="fas fa-times"></i></button>' +
          '<h3 class="modal-title">' + t('outreach.acct.verify_popup_title') + '</h3>' +
          '<p class="modal-desc">' + t('outreach.acct.verify_popup_desc') + '</p>' +
          '<div style="display:flex;justify-content:flex-end;gap:var(--space-md);margin-top:var(--space-xl)">' +
            '<button class="btn btn-primary" id="okSendingVerifyPopup">' + t('outreach.acct.verify_popup_ok') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="modal-overlay" id="deleteEmailConfirmModal">' +
        '<div class="modal">' +
          '<button type="button" class="modal-close" id="closeDeleteEmailConfirm"><i class="fas fa-times"></i></button>' +
          '<h3 class="modal-title">' + t('outreach.acct.remove_confirm_title') + '</h3>' +
          '<p class="modal-desc" id="deleteEmailConfirmMsg">' + t('outreach.acct.remove_confirm_msg') + '</p>' +
          '<div style="display:flex;justify-content:flex-end;gap:var(--space-md);margin-top:var(--space-xl)">' +
            '<button class="btn btn-secondary" id="cancelDeleteEmail">' + t('common.cancel') + '</button>' +
            '<button class="btn btn-primary" id="confirmDeleteEmail"><i class="fas fa-trash-alt"></i> ' + t('outreach.acct.remove_confirm_btn') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  var tplFilter = { owner: 'all', search: '' };

  function findMemberName(uid) {
    for (var i = 0; i < teamMembers.length; i++) { if (teamMembers[i].id === uid) return teamMembers[i]; }
    return { name: 'Unknown', avatar: '??' };
  }

  function getFilteredTemplates() {
    return emailTemplates.filter(function (tpl) {
      if (tplFilter.owner === 'mine' && tpl.createdBy !== currentUser.id) return false;
      if (tplFilter.search) {
        var q = tplFilter.search.toLowerCase();
        var nameMatch = tpl.name.toLowerCase().indexOf(q) !== -1;
        var subjectMatch = tpl.subject.toLowerCase().indexOf(q) !== -1;
        if (!nameMatch && !subjectMatch) return false;
      }
      return true;
    });
  }

  function renderOutreachTemplates() {
    var filtered = getFilteredTemplates();

    var templateRows = filtered.map(function (tpl) {
      var m = findMemberName(tpl.createdBy);
      return '<tr data-id="' + tpl.id + '">' +
        '<td><strong>' + tpl.name + '</strong></td>' +
        '<td class="or-tpl-subject">' + tpl.subject + '</td>' +
        '<td><span class="tpl-creator"><span class="avatar-mini">' + m.avatar + '</span> ' + m.name + '</span></td>' +
        '<td>' + tpl.updatedAt + '</td>' +
        '<td><div class="table-actions"><button class="btn btn-secondary btn-sm or-edit-tpl" data-id="' + tpl.id + '">' + t('common.edit') + '</button></div></td>' +
      '</tr>';
    }).join('');

    var emptyRow = '<tr><td colspan="5" class="or-empty-table"><i class="fas fa-file-alt"></i><p>' +
      (tplFilter.search || tplFilter.owner === 'mine' ? t('outreach.tpl.empty.filter') : t('outreach.tpl.empty.none')) +
      '</p></td></tr>';

    var ownerBtns =
      '<button type="button" class="tpl-filter-btn' + (tplFilter.owner === 'all' ? ' tpl-filter-btn--active' : '') + '" data-tpl-owner="all">' + t('common.all') + '</button>' +
      '<button type="button" class="tpl-filter-btn' + (tplFilter.owner === 'mine' ? ' tpl-filter-btn--active' : '') + '" data-tpl-owner="mine">' + t('outreach.tpl.mine') + '</button>';

    return '<div class="or-tab-header"><div><h2 class="or-tab-title">' + t('outreach.tpl.title') + '</h2>' +
      '<p class="or-tab-desc">' + t('outreach.tpl.desc') + '</p></div>' +
      '<button class="btn btn-primary" id="btnNewTemplate"><i class="fas fa-plus"></i> ' + t('outreach.tpl.new') + '</button></div>' +

      '<div class="tpl-toolbar">' +
        '<div class="tpl-filter-group">' + ownerBtns + '</div>' +
        '<div class="tpl-search-wrap"><i class="fas fa-search"></i><input type="text" class="tpl-search-input" id="tplSearchInput" placeholder="' + t('outreach.tpl.search') + '" value="' + (tplFilter.search || '') + '"></div>' +
        '<span class="tpl-count">' + filtered.length + ' / ' + emailTemplates.length + '</span>' +
      '</div>' +

      '<div class="card table-wrap">' +
        '<table><thead><tr><th>' + t('common.name') + '</th><th>' + t('common.subject') + '</th><th>' + t('common.creator') + '</th><th>' + t('common.updated') + '</th><th width="80">' + t('common.actions') + '</th></tr></thead>' +
        '<tbody>' + (templateRows || emptyRow) + '</tbody></table>' +
      '</div>';
  }

  function renderOutreachTasks() {
    var sendingAccounts = emailAccounts.filter(function (a) { return a.type === 'sending'; });
    var receivingAccounts = emailAccounts.filter(function (a) { return a.type === 'receiving'; });
    var sendingOptions = sendingAccounts.map(function (a) {
      var isVerified = a.status === 'Verified';
      var suffix = isVerified ? '' : t('outreach.acct.pending_suffix');
      return '<option value="' + a.id + '"' + (isVerified ? '' : ' disabled') + '>' + a.email + suffix + '</option>';
    }).join('');
    var replyOptions = receivingAccounts.map(function (a) { return '<option value="' + a.id + '">' + a.email + '</option>'; }).join('');
    var templateOptions = emailTemplates.map(function (tpl) { return '<option value="' + tpl.id + '">' + tpl.name + '</option>'; }).join('');

    var allTags = globalTags.slice();

    function findMember(uid) {
      for (var i = 0; i < teamMembers.length; i++) { if (teamMembers[i].id === uid) return teamMembers[i]; }
      return { name: 'Unknown', avatar: '??' };
    }

    var taskCards = outreachTasks.map(function (tk) {
      var statusLabel, statusClass;
      if (tk.status === 'pending') { statusLabel = t('outreach.tasks.scheduled'); statusClass = 'badge-neutral'; }
      else if (tk.status === 'sending') { statusLabel = t('outreach.tasks.sending'); statusClass = 'badge-primary'; }
      else if (tk.status === 'completed') { statusLabel = t('outreach.tasks.completed'); statusClass = 'badge-success'; }
      else if (tk.status === 'failed') { statusLabel = t('outreach.tasks.failed'); statusClass = 'badge-danger'; }
      else { statusLabel = t('outreach.tasks.scheduled'); statusClass = 'badge-neutral'; }

      var rightHtml = '<span class="badge ' + statusClass + '">' + statusLabel + '</span>';
      if (tk.status === 'failed') {
        rightHtml += '<button class="btn btn-secondary btn-sm outreach-retry" data-id="' + tk.id + '">' + t('common.retry') + '</button>';
      }

      var creator = findMember(tk.createdBy);

      return '<div class="outreach-item" data-id="' + tk.id + '">' +
        '<div class="outreach-item-main">' +
          '<h4>' + tk.name + '</h4>' +
          '<div class="meta">' + t('outreach.tasks.created') + ' ' + tk.createdAt + ' &middot; ' + tk.audienceCount + ' ' + t('outreach.tasks.recipients') + '</div>' +
          '<div class="outreach-stats"><span>' + t('outreach.tasks.delivered') + ': ' + tk.delivered + '</span><span>' + t('outreach.tasks.opened') + ': ' + tk.opened + '</span><span>' + t('outreach.tasks.clicked') + ': ' + tk.clicked + '</span><span>' + t('outreach.tasks.replied') + ': ' + tk.replied + '</span></div>' +
          '<div class="outreach-people">' +
            '<span class="outreach-person" title="' + creator.name + '"><span class="avatar-mini">' + creator.avatar + '</span> ' + creator.name + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="outreach-item-right">' + rightHtml + '</div></div>';
    }).join('');

    var tagDataAttr = allTags.map(function (tg) { return tg; }).join(',');

    return '<div class="or-tab-header"><div><h2 class="or-tab-title">' + t('outreach.tasks.title') + '</h2>' +
      '<p class="or-tab-desc">' + t('outreach.tasks.desc') + '</p></div>' +
      '<button class="btn btn-primary" id="btnNewOutreach"><i class="fas fa-plus"></i> ' + t('outreach.tasks.new') + '</button></div>' +
      '<div class="outreach-list" id="outreachList">' + (taskCards || '<div class="empty-state"><i class="fas fa-envelope-open-text"></i><p>' + t('outreach.tasks.empty') + '</p></div>') + '</div>' +

      '<div class="modal-overlay" id="newTaskModal">' +
        '<div class="modal">' +
          '<button type="button" class="modal-close" id="closeNewTaskModal"><i class="fas fa-times"></i></button>' +
          '<h3 class="modal-title">' + t('outreach.modal.title') + '</h3>' +

          '<div class="form-group"><label class="form-label">' + t('outreach.modal.name') + '</label>' +
            '<input type="text" class="input" id="newTaskName" placeholder="' + t('outreach.modal.name_ph') + '"></div>' +

          '<div class="form-row">' +
            '<div class="form-group form-group--half"><label class="form-label">' + t('outreach.modal.send_from') + '</label>' +
              '<select class="select" id="newTaskSender"><option value="">' + t('outreach.modal.select_sender') + '</option>' + sendingOptions + '</select></div>' +
            '<div class="form-group form-group--half"><label class="form-label">' + t('outreach.modal.reply_to') + '</label>' +
              '<select class="select" id="newTaskReply"><option value="">' + t('outreach.modal.select_reply') + '</option>' + replyOptions + '</select></div>' +
          '</div>' +
          '<div class="or-sender-verify-hint" id="newTaskSenderHint" aria-live="polite">' +
            '<span class="badge badge-neutral">' + t('common.hint') + '</span>' +
            '<span class="or-sender-verify-hint-text">' + t('outreach.modal.hint_select_sender') + '</span>' +
          '</div>' +

          '<div class="form-group"><label class="form-label">' + t('outreach.modal.template') + '</label>' +
            '<select class="select" id="newTaskTemplate"><option value="">' + t('outreach.modal.select_tpl') + '</option>' + templateOptions + '</select></div>' +

          '<div class="or-conflict-banner or-conflict--hidden" id="conflictBanner">' +
            '<i class="fas fa-exclamation-triangle"></i>' +
            '<div class="or-conflict-text"></div>' +
          '</div>' +

          '<div class="form-group"><label class="form-label">' + t('outreach.modal.audience') + '</label>' +
            '<div class="or-audience-tabs">' +
              '<button type="button" class="or-aud-tab or-aud-tab--active" data-aud="tags"><i class="fas fa-tags"></i> ' + t('outreach.modal.by_tags') + '</button>' +
              '<button type="button" class="or-aud-tab" data-aud="upload"><i class="fas fa-file-upload"></i> ' + t('outreach.modal.upload') + '</button>' +
            '</div>' +
            '<div class="or-audience-body" id="audBody">' +
              '<div class="or-aud-panel" id="audTags" data-all-tags="' + tagDataAttr + '">' +
                '<div class="ms-wrap" id="msWrap">' +
                  '<div class="ms-selected" id="msSelected"></div>' +
                  '<input type="text" class="ms-input" id="msInput" placeholder="' + t('outreach.modal.tag_ph') + '">' +
                  '<div class="ms-dropdown ms-dropdown--hidden" id="msDropdown"></div>' +
                '</div>' +
              '</div>' +
              '<div class="or-aud-panel or-aud-panel--hidden" id="audUpload">' +
                '<div class="or-upload-zone" id="uploadZone">' +
                  '<i class="fas fa-cloud-upload-alt"></i>' +
                  '<p>' + t('outreach.modal.drop') + '</p>' +
                  '<input type="file" id="newTaskFile" accept=".csv,.xlsx,.xls" class="or-upload-input">' +
                '</div>' +
                '<div class="or-upload-hint">' + t('outreach.modal.file_hint') + '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<div style="display:flex;justify-content:flex-end;gap:var(--space-md);margin-top:var(--space-xl)">' +
            '<button class="btn btn-secondary" id="cancelNewTask">' + t('common.cancel') + '</button>' +
            '<button class="btn btn-primary" id="confirmNewTask">' + t('outreach.modal.create') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function renderOutreach() {
    var tabs = [
      { id: 'tasks', icon: 'fa-paper-plane', label: t('outreach.tab.tasks'), count: outreachTasks.length },
      { id: 'templates', icon: 'fa-file-alt', label: t('outreach.tab.templates'), count: emailTemplates.length },
      { id: 'accounts', icon: 'fa-envelope', label: t('outreach.tab.accounts'), count: emailAccounts.length }
    ];

    var tabBar = tabs.map(function (t) {
      var cls = 'or-tab' + (t.id === activeOutreachTab ? ' or-tab--active' : '');
      return '<button class="' + cls + '" data-tab="' + t.id + '">' +
        '<i class="fas ' + t.icon + '"></i> ' + t.label +
        '<span class="or-tab-count">' + t.count + '</span></button>';
    }).join('');

    return '<div class="or-page">' +
      '<h1 class="page-title">' + t('outreach.title') + '</h1>' +
      '<div class="or-tabs" id="outreachTabs">' + tabBar + '</div>' +
      '<div class="or-tab-body" id="outreachTabBody">' + renderOutreachTabContent(activeOutreachTab) + '</div>' +
      '</div>';
  }

  var tcPanel = 'plan';

  function renderTenantCenterSidebar() {
    var nav = '';
    nav += '<div class="tc-nav-block">' +
      '<a href="#" class="tc-nav-item' + (tcPanel === 'plan' ? ' tc-nav-item--active' : '') + '" data-tc-panel="plan"><i class="fas fa-chart-pie"></i> ' + t('tc.plan_usage') + '</a>' +
    '</div><div class="tc-nav-divider"></div>';
    nav += '<div class="tc-nav-block">' +
      '<div class="tc-nav-title"><i class="fas fa-file-invoice-dollar"></i> ' + t('tc.billing_invoices') + '</div>' +
      '<a href="#" class="tc-nav-item' + (tcPanel === 'billing' ? ' tc-nav-item--active' : '') + '" data-tc-panel="billing">' + t('tc.orders') + '</a>' +
      '<a href="#" class="tc-nav-item" data-tc-panel="billing">' + t('tc.invoices') + '</a>' +
    '</div><div class="tc-nav-divider"></div>';
    nav += '<div class="tc-nav-block">' +
      '<div class="tc-nav-title"><i class="fas fa-users"></i> ' + t('tc.host_affiliate') + '</div>' +
      '<a href="#" class="tc-nav-item' + (tcPanel === 'ha_manage' ? ' tc-nav-item--active' : '') + '" data-tc-panel="ha_manage">' + t('tc.ha_manage') + '</a>' +
      '<a href="#" class="tc-nav-item' + (tcPanel === 'ha_settlement' ? ' tc-nav-item--active' : '') + '" data-tc-panel="ha_settlement">' + t('tc.ha_settlement') + '</a>' +
    '</div><div class="tc-nav-divider"></div>';
    nav += '<div class="tc-nav-block">' +
      '<div class="tc-nav-title"><i class="fas fa-building"></i> ' + t('tc.tenant') + '</div>' +
      '<a href="#" class="tc-nav-item' + (tcPanel === 'tenant' ? ' tc-nav-item--active' : '') + '" data-tc-panel="tenant">' + t('tc.profile') + '</a>' +
      '<a href="#" class="tc-nav-item">' + t('tc.live_account') + '</a>' +
      '<a href="#" class="tc-nav-item' + (tcPanel === 'tenant_tts' ? ' tc-nav-item--active' : '') + '" data-tc-panel="tenant_tts">' + t('tc.tenant_tts') + '</a>' +
    '</div><div class="tc-nav-divider"></div>';
    nav += '<div class="tc-nav-block">' +
      '<div class="tc-nav-title"><i class="fas fa-cog"></i> ' + t('tc.admin') + '</div>' +
      '<a href="#" class="tc-nav-item' + (tcPanel === 'admin' ? ' tc-nav-item--active' : '') + '" data-tc-panel="admin">' + t('tc.account_settings') + '</a>' +
    '</div>';
    return nav;
  }

  function renderTenantCenterMain(panel) {
    if (panel === 'ha_manage') {
      return '<div class="tc-ha-page">' +
        '<div class="tc-panel-header">' +
          '<div class="tc-ha-head">' +
            '<h2 class="tc-section-title">' + t('tc.ha_manage') + '</h2>' +
            '<p class="tc-ha-desc">' + t('tc.ha_manage_desc') + '</p>' +
          '</div>' +
          '<div class="ha-tabs-row">' +
          '<div class="type-tabs">' +
            '<button type="button" class="type-tab active" data-type="all">' + t('tc.ha.all') + '</button>' +
            '<button type="button" class="type-tab" data-type="host">' + t('tc.ha.host') + '</button>' +
            '<button type="button" class="type-tab" data-type="affiliate">' + t('tc.ha.affiliate') + '</button>' +
          '</div>' +
          '<div class="invite-btn-group">' +
            '<button type="button" class="btn ha-invite-host"><i class="fas fa-user-plus"></i> ' + t('tc.ha.invite_host') + '</button>' +
            '<button type="button" class="btn ha-invite-affiliate"><i class="fas fa-user-plus"></i> ' + t('tc.ha.invite_affiliate') + '</button>' +
          '</div>' +
        '</div>' +
        '</div>' +
        '<section class="search-section">' +
          '<div class="search-row">' +
            '<input type="text" class="search-input" id="haSearchName" placeholder="' + t('tc.ha.search_name') + '">' +
            '<input type="text" class="search-input" id="haSearchContact" placeholder="' + t('tc.ha.search_contact') + '">' +
            '<button type="button" class="btn-search ha-search-btn">' + t('tc.ha.search') + '</button>' +
          '</div>' +
        '</section>' +
        '<section class="user-list" id="haUserList"></section>' +
      '</div>' +
      '<div class="ha-modal-overlay" id="haInviteModal">' +
        '<div class="ha-modal">' +
          '<button type="button" class="ha-modal-close ha-invite-close" aria-label="Close"><i class="fas fa-times"></i></button>' +
          '<h2 class="ha-modal-title" id="haModalTitle">' + t('tc.ha.invite_host_title') + '</h2>' +
          '<p class="ha-invite-hint">' + t('tc.ha.invite_hint') + '</p>' +
          '<div class="ha-invite-type-desc">' +
            '<div class="ha-invite-type-desc-title">How they go live</div>' +
            '<div class="ha-invite-type-desc-text" id="haInviteTypeDescText"></div>' +
          '</div>' +
          '<div class="ha-invite-link-box">' +
            '<span class="invite-link" id="haInviteLink">https://www.wahool.com/live/get-started/invite?tenantCode=550CRK&liveType=host</span>' +
          '</div>' +
          '<button type="button" class="ha-btn-copy" id="haBtnCopy"><i class="fas fa-link"></i> ' + t('tc.ha.copy_link') + '</button>' +
          '<div class="ha-invite-note">' +
            '<div class="ha-invite-note-label">' + t('tc.ha.note') + '</div>' +
            '<div class="ha-invite-note-text" id="haInviteNoteText"></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="ha-modal-overlay ha-account-info-modal" id="haAccountInfoModal">' +
        '<div class="ha-modal">' +
          '<button type="button" class="ha-modal-close ha-account-info-close" aria-label="Close"><i class="fas fa-times"></i></button>' +
          '<h2 class="ha-modal-title">' + t('tc.ha.account_info') + '</h2>' +
          '<div class="ha-account-info-header">' +
            '<div class="ha-account-info-avatar-wrap" id="haAccountInfoAvatarWrap">' +
              '<img class="ha-account-info-avatar" id="haAccountInfoAvatar" src="" alt="">' +
            '</div>' +
            '<div>' +
              '<div class="ha-account-info-name" id="haAccountInfoName">-</div>' +
              '<div class="ha-account-info-uid" id="haAccountInfoUid">UID: -</div>' +
              '<div class="ha-account-info-platforms"><i class="fab fa-tiktok" title="TikTok"></i><span>🇺🇸</span></div>' +
            '</div>' +
          '</div>' +
          '<div class="ha-account-info-fields">' +
            '<div class="ha-account-info-field">' +
              '<label>Status*</label>' +
              '<span class="value active" id="haAccountInfoStatus">Active</span>' +
            '</div>' +
            '<div class="ha-account-info-field">' +
              '<label>Type*</label>' +
              '<span class="value" id="haAccountInfoType">Creator</span>' +
            '</div>' +
            '<div class="ha-account-info-field">' +
              '<label>Last update</label>' +
              '<span class="value" id="haAccountInfoLastUpdate">-</span>' +
            '</div>' +
            '<div class="ha-account-info-field" id="haAccountInfoLastLiveRow">' +
              '<label>Last live</label>' +
              '<span class="value" id="haAccountInfoLastLive">-</span>' +
            '</div>' +
            '<div class="ha-account-info-field" id="haAccountInfoTotalRow">' +
              '<label>Total broadcasts</label>' +
              '<span class="value" id="haAccountInfoTotalBroadcasts">-</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }
    if (panel === 'ha_settlement') {
      return '' +
      '<div class="ha-settle-page">' +
        '<div class="tc-panel-header ha-settle-header">' +
          '<div class="tc-ha-head">' +
            '<h2 class="tc-section-title">' + t('tc.ha_settlement') + '</h2>' +
            '<p class="tc-ha-desc">' + t('tc.ha_settlement_desc') + '</p>' +
          '</div>' +
          '<div class="ha-settle-tabs">' +
            '<button type="button" class="ha-settle-tab' + (haSettleActiveTab === 'batch' ? ' ha-settle-tab--active' : '') + '" data-tab="batch"><i class="fas fa-file-invoice-dollar"></i><span>' + t('tc.ha.settle_tab_batch') + '</span></button>' +
            '<button type="button" class="ha-settle-tab' + (haSettleActiveTab === 'withdraw' ? ' ha-settle-tab--active' : '') + '" data-tab="withdraw"><i class="fas fa-hand-holding-usd"></i><span>' + t('tc.ha.settle_tab_withdraw') + '</span></button>' +
            '<button type="button" class="ha-settle-tab' + (haSettleActiveTab === 'rules' ? ' ha-settle-tab--active' : '') + '" data-tab="rules"><i class="fas fa-cog"></i><span>' + t('tc.ha.settle_tab_rules') + '</span></button>' +
            '<button type="button" class="ha-settle-tab' + (haSettleActiveTab === 'other_rewards' ? ' ha-settle-tab--active' : '') + '" data-tab="other_rewards"><i class="fas fa-gift"></i><span>' + t('tc.ha.settle_tab_other_rewards') + '</span></button>' +
            '<button type="button" class="ha-settle-tab' + (haSettleActiveTab === 'past_lives' ? ' ha-settle-tab--active' : '') + '" data-tab="past_lives"><i class="fas fa-video"></i><span>' + t('tc.ha.settle_tab_past_lives') + '</span></button>' +
          '</div>' +
        '</div>' +
        '<div class="ha-settle-body" id="haSettleBody"></div>' +
      '</div>';
    }
    if (panel === 'billing') {
      return '<div class="tc-placeholder"><div class="tc-placeholder-icon"><i class="fas fa-receipt"></i></div><p class="tc-placeholder-text">' + t('tc.orders_invoices_placeholder') + '</p></div>';
    }
    if (panel === 'tenant') {
      return '<div class="tc-placeholder"><div class="tc-placeholder-icon"><i class="fas fa-user-cog"></i></div><p class="tc-placeholder-text">' + t('tc.tenant_placeholder') + '</p></div>';
    }
    if (panel === 'tenant_tts') {
      var auths = loadTtsAuth();
      var cards = auths.length ? auths.map(function (a) {
        var mp = a.marketplace || a.country || '';
        var shopLabel = (a.shopName || 'TikTok Shop') + (mp ? ' · ' + mp : '');
        var status = (a.status || 'active') === 'active' ? t('tc.tts.auth_active') : t('tc.tts.auth_revoked');
        var lastUpdate = formatTtsDate(a.authorizedAt, a.country);
        return '' +
          '<div class="tc-tts-card" data-id="' + a.id + '">' +
            '<div class="tc-tts-header">' +
              '<div class="tc-tts-avatar"><i class="fab fa-tiktok"></i></div>' +
              '<div class="tc-tts-title">' +
                '<div class="tc-tts-shop-name">' + shopLabel + '</div>' +
                '<div class="tc-tts-shop-id">' + t('tc.tts.shop_id') + ': ' + (a.shopId || t('tc.tts.na')) + '</div>' +
              '</div>' +
            '</div>' +
            '<div class="tc-tts-body">' +
              '<div class="tc-tts-field"><span>' + t('tc.tts.auth_status') + '</span><span class="tc-tts-status tc-tts-status--' + (a.status || 'active') + '">' + status + '</span></div>' +
              '<div class="tc-tts-field"><span>' + t('tc.tts.marketplace') + '</span><span>' + (mp || t('tc.tts.na')) + '</span></div>' +
              '<div class="tc-tts-field"><span>' + t('tc.tts.last_update') + '</span><span class="tc-tts-date">' + (lastUpdate || t('tc.tts.na')) + '</span></div>' +
            '</div>' +
            '<div class="tc-tts-footer">' +
              '<button type="button" class="btn btn-secondary btn-sm tc-tts-renew" data-id="' + a.id + '">' + t('tc.tts.renew') + '</button>' +
              '<button type="button" class="btn btn-sm tc-tts-remove tc-tts-remove--destructive" data-id="' + a.id + '">' + t('tc.tts.remove') + '</button>' +
            '</div>' +
          '</div>';
      }).join('') : '' +
        '<div class="tc-tts-empty">' +
          '<div class="tc-tts-empty-icon"><i class="fab fa-tiktok"></i></div>' +
          '<h3 class="tc-tts-empty-title">' + t('tc.tts.empty_title') + '</h3>' +
          '<p class="tc-tts-empty-desc">' + t('tc.tts.empty_desc') + '</p>' +
          '<button type="button" class="btn btn-primary" id="btnTtsConnectEmpty"><i class="fab fa-tiktok"></i> ' + t('tc.tts.empty_cta') + '</button>' +
        '</div>';

      var connectRow = auths.length ? '<div class="tc-tts-connect">' +
        '<button type="button" class="btn btn-primary" id="btnTtsConnect"><i class="fab fa-tiktok"></i> ' + t('tc.tts.auth_btn') + '</button>' +
        '</div>' : '';

      return '' +
        '<div class="tc-tenant-tts-page">' +
          '<div class="tc-panel-header">' +
            '<div class="tc-ha-head">' +
              '<h2 class="tc-section-title">' + t('tc.tts.title') + '</h2>' +
              '<p class="tc-ha-desc">' + t('tc.tts.desc') + '</p>' +
            '</div>' +
          '</div>' +
          '<div class="card tc-card tc-tts-card-wrap">' +
            connectRow +
            '<div class="tc-tts-list' + (auths.length ? '' : ' tc-tts-list--empty') + '" id="ttsAuthList">' + cards + '</div>' +
          '</div>' +
        '</div>';
    }
    if (panel === 'admin') {
      return '<div class="tc-placeholder"><div class="tc-placeholder-icon"><i class="fas fa-shield-alt"></i></div><p class="tc-placeholder-text">' + t('tc.admin_placeholder') + '</p></div>';
    }
    return renderPlanCards();
  }

  function renderPlanCards() {
    var planType = getRole();
    var benefit1 = planType === 'affiliate' ? t('tc.affiliate_benefit_creators') : t('tc.live_benefit_sets');
    var benefit2 = planType === 'affiliate' ? t('tc.affiliate_benefit_find') : t('tc.live_benefit_hours');
    var benefit3 = planType === 'affiliate' ? t('tc.affiliate_benefit_outreach') : t('tc.live_benefit_schedule');
    var planLabel = planType === 'affiliate' ? 'LiveQ Affiliate' : 'LiveQ Live';
    return '<div class="tc-plan-card">' +
            '<div class="tc-plan-head">' +
              '<span class="tc-plan-name tc-plan-name--gradient">' + planLabel + ' Basic</span>' +
              '<span class="tc-plan-price">' + t('tc.price_49') + ' ' + t('tc.per_6_months') + '</span>' +
            '</div>' +
            '<div class="tc-plan-status"><span class="tc-plan-badge tc-plan-badge--pending">' + t('tc.pending') + '</span></div>' +
            '<div class="tc-plan-section">' +
              '<div class="tc-label">' + t('tc.available_days') + '</div>' +
              '<div class="tc-progress-wrap"><div class="tc-progress-track"><div class="tc-progress-fill" style="width:0%"></div></div></div>' +
              '<div class="tc-progress-caption"><span>' + t('tc.plan_effect_date') + '</span><span>180 ' + t('tc.days_remaining') + '</span></div>' +
            '</div>' +
            '<div class="tc-divider"></div>' +
            '<div class="tc-section-title">' + t('tc.benefits_usage') + '</div>' +
            '<div class="tc-benefit-item"><span class="tc-benefit-name">' + benefit1 + '</span><span class="tc-benefit-meta">2 ' + t('tc.set_remaining') + '：2</span></div>' +
            '<div class="tc-progress-wrap tc-progress-wrap--sm"><div class="tc-progress-track"><div class="tc-progress-fill" style="width:100%"></div></div></div>' +
            '<div class="tc-benefit-name">' + benefit2 + '</div>' +
            '<div class="tc-benefit-name">' + benefit3 + '</div>' +
            '<div class="tc-show-more"><span>' + t('tc.show_more') + '</span><i class="fas fa-chevron-down"></i></div>' +
          '</div>' +
          '<div class="tc-plan-card">' +
            '<div class="tc-plan-head">' +
              '<span class="tc-plan-name tc-plan-name--gradient">' + planLabel + ' PRO</span>' +
              '<span class="tc-plan-price">' + t('tc.price_49') + ' ' + t('tc.per_6_months') + '</span>' +
            '</div>' +
            '<div class="tc-plan-section">' +
              '<div class="tc-label">' + t('tc.available_days') + '</div>' +
              '<div class="tc-progress-wrap"><div class="tc-progress-track"><div class="tc-progress-fill tc-progress-fill--teal" style="width:71%"></div></div></div>' +
              '<div class="tc-progress-caption"><span>' + t('tc.current_billing_period') + '</span><span>30 ' + t('tc.days_remaining') + '</span></div>' +
            '</div>' +
            '<div class="tc-divider"></div>' +
            '<div class="tc-section-title">' + t('tc.benefits_usage') + '</div>' +
            '<div class="tc-benefit-item"><span class="tc-benefit-name">' + benefit1 + '</span><span class="tc-benefit-meta">1 ' + t('tc.set_remaining') + '：2</span></div>' +
            '<div class="tc-progress-wrap tc-progress-wrap--sm"><div class="tc-progress-track"><div class="tc-progress-fill tc-progress-fill--teal" style="width:50%"></div></div></div>' +
            '<div class="tc-benefit-name">' + benefit2 + '</div><div class="tc-benefit-name">' + benefit3 + '</div>' +
            '<div class="tc-show-more"><span>' + t('tc.show_more') + '</span><i class="fas fa-chevron-down"></i></div>' +
          '</div>' +
          '<div class="tc-plan-card">' +
            '<div class="tc-plan-head">' +
              '<span class="tc-plan-name tc-plan-name--gradient">' + t('tc.additional_seats') + '</span>' +
              '<span class="tc-plan-price">' + t('tc.price_1999') + ' ' + t('tc.per_day') + '</span>' +
            '</div>' +
            '<div class="tc-plan-section">' +
              '<div class="tc-label">' + t('tc.available_days') + '</div>' +
              '<div class="tc-progress-wrap"><div class="tc-progress-track"><div class="tc-progress-fill tc-progress-fill--teal" style="width:71%"></div></div></div>' +
              '<div class="tc-progress-caption"><span>' + t('tc.total_days') + '：180 days</span><span>30 ' + t('tc.days_remaining') + '</span></div>' +
            '</div>' +
            '<div class="tc-divider"></div>' +
            '<div class="tc-section-title">' + t('tc.benefits_usage') + '</div>' +
            '<div class="tc-benefit-item"><span class="tc-benefit-name">' + benefit1 + '</span><span class="tc-benefit-meta">2 ' + t('tc.set_remaining') + '：2</span></div>' +
            '<div class="tc-progress-wrap tc-progress-wrap--sm"><div class="tc-progress-track"><div class="tc-progress-fill tc-progress-fill--teal" style="width:49%"></div></div></div>' +
            '<div class="tc-show-more"><span>' + t('tc.show_more') + '</span><i class="fas fa-chevron-down"></i></div>' +
          '</div>';
  }

  var haManageFilter = 'all';
  var haManageSearchName = '';
  var haManageSearchContact = '';
  var haManageInviteType = 'host';
  var haManageUsers = [
    { id: 1, type: 'host', name: 'Maribel Maldonado', avatar: 'https://i.pravatar.cc/96?img=1', phone: '5858773515', email: 'Maribelsuniqueboutique@gmail.com', active: true, upcomingEvents: 3, lastEventAt: 'Feb 18, 2025 20:00', liveAccount: { username: 'homechef_mike', country: 'US' } },
    { id: 2, type: 'host', name: 'Priscilla Melendez', avatar: 'https://i.pravatar.cc/96?img=2', phone: '5858773516', email: null, active: true, upcomingEvents: 0, lastEventAt: 'Feb 10, 2025 19:30', liveAccount: { username: 'priscilla_live', country: 'CN' } },
    { id: 3, type: 'host', name: 'Francine Feero', avatar: null, phone: null, email: 'francine@example.com', active: true, upcomingEvents: 1, lastEventAt: null, liveAccount: { username: 'francine_f', country: 'DE' } },
    { id: 4, type: 'affiliate', name: 'Zee McAllister', avatar: 'https://i.pravatar.cc/96?img=4', phone: '+1 2255632553', email: '907528432@gmail.com', active: true, liveAccount: { authorized: true, username: 'dawnsummer_', country: 'US', accountInfo: { avatar: 'https://i.pravatar.cc/96?img=4', name: 'Mollymayfashion', uid: '7000714532876273410', status: 'Active', type: 'Creator', lastUpdate: 'Jan 29, 2022 16:00:38' } }, lastLiveAt: 'Feb 20, 2025 14:30', totalBroadcasts: 12 },
    { id: 5, type: 'affiliate', name: 'John McAllister', avatar: 'https://i.pravatar.cc/96?img=5', phone: '+1 2255632553', email: null, active: false, liveAccount: { authorized: false }, lastLiveAt: null, totalBroadcasts: 0 },
    { id: 6, type: 'affiliate', name: 'Alex Chen', avatar: 'https://i.pravatar.cc/96?img=6', phone: '5858773520', email: 'alex.chen@example.com', active: true, liveAccount: { authorized: true, username: 'alexlive_', country: 'US', accountInfo: { avatar: 'https://i.pravatar.cc/96?img=6', name: 'AlexCreator', uid: '8000825643987384521', status: 'Active', type: 'Creator', lastUpdate: 'Feb 15, 2025 10:30:22' } }, lastLiveAt: null, totalBroadcasts: 0 }
  ];
  function haGetMerchantLiveAccountCountries() {
    var countries = [];
    (haManageUsers || []).forEach(function (u) {
      var la = u.liveAccount;
      var country = la && la.country;
      if (country && countries.indexOf(country) === -1) countries.push(country);
    });
    countries.sort();
    return countries.length ? countries : ['US', 'CN'];
  }

  function haCountryFlag(code) {
    if (!code) return '';
    if (code === 'US') return '🇺🇸';
    if (code === 'CN') return '🇨🇳';
    if (code === 'DE') return '🇩🇪';
    return '';
  }
  function haCountryLabelWithFlag(code) {
    var flag = haCountryFlag(code);
    return code ? (code + (flag ? ' ' + flag : '')) : '';
  }

  var HA_INVITE_BASE = 'https://www.wahool.com/live/get-started/invite';
  var HA_TENANT_CODE = '550CRK';
  var HA_INVITE_CONFIG = {
    host: { titleKey: 'tc.ha.invite_host_title', liveType: 'host', noteKey: 'tc.ha.invite_note_host', methodKey: 'tc.ha.host_method' },
    affiliate: { titleKey: 'tc.ha.invite_affiliate_title', liveType: 'affiliate', noteKey: 'tc.ha.invite_note_affiliate', methodKey: 'tc.ha.affiliate_method' }
  };

  function haManageFilterUsers() {
    return haManageUsers.filter(function (u) {
      var matchType = haManageFilter === 'all' || u.type === haManageFilter;
      var matchName = !haManageSearchName || u.name.toLowerCase().indexOf(haManageSearchName.toLowerCase()) !== -1;
      var matchContact = !haManageSearchContact || (u.email && u.email.toLowerCase().indexOf(haManageSearchContact.toLowerCase()) !== -1) || (u.phone && u.phone.indexOf(haManageSearchContact) !== -1);
      return matchType && matchName && matchContact;
    });
  }

  function renderHaManageUserList() {
    var listEl = document.getElementById('haUserList');
    if (!listEl) return;
    var filtered = haManageFilterUsers();
    if (filtered.length === 0) {
      var cfg = { all: { icon: 'fa-users', titleKey: 'tc.ha.empty_all', descKey: 'tc.ha.empty_all_desc', showTypes: true, ctaHost: true, ctaAffiliate: true }, host: { icon: 'fa-calendar-check', titleKey: 'tc.ha.empty_host', descKey: 'tc.ha.empty_host_desc', showTypes: false, ctaHost: true, ctaAffiliate: false }, affiliate: { icon: 'fa-video', titleKey: 'tc.ha.empty_affiliate', descKey: 'tc.ha.empty_affiliate_desc', showTypes: false, ctaHost: false, ctaAffiliate: true } };
      var c = cfg[haManageFilter] || cfg.all;
      var typesHtml = c.showTypes ? '<div class="empty-state-types"><div class="empty-state-type-card"><h4><i class="fas fa-calendar-check"></i> ' + t('tc.ha.host') + '</h4><p>' + t('tc.ha.host_card_desc') + '</p></div><div class="empty-state-type-card"><h4><i class="fas fa-video"></i> ' + t('tc.ha.affiliate') + '</h4><p>' + t('tc.ha.affiliate_card_desc') + '</p></div></div>' : '';
      var ctaHtml = '<div class="empty-state-cta invite-btn-group">' + (c.ctaHost ? '<button type="button" class="btn btn-primary ha-invite-host"><i class="fas fa-plus"></i> ' + t('tc.ha.invite_host') + '</button>' : '') + (c.ctaAffiliate ? '<button type="button" class="btn btn-primary ha-invite-affiliate"><i class="fas fa-plus"></i> ' + t('tc.ha.invite_affiliate') + '</button>' : '') + '</div>';
      listEl.innerHTML = '<div class="empty-state"><i class="fas ' + c.icon + '"></i><div class="empty-state-title">' + t(c.titleKey) + '</div><div class="empty-state-desc">' + t(c.descKey) + '</div>' + typesHtml + ctaHtml + '</div>';
      return;
    }
    listEl.innerHTML = filtered.map(function (u) {
      var isHost = u.type === 'host';
      var hostEventsHtml = (u.upcomingEvents > 0 || u.lastEventAt) ? '<div class="host-events">' + (u.upcomingEvents > 0 ? '<span><i class="fas fa-calendar-alt"></i> ' + u.upcomingEvents + ' upcoming</span>' : '') + (u.upcomingEvents > 0 && u.lastEventAt ? ' · ' : '') + (u.lastEventAt ? '<span>Last Live: ' + u.lastEventAt + '</span>' : '') + '</div>' : '';
      var authHtml = isHost ? '<div class="host-desc"><i class="fas fa-calendar-check"></i> Scheduled host · Go live per Event</div>' + hostEventsHtml : (u.liveAccount && u.liveAccount.authorized ? '<div class="auth-status"><span class="platform-icon"><i class="fab fa-tiktok"></i></span><span>Authorized (</span><a class="auth-link ha-account-info-link" data-id="' + u.id + '">' + u.liveAccount.username + '</a><span>)</span><span class="quick-go-live-tag">Quick Go Live</span></div>' + (u.lastLiveAt ? '<div class="last-live"><i class="fas fa-video"></i> Last live: ' + u.lastLiveAt + '</div>' : '<div class="last-live never"><i class="fas fa-video"></i> Never gone live</div>') : '<div class="auth-status"><span class="platform-icon"><i class="fab fa-tiktok"></i></span><button type="button" class="auth-unauthorize">Unauthorize</button></div><div class="last-live never"><i class="fas fa-video"></i> Never gone live</div>');
      var avatarHtml = u.avatar ? '<img class="user-avatar" src="' + u.avatar + '" alt="' + u.name + '">' : '<div class="user-avatar-placeholder"><i class="fas fa-user"></i></div>';
      var metaHtml = (u.phone ? '<span class="user-meta-item"><i class="fas fa-phone"></i> ' + u.phone + '</span>' : '') + (u.email ? '<span class="user-meta-item"><i class="fas fa-envelope"></i> ' + u.email + '</span>' : '') + (!u.phone && !u.email ? '<span class="user-meta-item user-meta-empty">No contact</span>' : '');
      return '<div class="user-card" data-id="' + u.id + '">' + avatarHtml + '<div class="user-info"><div class="user-name">' + u.name + '<span class="user-type-badge ' + u.type + '">' + (isHost ? t('tc.ha.host') : t('tc.ha.affiliate')) + '</span></div><div class="user-meta">' + metaHtml + '</div><div class="user-secondary">' + authHtml + '</div></div><div class="user-actions"><span class="status-label">' + (u.active ? t('tc.ha.active') : t('tc.ha.inactive')) + '</span><div class="toggle ha-toggle' + (u.active ? ' active' : '') + '" data-id="' + u.id + '"></div></div></div>';
    }).join('');
  }

  function haManageToggleActive(id) {
    var u = haManageUsers.filter(function (x) { return x.id === id; })[0];
    if (u) { u.active = !u.active; renderHaManageUserList(); }
  }

  function haManageDoSearch() {
    var n = document.getElementById('haSearchName');
    var c = document.getElementById('haSearchContact');
    haManageSearchName = n ? n.value.trim() : '';
    haManageSearchContact = c ? c.value.trim() : '';
    renderHaManageUserList();
  }

  function haManageOpenInviteModal(type) {
    haManageInviteType = type || 'host';
    var cfg = HA_INVITE_CONFIG[haManageInviteType] || HA_INVITE_CONFIG.host;
    var url = HA_INVITE_BASE + '?tenantCode=' + HA_TENANT_CODE + '&liveType=' + cfg.liveType;
    var titleEl = document.getElementById('haModalTitle');
    var linkEl = document.getElementById('haInviteLink');
    var noteEl = document.getElementById('haInviteNoteText');
    var descEl = document.getElementById('haInviteTypeDescText');
    var btnEl = document.getElementById('haBtnCopy');
    if (titleEl) titleEl.textContent = t(cfg.titleKey);
    if (linkEl) linkEl.textContent = url;
    if (noteEl) noteEl.textContent = t(cfg.noteKey);
    if (descEl) descEl.textContent = t(cfg.methodKey);
    if (btnEl) { btnEl.classList.remove('copied'); btnEl.innerHTML = '<i class="fas fa-link"></i> ' + t('tc.ha.copy_link'); }
    var modal = document.getElementById('haInviteModal');
    if (modal) modal.classList.add('show');
  }

  function haManageCloseInviteModal() {
    var modal = document.getElementById('haInviteModal');
    if (modal) modal.classList.remove('show');
  }

  function haManageCopyInviteLink() {
    var linkEl = document.getElementById('haInviteLink');
    var btnEl = document.getElementById('haBtnCopy');
    if (!linkEl || !btnEl) return;
    var link = linkEl.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(link).then(function () {
        btnEl.classList.add('copied');
        btnEl.innerHTML = '<i class="fas fa-check"></i> ' + t('tc.ha.copied');
        setTimeout(function () { btnEl.classList.remove('copied'); btnEl.innerHTML = '<i class="fas fa-link"></i> ' + t('tc.ha.copy_link'); }, 2000);
      }).catch(function () { fallbackCopy(link, btnEl); });
    } else { fallbackCopy(link, btnEl); }
  }
  function fallbackCopy(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.classList.add('copied');
    btn.innerHTML = '<i class="fas fa-check"></i> ' + t('tc.ha.copied');
    setTimeout(function () { btn.classList.remove('copied'); btn.innerHTML = '<i class="fas fa-link"></i> ' + t('tc.ha.copy_link'); }, 2000);
  }

  function haManageOpenAccountInfoModal(userId) {
    var u = haManageUsers.filter(function (x) { return x.id === userId; })[0];
    if (!u || !u.liveAccount || !u.liveAccount.authorized || !u.liveAccount.accountInfo) return;
    var info = u.liveAccount.accountInfo;
    var avatarEl = document.getElementById('haAccountInfoAvatar');
    if (avatarEl) { avatarEl.src = info.avatar || ''; avatarEl.alt = info.name; avatarEl.style.display = info.avatar ? '' : 'none'; }
    var set = function (id, v) { var el = document.getElementById(id); if (el) el.textContent = v; };
    set('haAccountInfoName', info.name);
    set('haAccountInfoUid', 'UID: ' + info.uid);
    set('haAccountInfoStatus', info.status);
    set('haAccountInfoType', info.type);
    set('haAccountInfoLastUpdate', info.lastUpdate);
    set('haAccountInfoLastLive', u.lastLiveAt || 'Never');
    set('haAccountInfoTotalBroadcasts', u.totalBroadcasts != null ? String(u.totalBroadcasts) : '-');
    var modal = document.getElementById('haAccountInfoModal');
    if (modal) modal.classList.add('show');
  }

  function haManageCloseAccountInfoModal() {
    var modal = document.getElementById('haAccountInfoModal');
    if (modal) modal.classList.remove('show');
  }

  function bindHaManageEvents() {
    var listEl = document.getElementById('haUserList');
    if (!listEl) return;
    renderHaManageUserList();
    document.querySelectorAll('.tc-ha-page .type-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        document.querySelectorAll('.tc-ha-page .type-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        haManageFilter = tab.getAttribute('data-type');
        renderHaManageUserList();
      });
    });
    var searchBtn = document.querySelector('.ha-search-btn');
    if (searchBtn) searchBtn.addEventListener('click', haManageDoSearch);
    var nameInput = document.getElementById('haSearchName');
    var contactInput = document.getElementById('haSearchContact');
    if (nameInput) nameInput.addEventListener('keypress', function (e) { if (e.key === 'Enter') haManageDoSearch(); });
    if (contactInput) contactInput.addEventListener('keypress', function (e) { if (e.key === 'Enter') haManageDoSearch(); });
    listEl.addEventListener('click', function (e) {
      var toggle = e.target.closest('.ha-toggle');
      if (toggle) { var id = parseInt(toggle.getAttribute('data-id'), 10); if (!isNaN(id)) haManageToggleActive(id); return; }
      var link = e.target.closest('.ha-account-info-link');
      if (link) { var id = parseInt(link.getAttribute('data-id'), 10); if (!isNaN(id)) haManageOpenAccountInfoModal(id); return; }
    });
    document.querySelectorAll('.ha-invite-host').forEach(function (btn) {
      btn.addEventListener('click', function () { haManageOpenInviteModal('host'); });
    });
    document.querySelectorAll('.ha-invite-affiliate').forEach(function (btn) {
      btn.addEventListener('click', function () { haManageOpenInviteModal('affiliate'); });
    });
    var inviteClose = document.querySelector('.ha-invite-close');
    if (inviteClose) inviteClose.addEventListener('click', haManageCloseInviteModal);
    var inviteModal = document.getElementById('haInviteModal');
    if (inviteModal) inviteModal.addEventListener('click', function (e) { if (e.target === inviteModal) haManageCloseInviteModal(); });
    var copyBtn = document.getElementById('haBtnCopy');
    if (copyBtn) copyBtn.addEventListener('click', haManageCopyInviteLink);
    var accountClose = document.querySelector('.ha-account-info-close');
    if (accountClose) accountClose.addEventListener('click', haManageCloseAccountInfoModal);
    var accountModal = document.getElementById('haAccountInfoModal');
    if (accountModal) accountModal.addEventListener('click', function (e) { if (e.target === accountModal) haManageCloseAccountInfoModal(); });
    document.addEventListener('keydown', function haEscapeHandler(e) {
      if (e.key !== 'Escape') return;
      var m1 = document.getElementById('haInviteModal');
      var m2 = document.getElementById('haAccountInfoModal');
      if (m1 && m1.classList.contains('show')) haManageCloseInviteModal();
      else if (m2 && m2.classList.contains('show')) haManageCloseAccountInfoModal();
    });
  }

  var haSettleActiveTab = 'batch';
  var haSettleBatchPage = 1;
  var haSettleBatchPageSize = 10;
  function formatDurationSeconds(s) {
    if (s == null || s < 0) return '0s';
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    var sec = s % 60;
    var parts = [];
    if (h > 0) parts.push(h + 'h');
    if (m > 0) parts.push(m + 'm');
    parts.push(sec + 's');
    return parts.join(' ');
  }

  function formatLiveStartEnd(startStr, endStr) {
    if (!startStr || !endStr) return '';
    var mStart = startStr.match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
    var mEnd = endStr.match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
    if (!mStart || !mEnd) return startStr + ' – ' + endStr;
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var mon = months[parseInt(mStart[2], 10) - 1] || mStart[2];
    var day = parseInt(mStart[3], 10);
    var startTime = mStart[4] + ':' + mStart[5];
    var endTime = mEnd[4] + ':' + mEnd[5];
    var sameDay = mStart[1] === mEnd[1] && mStart[2] === mEnd[2] && mStart[3] === mEnd[3];
    return sameDay ? (mon + ' ' + day + ' ' + startTime + '–' + endTime) : (mon + ' ' + day + ' ' + startTime + ' – ' + (months[parseInt(mEnd[2], 10) - 1] || mEnd[2]) + ' ' + parseInt(mEnd[3], 10) + ' ' + endTime);
  }

  function haBatchGetLiveAccount(b) {
    if (b.liveAccountUsername) return b.liveAccountUsername;
    var first = (b.hosts || [])[0];
    return first ? ((first.liveAccountUsername || (first.handle || '').replace(/^@/, '')) || '') : '';
  }
  function haBatchGetCurrency(b) {
    if (b.currency) return b.currency;
    var first = (b.hosts || [])[0];
    return (first && first.currency) || 'USD';
  }
  function haBatchGetCountry(b) {
    if (b.country) return b.country;
    var la = haBatchGetLiveAccount(b);
    return (la && haSettleRulesByLiveAccount[la] && haSettleRulesByLiveAccount[la].country) || null;
  }
  var haSettleBatches = [
    { id: 'BATCH-2024-03-01-homechef_mike', sn: '5555668555', liveAccountUsername: 'homechef_mike', currency: 'USD', country: 'US', period: '2024-03-01 ~ 2024-03-07', hostCount: 2, liveCount: 7, totalHourly: 520, totalCommission: 1080, totalBonus: 220, totalAmount: 1820, status: 'draft', createdBy: 'u1', createdAt: '2024-03-08 10:30', confirmedBy: null, confirmedAt: null, hosts: [
      { name: 'Maribel Maldonado', handle: '@homechef_mike', liveAccountUsername: 'homechef_mike', currency: 'USD', liveCount: 4, hourly: 320, commission: 780, bonus: 150, total: 1250, lives: [
        { scheduleId: 1001, roomId: 'room_20240301_001', handle: '@homechef_mike', eventName: 'Spring Sale', startAt: '2024-03-01 20:00:00', endAt: '2024-03-01 22:30:45', actualStartAt: '2024-03-01 20:05:12', actualEndAt: '2024-03-01 22:28:30', durationSeconds: 9045, gmv: 12500, hourlyRate: 40, hourlyAmount: 100.5, cpsRate: 0.05, cpsAmount: 625 },
        { scheduleId: 1002, roomId: 'room_20240303_002', handle: '@homechef_backup', eventName: 'Weekend Live', startAt: '2024-03-03 14:00:00', endAt: '2024-03-03 16:00:30', actualStartAt: '2024-03-03 14:02:00', actualEndAt: '2024-03-03 16:01:15', durationSeconds: 7230, gmv: 8200, hourlyRate: 40, hourlyAmount: 80.33, cpsRate: 0.06, cpsAmount: 492 },
        { scheduleId: 1003, roomId: null, handle: '@homechef_mike', eventName: '💗SHOP WITH HOLLY TUES', startAt: '2024-03-01 20:00:00', endAt: '2024-03-01 22:00:00', durationSeconds: 0, gmv: 0, hostUnconfirmed: true, hostSegments: [{ host: 'Maribel Maldonado', startAt: '', endAt: '' }, { host: 'Holly', startAt: '', endAt: '' }] },
        { scheduleId: 1004, roomId: 'room_20240305_003', handle: '@homechef_mike', eventName: 'Flash Deal', startAt: '2024-03-05 19:00:00', endAt: '2024-03-05 21:15:12', durationSeconds: 8112, gmv: 15800, hourlyRate: 40, hourlyAmount: 90.13, cpsRate: 0.05, cpsAmount: 790, hostUnconfirmed: true, hostSegments: [{ host: 'Maribel Maldonado', startAt: '2024-03-05 19:00:00', endAt: '2024-03-05 20:30:00' }, { host: 'Alex Chen', startAt: '', endAt: '' }, { host: 'Priscilla Melendez', startAt: '', endAt: '' }] }
      ], otherRewards: [{ title: 'Spring Sale Bonus', date: '2024-03-01', amount: 50 }, { title: 'Weekend Live Bonus', date: '2024-03-03', amount: 50 }, { title: 'Flash Deal Bonus', date: '2024-03-05', amount: 50 }] }
      ,
      { name: 'Alex Chen', handle: '@alex_creator', liveAccountUsername: 'alex_creator', currency: 'USD', liveCount: 3, hourly: 200, commission: 300, bonus: 70, total: 570, lives: [
        { scheduleId: 1005, roomId: 'room_20240306_010', handle: '@alex_creator', eventName: 'Kitchen Tools Review', startAt: '2024-03-06 18:00:00', endAt: '2024-03-06 20:00:00', actualStartAt: '2024-03-06 18:00:00', actualEndAt: '2024-03-06 20:05:00', durationSeconds: 7200, gmv: 6200, hourlyRate: 35, hourlyAmount: 70, cpsRate: 0.05, cpsAmount: 310 },
        { scheduleId: 1006, roomId: null, handle: '@alex_creator', eventName: 'Unboxing Live', startAt: null, endAt: null, durationSeconds: 0, gmv: 0, hostSegments: [{ host: 'Alex Chen', startAt: '', endAt: '' }, { host: 'Mike Johnson', startAt: '', endAt: '' }] },
        { scheduleId: 1009, roomId: 'room_20240307_011', handle: '@alex_creator', eventName: 'Air Fryer Special', startAt: '2024-03-07 19:30:00', endAt: '2024-03-07 21:40:00', actualStartAt: '2024-03-07 19:32:18', actualEndAt: '2024-03-07 21:38:45', durationSeconds: 7800, gmv: 7100, hourlyRate: 35, hourlyAmount: 80, cpsRate: 0.05, cpsAmount: 290 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-03-01-priscilla_live', sn: '5555668556', liveAccountUsername: 'priscilla_live', currency: 'CNY', country: 'CN', period: '2024-03-01 ~ 2024-03-07', hostCount: 1, liveCount: 2, totalHourly: 210, totalCommission: 520, totalBonus: 80, totalAmount: 810, status: 'draft', createdBy: 'u2', createdAt: '2024-03-08 11:00', confirmedBy: null, confirmedAt: null, hosts: [
      { name: 'Priscilla Melendez', handle: '@priscilla_live', liveAccountUsername: 'priscilla_live', currency: 'CNY', liveCount: 2, hourly: 210, commission: 520, bonus: 80, total: 810, lives: [
        { scheduleId: 1007, roomId: 'room_20240302_004', eventName: 'Beauty Hour', startAt: '2024-03-02 18:00:00', endAt: '2024-03-02 20:15:33', actualStartAt: '2024-03-02 18:01:00', actualEndAt: '2024-03-02 20:14:00', durationSeconds: 8133, gmv: 9200, hourlyRate: 35, hourlyAmount: 79.05, cpsRate: 0.05, cpsAmount: 460 },
        { scheduleId: 1008, roomId: 'room_20240304_005', eventName: 'Style Show', startAt: '2024-03-04 15:30:00', endAt: '2024-03-04 17:45:18', durationSeconds: 8118, gmv: 6800, hourlyRate: 35, hourlyAmount: 78.93, cpsRate: 0.05, cpsAmount: 340, hostUnconfirmed: true, hostSegments: [{ host: 'Priscilla Melendez', startAt: '2024-03-04 15:30:00', endAt: '2024-03-04 16:45:00' }, { host: 'Sarah Kim', startAt: '', endAt: '' }, { host: 'Mia Thompson', startAt: '', endAt: '' }] }
      ], otherRewards: [{ title: 'Beauty Hour Reward', date: '2024-03-02', amount: 40 }, { title: 'Style Show Reward', date: '2024-03-04', amount: 40 }] }
    ], customEntries: [] },
    { id: 'BATCH-2024-02-15-homechef_mike', sn: '5555668557', liveAccountUsername: 'homechef_mike', currency: 'USD', country: 'US', period: '2024-02-08 ~ 2024-02-14', hostCount: 2, liveCount: 4, totalHourly: 430, totalCommission: 920, totalBonus: 150, totalAmount: 1500, status: 'confirmed', createdBy: 'u1', createdAt: '2024-02-15 09:00', confirmedBy: 'u2', confirmedAt: '2024-02-16 14:30', hosts: [
      { name: 'Maribel Maldonado', handle: '@homechef_mike', liveAccountUsername: 'homechef_mike', currency: 'USD', liveCount: 2, hourly: 280, commission: 620, bonus: 120, total: 1020, lives: [
        { scheduleId: 1010, roomId: 'room_20240208_101', eventName: 'Valentine Sale', startAt: '2024-02-08 20:00:00', endAt: '2024-02-08 22:30:12', actualStartAt: '2024-02-08 20:03:00', actualEndAt: '2024-02-08 22:28:00', durationSeconds: 9012, gmv: 9800 },
        { scheduleId: 1011, roomId: 'room_20240212_102', eventName: 'Midweek Special', startAt: '2024-02-12 19:00:00', endAt: '2024-02-12 21:15:30', actualStartAt: '2024-02-12 19:00:00', actualEndAt: '2024-02-12 21:18:00', durationSeconds: 8130, gmv: 7500 }
      ]},
      { name: 'Alex Chen', handle: '@alex_creator', liveAccountUsername: 'alex_creator', currency: 'USD', liveCount: 2, hourly: 150, commission: 300, bonus: 30, total: 480, lives: [
        { scheduleId: 1014, roomId: 'room_20240210_201', eventName: 'Kitchen Gadgets', startAt: '2024-02-10 18:00:00', endAt: '2024-02-10 20:10:00', actualStartAt: '2024-02-10 18:01:00', actualEndAt: '2024-02-10 20:08:30', durationSeconds: 7800, gmv: 6800 },
        { scheduleId: 1015, roomId: 'room_20240211_202', eventName: 'Cookware Review', startAt: '2024-02-11 19:30:00', endAt: '2024-02-11 21:20:45', actualStartAt: '2024-02-11 19:32:15', actualEndAt: '2024-02-11 21:18:00', durationSeconds: 6845, gmv: 7200 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-02-15-priscilla_live', sn: '5555668558', liveAccountUsername: 'priscilla_live', currency: 'CNY', country: 'CN', period: '2024-02-08 ~ 2024-02-14', hostCount: 1, liveCount: 2, totalHourly: 220, totalCommission: 480, totalBonus: 80, totalAmount: 780, status: 'confirmed', createdBy: 'u2', createdAt: '2024-02-15 10:30', confirmedBy: 'u1', confirmedAt: '2024-02-16 14:35', hosts: [
      { name: 'Priscilla Melendez', handle: '@priscilla_live', liveAccountUsername: 'priscilla_live', currency: 'CNY', liveCount: 2, hourly: 220, commission: 480, bonus: 80, total: 780, lives: [
        { scheduleId: 1012, roomId: 'room_20240209_103', eventName: 'Beauty Night', startAt: '2024-02-09 18:00:00', endAt: '2024-02-09 20:22:45', actualStartAt: '2024-02-09 18:02:30', actualEndAt: '2024-02-09 20:20:00', durationSeconds: 8565, gmv: 6200 },
        { scheduleId: 1013, roomId: 'room_20240213_104', eventName: 'Style Session', startAt: '2024-02-13 15:00:00', endAt: '2024-02-13 17:18:20', actualStartAt: '2024-02-13 15:01:00', actualEndAt: '2024-02-13 17:15:00', durationSeconds: 8300, gmv: 5800 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-02-15-francine_f', sn: '5555668559', liveAccountUsername: 'francine_f', currency: 'EUR', country: 'DE', period: '2024-02-08 ~ 2024-02-14', hostCount: 1, liveCount: 2, totalHourly: 180, totalCommission: 420, totalBonus: 70, totalAmount: 670, status: 'confirmed', createdBy: 'u3', createdAt: '2024-02-15 11:00', confirmedBy: 'u1', confirmedAt: '2024-02-16 14:40', hosts: [
      { name: 'Francine Feero', handle: '@francine_f', liveAccountUsername: 'francine_f', currency: 'EUR', liveCount: 2, hourly: 180, commission: 420, bonus: 70, total: 670, lives: [
        { scheduleId: 1016, roomId: 'room_20240210_105', eventName: 'Morning Special', startAt: '2024-02-10 10:00:00', endAt: '2024-02-10 12:25:00', actualStartAt: '2024-02-10 10:02:00', actualEndAt: '2024-02-10 12:22:00', durationSeconds: 8700, gmv: 4800 },
        { scheduleId: 1017, roomId: 'room_20240214_106', eventName: 'Weekend Deals', startAt: '2024-02-14 14:00:00', endAt: '2024-02-14 16:10:15', actualStartAt: '2024-02-14 14:00:30', actualEndAt: '2024-02-14 16:12:00', durationSeconds: 7815, gmv: 5200 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-02-15-alex_creator', sn: '5555668560', liveAccountUsername: 'alex_creator', currency: 'USD', country: 'US', period: '2024-02-08 ~ 2024-02-14', hostCount: 1, liveCount: 2, totalHourly: 100, totalCommission: 350, totalBonus: 30, totalAmount: 480, status: 'confirmed', createdBy: 'u1', createdAt: '2024-02-15 09:30', confirmedBy: 'u1', confirmedAt: '2024-02-16 15:00', hosts: [
      { name: 'Alex Chen', handle: '@alex_creator', liveAccountUsername: 'alex_creator', currency: 'USD', liveCount: 2, hourly: 100, commission: 350, bonus: 30, total: 480, lives: [
        { scheduleId: 1018, roomId: 'room_20240211_107', eventName: 'Tech Review', startAt: '2024-02-11 20:00:00', endAt: '2024-02-11 21:45:33', actualStartAt: '2024-02-11 20:01:00', actualEndAt: '2024-02-11 21:44:00', durationSeconds: 6333, gmv: 4200 },
        { scheduleId: 1019, roomId: 'room_20240213_108', eventName: 'Gadget Show', startAt: '2024-02-13 14:00:00', endAt: '2024-02-13 15:30:48', actualStartAt: '2024-02-13 14:00:00', actualEndAt: '2024-02-13 15:32:00', durationSeconds: 5448, gmv: 3500 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-02-15-sarah_beauty', sn: '5555668561', liveAccountUsername: 'sarah_beauty', currency: 'USD', country: 'US', period: '2024-02-08 ~ 2024-02-14', hostCount: 1, liveCount: 1, totalHourly: 60, totalCommission: 250, totalBonus: 20, totalAmount: 330, status: 'confirmed', createdBy: 'u2', createdAt: '2024-02-15 14:00', confirmedBy: 'u3', confirmedAt: '2024-02-16 16:20', hosts: [
      { name: 'Sarah Kim', handle: '@sarah_beauty', liveAccountUsername: 'sarah_beauty', currency: 'USD', liveCount: 1, hourly: 60, commission: 250, bonus: 20, total: 330, lives: [
        { scheduleId: 1020, roomId: 'room_20240212_109', eventName: 'Skincare Live', startAt: '2024-02-12 12:00:00', endAt: '2024-02-12 14:00:00', actualStartAt: '2024-02-12 12:05:00', actualEndAt: '2024-02-12 13:58:00', durationSeconds: 7200, gmv: 4100 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-02-01-homechef_mike', sn: '5555668562', liveAccountUsername: 'homechef_mike', currency: 'USD', country: 'US', period: '2024-01-25 ~ 2024-01-31', hostCount: 1, liveCount: 2, totalHourly: 250, totalCommission: 520, totalBonus: 90, totalAmount: 860, status: 'confirmed', createdBy: 'u1', createdAt: '2024-02-01 10:00', confirmedBy: 'u2', confirmedAt: '2024-02-02 11:20', hosts: [
      { name: 'Maribel Maldonado', handle: '@homechef_mike', liveAccountUsername: 'homechef_mike', currency: 'USD', liveCount: 2, hourly: 250, commission: 520, bonus: 90, total: 860, lives: [
        { scheduleId: 1021, roomId: 'room_20240125_201', eventName: 'New Year Sale', startAt: '2024-01-25 20:00:00', endAt: '2024-01-25 22:35:18', actualStartAt: '2024-01-25 20:02:00', actualEndAt: '2024-01-25 22:33:00', durationSeconds: 9318, gmv: 11200 },
        { scheduleId: 1022, roomId: 'room_20240128_202', eventName: 'Weekend Live', startAt: '2024-01-28 15:00:00', endAt: '2024-01-28 17:20:45', actualStartAt: '2024-01-28 15:00:00', actualEndAt: '2024-01-28 17:22:00', durationSeconds: 8445, gmv: 8900 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-02-01-priscilla_live', sn: '5555668563', liveAccountUsername: 'priscilla_live', currency: 'CNY', country: 'CN', period: '2024-01-25 ~ 2024-01-31', hostCount: 1, liveCount: 2, totalHourly: 200, totalCommission: 380, totalBonus: 60, totalAmount: 640, status: 'confirmed', createdBy: 'u2', createdAt: '2024-02-01 11:30', confirmedBy: 'u1', confirmedAt: '2024-02-02 11:25', hosts: [
      { name: 'Priscilla Melendez', handle: '@priscilla_live', liveAccountUsername: 'priscilla_live', currency: 'CNY', liveCount: 2, hourly: 200, commission: 380, bonus: 60, total: 640, lives: [
        { scheduleId: 1023, roomId: 'room_20240126_203', eventName: 'Beauty Hour', startAt: '2024-01-26 18:00:00', endAt: '2024-01-26 20:15:00', actualStartAt: '2024-01-26 18:01:30', actualEndAt: '2024-01-26 20:13:00', durationSeconds: 8100, gmv: 5500 },
        { scheduleId: 1024, roomId: 'room_20240130_204', eventName: 'Style Show', startAt: '2024-01-30 16:00:00', endAt: '2024-01-30 18:10:22', actualStartAt: '2024-01-30 16:00:00', actualEndAt: '2024-01-30 18:08:00', durationSeconds: 7822, gmv: 4800 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-02-01-francine_f', sn: '5555668564', liveAccountUsername: 'francine_f', currency: 'EUR', country: 'DE', period: '2024-01-25 ~ 2024-01-31', hostCount: 1, liveCount: 2, totalHourly: 160, totalCommission: 320, totalBonus: 50, totalAmount: 530, status: 'confirmed', createdBy: 'u3', createdAt: '2024-02-01 12:00', confirmedBy: 'u1', confirmedAt: '2024-02-02 11:30', hosts: [
      { name: 'Francine Feero', handle: '@francine_f', liveAccountUsername: 'francine_f', currency: 'EUR', liveCount: 2, hourly: 160, commission: 320, bonus: 50, total: 530, lives: [
        { roomId: 'room_20240125_205', eventName: 'Morning Deals', startAt: '2024-01-25 10:00:00', endAt: '2024-01-25 12:30:05', durationSeconds: 9005, gmv: 4200 },
        { roomId: 'room_20240129_206', eventName: 'Evening Special', startAt: '2024-01-29 19:00:00', endAt: '2024-01-29 21:05:40', durationSeconds: 7540, gmv: 5100 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-02-01-alex_creator', sn: '5555668565', liveAccountUsername: 'alex_creator', currency: 'USD', country: 'US', period: '2024-01-25 ~ 2024-01-31', hostCount: 1, liveCount: 2, totalHourly: 140, totalCommission: 280, totalBonus: 40, totalAmount: 460, status: 'confirmed', createdBy: 'u1', createdAt: '2024-02-01 09:00', confirmedBy: 'u1', confirmedAt: '2024-02-02 11:35', hosts: [
      { name: 'Alex Chen', handle: '@alex_creator', liveAccountUsername: 'alex_creator', currency: 'USD', liveCount: 2, hourly: 140, commission: 280, bonus: 40, total: 460, lives: [
        { roomId: 'room_20240127_207', eventName: 'Tech Unboxing', startAt: '2024-01-27 20:00:00', endAt: '2024-01-27 22:10:15', durationSeconds: 7815, gmv: 6800 },
        { roomId: 'room_20240131_208', eventName: 'Gadget Live', startAt: '2024-01-31 14:00:00', endAt: '2024-01-31 16:05:30', durationSeconds: 7530, gmv: 5200 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-02-01-sarah_beauty', sn: '5555668566', liveAccountUsername: 'sarah_beauty', currency: 'USD', country: 'US', period: '2024-01-25 ~ 2024-01-31', hostCount: 1, liveCount: 2, totalHourly: 100, totalCommission: 280, totalBonus: 10, totalAmount: 390, status: 'confirmed', createdBy: 'u2', createdAt: '2024-02-01 15:00', confirmedBy: 'u3', confirmedAt: '2024-02-02 16:00', hosts: [
      { name: 'Sarah Kim', handle: '@sarah_beauty', liveAccountUsername: 'sarah_beauty', currency: 'USD', liveCount: 2, hourly: 100, commission: 280, bonus: 10, total: 390, lives: [
        { roomId: 'room_20240126_209', eventName: 'Skincare Tips', startAt: '2024-01-26 12:00:00', endAt: '2024-01-26 14:25:18', durationSeconds: 8718, gmv: 3200 },
        { roomId: 'room_20240130_210', eventName: 'Makeup Demo', startAt: '2024-01-30 11:00:00', endAt: '2024-01-30 12:40:55', durationSeconds: 6055, gmv: 2800 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-02-01-mike_lifestyle', sn: '5555668567', liveAccountUsername: 'mike_lifestyle', currency: 'USD', country: 'US', period: '2024-01-25 ~ 2024-01-31', hostCount: 1, liveCount: 1, totalHourly: 60, totalCommission: 200, totalBonus: 10, totalAmount: 270, status: 'confirmed', createdBy: 'u1', createdAt: '2024-02-01 16:00', confirmedBy: 'u2', confirmedAt: '2024-02-02 16:00', hosts: [
      { name: 'Mike Johnson', handle: '@mike_lifestyle', liveAccountUsername: 'mike_lifestyle', currency: 'USD', liveCount: 1, hourly: 60, commission: 200, bonus: 10, total: 270, lives: [
        { roomId: 'room_20240128_211', eventName: 'Lifestyle Live', startAt: '2024-01-28 21:00:00', endAt: '2024-01-28 23:00:00', durationSeconds: 7200, gmv: 2500 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-01-18-uk_stylequeen', sn: '5555668568', liveAccountUsername: 'stylequeen_uk', currency: 'GBP', country: 'GB', period: '2024-01-10 ~ 2024-01-16', hostCount: 1, liveCount: 3, totalHourly: 180, totalCommission: 540, totalBonus: 0, totalAmount: 720, status: 'confirmed', createdBy: 'u3', createdAt: '2024-01-18 11:00', confirmedBy: 'u1', confirmedAt: '2024-01-18 15:20', hosts: [
      { name: 'Mia Thompson', handle: '@stylequeen_uk', liveAccountUsername: 'stylequeen_uk', currency: 'GBP', liveCount: 3, hourly: 180, commission: 540, bonus: 0, total: 720, lives: [
        { roomId: 'room_20240110_301', eventName: 'Winter Wardrobe Edit', startAt: '2024-01-10 19:00:00', endAt: '2024-01-10 21:10:00', durationSeconds: 7800, gmv: 6200 },
        { roomId: 'room_20240112_302', eventName: 'Cozy Knit Night', startAt: '2024-01-12 20:00:00', endAt: '2024-01-12 22:05:45', durationSeconds: 7545, gmv: 5400 },
        { roomId: 'room_20240115_303', eventName: 'Weekend Styling Tips', startAt: '2024-01-15 18:30:00', endAt: '2024-01-15 20:45:30', durationSeconds: 8130, gmv: 6800 }
      ]}
    ], customEntries: [] },
    { id: 'BATCH-2024-01-18-jp_beauty', sn: '5555668569', liveAccountUsername: 'sakura_beauty', currency: 'JPY', country: 'JP', period: '2024-01-10 ~ 2024-01-16', hostCount: 1, liveCount: 2, totalHourly: 90, totalCommission: 310, totalBonus: 40, totalAmount: 440, status: 'confirmed', createdBy: 'u2', createdAt: '2024-01-18 12:30', confirmedBy: 'u3', confirmedAt: '2024-01-18 16:10', hosts: [
      { name: 'Sakura Tanaka', handle: '@sakura_beauty', liveAccountUsername: 'sakura_beauty', currency: 'JPY', liveCount: 2, hourly: 90, commission: 310, bonus: 40, total: 440, lives: [
        { roomId: 'room_20240111_401', eventName: 'New Year Skincare', startAt: '2024-01-11 20:00:00', endAt: '2024-01-11 22:00:00', durationSeconds: 7200, gmv: 310000 },
        { roomId: 'room_20240114_402', eventName: 'Makeup Demo JP', startAt: '2024-01-14 19:30:00', endAt: '2024-01-14 21:40:20', durationSeconds: 7860, gmv: 280000 }
      ]}
    ], customEntries: [] }
  ];
  var haLiveSessions = [];
  var haLiveSessionEdits = {};
  function haBuildLiveSessionsFromBatches() {
    haLiveSessions = [];
    var scheduleIdCounter = 1000;
    haSettleBatches.forEach(function (b) {
      var batchCountry = b.country || 'US';
      var settled = (b.status || '') === 'confirmed';
      (b.hosts || []).forEach(function (h, hi) {
        var la = h.liveAccountUsername || (h.handle || '').replace(/^@/, '');
        (h.lives || []).forEach(function (lv, li) {
          var sid = (b.id || '') + '_' + hi + '_' + li;
          var scheduleId = lv.scheduleId != null ? lv.scheduleId : (++scheduleIdCounter);
          if (lv.scheduleId != null && lv.scheduleId >= scheduleIdCounter) scheduleIdCounter = lv.scheduleId;
          haLiveSessions.push({
            sessionId: sid,
            scheduleId: scheduleId,
            batchId: b.id,
            batchSn: b.sn,
            settled: settled,
            creatorName: h.name,
            liveAccountUsername: la,
            country: batchCountry,
            currency: b.currency || 'USD',
            startAt: lv.startAt,
            endAt: lv.endAt,
            actualStartAt: lv.actualStartAt,
            actualEndAt: lv.actualEndAt,
            durationSeconds: lv.durationSeconds || 0,
            gmv: lv.gmv || 0,
            eventName: lv.eventName,
            roomId: lv.roomId,
            hostUnconfirmed: lv.hostUnconfirmed,
            hostSegments: lv.hostSegments,
            _hostIndex: hi,
            _liveIndex: li,
            _batch: b,
            _host: h
          });
        });
      });
    });
  }
  function haLiveSessionAbnormalType1(s) {
    return !(s.roomId && (s.roomId + '').trim()) || !(s.startAt || s.actualStartAt) || !(s.endAt || s.actualEndAt);
  }
  function haLiveSessionAbnormalType2(s) {
    var hasPlanned = !!(s.startAt && s.endAt);
    if (!hasPlanned) return false;
    var segs = s.hostSegments;
    if (segs && segs.length) {
      var allConfirmed = segs.every(function (seg) { return !!(seg.actualStartAt && seg.actualEndAt); });
      return !allConfirmed;
    }
    return !!(s.hostUnconfirmed || !s.actualStartAt || !s.actualEndAt);
  }
  function haLiveSessionIsAbnormal(s) {
    return haLiveSessionAbnormalType1(s) || haLiveSessionAbnormalType2(s);
  }
  function haLiveSessionAbnormalCount() {
    return haLiveSessions.filter(function (s) { return haLiveSessionIsAbnormal(haGetSessionWithEdits(s)); }).length;
  }
  function haGetAbnormalReasonAndFlow(s) {
    var type1 = haLiveSessionAbnormalType1(s);
    var type2 = haLiveSessionAbnormalType2(s);
    var reasons = [];
    var flows = [];
    if (type1) { reasons.push(t('tc.ha.abnormal_type1')); flows.push(t('tc.ha.abnormal_flow_type1')); }
    if (type2) { reasons.push(t('tc.ha.abnormal_type2')); flows.push(t('tc.ha.abnormal_flow_type2')); }
    return { reason: reasons.join('<br>'), flow: flows.join('<br>') };
  }
  function haLiveSessionEditsLoad() {
    try {
      var raw = localStorage.getItem(HA_LIVE_SESSION_EDITS_KEY);
      haLiveSessionEdits = raw ? JSON.parse(raw) : {};
    } catch (e) { haLiveSessionEdits = {}; }
  }
  function haLiveSessionEditsSave() {
    try { localStorage.setItem(HA_LIVE_SESSION_EDITS_KEY, JSON.stringify(haLiveSessionEdits)); } catch (e) {}
  }
  function haGetSessionWithEdits(s) {
    var e = haLiveSessionEdits[s.sessionId] || {};
    return {
      sessionId: s.sessionId,
      scheduleId: s.scheduleId,
      batchId: s.batchId,
      batchSn: s.batchSn,
      settled: s.settled,
      creatorName: s.creatorName,
      liveAccountUsername: s.liveAccountUsername,
      country: s.country,
      currency: s.currency,
      startAt: s.startAt,
      endAt: s.endAt,
      actualStartAt: e.actualStartAt != null ? e.actualStartAt : s.actualStartAt,
      actualEndAt: e.actualEndAt != null ? e.actualEndAt : s.actualEndAt,
      durationSeconds: s.durationSeconds,
      gmv: e.gmv != null ? e.gmv : s.gmv,
      eventName: s.eventName,
      roomId: e.roomId != null ? e.roomId : s.roomId,
      hostSegments: (e.hostSegments && e.hostSegments.length) ? e.hostSegments : (s.hostSegments && s.hostSegments.length ? s.hostSegments : null),
      hostUnconfirmed: s.hostUnconfirmed,
      _hostIndex: s._hostIndex,
      _liveIndex: s._liveIndex,
      _batch: s._batch,
      _host: s._host
    };
  }
  function haGetLiveAccountCountry(username) {
    var u = (haManageUsers || []).filter(function (x) {
      var la = x.liveAccount;
      return la && (la.username === username || (la.username && la.username.replace(/^@/, '') === username));
    })[0];
    if (u && u.liveAccount && u.liveAccount.country) return u.liveAccount.country;
    var session = haLiveSessions.filter(function (s) { return (s.liveAccountUsername || '').replace(/^@/, '') === (username || '').replace(/^@/, ''); })[0];
    return session ? session.country : null;
  }
  haBuildLiveSessionsFromBatches();
  var haSettleBatchFilter = 'all';
  var haSettleBatchCountryFilter = undefined;
  var haSettleBatchDetailId = null;
  var haBatchDetailSettleType = 'hourly';
  var haSettleWithdrawFilter = 'pending';
  var haSettleWithdrawCountryFilter = undefined;
  var haPastLivesFilterHost = '';
  var haPastLivesFilterRoom = '';
  var haPastLivesFilterLa = '';
  var haPastLivesFilterDateStart = '';
  var haPastLivesFilterDateEnd = '';
  var haPastLivesFilterSettled = '';
  var haPastLivesView = 'list';
  var haSettleWithdrawRequests = [
    { id: 'WD-1001', host: 'Maribel Maldonado', handle: '@homechef_mike', paypalName: 'Maribel Maldonado', paypalContact: 'maribel@example.com', amount: 820, currency: 'USD', country: 'US', createdAt: '2024-02-16 10:20', status: 'pending' },
    { id: 'WD-1002', host: 'Priscilla Melendez', handle: '@priscilla_live', paypalName: 'Priscilla Melendez', paypalContact: '+86 138 0000 0000', amount: 560, currency: 'CNY', country: 'CN', createdAt: '2024-02-02 15:40', status: 'approved' },
    { id: 'WD-1003', host: 'Alex Chen', handle: '@alex_creator', paypalName: 'Alex Chen', paypalContact: 'alex.paypal@example.com', amount: 390, currency: 'USD', country: 'US', createdAt: '2024-02-03 09:10', status: 'rejected' }
  ];

  var HA_SETTLE_RULES_KEY = 'wahool_ha_settle_rules';
  var HA_SETTLE_RULES_V2_KEY = 'wahool_ha_settle_rules_v2';
  var haSettleRulesV2 = [];
  var HA_OTHER_REWARDS_KEY = 'wahool_ha_other_rewards';
  var HA_LIVE_SESSION_EDITS_KEY = 'wahool_ha_live_session_edits';
  var haOtherRewards = [];
  function haOtherRewardsLoad() {
    try {
      var raw = localStorage.getItem(HA_OTHER_REWARDS_KEY);
      if (raw) haOtherRewards = JSON.parse(raw);
      if (!Array.isArray(haOtherRewards)) haOtherRewards = [];
    } catch (e) { haOtherRewards = []; }
  }
  function haOtherRewardsSave() {
    try { localStorage.setItem(HA_OTHER_REWARDS_KEY, JSON.stringify(haOtherRewards)); } catch (e) {}
  }
  function haOtherRewardIsUsedInBatch(rewardId) {
    return (haSettleBatches || []).some(function (b) {
      return (b.customEntries || []).some(function (e) { return e.rewardId && String(e.rewardId) === String(rewardId); });
    });
  }
  function haOtherRewardsMatchBatch(batch, startDate, endDate) {
    if (!haOtherRewards || !haOtherRewards.length) return [];
    var batchCountry = batch.country || 'US';
    var hostNames = (batch.hosts || []).map(function (h) { return h.name; });
    return haOtherRewards.filter(function (r) {
      if (hostNames.indexOf(r.creatorName) === -1) return false;
      if (r.country && r.country !== batchCountry) return false;
      if (!r.periodStart || !r.periodEnd) return false;
      if (r.periodStart !== startDate || r.periodEnd !== endDate) return false;
      return true;
    });
  }
  function haFormatAmount(amount, currency) {
    if (amount == null || isNaN(amount)) return '—';
    var n = Number(amount).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    if (currency === 'CNY') return '¥' + n;
    if (currency === 'EUR') return '€' + n;
    return '$' + n;
  }
  var haSettleRulesCountryFilter = 'US';
  var haSettleRulesByCountry = {};
  function haSettleRulesGetCountryData(country) {
    if (!haSettleRulesByCountry[country]) {
      haSettleRulesByCountry[country] = {
        merchant: {
          currency: country === 'CN' ? 'CNY' : 'USD',
          hourlyRate: 100,
          hourlyRates: [{ id: 'hr1', year: null, startTime: '00:00', endTime: '23:59', rate: 100, createdAt: Date.now() - 2000 }],
          cpsMode: 'per_hour',
          cpsTiers: [
            { id: 't1', min: 0, max: 300, rate: 1.5 },
            { id: 't2', min: 300, max: 1500, rate: 3 },
            { id: 't3', min: 1500, max: null, rate: 5 }
          ]
        },
        byCreator: {},
        byLiveAccount: {}
      };
    }
    return haSettleRulesByCountry[country];
  }
  var haSettleRulesMerchant = null;
  var haSettleRulesByCreator = null;
  var haSettleRulesByLiveAccount = null;

  function haSettleRulesGetCpsRate(gmvPerHour, rules, sessionDate) {
    var tiers = rules && rules.cpsTiers ? rules.cpsTiers : (Array.isArray(rules) ? rules : []);
    if (!tiers || !tiers.length) return 0;
    var sessionDateStr = sessionDate ? (sessionDate + '').slice(0, 10) : null;
    var effectiveStart = rules && rules.cpsEffectiveStart ? rules.cpsEffectiveStart : '';
    var effectiveEnd = rules && rules.cpsEffectiveEnd ? rules.cpsEffectiveEnd : '';
    if (sessionDateStr && /^\d{4}-\d{2}-\d{2}$/.test(sessionDateStr) && (effectiveStart || effectiveEnd)) {
      var startOk = !effectiveStart || sessionDateStr >= effectiveStart;
      var endOk = !effectiveEnd || sessionDateStr <= effectiveEnd;
      if (!startOk || !endOk) return 0;
    }
    var sorted = tiers.slice().sort(function (a, b) { return (a.min || 0) - (b.min || 0); });
    for (var i = 0; i < sorted.length; i++) {
      var t = sorted[i];
      var minOk = gmvPerHour >= t.min;
      var maxOk = t.max == null || gmvPerHour < t.max;
      if (minOk && maxOk) return t.rate;
    }
    return 0;
  }
  function haSettleRulesTimeInRange(sessionTimeStr, startTime, endTime) {
    var m = (sessionTimeStr || '').match(/(\d{1,2}):(\d{2})/);
    if (!m) return false;
    var s = parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
    var st = (startTime || '00:00').split(':');
    var et = (endTime || '23:59').split(':');
    var startM = parseInt(st[0], 10) * 60 + parseInt(st[1], 10);
    var endM = parseInt(et[0], 10) * 60 + parseInt(et[1], 10);
    if (startM <= endM) return s >= startM && s <= endM;
    return s >= startM || s <= endM;
  }
  function haSettleRulesGetHourlyRateForTime(sessionStartAt, rules) {
    if (!rules) return 0;
    var rates = rules.hourlyRates || [];
    if (!rates.length) return rules.hourlyRate || 0;
    var timeStr = (sessionStartAt || '').slice(11, 16) || '12:00';
    var sessionYear = null;
    var datePart = (sessionStartAt || '').slice(0, 10);
    if (datePart && /^\d{4}-\d{2}-\d{2}$/.test(datePart)) sessionYear = parseInt(datePart.slice(0, 4), 10);
    var matches = rates.filter(function (r) {
      var dateOk = true;
      if (datePart && /^\d{4}-\d{2}-\d{2}$/.test(datePart)) {
        var startOk = !r.effectiveStart || datePart >= r.effectiveStart;
        var endOk = !r.effectiveEnd || datePart <= r.effectiveEnd;
        dateOk = startOk && endOk;
      }
      var yearOk = r.year == null || r.year === '' || r.year === sessionYear;
      if (sessionYear == null) yearOk = true;
      return dateOk && yearOk && haSettleRulesTimeInRange(timeStr, r.startTime || '00:00', r.endTime || '23:59');
    });
    if (!matches.length) return rules.hourlyRate || (rates[0] && rates[0].rate) || 0;
    matches.sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); });
    return matches[0].rate || 0;
  }
  function haSettleRulesGetEffectiveHourlyRowId(referenceDate, rules) {
    if (!rules || !rules.hourlyRates || !rules.hourlyRates.length) return null;
    var ref = referenceDate || new Date();
    var refDateStr = ref.toISOString().slice(0, 10);
    var timeStr = (ref.getHours() < 10 ? '0' : '') + ref.getHours() + ':' + (ref.getMinutes() < 10 ? '0' : '') + ref.getMinutes();
    var refYear = ref.getFullYear();
    var rates = rules.hourlyRates.filter(function (r) {
      var dateOk = true;
      if (refDateStr) {
        var startOk = !r.effectiveStart || refDateStr >= r.effectiveStart;
        var endOk = !r.effectiveEnd || refDateStr <= r.effectiveEnd;
        dateOk = startOk && endOk;
      }
      var yearOk = r.year == null || r.year === '' || r.year === refYear;
      return dateOk && yearOk && haSettleRulesTimeInRange(timeStr, r.startTime || '00:00', r.endTime || '23:59');
    });
    if (!rates.length) return null;
    rates.sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); });
    return rates[0].id || null;
  }
  function haSettleRulesV2GetRecord(country, sessionDateStr, type) {
    if (!country || !sessionDateStr || !/^\d{4}-\d{2}-\d{2}$/.test(sessionDateStr)) return null;
    haSettleRulesV2Load();
    var list = (haSettleRulesV2 || []).filter(function (r) {
      if (r.country !== country) return false;
      var dim = r.dimension || 'merchant';
      if (dim !== 'merchant') return false;
      if (type === 'hourly') {
        var startOk = !r.hourlyEffectiveStart || sessionDateStr >= r.hourlyEffectiveStart;
        var endOk = !r.hourlyEffectiveEnd || sessionDateStr <= r.hourlyEffectiveEnd;
        return startOk && endOk;
      }
      if (type === 'cps') {
        var startOk = !r.cpsEffectiveStart || sessionDateStr >= r.cpsEffectiveStart;
        var endOk = !r.cpsEffectiveEnd || sessionDateStr <= r.cpsEffectiveEnd;
        return startOk && endOk;
      }
      return false;
    });
    list.sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); });
    return list[0] || null;
  }
  function haSettleRulesV2BuildMergedRecord(creatorName, liveAccountUsername, country, sessionDateStr, type) {
    if (!country || !sessionDateStr || !/^\d{4}-\d{2}-\d{2}$/.test(sessionDateStr)) return null;
    haSettleRulesV2Load();
    var u = (haManageUsers || []).filter(function (x) { return x.name === creatorName; })[0];
    var creatorId = u ? u.id : null;
    var laNorm = liveAccountUsername ? (liveAccountUsername + '').replace(/^@/, '') : null;
    function matchDate(r, isHourly) {
      if (isHourly) {
        var startOk = !r.hourlyEffectiveStart || sessionDateStr >= r.hourlyEffectiveStart;
        var endOk = !r.hourlyEffectiveEnd || sessionDateStr <= r.hourlyEffectiveEnd;
        return startOk && endOk;
      }
      var startOk = !r.cpsEffectiveStart || sessionDateStr >= r.cpsEffectiveStart;
      var endOk = !r.cpsEffectiveEnd || sessionDateStr <= r.cpsEffectiveEnd;
      return startOk && endOk;
    }
    var isHourly = type === 'hourly';
    var merchantRec = (haSettleRulesV2 || []).filter(function (r) {
      if (r.country !== country) return false;
      if ((r.dimension || 'merchant') !== 'merchant') return false;
      return matchDate(r, isHourly);
    }).sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); })[0];
    var laRec = laNorm ? (haSettleRulesV2 || []).filter(function (r) {
      if (r.country !== country) return false;
      if ((r.dimension || '') !== 'live_account') return false;
      var rLa = (r.liveAccountUsername || '').replace(/^@/, '');
      if (rLa !== laNorm) return false;
      return matchDate(r, isHourly);
    }).sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); })[0] : null;
    var crRec = creatorId != null ? (haSettleRulesV2 || []).filter(function (r) {
      if (r.country !== country) return false;
      if ((r.dimension || '') !== 'creator') return false;
      var rId = r.creatorId;
      if (rId != null && String(rId) !== String(creatorId)) return false;
      return matchDate(r, isHourly);
    }).sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); })[0] : null;
    var merchant = (merchantRec && merchantRec.merchant) ? merchantRec.merchant : {};
    var byLiveAccount = {};
    if (laRec && laRec.byLiveAccount && laNorm) {
      var laKey = laRec.liveAccountUsername || laNorm;
      var laCfg = laRec.byLiveAccount[laKey] || laRec.byLiveAccount[laNorm] || laRec.byLiveAccount['@' + laNorm];
      if (laCfg) byLiveAccount[laNorm] = laCfg;
    }
    var byCreator = {};
    if (crRec && crRec.byCreator && creatorId != null) {
      var crCfg = crRec.byCreator[crRec.creatorId] || crRec.byCreator[creatorId] || crRec.byCreator[String(creatorId)];
      if (crCfg) byCreator[creatorId] = crCfg;
    }
    var cpsStart = (merchantRec && merchantRec.cpsEffectiveStart) || (laRec && laRec.cpsEffectiveStart) || (crRec && crRec.cpsEffectiveStart) || '';
    var cpsEnd = (merchantRec && merchantRec.cpsEffectiveEnd) || (laRec && laRec.cpsEffectiveEnd) || (crRec && crRec.cpsEffectiveEnd) || '';
    return { merchant: merchant, byCreator: byCreator, byLiveAccount: byLiveAccount, cpsEffectiveStart: cpsStart, cpsEffectiveEnd: cpsEnd };
  }
  function haSettleRulesMergeRules(creatorName, liveAccountUsernameHint, country) {
    country = country || 'US';
    var data = haSettleRulesGetCountryData(country);
    var merchant = data.merchant;
    var byCreator = data.byCreator;
    var byLiveAccount = data.byLiveAccount;
    var u = (haManageUsers || []).filter(function (x) { return x.name === creatorName; })[0];
    var creatorOverride = u ? byCreator[u.id] : null;
    var liveAccountUsername = (u && u.liveAccount && u.liveAccount.username ? u.liveAccount.username : null) || liveAccountUsernameHint || null;
    var liveAccountOverride = liveAccountUsername ? byLiveAccount[liveAccountUsername] : null;
    var base = { currency: merchant.currency || 'USD', hourlyRates: merchant.hourlyRates || [], hourlyRate: merchant.hourlyRate || 0, cpsMode: merchant.cpsMode || 'per_hour', cpsTiers: merchant.cpsTiers || [], cpsEffectiveStart: merchant.cpsEffectiveStart || '', cpsEffectiveEnd: merchant.cpsEffectiveEnd || '' };
    var live = liveAccountOverride ? { currency: liveAccountOverride.currency != null ? liveAccountOverride.currency : base.currency, hourlyRates: liveAccountOverride.hourlyRates || base.hourlyRates, hourlyRate: liveAccountOverride.hourlyRate != null ? liveAccountOverride.hourlyRate : base.hourlyRate, cpsMode: liveAccountOverride.cpsMode != null ? liveAccountOverride.cpsMode : base.cpsMode, cpsTiers: liveAccountOverride.cpsTiers && liveAccountOverride.cpsTiers.length ? liveAccountOverride.cpsTiers : base.cpsTiers, cpsEffectiveStart: liveAccountOverride.cpsEffectiveStart != null ? liveAccountOverride.cpsEffectiveStart : base.cpsEffectiveStart, cpsEffectiveEnd: liveAccountOverride.cpsEffectiveEnd != null ? liveAccountOverride.cpsEffectiveEnd : base.cpsEffectiveEnd } : base;
    var creator = creatorOverride ? { currency: live.currency, hourlyRates: creatorOverride.hourlyRates && creatorOverride.hourlyRates.length ? creatorOverride.hourlyRates : live.hourlyRates, hourlyRate: creatorOverride.hourlyRate != null ? creatorOverride.hourlyRate : live.hourlyRate, cpsMode: creatorOverride.cpsMode != null ? creatorOverride.cpsMode : live.cpsMode, cpsTiers: creatorOverride.cpsTiers && creatorOverride.cpsTiers.length ? creatorOverride.cpsTiers : live.cpsTiers, cpsEffectiveStart: creatorOverride.cpsEffectiveStart != null ? creatorOverride.cpsEffectiveStart : live.cpsEffectiveStart, cpsEffectiveEnd: creatorOverride.cpsEffectiveEnd != null ? creatorOverride.cpsEffectiveEnd : live.cpsEffectiveEnd } : live;
    return { rules: creator, override: creatorOverride };
  }
  function haSettleRulesGetForCreator(creatorName, liveAccountUsernameHint, country) {
    var merged = haSettleRulesMergeRules(creatorName, liveAccountUsernameHint, country);
    return {
      currency: merged.rules.currency || 'USD',
      hourlyRate: merged.rules.hourlyRate,
      hourlyRates: merged.rules.hourlyRates,
      cpsMode: merged.rules.cpsMode,
      cpsTiers: merged.rules.cpsTiers,
      cpsEffectiveStart: merged.rules.cpsEffectiveStart || '',
      cpsEffectiveEnd: merged.rules.cpsEffectiveEnd || '',
      override: merged.override
    };
  }
  function haSettleRulesV2MergeFromRecord(record, creatorName, liveAccountUsername) {
    var merchant = record.merchant || {};
    var byCreator = record.byCreator || {};
    var byLiveAccount = record.byLiveAccount || {};
    var u = (haManageUsers || []).filter(function (x) { return x.name === creatorName; })[0];
    var creatorOverride = u ? byCreator[u.id] : null;
    var liveOverride = liveAccountUsername ? byLiveAccount[liveAccountUsername] : null;
    var base = { currency: merchant.currency || 'USD', hourlyRates: merchant.hourlyRates || [], hourlyRate: merchant.hourlyRate || 0, cpsMode: merchant.cpsMode || 'per_hour', cpsTiers: merchant.cpsTiers || [], cpsEffectiveStart: record.cpsEffectiveStart || '', cpsEffectiveEnd: record.cpsEffectiveEnd || '' };
    var live = liveOverride ? { currency: liveOverride.currency != null ? liveOverride.currency : base.currency, hourlyRates: liveOverride.hourlyRates || base.hourlyRates, hourlyRate: liveOverride.hourlyRate != null ? liveOverride.hourlyRate : base.hourlyRate, cpsMode: liveOverride.cpsMode != null ? liveOverride.cpsMode : base.cpsMode, cpsTiers: liveOverride.cpsTiers && liveOverride.cpsTiers.length ? liveOverride.cpsTiers : base.cpsTiers, cpsEffectiveStart: base.cpsEffectiveStart, cpsEffectiveEnd: base.cpsEffectiveEnd } : base;
    var creator = creatorOverride ? { currency: creatorOverride.currency != null ? creatorOverride.currency : live.currency, hourlyRates: creatorOverride.hourlyRates && creatorOverride.hourlyRates.length ? creatorOverride.hourlyRates : live.hourlyRates, hourlyRate: creatorOverride.hourlyRate != null ? creatorOverride.hourlyRate : live.hourlyRate, cpsMode: creatorOverride.cpsMode != null ? creatorOverride.cpsMode : live.cpsMode, cpsTiers: creatorOverride.cpsTiers && creatorOverride.cpsTiers.length ? creatorOverride.cpsTiers : live.cpsTiers, cpsEffectiveStart: base.cpsEffectiveStart, cpsEffectiveEnd: base.cpsEffectiveEnd } : live;
    return creator;
  }
  function haSettleRulesGetForCreatorWithDate(creatorName, liveAccountUsername, country, sessionDateStr) {
    var mergedHourly = haSettleRulesV2BuildMergedRecord(creatorName, liveAccountUsername, country, sessionDateStr, 'hourly');
    var mergedCps = haSettleRulesV2BuildMergedRecord(creatorName, liveAccountUsername, country, sessionDateStr, 'cps');
    var oldRules = haSettleRulesGetForCreator(creatorName, liveAccountUsername, country);
    var hourlyRec = mergedHourly ? { merchant: mergedHourly.merchant, byCreator: mergedHourly.byCreator, byLiveAccount: mergedHourly.byLiveAccount, cpsEffectiveStart: mergedHourly.cpsEffectiveStart, cpsEffectiveEnd: mergedHourly.cpsEffectiveEnd } : null;
    var cpsRec = mergedCps ? { merchant: mergedCps.merchant, byCreator: mergedCps.byCreator, byLiveAccount: mergedCps.byLiveAccount, cpsEffectiveStart: mergedCps.cpsEffectiveStart, cpsEffectiveEnd: mergedCps.cpsEffectiveEnd } : null;
    var hourlyRules = hourlyRec ? haSettleRulesV2MergeFromRecord(hourlyRec, creatorName, liveAccountUsername) : oldRules;
    var cpsRules = cpsRec ? haSettleRulesV2MergeFromRecord(cpsRec, creatorName, liveAccountUsername) : oldRules;
    return { hourlyRules: hourlyRules, cpsRules: cpsRules };
  }
  function haSettleRulesGenerateBatch(startDate, endDate, opts) {
    opts = opts || {};
    var includeHourly = opts.includeHourly !== false;
    var includeCommission = opts.includeCommission !== false;
    var includeOtherRewards = opts.includeOtherRewards !== false;
    if (includeOtherRewards) haOtherRewardsLoad();
    var startTs = startDate ? new Date(startDate + 'T00:00:00').getTime() : 0;
    var endTs = endDate ? new Date(endDate + 'T23:59:59').getTime() : 0;
    var countryFilter = opts.country || null;
    var sessionsInRange = haLiveSessions.filter(function (s) {
      var t = s.startAt ? new Date(s.startAt).getTime() : 0;
      if (t < startTs || t > endTs) return false;
      if (countryFilter && s.country !== countryFilter) return false;
      return true;
    });
    var byLa = {};
    sessionsInRange.forEach(function (s) {
      var la = (s.liveAccountUsername || '').replace(/^@/, '') || 'unknown';
      var country = s.country || haGetLiveAccountCountry(la) || 'US';
      if (!byLa[la]) byLa[la] = { country: country, byCreator: {} };
      var creator = s.creatorName || 'Unknown';
      if (!byLa[la].byCreator[creator]) byLa[la].byCreator[creator] = { name: creator, handle: '@' + la.replace(/^@/, ''), liveAccountUsername: la, lives: [] };
      byLa[la].byCreator[creator].lives.push({ startAt: s.startAt, endAt: s.endAt, durationSeconds: s.durationSeconds, gmv: s.gmv, eventName: s.eventName, roomId: s.roomId });
    });
    var hostSources = [];
    Object.keys(byLa).forEach(function (la) {
      var group = byLa[la];
      Object.keys(group.byCreator).forEach(function (creatorName) {
        var h = group.byCreator[creatorName];
        hostSources.push({ name: h.name, handle: h.handle, liveAccountUsername: h.liveAccountUsername, country: group.country, lives: h.lives });
      });
    });
    if (!hostSources.length) return null;
    var period = startDate + ' ~ ' + endDate;
    var allHosts = hostSources.map(function (h) {
      var liveAccountUsername = (h.handle || '').replace(/^@/, '') || null;
      var lives = h.lives || [];
      var hourly = 0, commission = 0;
      var currency = 'USD';
      lives.forEach(function (lv) {
        var sessionDateStr = lv.startAt ? (lv.startAt + '').slice(0, 10) : null;
        var resolved = haSettleRulesGetForCreatorWithDate(h.name, liveAccountUsername, h.country, sessionDateStr);
        var hourlyRules = resolved.hourlyRules;
        var cpsRules = resolved.cpsRules;
        currency = cpsRules.currency || hourlyRules.currency || currency;
        var hours = (lv.durationSeconds || 0) / 3600;
        if (includeHourly) {
          var rate = haSettleRulesGetHourlyRateForTime(lv.startAt, { hourlyRates: hourlyRules.hourlyRates, hourlyRate: hourlyRules.hourlyRate, cpsTiers: hourlyRules.cpsTiers });
          hourly += (rate || 0) * hours;
        }
        var gmv = lv.gmv || 0;
        if (includeCommission && gmv > 0) {
          var cpsMode = cpsRules.cpsMode || 'per_hour';
          var matchVal = cpsMode === 'per_session' ? gmv : (hours > 0 ? gmv / hours : 0);
          if (cpsMode === 'per_hour' && hours <= 0) matchVal = -1;
          var rate = matchVal >= 0 ? haSettleRulesGetCpsRate(matchVal, cpsRules, lv.startAt) : 0;
          commission += Math.round(gmv * (rate / 100) * 100) / 100;
        }
      });
      var total = Math.round((hourly + commission) * 100) / 100;
      return { name: h.name, handle: h.handle, liveAccountUsername: liveAccountUsername, currency: currency, country: h.country, liveCount: lives.length, hourly: Math.round(hourly * 100) / 100, commission: Math.round(commission * 100) / 100, bonus: 0, total: total, lives: lives };
    });
    var byLa = {};
    allHosts.forEach(function (h) {
      var k = h.liveAccountUsername || 'unknown';
      if (!byLa[k]) byLa[k] = { hosts: [], currency: h.currency, country: h.country || (h.currency === 'CNY' ? 'CN' : 'US') };
      byLa[k].hosts.push(h);
    });
    var batches = [];
    Object.keys(byLa).forEach(function (la) {
      var group = byLa[la];
      var groupCountry = group.country || (group.currency === 'CNY' ? 'CN' : group.currency === 'EUR' ? 'DE' : 'US');
      if (countryFilter && groupCountry !== countryFilter) return;
      var hostList = group.hosts;
      var byHandle = {};
      hostList.forEach(function (h) {
        var k = h.handle || h.name || '';
        if (!byHandle[k]) byHandle[k] = { name: h.name, handle: h.handle, liveAccountUsername: h.liveAccountUsername, currency: h.currency, liveCount: h.liveCount || 0, hourly: h.hourly || 0, commission: h.commission || 0, bonus: h.bonus || 0, total: 0, lives: (h.lives || []).slice() };
        else {
          byHandle[k].hourly += h.hourly || 0;
          byHandle[k].commission += h.commission || 0;
          byHandle[k].liveCount += (h.liveCount || 0);
          byHandle[k].lives = (byHandle[k].lives || []).concat(h.lives || []);
        }
      });
      var hosts = Object.keys(byHandle).map(function (k) { var h = byHandle[k]; h.total = Math.round((h.hourly + h.commission) * 100) / 100; return h; });
      var totalHourly = hosts.reduce(function (s, x) { return s + x.hourly; }, 0);
      var totalCommission = hosts.reduce(function (s, x) { return s + x.commission; }, 0);
      var batchId = 'BATCH-' + startDate + (la !== 'unknown' ? '-' + la : '');
      var batch = {
        id: batchId,
        sn: '' + (1000000000 + Math.floor(Math.random() * 8999999999)),
        liveAccountUsername: la !== 'unknown' ? la : null,
        currency: group.currency || 'USD',
        country: group.country || null,
        period: period,
        hostCount: hosts.length,
        liveCount: hosts.reduce(function (s, x) { return s + x.liveCount; }, 0),
        totalHourly: totalHourly,
        totalCommission: totalCommission,
        totalBonus: 0,
        totalAmount: totalHourly + totalCommission,
        status: 'draft',
        createdBy: (typeof currentUser === 'object' && currentUser && currentUser.id) ? currentUser.id : null,
        createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
        confirmedBy: null,
        confirmedAt: null,
        hosts: hosts,
        customEntries: []
      };
      if (includeOtherRewards) {
        var matchedRewards = haOtherRewardsMatchBatch(batch, startDate, endDate);
        matchedRewards.forEach(function (r) {
          batch.customEntries.push({ type: 'other_reward', rewardId: r.id, creatorName: r.creatorName, title: r.title || '', amount: r.amount || 0, currency: r.currency || 'USD' });
        });
      }
      var customBonusTotal = batch.customEntries.reduce(function (s, e) { return s + (e.amount || 0); }, 0);
      batch.totalBonus = Math.round(customBonusTotal * 100) / 100;
      batch.totalAmount = Math.round((totalHourly + totalCommission + customBonusTotal) * 100) / 100;
      batches.push(batch);
    });
    return batches;
  }

  function haSettleRulesLoad() {
    try {
      var raw = localStorage.getItem(HA_SETTLE_RULES_KEY);
      if (raw) {
        var data = JSON.parse(raw);
        if (data.byCountry) {
          haSettleRulesByCountry = data.byCountry;
        } else if (data.merchant || data.byCreator || data.byLiveAccount) {
          var migrated = haSettleRulesGetCountryData('US');
          if (data.merchant) {
            migrated.merchant = data.merchant;
            if (!migrated.merchant.currency) migrated.merchant.currency = 'USD';
            if (!migrated.merchant.hourlyRates || !migrated.merchant.hourlyRates.length) {
              var defRate = migrated.merchant.hourlyRate || 100;
              migrated.merchant.hourlyRates = [{ id: 'hr1', startTime: '00:00', endTime: '23:59', rate: defRate, createdAt: Date.now() }];
            }
            if (!migrated.merchant.cpsMode) migrated.merchant.cpsMode = 'per_hour';
          }
          if (data.byCreator) migrated.byCreator = data.byCreator;
          if (data.byLiveAccount) migrated.byLiveAccount = data.byLiveAccount;
          haSettleRulesByCountry['US'] = migrated;
        }
      }
    } catch (e) {}
  }
  function haSettleRulesSave() {
    try {
      localStorage.setItem(HA_SETTLE_RULES_KEY, JSON.stringify({
        byCountry: haSettleRulesByCountry
      }));
    } catch (e) {}
  }
  function haSettleRulesV2Load() {
    try {
      var raw = localStorage.getItem(HA_SETTLE_RULES_V2_KEY);
      haSettleRulesV2 = raw ? JSON.parse(raw) : [];
    } catch (e) { haSettleRulesV2 = []; }
  }
  function haSettleRulesV2Save() {
    try {
      localStorage.setItem(HA_SETTLE_RULES_V2_KEY, JSON.stringify(haSettleRulesV2));
    } catch (e) {}
  }
  var haSettleRulesV2SelectedId = null;
  var haSettleRulesV2ActiveTab = 'live_account';
  var haSettleRulesV2CountryFilter = null;
  function renderHaSettleRulesV2() {
    haSettleRulesV2Load();
    var countryList = haGetMerchantLiveAccountCountries();
    if (!countryList.length) countryList = ['US', 'CN', 'DE'];
    if (haSettleRulesV2CountryFilter === null || countryList.indexOf(haSettleRulesV2CountryFilter) === -1) {
      haSettleRulesV2CountryFilter = countryList[0];
    }
    var country = haSettleRulesV2CountryFilter;
    var countryTabsHtml = countryList.map(function (c) {
      return '<button type="button" class="ha-settle-country-tab ha-rules-v2-country-tab' + (country === c ? ' ha-settle-country-tab--active' : '') + '" data-rules-v2-country="' + c + '">' + haCountryLabelWithFlag(c) + '</button>';
    }).join('');
    var tab = haSettleRulesV2ActiveTab || 'live_account';
    if (tab === 'merchant') { tab = 'live_account'; haSettleRulesV2ActiveTab = 'live_account'; }
    var dimTabs = [
      { id: 'live_account', label: t('tc.ha.rules_v2_tab_live_account') },
      { id: 'creator', label: t('tc.ha.rules_v2_tab_creator') }
    ];
    var dimTabButtons = dimTabs.map(function (tb) {
      return '<button type="button" class="ha-settle-country-tab ha-rules-v2-dim-tab' + (tab === tb.id ? ' ha-settle-country-tab--active' : '') + '" data-rules-v2-tab="' + tb.id + '">' + tb.label + '</button>';
    }).join('');
    var createForm = renderHaSettleRulesV2CreateForm(tab, country);
    var historyTable = renderHaSettleRulesV2HistoryTable(tab, country);
    return '<div class="ha-settle-content ha-rules-v2-page">' +
      '<div class="card ha-settle-card ha-rules-card">' +
        '<div class="ha-settle-intro">' +
          '<h3 class="ha-rules-title">' + t('tc.ha.rules_v2_title') + '</h3>' +
          '<p class="ha-settle-desc">' + t('tc.ha.rules_v2_desc') + '</p>' +
          '<p class="ha-rules-v2-priority" title="' + t('tc.ha.rules_priority_hint') + '"><i class="fas fa-info-circle"></i> ' + t('tc.ha.rules_priority') + ': ' + t('tc.ha.rules_priority_hint') + '</p>' +
          '<div class="ha-settle-la-filter ha-settle-la-filter--intro ha-rules-v2-intro">' +
            '<label class="ha-settle-la-filter-label">' + t('tc.ha.rules_country_filter') + '</label>' +
            '<div class="ha-rules-v2-pill-tabs ha-rules-v2-country-tabs">' + countryTabsHtml + '</div>' +
          '</div>' +
          '<div class="ha-settle-la-filter ha-settle-la-filter--intro ha-rules-v2-dim-row">' +
            '<label class="ha-settle-la-filter-label">' + t('tc.ha.rules_v2_dimension') + '</label>' +
            '<div class="ha-rules-v2-pill-tabs ha-rules-v2-dim-tabs">' + dimTabButtons + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="ha-rules-v2-tab-content">' +
          '<div class="ha-rules-v2-create-section">' + createForm + '</div>' +
          '<div class="ha-rules-v2-history-section">' +
            '<h4 class="ha-rules-v2-history-title">' + t('tc.ha.rules_v2_history') + '</h4>' +
            historyTable +
          '</div>' +
        '</div>' +
      '</div>' +
      '</div>';
  }
  function haRulesV2GetConfig(record) {
    var dim = record.dimension || 'merchant';
    var cfg = null;
    if (dim === 'merchant') cfg = record.merchant;
    else if (dim === 'live_account' && record.byLiveAccount) {
      var laKey = record.liveAccountUsername || Object.keys(record.byLiveAccount)[0];
      cfg = laKey ? record.byLiveAccount[laKey] : null;
    } else if (dim === 'creator' && record.byCreator) {
      var crKey = record.creatorId != null ? record.creatorId : Object.keys(record.byCreator)[0];
      cfg = crKey != null ? (record.byCreator[crKey] || record.byCreator[String(crKey)]) : null;
    }
    return cfg || {};
  }
  function haRulesV2FormatHourlySummary(config) {
    var rates = config.hourlyRates || [];
    if (!rates.length) return '—';
    var distinct = [];
    rates.forEach(function (r) {
      var rt = r.rate != null ? Number(r.rate) : 0;
      if (distinct.indexOf(rt) === -1) distinct.push(rt);
    });
    return distinct.length ? distinct.map(function (r) { return r + '/hr'; }).join(', ') : '—';
  }
  function haRulesV2FormatCpsSummary(config) {
    var tiers = (config.cpsTiers || []).slice().sort(function (a, b) { return (a.min || 0) - (b.min || 0); });
    if (!tiers.length) return '—';
    var cur = config.currency || 'USD';
    var blocks = tiers.map(function (t) {
      var minStr = haFormatAmount(t.min || 0, cur);
      var maxStr = t.max != null ? haFormatAmount(t.max, cur) : '∞';
      var range = minStr + ' – ' + maxStr;
      var rate = (t.rate != null ? Number(t.rate) : 0) + '%';
      return '<div class="ha-rules-summary-tier"><span class="ha-rules-summary-range">' + range + '</span><span class="ha-rules-summary-rate">' + rate + '</span></div>';
    });
    return '<div class="ha-rules-summary-tiers">' + blocks.join('') + '</div>';
  }
  function renderHaSettleRulesV2HistoryTable(dimension, country) {
    dimension = dimension || 'merchant';
    var filtered = (haSettleRulesV2 || []).filter(function (r) {
      var dim = r.dimension || 'merchant';
      if (dim !== dimension) return false;
      if (country && r.country !== country) return false;
      return true;
    });
    var sorted = filtered.slice().sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); });
    if (!sorted.length) {
      return '<div class="ha-rules-v2-history-empty ha-rules-empty-state">' +
        '<div class="ha-rules-empty-icon"><i class="fas fa-sliders-h"></i></div>' +
        '<p class="ha-rules-empty-title">' + t('tc.ha.rules_v2_empty_title') + '</p>' +
        '<p class="ha-rules-empty-desc">' + t('tc.ha.rules_v2_empty') + '</p>' +
      '</div>';
    }
    var showCountryCol = !country;
    var baseCols = [t('tc.ha.rules_v2_subject'), t('tc.ha.rules_v2_hourly_summary'), t('tc.ha.rules_v2_cps_summary'), t('tc.ha.rules_effective_period'), t('tc.ha.rules_v2_status'), t('tc.ha.rules_v2_meta')];
    var cols = dimension === 'merchant' && !showCountryCol ? baseCols.slice(1) : baseCols;
    var headerRow = '<tr>' + cols.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr>';
    var rows = sorted.map(function (r) {
      var creatorName = r.createdBy ? findMemberName(r.createdBy).name : '-';
      var createdAtStr = r.createdAt ? new Date(r.createdAt).toLocaleString(getLang() === 'zh' ? 'zh-CN' : 'en-US', { dateStyle: 'short', timeStyle: 'short' }) : '-';
      var hourlyPeriod = (r.hourlyEffectiveStart || r.hourlyEffectiveEnd) ? ((r.hourlyEffectiveStart || '') + ' – ' + (r.hourlyEffectiveEnd || '')) : '—';
      var cpsPeriod = (r.cpsEffectiveStart || r.cpsEffectiveEnd) ? ((r.cpsEffectiveStart || '') + ' – ' + (r.cpsEffectiveEnd || '')) : '—';
      var statusRaw = (r.status != null && r.status !== '') ? String(r.status) : '';
      var statusVal = statusRaw ? (function () {
        var s = statusRaw.toLowerCase();
        var cls = 'ha-rules-v2-status-badge';
        if (s === 'active' || s === '生效') cls += ' ha-rules-v2-status-badge--active';
        else if (s === 'pending' || s === '待生效') cls += ' ha-rules-v2-status-badge--pending';
        else if (s === 'expired' || s === '已失效') cls += ' ha-rules-v2-status-badge--expired';
        return '<span class="' + cls + '">' + statusRaw + '</span>';
      })() : '—';
      var dimCol = dimension === 'live_account' ? (r.liveAccountUsername || '—') :
        dimension === 'creator' ? ((function () { var u = (haManageUsers || []).filter(function (x) { return x.id === r.creatorId; })[0]; return u ? u.name : ('#' + r.creatorId); })()) : (r.country || '—');
      var subjectVal = showCountryCol && dimCol ? (dimCol + ' · ' + (r.country || '—')) : (dimCol || r.country || '—');
      var effectivePeriod = (r.hourlyEffectiveStart || r.hourlyEffectiveEnd || r.cpsEffectiveStart || r.cpsEffectiveEnd)
        ? ((r.hourlyEffectiveStart || r.cpsEffectiveStart || '') + ' – ' + (r.hourlyEffectiveEnd || r.cpsEffectiveEnd || ''))
        : '—';
      var metaVal = '<span class="ha-rules-v2-meta">' + (creatorName !== '-' ? creatorName + ' · ' : '') + createdAtStr + '</span>';
      var cfg = haRulesV2GetConfig(r);
      var hourlyVal = haRulesV2FormatHourlySummary(cfg);
      var cpsVal = haRulesV2FormatCpsSummary(cfg);
      var cells = showCountryCol
        ? [subjectVal, hourlyVal, cpsVal, effectivePeriod, statusVal, metaVal]
        : (dimension === 'merchant' ? [hourlyVal, cpsVal, effectivePeriod, statusVal, metaVal] : [subjectVal, hourlyVal, cpsVal, effectivePeriod, statusVal, metaVal]);
      return '<tr>' + cells.map(function (cell) {
        var content = (typeof cell === 'string' && cell.indexOf('<') !== -1) ? cell : (cell || '—');
        return '<td>' + content + '</td>';
      }).join('') + '</tr>';
    }).join('');
    return '<div class="ha-rules-v2-history-table-wrap"><table class="ha-rules-table ha-rules-v2-history-table"><thead>' + headerRow + '</thead><tbody>' + rows + '</tbody></table></div>';
  }
  function renderHaSettleRulesV2CreateForm(dimension, country) {
    dimension = dimension || 'merchant';
    var countryList = haGetMerchantLiveAccountCountries();
    if (!countryList.length) countryList = ['US', 'CN', 'DE'];
    var selectedCountry = country || countryList[0];
    var countryOpts = countryList.map(function (c) { return '<option value="' + c + '"' + (c === selectedCountry ? ' selected' : '') + '>' + c + '</option>'; }).join('');
    var liveAccountOpts = '';
    var creatorOpts = '';
    if (dimension === 'live_account') {
      var laUsers = [];
      (haManageUsers || []).forEach(function (u) {
        var la = u.liveAccount;
        if (la && la.username) {
          var un = (la.username + '').replace(/^@/, '');
          if (laUsers.indexOf(un) === -1) laUsers.push(un);
        }
      });
      liveAccountOpts = '<option value="">' + t('tc.ha.rules_live_account_select') + '</option>' + laUsers.map(function (un) { return '<option value="' + un + '">' + un + '</option>'; }).join('');
    }
    if (dimension === 'creator') {
      creatorOpts = (haManageUsers || []).map(function (u) { return '<option value="' + u.id + '">' + (u.name || '#' + u.id) + '</option>'; }).join('');
    }
    var defaultHourly = [{ id: 'hr1', effectiveStart: '', effectiveEnd: '', rate: 100, createdAt: Date.now() }];
    var defaultTiers = [{ id: 't1', min: 0, max: 300, rate: 1.5 }, { id: 't2', min: 300, max: 1500, rate: 3 }, { id: 't3', min: 1500, max: null, rate: 5 }];
    var hourlyRows = defaultHourly.map(function (r) {
      return '<tr class="ha-rules-v2-hourly-row" data-id="' + r.id + '" data-created-at="' + (r.createdAt || Date.now()) + '">' +
        '<td><div class="ha-rules-cps-effective-inputs"><input type="date" class="ha-rules-input ha-rules-hourly-effective-start" value="' + (r.effectiveStart || '') + '"><span class="ha-rules-cps-effective-sep">–</span><input type="date" class="ha-rules-input ha-rules-hourly-effective-end" value="' + (r.effectiveEnd || '') + '"></div></td>' +
        '<td><input type="number" class="ha-rules-input ha-rules-hourly-rate" value="' + (r.rate || 100) + '" min="0" step="1"> ' + t('tc.ha.rules_hourly_ph') + '</td>' +
        '<td><button type="button" class="btn btn-ghost btn-xs ha-rules-hourly-remove"><i class="fas fa-trash-alt"></i></button></td></tr>';
    }).join('');
    var tiersHtml = defaultTiers.map(function (tier) {
      return '<tr class="ha-rules-v2-tier-row" data-id="' + tier.id + '">' +
        '<td><input type="number" class="ha-rules-input ha-rules-cps-min" value="' + tier.min + '" min="0" step="1"></td>' +
        '<td><input type="number" class="ha-rules-input ha-rules-cps-max" value="' + (tier.max != null ? tier.max : '') + '" min="0" step="1" placeholder="' + t('tc.ha.rules_cps_max_unlimited') + '"></td>' +
        '<td><input type="number" class="ha-rules-input ha-rules-cps-rate" value="' + tier.rate + '" min="0" max="100" step="0.1"> %</td>' +
        '<td><button type="button" class="btn btn-ghost btn-xs ha-rules-tier-remove"><i class="fas fa-trash-alt"></i></button></td></tr>';
    }).join('');
    var dimBlock = '';
    if (dimension === 'live_account') {
      dimBlock = '<div class="ha-rules-block"><label class="ha-rules-block-label">' + t('tc.ha.rules_v2_tab_live_account') + '</label><select class="ha-rules-select ha-rules-v2-live-account" id="haRulesV2LiveAccount">' + liveAccountOpts + '</select></div>';
    } else if (dimension === 'creator') {
      dimBlock =
        '<div class="ha-rules-block ha-rules-block--full">' +
          '<label class="ha-rules-block-label">' + t('tc.ha.rules_creator_name') + '</label>' +
          '<div class="ms-wrap" id="haRulesV2CreatorTagSelect">' +
            '<div class="ms-selected" id="haRulesV2CreatorTags"></div>' +
            '<input type="text" class="ms-input" id="haRulesV2CreatorSearch" placeholder="' + t('tc.ha.rules_creator_add_search_ph') + '">' +
            '<div class="ms-dropdown ms-dropdown--hidden" id="haRulesV2CreatorSuggestions"></div>' +
          '</div>' +
          '<p class="ha-rules-hint">' + t('tc.ha.rules_creator_multi_hint') + '</p>' +
          '<select class="ha-rules-select ha-rules-v2-creator" id="haRulesV2Creator" multiple style="display:none">' + creatorOpts + '</select>' +
        '</div>';
    }
    return '<div class="ha-rules-v2-form card" data-rules-v2-dimension="' + dimension + '" data-rules-v2-country="' + (selectedCountry || '') + '">' +
      '<h4 class="ha-rules-v2-form-title">' + t('tc.ha.rules_v2_create_new') + '</h4>' +
      '<div class="ha-rules-v2-form-row ha-rules-v2-form-row--compact">' +
        dimBlock +
        '<div class="ha-rules-block ha-rules-block--inline"><label class="ha-rules-block-label">' + t('tc.ha.rules_currency') + '</label><select class="ha-rules-select ha-rules-v2-currency" id="haRulesV2Currency"><option value="USD">USD</option><option value="CNY">CNY</option><option value="EUR">EUR</option></select></div>' +
      '</div>' +
      '<input type="hidden" id="haRulesV2Country" value="' + (selectedCountry || '') + '">' +
      '<details class="ha-rules-collapse">' +
        '<summary class="ha-rules-collapse-summary">' + t('tc.ha.rules_section_hourly') + '</summary>' +
        '<div class="ha-rules-block ha-rules-collapse-body">' +
          '<table class="ha-rules-table"><thead><tr><th>' + t('tc.ha.rules_v2_hourly_effective') + '</th><th>' + t('tc.ha.rules_hourly') + '</th><th></th></tr></thead><tbody id="haRulesV2HourlyList">' + hourlyRows + '</tbody></table>' +
          '<button type="button" class="btn btn-ghost btn-sm ha-rules-v2-hourly-add"><i class="fas fa-plus"></i> ' + t('tc.ha.rules_hourly_add') + '</button>' +
        '</div>' +
      '</details>' +
      '<details class="ha-rules-collapse">' +
        '<summary class="ha-rules-collapse-summary">' + t('tc.ha.rules_section_cps') + '</summary>' +
        '<div class="ha-rules-block ha-rules-collapse-body">' +
          '<div class="ha-rules-block">' +
            '<label class="ha-rules-block-label">' + t('tc.ha.rules_v2_cps_effective') + '</label>' +
            '<div class="ha-rules-cps-effective-inputs">' +
              '<input type="date" class="ha-rules-input ha-rules-v2-cps-effective-start" id="haRulesV2CpsEffectiveStart">' +
              '<span class="ha-rules-cps-effective-sep">–</span>' +
              '<input type="date" class="ha-rules-input ha-rules-v2-cps-effective-end" id="haRulesV2CpsEffectiveEnd">' +
            '</div>' +
          '</div>' +
          '<div class="ha-rules-cps-mode">' +
            '<label class="ha-rules-cps-mode-opt"><input type="radio" name="haRulesV2CpsMode" value="per_hour" checked> ' + t('tc.ha.rules_cps_mode_per_hour') + '</label>' +
            '<label class="ha-rules-cps-mode-opt"><input type="radio" name="haRulesV2CpsMode" value="per_session"> ' + t('tc.ha.rules_cps_mode_per_session') + '</label>' +
          '</div>' +
          '<div class="ha-rules-table-wrap"><table class="ha-rules-table"><thead><tr><th>' + t('tc.ha.rules_cps_min') + '</th><th>' + t('tc.ha.rules_cps_max') + '</th><th>' + t('tc.ha.rules_cps_rate') + '</th><th></th></tr></thead><tbody id="haRulesV2CpsTiers">' + tiersHtml + '</tbody></table></div>' +
          '<button type="button" class="btn btn-ghost btn-sm ha-rules-v2-cps-add"><i class="fas fa-plus"></i> ' + t('tc.ha.rules_cps_add') + '</button>' +
        '</div>' +
      '</details>' +
      '<div class="ha-rules-v2-form-actions">' +
        '<button type="button" class="btn btn-primary ha-rules-v2-submit"><i class="fas fa-plus"></i> ' + t('tc.ha.rules_v2_create') + '</button>' +
      '</div>' +
      '</div>';
  }
  function renderHaSettleRulesV2Detail(rec) {
    var creatorName = rec.createdBy ? findMemberName(rec.createdBy).name : '-';
    var createdAtStr = rec.createdAt ? new Date(rec.createdAt).toLocaleString(getLang() === 'zh' ? 'zh-CN' : 'en-US', { dateStyle: 'short', timeStyle: 'short' }) : '-';
    var m = rec.merchant || {};
    var hourlyRows = (m.hourlyRates || []).map(function (r) {
      var rowPeriod = (r.effectiveStart || r.effectiveEnd) ? ((r.effectiveStart || '') + ' – ' + (r.effectiveEnd || '')) : '—';
      return '<tr><td>' + rowPeriod + '</td><td>' + (r.rate || 0) + ' ' + t('tc.ha.rules_hourly_ph') + '</td></tr>';
    }).join('');
    var tiersRows = (m.cpsTiers || []).map(function (tier) {
      return '<tr><td>' + (tier.min || 0) + '</td><td>' + (tier.max != null ? tier.max : '—') + '</td><td>' + (tier.rate || 0) + ' %</td></tr>';
    }).join('');
    return '<div class="ha-rules-v2-detail card">' +
      '<h4 class="ha-rules-v2-form-title">' + (rec.country || '') + ' · ' + (rec.hourlyEffectiveStart || '') + ' – ' + (rec.cpsEffectiveEnd || '') + '</h4>' +
      '<div class="ha-rules-v2-detail-meta">' + t('tc.ha.rules_v2_created_by') + ': ' + creatorName + ' · ' + t('tc.ha.rules_v2_created_at') + ': ' + createdAtStr + '</div>' +
      '<div class="ha-rules-block"><label class="ha-rules-block-label">' + t('tc.ha.rules_v2_hourly_effective') + '</label><p>' + (rec.hourlyEffectiveStart || '') + ' – ' + (rec.hourlyEffectiveEnd || '') + '</p></div>' +
      '<div class="ha-rules-block"><label class="ha-rules-block-label">' + t('tc.ha.rules_v2_cps_effective') + '</label><p>' + (rec.cpsEffectiveStart || '') + ' – ' + (rec.cpsEffectiveEnd || '') + '</p></div>' +
      '<div class="ha-rules-block"><label class="ha-rules-block-label">' + t('tc.ha.rules_currency') + '</label><p>' + (m.currency || 'USD') + '</p></div>' +
      '<div class="ha-rules-block"><label class="ha-rules-block-label">' + t('tc.ha.rules_hourly_by_period') + '</label>' +
        '<table class="ha-rules-table"><thead><tr><th>' + t('tc.ha.rules_v2_hourly_effective') + '</th><th>' + t('tc.ha.rules_hourly') + '</th></tr></thead><tbody>' + (hourlyRows || '<tr><td colspan="2">—</td></tr>') + '</tbody></table></div>' +
      '<div class="ha-rules-block"><label class="ha-rules-block-label">' + t('tc.ha.rules_cps') + '</label>' +
        '<table class="ha-rules-table"><thead><tr><th>' + t('tc.ha.rules_cps_min') + '</th><th>' + t('tc.ha.rules_cps_max') + '</th><th>' + t('tc.ha.rules_cps_rate') + '</th></tr></thead><tbody>' + (tiersRows || '<tr><td colspan="3">—</td></tr>') + '</tbody></table></div>' +
      '</div>';
  }
  var haOtherRewardsCountryFilter = '';
  var haOtherRewardsCreatorFilter = '';
  var haOtherRewardsTitleFilter = '';
  var haOtherRewardsPeriodStartFilter = '';
  var haOtherRewardsPeriodEndFilter = '';
  function renderHaOtherRewardsPage() {
    haOtherRewardsLoad();
    var countryList = haGetMerchantLiveAccountCountries();
    if (countryList.length && !haOtherRewardsCountryFilter) haOtherRewardsCountryFilter = '';
    var countryTabsHtml = '<button type="button" class="ha-settle-country-tab ha-other-rewards-country-tab' + (!haOtherRewardsCountryFilter ? ' ha-settle-country-tab--active' : '') + '" data-country="">' + t('tc.ha.filter_live_account_all') + '</button>' +
      countryList.map(function (c) {
        return '<button type="button" class="ha-settle-country-tab ha-other-rewards-country-tab' + (haOtherRewardsCountryFilter === c ? ' ha-settle-country-tab--active' : '') + '" data-country="' + c + '">' + haCountryLabelWithFlag(c) + '</button>';
      }).join('');
    var filtered = (haOtherRewards || []).filter(function (r) {
      if (haOtherRewardsCountryFilter && r.country && r.country !== haOtherRewardsCountryFilter) return false;
      if (haOtherRewardsCreatorFilter && (!r.creatorName || r.creatorName.toLowerCase().indexOf(haOtherRewardsCreatorFilter.toLowerCase()) === -1)) return false;
      if (haOtherRewardsTitleFilter && (!r.title || String(r.title).toLowerCase().indexOf(haOtherRewardsTitleFilter.toLowerCase()) === -1)) return false;
      if (haOtherRewardsPeriodStartFilter || haOtherRewardsPeriodEndFilter) {
        var rStart = r.periodStart || '';
        var rEnd = r.periodEnd || '';
        var fStart = haOtherRewardsPeriodStartFilter || '0000-00-00';
        var fEnd = haOtherRewardsPeriodEndFilter || '9999-12-31';
        if (!rStart || !rEnd) return false;
        if (rEnd < fStart || rStart > fEnd) return false;
      }
      return true;
    });
    var rowsHtml = filtered.map(function (r) {
      var period = (r.periodStart && r.periodEnd) ? (r.periodStart + ' ~ ' + r.periodEnd) : '-';
      var usedInBatch = haOtherRewardIsUsedInBatch(r.id);
      var createdByName = r.createdBy && typeof findMemberName === 'function' ? (findMemberName(r.createdBy).name || '-') : '-';
      var statusText = usedInBatch ? t('tc.ha.settled') : t('tc.ha.unsettled');
      var statusClass = usedInBatch ? 'ha-bonus-status ha-bonus-status--settled' : 'ha-bonus-status ha-bonus-status--unsettled';
      var deleteBtn = usedInBatch
        ? '<span class="ha-other-reward-remove-disabled" title="' + (t('tc.ha.other_rewards_cannot_delete') || 'Cannot delete: used in settlement batch') + '"><i class="fas fa-trash-alt"></i></span>'
        : '<button type="button" class="btn btn-ghost btn-xs ha-other-reward-remove" data-id="' + (r.id || '') + '"><i class="fas fa-trash-alt"></i></button>';
      return '<tr class="ha-other-reward-row" data-id="' + (r.id || '') + '">' +
        '<td>' + (r.creatorName || '-') + '</td>' +
        '<td>' + (r.title || '-') + '</td>' +
        '<td>' + (r.amount != null ? r.amount : '-') + '</td>' +
        '<td>' + (r.currency || '-') + '</td>' +
        '<td>' + period + '</td>' +
        '<td>' + (r.country || '-') + '</td>' +
        '<td>' + createdByName + '</td>' +
        '<td><span class="' + statusClass + '">' + statusText + '</span></td>' +
        '<td>' + deleteBtn + '</td>' +
        '</tr>';
    }).join('');
    if (!rowsHtml) rowsHtml = '<tr><td colspan="9" class="ha-settle-empty ha-rules-empty-state"><div class="ha-rules-empty-inner"><span class="ha-rules-empty-text">' + t('tc.ha.other_rewards_empty') + '</span><button type="button" class="btn btn-ghost btn-sm ha-other-reward-add-inline"><i class="fas fa-plus"></i> ' + t('tc.ha.other_rewards_add') + '</button></div></td></tr>';
    return '<div class="ha-other-rewards-page">' +
      '<div class="card ha-settle-card ha-rules-card">' +
        '<div class="ha-settle-intro">' +
          '<h3 class="ha-rules-title">' + t('tc.ha.other_rewards_title') + '</h3>' +
          '<p class="ha-settle-desc">' + t('tc.ha.other_rewards_hint') + '</p>' +
          '<div class="ha-settle-la-filter ha-settle-la-filter--intro ha-other-rewards-country-filter">' +
            '<label class="ha-settle-la-filter-label">' + t('tc.ha.filter_live_account') + '</label>' +
            '<div class="ha-other-rewards-country-tabs">' + countryTabsHtml + '</div>' +
          '</div>' +
          '<div class="ha-other-rewards-filter-bar">' +
            '<div class="ha-other-rewards-filters">' +
              '<label class="ha-other-rewards-filter-label">' + t('tc.ha.other_rewards_period_filter') + '</label>' +
              '<div class="ha-other-rewards-period-inputs">' +
                '<input type="date" class="ha-rules-input ha-other-reward-filter-period-start" value="' + (haOtherRewardsPeriodStartFilter || '') + '" title="' + t('tc.ha.other_rewards_period_filter') + '">' +
                '<span class="ha-other-rewards-period-sep">–</span>' +
                '<input type="date" class="ha-rules-input ha-other-reward-filter-period-end" value="' + (haOtherRewardsPeriodEndFilter || '') + '">' +
              '</div>' +
              '<input type="text" class="ha-rules-input ha-other-reward-filter-creator" placeholder="' + t('tc.ha.custom_entry_creator') + '..." value="' + (haOtherRewardsCreatorFilter || '') + '">' +
              '<input type="text" class="ha-rules-input ha-other-reward-filter-title" placeholder="' + t('tc.ha.custom_entry_title') + '..." value="' + (haOtherRewardsTitleFilter || '') + '">' +
            '</div>' +
            '<div class="ha-other-rewards-toolbar-actions">' +
              '<button type="button" class="btn btn-secondary btn-sm ha-other-reward-export-excel"><i class="fas fa-file-export"></i> ' + t('tc.ha.other_rewards_export_excel') + '</button>' +
              '<button type="button" class="btn btn-primary btn-sm ha-other-reward-add"><i class="fas fa-plus"></i> ' + t('tc.ha.other_rewards_add') + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="table-wrap ha-rules-override-table-wrap">' +
          '<table class="ha-rules-table ha-rules-override-table"><thead><tr><th>' + t('tc.ha.custom_entry_creator') + '</th><th>' + t('tc.ha.custom_entry_title') + '</th><th>' + t('tc.ha.custom_entry_amount') + '</th><th>' + t('tc.ha.custom_entry_currency') + '</th><th>' + t('tc.ha.other_rewards_period') + '</th><th>' + t('tc.ha.filter_live_account') + '</th><th>' + t('tc.ha.other_rewards_created_by') + '</th><th>' + t('tc.ha.other_rewards_settlement_status') + '</th><th></th></tr></thead><tbody id="haOtherRewardsList">' + rowsHtml + '</tbody></table>' +
        '</div>' +
      '</div>' +
      '<div class="ha-rules-creator-modal-overlay" id="haOtherRewardModal">' +
        '<div class="ha-rules-creator-modal">' +
          '<button type="button" class="ha-modal-close ha-other-reward-modal-close" aria-label="Close"><i class="fas fa-times"></i></button>' +
          '<h3 class="ha-rules-modal-title" id="haOtherRewardModalTitle">' + t('tc.ha.other_rewards_add') + '</h3>' +
          '<div class="ha-rules-creator-modal-body" id="haOtherRewardModalBody"></div>' +
          '<div class="ha-rules-creator-modal-footer">' +
            '<button type="button" class="btn btn-ghost ha-other-reward-modal-cancel">' + t('common.cancel') + '</button>' +
            '<button type="button" class="btn btn-primary ha-other-reward-modal-save">' + t('common.save') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function haRulesLiveAccountAddOpen() {
    var modal = document.getElementById('haRulesLiveAccountAddModal');
    var bodyEl = document.getElementById('haRulesLiveAccountAddBody');
    if (!modal || !bodyEl) return;
    var existing = Object.keys(haSettleRulesByLiveAccount || {});
    var available = (haManageUsers || []).filter(function (u) {
      var la = u.liveAccount;
      var un = la && la.username ? la.username : null;
      return un && existing.indexOf(un) === -1;
    }).reduce(function (acc, u) {
      var un = u.liveAccount.username;
      if (acc.indexOf(un) === -1) acc.push(un);
      return acc;
    }, []);
    if (!available.length) {
      bodyEl.innerHTML = '<p class="ha-rules-hint">' + t('tc.ha.rules_live_account_empty') + '</p>';
    } else {
      bodyEl.innerHTML = '<div class="ha-rules-creator-add-list">' + available.map(function (un) {
        return '<label class="ha-rules-creator-add-item"><input type="radio" name="haLiveAccountAdd" value="' + un + '"> @' + un + '</label>';
      }).join('') + '</div>';
    }
    modal.classList.add('show');
  }
  function haRulesLiveAccountModalOpen(username, override) {
    var modal = document.getElementById('haRulesLiveAccountModal');
    var titleEl = document.getElementById('haRulesLiveAccountModalTitle');
    var bodyEl = document.getElementById('haRulesLiveAccountModalBody');
    if (!modal || !bodyEl) return;
    if (titleEl) titleEl.textContent = t('tc.ha.rules_creator_edit') + ': @' + username;
    bodyEl.innerHTML = haRulesRenderOverrideFormHtml(override || {}, { showCurrency: true });
    bodyEl.setAttribute('data-username', username);
    haRulesBindOverrideFormEvents(bodyEl);
    modal.classList.add('show');
  }
  function haRulesLiveAccountModalSave() {
    var bodyEl = document.getElementById('haRulesLiveAccountModalBody');
    if (!bodyEl) return;
    var username = bodyEl.getAttribute('data-username');
    if (!username) return;
    var parsed = haRulesParseOverrideForm(bodyEl);
    haSettleRulesByLiveAccount[username] = { hourlyRates: parsed.hourlyRates, cpsTiers: parsed.cpsTiers, cpsMode: parsed.cpsMode, currency: parsed.currency, cpsEffectiveStart: parsed.cpsEffectiveStart, cpsEffectiveEnd: parsed.cpsEffectiveEnd };
    if (parsed.hourlyRates.length) haSettleRulesByLiveAccount[username].hourlyRate = parsed.hourlyRates[0].rate;
    haSettleRulesSave();
    showToast(t('tc.ha.rules_saved'));
  }
  function haRulesCreatorAddRenderList(container, searchQ, typeFilter) {
    var available = (haManageUsers || []).filter(function (u) { return !haSettleRulesByCreator[u.id]; });
    var filtered = available.filter(function (u) {
      var matchType = !typeFilter || typeFilter === 'all' || u.type === typeFilter;
      var matchName = !searchQ || (u.name || '').toLowerCase().indexOf(searchQ.toLowerCase()) !== -1;
      return matchType && matchName;
    });
    var listEl = container.querySelector('.ha-rules-creator-add-list');
    var emptyEl = container.querySelector('.ha-rules-creator-add-empty');
    if (!listEl) return;
    if (available.length === 0) {
      listEl.innerHTML = '';
      if (emptyEl) emptyEl.textContent = t('tc.ha.rules_creator_empty');
      return;
    }
    if (filtered.length === 0) {
      listEl.innerHTML = '';
      if (emptyEl) emptyEl.textContent = t('tc.ha.rules_creator_add_no_match');
      return;
    }
    if (emptyEl) emptyEl.textContent = '';
    listEl.innerHTML = filtered.map(function (u) {
      var typeLabel = u.type === 'host' ? t('tc.ha.host') : t('tc.ha.affiliate');
      return '<label class="ha-rules-creator-add-item"><input type="checkbox" class="ha-creator-add-cb" name="haCreatorAdd" value="' + u.id + '"> <span class="ha-rules-creator-add-name">' + u.name + '</span><span class="ha-rules-creator-add-type ' + u.type + '">' + typeLabel + '</span></label>';
    }).join('');
  }
  function haRulesCreatorAddOpen() {
    var modal = document.getElementById('haRulesCreatorAddModal');
    var bodyEl = document.getElementById('haRulesCreatorAddBody');
    if (!modal || !bodyEl) return;
    var available = (haManageUsers || []).filter(function (u) { return !haSettleRulesByCreator[u.id]; });
    bodyEl.innerHTML = '<div class="ha-rules-creator-add-form">' +
      '<div class="ha-rules-creator-add-filters">' +
        '<input type="text" class="ha-rules-input ha-rules-creator-add-search" placeholder="' + t('tc.ha.rules_creator_add_search_ph') + '" autocomplete="off">' +
        '<div class="ha-rules-creator-add-type-tabs">' +
          '<button type="button" class="ha-rules-creator-add-type-btn active" data-type="all">' + t('tc.ha.rules_creator_add_filter_all') + '</button>' +
          '<button type="button" class="ha-rules-creator-add-type-btn" data-type="host">' + t('tc.ha.host') + '</button>' +
          '<button type="button" class="ha-rules-creator-add-type-btn" data-type="affiliate">' + t('tc.ha.affiliate') + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="ha-rules-creator-add-list-wrap">' +
        '<p class="ha-rules-creator-add-empty ha-rules-hint"></p>' +
        '<div class="ha-rules-creator-add-list"></div>' +
      '</div>' +
      '</div>';
    var searchEl = bodyEl.querySelector('.ha-rules-creator-add-search');
    var typeBtns = bodyEl.querySelectorAll('.ha-rules-creator-add-type-btn');
    var currentType = 'all';
    var render = function () {
      haRulesCreatorAddRenderList(bodyEl, searchEl ? searchEl.value.trim() : '', currentType);
    };
    if (searchEl) {
      searchEl.addEventListener('input', function () { render(); });
      searchEl.addEventListener('keyup', function () { render(); });
    }
    typeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        typeBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentType = btn.getAttribute('data-type') || 'all';
        render();
      });
    });
    render();
    modal.classList.add('show');
    setTimeout(function () { if (searchEl) searchEl.focus(); }, 100);
  }
  function haRulesCreatorModalOpen(creatorId, creatorName, override) {
    var modal = document.getElementById('haRulesCreatorModal');
    var titleEl = document.getElementById('haRulesCreatorModalTitle');
    var bodyEl = document.getElementById('haRulesCreatorModalBody');
    if (!modal || !bodyEl) return;
    if (titleEl) titleEl.textContent = t('tc.ha.rules_creator_edit') + ': ' + creatorName;
    bodyEl.innerHTML = haRulesRenderOverrideFormHtml(override || {}, { showCurrency: false });
    bodyEl.setAttribute('data-creator-id', creatorId);
    haRulesBindOverrideFormEvents(bodyEl);
    modal.classList.add('show');
  }
  function haRulesCreatorModalSave() {
    var bodyEl = document.getElementById('haRulesCreatorModalBody');
    if (!bodyEl) return;
    var creatorId = parseInt(bodyEl.getAttribute('data-creator-id'), 10);
    if (isNaN(creatorId)) return;
    var parsed = haRulesParseOverrideForm(bodyEl);
    haSettleRulesByCreator[creatorId] = { hourlyRates: parsed.hourlyRates, cpsTiers: parsed.cpsTiers, cpsMode: parsed.cpsMode, cpsEffectiveStart: parsed.cpsEffectiveStart, cpsEffectiveEnd: parsed.cpsEffectiveEnd };
    if (parsed.hourlyRates.length) haSettleRulesByCreator[creatorId].hourlyRate = parsed.hourlyRates[0].rate;
    haSettleRulesSave();
    showToast(t('tc.ha.rules_saved'));
  }
  function haOtherRewardModalOpen(reward) {
    var modal = document.getElementById('haOtherRewardModal');
    var titleEl = document.getElementById('haOtherRewardModalTitle');
    var bodyEl = document.getElementById('haOtherRewardModalBody');
    if (!modal || !bodyEl) return;
    var isEdit = !!reward;
    if (titleEl) titleEl.textContent = isEdit ? t('common.edit') : t('tc.ha.other_rewards_add');
    var hostNames = (haManageUsers || []).filter(function (u) { return u.type === 'host'; }).map(function (u) { return u.name; });
    if (reward && reward.creatorName && hostNames.indexOf(reward.creatorName) === -1) hostNames.unshift(reward.creatorName);
    var creatorOpts = hostNames.map(function (n) { return '<option value="' + n + '"' + (reward && reward.creatorName === n ? ' selected' : '') + '>' + n + '</option>'; }).join('');
    var countryList = haGetMerchantLiveAccountCountries();
    var countryOpts = '<option value="">-</option>' + countryList.map(function (c) { return '<option value="' + c + '"' + (reward && reward.country === c ? ' selected' : '') + '>' + c + '</option>'; }).join('');
    bodyEl.innerHTML = '<div class="ha-rules-other-reward-form">' +
      '<div class="ha-rules-form-row"><label>' + t('tc.ha.custom_entry_creator') + '</label><select class="ha-rules-input ha-other-reward-creator" id="haOtherRewardCreator">' + (creatorOpts || '<option value="">-</option>') + '</select></div>' +
      '<div class="ha-rules-form-row"><label>' + t('tc.ha.custom_entry_title') + '</label><input type="text" class="ha-rules-input ha-other-reward-title" value="' + (reward && reward.title ? String(reward.title).replace(/"/g, '&quot;') : '') + '" placeholder="' + t('tc.ha.bonus_entry_title') + '"></div>' +
      '<div class="ha-rules-form-row ha-other-reward-amount-currency-row">' +
        '<div class="ha-other-reward-field"><label>' + t('tc.ha.custom_entry_amount') + '</label><input type="number" class="ha-rules-input ha-other-reward-amount" value="' + (reward && reward.amount != null ? reward.amount : '') + '" min="0" step="0.01" placeholder="0"></div>' +
        '<div class="ha-other-reward-field"><label>' + t('tc.ha.custom_entry_currency') + '</label><select class="ha-rules-input ha-other-reward-currency"><option value="USD"' + ((reward && reward.currency) === 'USD' ? ' selected' : '') + '>USD</option><option value="CNY"' + ((reward && reward.currency) === 'CNY' ? ' selected' : '') + '>CNY</option><option value="EUR"' + ((reward && reward.currency) === 'EUR' ? ' selected' : '') + '>EUR</option></select></div>' +
      '</div>' +
      '<div class="ha-rules-form-row ha-other-reward-period-row"><label>' + t('tc.ha.other_rewards_period') + '</label><div class="ha-other-reward-period-inputs"><input type="date" class="ha-rules-input ha-other-reward-period-start" value="' + (reward && reward.periodStart ? reward.periodStart : '') + '"><span class="ha-other-reward-period-sep">–</span><input type="date" class="ha-rules-input ha-other-reward-period-end" value="' + (reward && reward.periodEnd ? reward.periodEnd : '') + '"></div><p class="ha-rules-hint">' + t('tc.ha.other_rewards_period_hint') + '</p></div>' +
      '<div class="ha-rules-form-row"><label>' + t('tc.ha.filter_live_account') + '</label><select class="ha-rules-input ha-other-reward-country">' + countryOpts + '</select></div>' +
      '</div>';
    bodyEl.setAttribute('data-reward-id', reward && reward.id ? String(reward.id) : '');
    modal.classList.add('show');
  }
  function haOtherRewardModalSave() {
    var bodyEl = document.getElementById('haOtherRewardModalBody');
    if (!bodyEl) return;
    var creatorEl = bodyEl.querySelector('#haOtherRewardCreator');
    var titleEl = bodyEl.querySelector('.ha-other-reward-title');
    var amountEl = bodyEl.querySelector('.ha-other-reward-amount');
    var currencyEl = bodyEl.querySelector('.ha-other-reward-currency');
    var periodStartEl = bodyEl.querySelector('.ha-other-reward-period-start');
    var periodEndEl = bodyEl.querySelector('.ha-other-reward-period-end');
    var countryEl = bodyEl.querySelector('.ha-other-reward-country');
    var creatorName = creatorEl && creatorEl.value ? creatorEl.value.trim() : '';
    var title = titleEl && titleEl.value ? titleEl.value.trim() : '';
    var amount = amountEl ? parseFloat(amountEl.value) : 0;
    var currency = currencyEl && currencyEl.value ? currencyEl.value : 'USD';
    var periodStart = periodStartEl && periodStartEl.value ? periodStartEl.value : '';
    var periodEnd = periodEndEl && periodEndEl.value ? periodEndEl.value : '';
    var country = countryEl && countryEl.value ? countryEl.value.trim() : '';
    if (!creatorName || !periodStart || !periodEnd) { showToast(t('tc.ha.other_rewards_period_hint'), 'warn'); return; }
    var existingId = bodyEl.getAttribute('data-reward-id');
    var id = existingId || 'or' + Date.now();
    var existing = (haOtherRewards || []).filter(function (r) { return String(r.id) === String(id); })[0];
    var idx = haOtherRewards.indexOf(existing);
    var createdBy = (typeof currentUser === 'object' && currentUser && currentUser.id) ? currentUser.id : null;
    var item = { id: id, creatorName: creatorName, title: title, amount: amount, currency: currency, periodStart: periodStart, periodEnd: periodEnd, country: country || null };
    if (idx >= 0) {
      if (existing.createdBy != null) item.createdBy = existing.createdBy;
      if (existing.createdAt != null) item.createdAt = existing.createdAt;
    } else {
      item.createdBy = createdBy;
      item.createdAt = Date.now();
    }
    if (idx >= 0) haOtherRewards[idx] = item; else haOtherRewards.push(item);
    haOtherRewardsSave();
  }

  function renderHaBatchListPage() {
    var countryList = haGetMerchantLiveAccountCountries();
    var countryTabsHtml = '<button type="button" class="ha-settle-country-tab' + (!haSettleBatchCountryFilter ? ' ha-settle-country-tab--active' : '') + '" data-country="">' + t('tc.ha.filter_live_account_all') + '</button>' +
      countryList.map(function (c) {
        return '<button type="button" class="ha-settle-country-tab' + (haSettleBatchCountryFilter === c ? ' ha-settle-country-tab--active' : '') + '" data-country="' + c + '">' + haCountryLabelWithFlag(c) + '</button>';
      }).join('');
    var pillsHtml = ['all', 'draft', 'confirmed'].map(function (s) {
      return '<button type="button" class="ha-settle-pill' + (haSettleBatchFilter === s ? ' ha-settle-pill--active' : '') + '" data-status="' + s + '">' + t('tc.ha.stat_' + (s === 'all' ? 'total' : s)) + '</button>';
    }).join('');
    var laFiltered = (haSettleBatchCountryFilter && haSettleBatchCountryFilter !== '') ? haSettleBatches.filter(function (b) { return haBatchGetCountry(b) === haSettleBatchCountryFilter; }) : haSettleBatches;
    var filtered = haSettleBatchFilter === 'all' ? laFiltered : laFiltered.filter(function (b) { return b.status === haSettleBatchFilter; });
    var totalPages = Math.max(1, Math.ceil(filtered.length / haSettleBatchPageSize));
    var startIdx = (haSettleBatchPage - 1) * haSettleBatchPageSize;
    var pageBatches = filtered.slice(startIdx, startIdx + haSettleBatchPageSize);
    var rowsHtml = pageBatches.length ? pageBatches.map(function (b) {
      var cur = haBatchGetCurrency(b);
      var amt = haFormatAmount(b.totalAmount, cur);
      var statusCls = b.status === 'draft' ? 'badge--pending' : b.status === 'confirmed' ? 'badge--success' : 'badge--muted';
      var createdByName = b.createdBy ? (typeof findMemberName === 'function' ? findMemberName(b.createdBy).name : b.createdBy) : '-';
      var createdAtStr = b.createdAt ? (typeof b.createdAt === 'string' ? b.createdAt : new Date(b.createdAt).toLocaleString(getLang() === 'zh' ? 'zh-CN' : 'en-US', { dateStyle: 'short', timeStyle: 'short' })) : '-';
      var confirmedByName = b.confirmedBy ? (typeof findMemberName === 'function' ? findMemberName(b.confirmedBy).name : b.confirmedBy) : '-';
      var confirmedAtStr = b.confirmedAt ? (typeof b.confirmedAt === 'string' ? b.confirmedAt : new Date(b.confirmedAt).toLocaleString(getLang() === 'zh' ? 'zh-CN' : 'en-US', { dateStyle: 'short', timeStyle: 'short' })) : '-';
      var createdCell = '<div class="ha-batch-meta"><span class="ha-batch-meta-name">' + (createdByName || '-') + '</span><span class="ha-batch-meta-time">' + createdAtStr + '</span></div>';
      var confirmedCell = '<div class="ha-batch-meta"><span class="ha-batch-meta-name">' + (confirmedByName || '-') + '</span><span class="ha-batch-meta-time">' + confirmedAtStr + '</span></div>';
      var actions = '';
      if (b.status === 'draft') {
        actions =
          '<div class="ha-settle-actions">' +
            '<button type="button" class="btn btn-ghost btn-sm ha-settle-view" data-id="' + (b.id || '') + '"><i class="fas fa-eye"></i> ' + t('tc.ha.view') + '</button>' +
            '<button type="button" class="btn btn-primary btn-sm ha-settle-confirm" data-id="' + (b.id || '') + '"><i class="fas fa-check"></i> ' + t('tc.ha.confirm_push') + '</button>' +
            '<div class="ha-settle-more-wrap" data-id="' + (b.id || '') + '">' +
              '<button type="button" class="btn btn-ghost btn-sm ha-settle-more-toggle"><i class="fas fa-ellipsis-h"></i></button>' +
            '</div>' +
          '</div>';
      } else {
        actions = '<button type="button" class="btn btn-ghost btn-sm ha-settle-view" data-id="' + (b.id || '') + '"><i class="fas fa-eye"></i> ' + t('tc.ha.view') + '</button>';
      }
      return '<tr><td>' + (b.sn || b.id || '-') + '</td><td>' + (b.period || '-') + '</td><td>' + (b.hostCount || 0) + '</td><td>' + amt + '</td><td><span class="badge ' + statusCls + '">' + t('tc.ha.stat_' + (b.status || 'draft')) + '</span></td><td class="ha-batch-meta-cell">' + createdCell + '</td><td class="ha-batch-meta-cell">' + confirmedCell + '</td><td>' + actions + '</td></tr>';
    }).join('') : '<tr><td colspan="8" class="ha-settle-empty ha-rules-empty-state"><span class="ha-rules-empty-text">' + t('tc.ha.batch_empty') + '</span></td></tr>';
    var pagerHtml = totalPages > 1 ? '<div class="ha-settle-pagination">' +
      '<button type="button" class="ha-settle-page-btn" data-dir="prev"' + (haSettleBatchPage <= 1 ? ' disabled' : '') + '><i class="fas fa-chevron-left"></i></button>' +
      '<span class="ha-settle-page-info">' + haSettleBatchPage + ' / ' + totalPages + '</span>' +
      '<button type="button" class="ha-settle-page-btn" data-dir="next"' + (haSettleBatchPage >= totalPages ? ' disabled' : '') + '><i class="fas fa-chevron-right"></i></button>' +
      '</div>' : '';
    var countryOpts = countryList.map(function (c) { return '<option value="' + c + '">' + haCountryLabelWithFlag(c) + '</option>'; }).join('');
    var genModalHtml = '<div class="ha-rules-creator-modal-overlay ha-generate-batch-modal" id="haGenerateBatchModal">' +
      '<div class="ha-rules-creator-modal">' +
        '<button type="button" class="ha-modal-close ha-generate-batch-close" aria-label="Close"><i class="fas fa-times"></i></button>' +
        '<h3 class="ha-rules-modal-title">' + t('tc.ha.generate_modal_title') + '</h3>' +
        '<div class="ha-rules-creator-modal-body">' +
          '<div class="ha-generate-batch-form">' +
            '<div class="ha-rules-field"><label class="ha-rules-block-label">' + t('tc.ha.generate_modal_country_scope') + '</label><div class="ha-generate-batch-country-scope"><label class="ha-generate-scope-opt"><input type="radio" name="haGenerateCountryScope" value="all" checked> ' + t('tc.ha.generate_modal_country_all') + '</label><label class="ha-generate-scope-opt"><input type="radio" name="haGenerateCountryScope" value="specific"> ' + t('tc.ha.generate_modal_country_specific') + '</label></div><div class="ha-generate-country-select-wrap" style="display:none"><select class="ha-rules-input ha-generate-country-select" id="haGenerateCountrySelect">' + countryOpts + '</select></div></div>' +
            '<div class="ha-rules-field"><label class="ha-rules-block-label">' + t('tc.ha.generate_modal_period') + '</label><div class="ha-generate-batch-dates"><input type="date" class="ha-rules-input" id="haGenerateDateStart"><span class="ha-settle-date-sep">–</span><input type="date" class="ha-rules-input" id="haGenerateDateEnd"></div></div>' +
            '<div class="ha-rules-field"><label class="ha-rules-block-label">' + t('tc.ha.generate_modal_settle_types') + '</label><div class="ha-generate-batch-types"><label class="ha-generate-type-opt"><input type="checkbox" class="ha-generate-include-hourly" checked> ' + t('tc.ha.generate_modal_include_hourly') + '</label><label class="ha-generate-type-opt"><input type="checkbox" class="ha-generate-include-commission" checked> ' + t('tc.ha.generate_modal_include_commission') + '</label><label class="ha-generate-type-opt"><input type="checkbox" class="ha-generate-include-other-rewards" checked> ' + t('tc.ha.generate_modal_include_other_rewards') + '</label></div></div>' +
          '</div>' +
        '</div>' +
        '<div class="ha-rules-creator-modal-footer">' +
          '<button type="button" class="btn btn-ghost ha-generate-batch-cancel">' + t('common.cancel') + '</button>' +
          '<button type="button" class="btn btn-primary ha-generate-batch-confirm">' + t('tc.ha.generate_batch') + '</button>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="ha-rules-creator-modal-overlay ha-confirm-send-modal" id="haConfirmSendModal">' +
      '<div class="ha-rules-creator-modal ha-confirm-send-modal-inner">' +
        '<button type="button" class="ha-modal-close ha-confirm-send-close" aria-label="Close"><i class="fas fa-times"></i></button>' +
        '<h3 class="ha-rules-modal-title">' + t('tc.ha.confirm_push') + '</h3>' +
        '<p class="ha-confirm-send-desc">' + t('tc.ha.confirm_push_confirm') + '</p>' +
        '<div class="ha-rules-creator-modal-footer">' +
          '<button type="button" class="btn btn-ghost ha-confirm-send-cancel">' + t('common.cancel') + '</button>' +
          '<button type="button" class="btn btn-primary ha-confirm-send-ok"><i class="fas fa-check"></i> ' + t('tc.ha.confirm_push') + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
    return '<div class="ha-settle-content">' +
      '<div class="card ha-settle-card">' +
        '<div class="ha-settle-intro">' +
          '<h3 class="ha-rules-title">' + t('tc.ha.settle_batch_title') + '</h3>' +
          '<p class="ha-settle-desc">' + t('tc.ha.settle_batch_desc') + '</p>' +
        '<div class="ha-settle-la-filter ha-settle-la-filter--intro ha-settle-batch-intro">' +
            '<label class="ha-settle-la-filter-label">' + t('tc.ha.filter_live_account') + '</label>' +
            '<div class="ha-settle-batch-country-tabs ha-settle-country-tabs">' + countryTabsHtml + '</div>' +
          '</div>' +
        '<div class="ha-settle-filter-bar ha-settle-batch-toolbar">' +
            '<div class="ha-settle-toolbar-left"><div class="ha-settle-filter-pills">' + pillsHtml + '</div></div>' +
            '<div class="ha-settle-toolbar-right"><button type="button" class="btn btn-primary btn-sm ha-settle-generate"><i class="fas fa-plus"></i> ' + t('tc.ha.generate_batch') + '</button></div>' +
          '</div>' +
        '</div>' +
        '<div class="table-wrap ha-settle-table-wrap">' +
          '<table class="ha-rules-table ha-settle-table"><thead><tr><th>' + t('tc.ha.sn') + '</th><th>' + t('tc.ha.batch_period') + '</th><th>' + t('tc.ha.batch_creators') + '</th><th>' + t('tc.ha.batch_total') + '</th><th>' + t('common.status') + '</th><th>' + t('tc.ha.batch_created_by') + ' (' + t('tc.ha.batch_created_at') + ')</th><th>' + t('tc.ha.batch_confirmed_by') + ' (' + t('tc.ha.batch_confirmed_at') + ')</th><th></th></tr></thead><tbody>' + rowsHtml + '</tbody></table>' +
          pagerHtml +
        '</div>' +
      '</div>' +
      genModalHtml +
    '</div>';
  }

  function renderHaBatchDetailPage(batchId) {
    var batch = haSettleBatches.filter(function (b) { return b.id === batchId; })[0];
    if (!batch) return '<div class="ha-settle-content"><p class="ha-rules-hint">Batch not found.</p></div>';
    var cur = haBatchGetCurrency(batch);
    var statusCls = batch.status === 'draft' ? 'badge--pending' : 'badge--success';
    var hasHourly = (batch.totalHourly || 0) > 0;
    var hasCps = (batch.totalCommission || 0) > 0;
    var hasOtherRewards = (batch.totalBonus || 0) > 0 || (batch.hosts || []).some(function (h) { return (h.otherRewards && h.otherRewards.length) || (h.bonus || 0) > 0; });
    var types = [];
    if (hasHourly) types.push('hourly');
    if (hasCps) types.push('cps');
    if (hasOtherRewards) types.push('other_rewards');
    if (types.indexOf(haBatchDetailSettleType) < 0) haBatchDetailSettleType = types[0] || 'hourly';
    var sel = haBatchDetailSettleType;
    var filteredHosts = (batch.hosts || []).filter(function (h) {
      if (sel === 'hourly') return (h.hourly || 0) > 0;
      if (sel === 'cps') return (h.commission || 0) > 0;
      if (sel === 'other_rewards') return (h.bonus || 0) > 0 || (h.otherRewards && h.otherRewards.length);
      return true;
    });
    var summaryCards = [];
    if (hasHourly) summaryCards.push('<div class="ha-batch-detail-summary-card ha-batch-detail-summary-card--filter' + (sel === 'hourly' ? ' ha-batch-detail-summary-card--active' : '') + '" data-settle-type="hourly"><span class="ha-batch-detail-summary-icon"><i class="fas fa-clock"></i></span><span class="ha-batch-detail-summary-label">' + t('tc.ha.rules_hourly') + '</span><span class="ha-batch-detail-summary-value">' + haFormatAmount(batch.totalHourly || 0, cur) + '</span></div>');
    if (hasCps) summaryCards.push('<div class="ha-batch-detail-summary-card ha-batch-detail-summary-card--filter' + (sel === 'cps' ? ' ha-batch-detail-summary-card--active' : '') + '" data-settle-type="cps"><span class="ha-batch-detail-summary-icon"><i class="fas fa-percent"></i></span><span class="ha-batch-detail-summary-label">' + t('tc.ha.rules_cps') + '</span><span class="ha-batch-detail-summary-value">' + haFormatAmount(batch.totalCommission || 0, cur) + '</span></div>');
    if (hasOtherRewards) summaryCards.push('<div class="ha-batch-detail-summary-card ha-batch-detail-summary-card--filter' + (sel === 'other_rewards' ? ' ha-batch-detail-summary-card--active' : '') + '" data-settle-type="other_rewards"><span class="ha-batch-detail-summary-icon"><i class="fas fa-gift"></i></span><span class="ha-batch-detail-summary-label">' + t('tc.ha.bonus_other') + '</span><span class="ha-batch-detail-summary-value">' + haFormatAmount(batch.totalBonus || 0, cur) + '</span></div>');
    summaryCards.push('<div class="ha-batch-detail-summary-card ha-batch-detail-summary-card--total"><span class="ha-batch-detail-summary-icon"><i class="fas fa-wallet"></i></span><span class="ha-batch-detail-summary-label">' + t('tc.ha.batch_total') + '</span><span class="ha-batch-detail-summary-value">' + haFormatAmount(batch.totalAmount || 0, cur) + '</span></div>');
    var creatorRows = [];
    var colCount = 0;
    filteredHosts.forEach(function (h) {
      if (sel === 'hourly') {
        colCount = 4;
        var totalDurH = (h.lives || []).reduce(function (s, lv) { return s + (lv.durationSeconds || 0) / 3600; }, 0);
        var effRate = totalDurH ? (h.hourly || 0) / totalDurH : ((h.lives && h.lives[0] && h.lives[0].hourlyRate != null) ? h.lives[0].hourlyRate : 0);
        creatorRows.push('<tr class="ha-batch-creator-row--expandable"><td><span class="ha-batch-expand-icon"><i class="fas fa-chevron-down"></i></span>' + (h.name || '-') + '</td><td>' + (h.liveCount || 0) + '</td><td>' + haFormatAmount(effRate, h.currency || cur) + '</td><td>' + haFormatAmount(h.hourly || 0, h.currency || cur) + '</td></tr>');
        var totalDur = (h.lives || []).reduce(function (s, lv) { return s + (lv.durationSeconds || 0); }, 0);
        var livesRows = (h.lives || []).map(function (lv) {
          var handle = lv.handle || (lv.liveAccountUsername ? ('@' + String(lv.liveAccountUsername).replace(/^@/, '')) : null) || h.handle || '-';
          var hr = lv.hourlyRate != null ? lv.hourlyRate : (totalDur ? (h.hourly || 0) / (totalDur / 3600) : 0);
          var amt = lv.hourlyAmount != null ? lv.hourlyAmount : (totalDur ? (h.hourly || 0) * (lv.durationSeconds || 0) / totalDur : 0);
          return '<tr><td>' + (lv.roomId || '-') + '</td><td>' + (handle || '-') + '</td><td>' + (lv.eventName || '-') + '</td><td>' + formatLiveStartEnd(lv.startAt, lv.endAt) + '</td><td>' + formatDurationSeconds(lv.durationSeconds) + '</td><td>' + haFormatAmount(hr, cur) + '</td><td>' + haFormatAmount(amt, cur) + '</td></tr>';
        }).join('');
        creatorRows.push('<tr class="ha-batch-lives-row"><td colspan="4"><div class="ha-batch-lives-wrap"><table class="ha-batch-lives-table"><thead><tr><th>' + t('tc.ha.live_room_id') + '</th><th>Handle</th><th>' + t('tc.ha.live_event_name') + '</th><th>' + t('tc.ha.live_start_end') + '</th><th>' + t('tc.ha.live_duration') + '</th><th>' + t('tc.ha.live_hourly_rate') + '</th><th>' + t('tc.ha.live_settle_amount') + '</th></tr></thead><tbody>' + (livesRows || '<tr><td colspan="7">—</td></tr>') + '</tbody></table></div></td></tr>');
      } else if (sel === 'cps') {
        colCount = 4;
        creatorRows.push('<tr class="ha-batch-creator-row--expandable"><td><span class="ha-batch-expand-icon"><i class="fas fa-chevron-down"></i></span>' + (h.name || '-') + '</td><td>' + (h.liveCount || 0) + '</td><td>—</td><td>' + haFormatAmount(h.commission || 0, h.currency || cur) + '</td></tr>');
        var livesRows = (h.lives || []).map(function (lv) {
          var handle = lv.handle || (lv.liveAccountUsername ? ('@' + String(lv.liveAccountUsername).replace(/^@/, '')) : null) || h.handle || '-';
          var rate = lv.cpsRate != null ? ((lv.cpsRate * 100) + '%') : '—';
          var amt = lv.cpsAmount != null ? lv.cpsAmount : (h.lives && h.lives.length ? (h.commission || 0) / h.lives.length : 0);
          return '<tr><td>' + (lv.roomId || '-') + '</td><td>' + (handle || '-') + '</td><td>' + (lv.eventName || '-') + '</td><td>' + formatLiveStartEnd(lv.startAt, lv.endAt) + '</td><td>' + formatDurationSeconds(lv.durationSeconds) + '</td><td>' + haFormatAmount(lv.gmv, cur) + '</td><td>' + rate + '</td><td>' + haFormatAmount(amt, cur) + '</td></tr>';
        }).join('');
        creatorRows.push('<tr class="ha-batch-lives-row"><td colspan="4"><div class="ha-batch-lives-wrap"><table class="ha-batch-lives-table"><thead><tr><th>' + t('tc.ha.live_room_id') + '</th><th>Handle</th><th>' + t('tc.ha.live_event_name') + '</th><th>' + t('tc.ha.live_start_end') + '</th><th>' + t('tc.ha.live_duration') + '</th><th>' + t('tc.ha.live_gmv') + '</th><th>' + t('tc.ha.live_cps_rate') + '</th><th>' + t('tc.ha.live_settle_amount') + '</th></tr></thead><tbody>' + (livesRows || '<tr><td colspan="8">—</td></tr>') + '</tbody></table></div></td></tr>');
      } else {
        colCount = 3;
        var otherAmt = (h.bonus || 0) + (h.otherRewards || []).reduce(function (s, r) { return s + (r.amount || 0); }, 0);
        creatorRows.push('<tr class="ha-batch-creator-row--expandable"><td><span class="ha-batch-expand-icon"><i class="fas fa-chevron-down"></i></span>' + (h.name || '-') + '</td><td>' + (h.otherRewards && h.otherRewards.length ? h.otherRewards.length : 1) + '</td><td>' + haFormatAmount(otherAmt, h.currency || cur) + '</td></tr>');
        var rewards = (h.otherRewards && h.otherRewards.length) ? h.otherRewards : (h.bonus ? [{ title: t('tc.ha.bonus_other'), date: '', amount: h.bonus }] : []);
        var rewardsRows = rewards.map(function (r) { return '<tr><td>' + (r.title || '-') + '</td><td>' + (r.date || '-') + '</td><td>' + haFormatAmount(r.amount || 0, h.currency || cur) + '</td></tr>'; }).join('');
        creatorRows.push('<tr class="ha-batch-lives-row"><td colspan="3"><div class="ha-batch-lives-wrap"><table class="ha-batch-lives-table ha-batch-other-rewards-table"><thead><tr><th>' + t('tc.ha.custom_entry_title') + '</th><th>' + t('tc.ha.rules_bonus_date') + '</th><th>' + t('tc.ha.rules_bonus_amount') + '</th></tr></thead><tbody>' + (rewardsRows || '<tr><td colspan="3">—</td></tr>') + '</tbody></table></div></td></tr>');
      }
    });
    var tableHeader = '';
    if (sel === 'hourly') tableHeader = '<tr><th>' + t('tc.ha.th_creator') + '</th><th>Lives</th><th>' + t('tc.ha.rules_hourly') + '</th><th>' + t('tc.ha.live_settle_amount') + '</th></tr>';
    else if (sel === 'cps') tableHeader = '<tr><th>' + t('tc.ha.th_creator') + '</th><th>Lives</th><th>' + t('tc.ha.live_cps_rate') + '</th><th>' + t('tc.ha.live_settle_amount') + '</th></tr>';
    else tableHeader = '<tr><th>' + t('tc.ha.th_creator') + '</th><th>' + t('tc.ha.other_rewards_count') + '</th><th>' + t('tc.ha.rules_bonus_amount') + '</th></tr>';
    var emptyRow = '<tr><td colspan="' + colCount + '" class="ha-settle-empty ha-rules-empty-state"><span class="ha-rules-empty-text">' + (sel === 'hourly' ? 'No hourly settlement.' : sel === 'cps' ? 'No CPS settlement.' : 'No other rewards.') + '</span></td></tr>';
    return '<div class="ha-settle-content ha-batch-detail-page">' +
      '<div class="ha-batch-detail-back"><button type="button" class="ha-batch-detail-back-btn"><i class="fas fa-arrow-left"></i> ' + t('tc.ha.back_to_batches') + '</button></div>' +
      '<div class="ha-batch-detail-head">' +
        '<div class="ha-batch-detail-head-main">' +
          '<h3 class="ha-batch-detail-title">' + (batch.sn || batch.id || '') + '</h3>' +
          '<span class="badge ' + statusCls + ' ha-batch-detail-status">' + t('tc.ha.stat_' + (batch.status || 'draft')) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="ha-batch-detail-summary" id="haBatchDetailSummary">' + summaryCards.join('') + '</div>' +
      '<div class="card ha-batch-detail-card"><div class="ha-batch-detail-table-wrap" id="haBatchDetailTableWrap"><table class="ha-batch-detail-table"><thead>' + tableHeader + '</thead><tbody>' + (creatorRows.length ? creatorRows.join('') : emptyRow) + '</tbody></table></div></div>' +
    '</div>';
  }

  function renderHaWithdrawPage() {
    var countryList = haGetMerchantLiveAccountCountries();
    var countryTabsHtml = '<button type="button" class="ha-settle-country-tab' + (!haSettleWithdrawCountryFilter ? ' ha-settle-country-tab--active' : '') + '" data-country="">' + t('tc.ha.filter_live_account_all') + '</button>' +
      countryList.map(function (c) {
        return '<button type="button" class="ha-settle-country-tab' + (haSettleWithdrawCountryFilter === c ? ' ha-settle-country-tab--active' : '') + '" data-country="' + c + '">' + haCountryLabelWithFlag(c) + '</button>';
      }).join('');
    var pillsHtml = ['pending', 'approved', 'rejected'].map(function (s) {
      return '<button type="button" class="ha-settle-pill' + (haSettleWithdrawFilter === s ? ' ha-settle-pill--active' : '') + '" data-status="' + s + '">' + t('tc.ha.stat_' + s) + '</button>';
    }).join('');
    function wdGetCountry(r) { return r.country || (r.currency === 'CNY' ? 'CN' : r.currency === 'EUR' ? 'DE' : 'US'); }
    var base = haSettleWithdrawCountryFilter ? haSettleWithdrawRequests.filter(function (r) { return wdGetCountry(r) === haSettleWithdrawCountryFilter; }) : haSettleWithdrawRequests;
    var filtered = base.filter(function (r) { return r.status === haSettleWithdrawFilter; });
    var showCheckboxes = haSettleWithdrawFilter === 'pending';
    var thCheckbox = showCheckboxes ? '<th class="ha-withdraw-th-checkbox"><input type="checkbox" class="ha-withdraw-select-all" id="haWithdrawSelectAll" title="' + t('tc.ha.select_all') + '"></th>' : '';
    var rowsHtml = filtered.length ? filtered.map(function (r) {
      var amt = haFormatAmount(r.amount, r.currency);
      var name = r.paypalName || r.host || '';
      var contact = r.paypalContact || '';
      var payoutCell = '<div class="ha-withdraw-payout"><div class="ha-withdraw-payout-name">' + (name || '-') + '</div>' + (contact ? '<div class="ha-withdraw-payout-contact">' + contact + '</div>' : '') + '</div>';
      var actions = r.status === 'pending' ? '<button type="button" class="btn btn-ghost btn-sm ha-approve" data-id="' + (r.id || '') + '"><i class="fas fa-check"></i> ' + t('tc.ha.approve') + '</button> <button type="button" class="btn btn-ghost btn-sm ha-reject" data-id="' + (r.id || '') + '"><i class="fas fa-times"></i> ' + t('tc.ha.reject') + '</button>' : '';
      var cbCell = showCheckboxes && r.status === 'pending' ? '<td class="ha-withdraw-td-checkbox"><input type="checkbox" class="ha-withdraw-select" name="haWithdrawSelect" value="' + (r.id || '') + '" data-id="' + (r.id || '') + '"></td>' : (showCheckboxes ? '<td class="ha-withdraw-td-checkbox"></td>' : '');
      return '<tr>' + cbCell + '<td>' + (r.id || '-') + '</td><td>' + (r.host || '-') + '</td><td>' + payoutCell + '</td><td>' + amt + '</td><td>' + (r.createdAt || '-') + '</td><td><span class="badge badge--' + (r.status === 'approved' ? 'success' : r.status === 'rejected' ? 'muted' : 'pending') + '">' + t('tc.ha.stat_' + (r.status || 'pending')) + '</span></td><td>' + actions + '</td></tr>';
    }).join('') : '<tr><td colspan="' + (showCheckboxes ? 8 : 7) + '" class="ha-withdraw-empty ha-rules-empty-state"><span class="ha-rules-empty-text">' + t('tc.ha.withdraw_empty') + '</span></td></tr>';
    return '<div class="ha-settle-content ha-settle-withdraw-content">' +
      '<div class="card ha-settle-card">' +
        '<div class="ha-settle-intro">' +
          '<h3 class="ha-rules-title">' + t('tc.ha.settle_withdraw_title') + '</h3>' +
          '<p class="ha-settle-desc">' + t('tc.ha.settle_withdraw_desc') + '</p>' +
          '<div class="ha-settle-la-filter ha-settle-la-filter--intro ha-settle-withdraw-intro">' +
            '<label class="ha-settle-la-filter-label">' + t('tc.ha.filter_live_account') + '</label>' +
            '<div class="ha-settle-withdraw-country-tabs ha-settle-country-tabs">' + countryTabsHtml + '</div>' +
          '</div>' +
          '<div class="ha-settle-filter-bar ha-settle-withdraw-toolbar">' +
            '<div class="ha-settle-toolbar-left"><div class="ha-settle-filter-pills">' + pillsHtml + '</div></div>' +
            '<div class="ha-settle-toolbar-right ha-settle-filter-actions"><button type="button" class="btn btn-secondary btn-sm" id="haExportPending"><i class="fas fa-file-export"></i> ' + t('tc.ha.export_pending') + '</button><button type="button" class="btn btn-primary btn-sm" id="haApproveAllPending"><i class="fas fa-check-double"></i> ' + t('tc.ha.withdraw_approve_all') + '</button></div>' +
          '</div>' +
        '</div>' +
        '<div class="table-wrap ha-settle-table-wrap">' +
          '<table class="ha-rules-table ha-settle-table ha-settle-table--withdraw"><thead><tr>' + thCheckbox + '<th>Request ID</th><th>' + t('tc.ha.th_creator') + '</th><th>' + t('tc.ha.withdraw_paypal') + '</th><th>Amount</th><th>Created at</th><th>' + t('common.status') + '</th><th></th></tr></thead><tbody>' + rowsHtml + '</tbody></table>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function haPastLivesFilteredSessions() {
    var list = haLiveSessions.map(function (s) { return haGetSessionWithEdits(s); });
    if (haPastLivesFilterHost) {
      var q = (haPastLivesFilterHost || '').toLowerCase().trim();
      list = list.filter(function (s) {
        return ((s.creatorName || '').toLowerCase().indexOf(q) >= 0) || ((s.liveAccountUsername || '').toLowerCase().indexOf(q) >= 0);
      });
    }
    if (haPastLivesFilterRoom) {
      var rq = (haPastLivesFilterRoom || '').toLowerCase().trim();
      list = list.filter(function (s) { return (s.roomId || '').toString().toLowerCase().indexOf(rq) >= 0; });
    }
    if (haPastLivesFilterLa) {
      var lq = (haPastLivesFilterLa || '').toLowerCase().trim();
      list = list.filter(function (s) { return (s.liveAccountUsername || '').toLowerCase().indexOf(lq) >= 0; });
    }
    if (haPastLivesFilterDateStart) {
      list = list.filter(function (s) {
        var dt = (s.actualStartAt || s.startAt || '').substr(0, 10);
        return dt >= haPastLivesFilterDateStart;
      });
    }
    if (haPastLivesFilterDateEnd) {
      list = list.filter(function (s) {
        var dt = (s.actualEndAt || s.endAt || s.actualStartAt || s.startAt || '').substr(0, 10);
        return dt <= haPastLivesFilterDateEnd;
      });
    }
    if (haPastLivesFilterSettled === 'yes') list = list.filter(function (s) { return s.settled; });
    else if (haPastLivesFilterSettled === 'no') list = list.filter(function (s) { return !s.settled; });
    return list;
  }

  function renderHaPastLivesPage() {
    if (haPastLivesView === 'abnormal') return renderHaPastLivesAbnormalPage();
    var list = haPastLivesFilteredSessions();
    var abnormalCount = haLiveSessionAbnormalCount();
    var filterHtml = '<div class="ha-past-lives-filters">' +
      '<div class="ha-past-lives-filter-section">' +
        '<span class="ha-past-lives-filter-label">' + t('tc.ha.past_lives_filter_host') + '</span>' +
        '<input type="text" class="ha-past-lives-input" id="haPastLivesFilterHost" placeholder="' + t('tc.ha.past_lives_filter_host') + '" value="' + (haPastLivesFilterHost || '').replace(/"/g, '&quot;') + '">' +
      '</div>' +
      '<div class="ha-past-lives-filter-section">' +
        '<span class="ha-past-lives-filter-label">' + t('tc.ha.past_lives_filter_room') + '</span>' +
        '<input type="text" class="ha-past-lives-input" id="haPastLivesFilterRoom" placeholder="' + t('tc.ha.past_lives_filter_room') + '" value="' + (haPastLivesFilterRoom || '').replace(/"/g, '&quot;') + '">' +
      '</div>' +
      '<div class="ha-past-lives-filter-section">' +
        '<span class="ha-past-lives-filter-label">' + t('tc.ha.past_lives_filter_la') + '</span>' +
        '<input type="text" class="ha-past-lives-input" id="haPastLivesFilterLa" placeholder="' + t('tc.ha.past_lives_filter_la') + '" value="' + (haPastLivesFilterLa || '').replace(/"/g, '&quot;') + '">' +
      '</div>' +
      '<div class="ha-past-lives-filter-section ha-past-lives-filter-section--date">' +
        '<span class="ha-past-lives-filter-label">' + t('tc.ha.past_lives_filter_date') + '</span>' +
        '<div class="ha-past-lives-date-row">' +
        '<input type="date" class="ha-past-lives-input ha-past-lives-date" id="haPastLivesFilterDateStart" value="' + (haPastLivesFilterDateStart || '') + '" title="' + t('tc.ha.past_lives_filter_date') + '">' +
        '<span class="ha-past-lives-date-sep">–</span>' +
        '<input type="date" class="ha-past-lives-input ha-past-lives-date" id="haPastLivesFilterDateEnd" value="' + (haPastLivesFilterDateEnd || '') + '">' +
        '</div>' +
      '</div>' +
      '<div class="ha-past-lives-filter-section ha-past-lives-filter-section--settled">' +
        '<span class="ha-past-lives-filter-label">' + t('tc.ha.past_lives_th_settled') + '</span>' +
        '<div class="ha-past-lives-segmented" role="radiogroup" aria-label="' + t('tc.ha.past_lives_th_settled') + '">' +
          '<label class="ha-past-lives-segmented-item' + (haPastLivesFilterSettled === '' ? ' ha-past-lives-segmented-item--active' : '') + '">' +
            '<input type="radio" name="haPastLivesFilterSettled" value=""' + (haPastLivesFilterSettled === '' ? ' checked' : '') + '>' +
            '<span>' + t('common.all') + '</span> </label>' +
          '<label class="ha-past-lives-segmented-item' + (haPastLivesFilterSettled === 'yes' ? ' ha-past-lives-segmented-item--active' : '') + '">' +
            '<input type="radio" name="haPastLivesFilterSettled" value="yes"' + (haPastLivesFilterSettled === 'yes' ? ' checked' : '') + '>' +
            '<span>' + t('tc.ha.settled') + '</span> </label>' +
          '<label class="ha-past-lives-segmented-item' + (haPastLivesFilterSettled === 'no' ? ' ha-past-lives-segmented-item--active' : '') + '">' +
            '<input type="radio" name="haPastLivesFilterSettled" value="no"' + (haPastLivesFilterSettled === 'no' ? ' checked' : '') + '>' +
            '<span>' + t('tc.ha.unsettled') + '</span> </label>' +
        '</div>' +
      '</div>' +
      '<div class="ha-past-lives-filter-actions">' +
        '<button type="button" class="btn btn-primary btn-sm" id="haPastLivesExport"><i class="fas fa-file-export"></i> ' + t('tc.ha.past_lives_export') + '</button>' +
        (abnormalCount > 0 ? '<button type="button" class="btn btn-secondary btn-sm ha-past-lives-fix-abnormal-entry" id="haPastLivesFixAbnormalEntry"><i class="fas fa-exclamation-triangle"></i> ' + t('tc.ha.past_lives_fix_abnormal') + ' (' + abnormalCount + ')</button>' : '') +
      '</div>' +
      '</div>';
    var rows = list.map(function (s) {
      var planned = formatLiveStartEnd(s.startAt, s.endAt) || '—';
      var actual = formatLiveStartEnd(s.actualStartAt, s.actualEndAt) || '—';
      var dur = s.durationSeconds ? (Math.round(s.durationSeconds / 3600 * 100) / 100) : '—';
      var gmvVal = s.gmv != null ? s.gmv : 0;
      var gmvDisplay = haFormatAmount(gmvVal, s.currency);
      var settledBatchCell = s.settled ? (t('tc.ha.settled') + ' ' + (s.batchSn || '')) : t('tc.ha.unsettled');
      var isAbn = haLiveSessionIsAbnormal(s);
      var abnBadge = isAbn ? '<span class="badge badge--warning ha-past-lives-abn-badge" title="' + t('tc.ha.past_lives_fix_abnormal') + '"><i class="fas fa-exclamation-triangle"></i></span>' : '';
      return '<tr class="ha-past-lives-row' + (isAbn ? ' ha-past-lives-row--abnormal' : '') + '" data-session-id="' + (s.sessionId || '').replace(/"/g, '&quot;') + '">' +
        '<td>' + (s.scheduleId != null ? s.scheduleId : '—') + '</td>' +
        '<td>' + (s.creatorName || '—') + '</td>' +
        '<td>' + (s.roomId || '—') + '</td>' +
        '<td>' + (s.eventName || '—') + '</td>' +
        '<td>' + (s.liveAccountUsername ? '@' + String(s.liveAccountUsername).replace(/^@/, '') : '—') + '</td>' +
        '<td>' + planned + '</td>' +
        '<td>' + actual + '</td>' +
        '<td>' + dur + '</td>' +
        '<td class="ha-past-lives-gmv-cell"><span class="ha-past-lives-gmv-display">' + gmvDisplay + '</span><input type="number" class="ha-past-lives-gmv-input" value="' + gmvVal + '" step="0.01" min="0" style="display:none" data-session-id="' + (s.sessionId || '').replace(/"/g, '&quot;') + '"><button type="button" class="btn btn-ghost btn-xs ha-past-lives-gmv-edit" data-session-id="' + (s.sessionId || '').replace(/"/g, '&quot;') + '"><i class="fas fa-pen"></i></button><button type="button" class="btn btn-primary btn-xs ha-past-lives-gmv-save" data-session-id="' + (s.sessionId || '').replace(/"/g, '&quot;') + '" style="display:none"><i class="fas fa-check"></i></button></td>' +
        '<td>' + settledBatchCell + '</td>' +
        '<td>' + abnBadge + '</td></tr>';
    }).join('');
    var tableHtml = '<table class="ha-rules-table ha-settle-table ha-past-lives-table"><thead><tr>' +
      '<th>' + t('tc.ha.past_lives_th_schedule_id') + '</th>' +
      '<th>' + t('tc.ha.past_lives_th_host') + '</th>' +
      '<th>' + t('tc.ha.past_lives_th_room_id') + '</th>' +
      '<th>' + t('tc.ha.past_lives_th_event') + '</th>' +
      '<th>' + t('tc.ha.past_lives_filter_la') + '</th>' +
      '<th>' + t('tc.ha.past_lives_th_planned') + '</th>' +
      '<th>' + t('tc.ha.past_lives_th_actual') + '</th>' +
      '<th>' + t('tc.ha.past_lives_th_duration') + '</th>' +
      '<th>' + t('tc.ha.past_lives_th_gmv') + '</th>' +
      '<th>' + t('tc.ha.past_lives_th_settled') + ' / ' + t('tc.ha.past_lives_th_batch_sn') + '</th>' +
      '<th></th></tr></thead><tbody>' + (rows || '<tr><td colspan="11" class="ha-rules-empty-state">' + t('tc.ha.past_lives_empty') + '</td></tr>') + '</tbody></table>';
    return '<div class="ha-settle-content ha-past-lives-content">' +
      '<div class="card ha-settle-card">' +
        '<div class="ha-settle-intro">' +
          '<h3 class="ha-rules-title">' + t('tc.ha.past_lives_title') + '</h3>' +
          '<p class="ha-settle-desc">' + t('tc.ha.past_lives_desc') + '</p>' +
          filterHtml +
        '</div>' +
        '<div class="table-wrap ha-settle-table-wrap">' + tableHtml + '</div>' +
      '</div></div>';
  }

  function renderHaPastLivesAbnormalPage() {
    var list = haLiveSessions.filter(function (s) { return haLiveSessionIsAbnormal(haGetSessionWithEdits(s)); }).map(function (s) { return haGetSessionWithEdits(s); });
    var rows = list.map(function (s) {
      var planned = formatLiveStartEnd(s.startAt, s.endAt) || '—';
      var hosts = (s.hostSegments && s.hostSegments.length) ? s.hostSegments.map(function (seg) { return seg.host || ''; }).filter(Boolean) : (s.creatorName ? [s.creatorName] : []);
      var hostTagsHtml = hosts.length ? hosts.map(function (h) { return '<span class="ha-abnormal-host-tag">' + (h || '—').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>'; }).join('') : '—';
      var rf = haGetAbnormalReasonAndFlow(s);
      var sid = (s.sessionId || '').replace(/"/g, '&quot;');
      return '<tr class="ha-abnormal-list-row" data-session-id="' + sid + '">' +
        '<td>' + (s.scheduleId != null ? s.scheduleId : '—') + '</td>' +
        '<td class="ha-abnormal-reason-cell ha-abnormal-reason-cell--red">' + (rf.reason || '—') + '</td>' +
        '<td>' + (s.roomId || '—') + '</td>' +
        '<td>' + (s.eventName || '—') + '</td>' +
        '<td>' + planned + '</td>' +
        '<td><div class="ha-abnormal-host-tags">' + hostTagsHtml + '</div></td>' +
        '<td><button type="button" class="btn btn-primary btn-sm ha-abnormal-handle-btn" data-session-id="' + sid + '"><i class="fas fa-wrench"></i> ' + t('tc.ha.past_lives_fix_abnormal') + '</button></td></tr>';
    }).join('');
    var tableHtml = '<table class="ha-rules-table ha-settle-table ha-abnormal-list-table"><thead><tr>' +
      '<th>' + t('tc.ha.past_lives_th_schedule_id') + '</th>' +
      '<th>' + t('tc.ha.abnormal_th_reason') + '</th>' +
      '<th>' + t('tc.ha.abnormal_th_room') + '</th>' +
      '<th>' + t('tc.ha.past_lives_th_event') + '</th>' +
      '<th>' + t('tc.ha.past_lives_th_planned') + '</th>' +
      '<th>' + t('tc.ha.past_lives_th_host') + '</th>' +
      '<th>' + t('common.actions') + '</th></tr></thead><tbody>' + (rows || '<tr><td colspan="7" class="ha-rules-empty-state">' + t('tc.ha.abnormal_empty') + '</td></tr>') + '</tbody></table>';
    return '<div class="ha-settle-content ha-past-lives-abnormal-content">' +
      '<div class="ha-past-lives-abnormal-back"><button type="button" class="btn btn-ghost btn-sm ha-past-lives-abnormal-back-btn"><i class="fas fa-arrow-left"></i> ' + t('tc.ha.back_to_past_lives') + '</button></div>' +
      '<div class="card ha-settle-card">' +
        '<div class="ha-settle-intro">' +
          '<h3 class="ha-rules-title">' + t('tc.ha.abnormal_title') + '</h3>' +
          '<p class="ha-settle-desc">' + t('tc.ha.abnormal_desc') + '</p>' +
        '</div>' +
        '<div class="table-wrap ha-settle-table-wrap">' + tableHtml + '</div>' +
      '</div></div>';
  }

  function haAbnormalModalOpen(sessionId) {
    var s = haLiveSessions.filter(function (x) { return x.sessionId === sessionId; })[0];
    if (!s) return;
    s = haGetSessionWithEdits(s);
    var type1 = haLiveSessionAbnormalType1(s);
    var type2 = haLiveSessionAbnormalType2(s);
    var segs = (s.hostSegments && s.hostSegments.length) ? s.hostSegments.map(function (seg) {
      return {
        host: seg.host || '',
        plannedStartAt: s.startAt,
        plannedEndAt: s.endAt,
        actualStartAt: seg.startAt || seg.actualStartAt || '',
        actualEndAt: seg.endAt || seg.actualEndAt || '',
        gmv: seg.gmv != null ? seg.gmv : ''
      };
    }) : [{ host: s.creatorName || '', plannedStartAt: s.startAt, plannedEndAt: s.endAt, actualStartAt: s.actualStartAt || '', actualEndAt: s.actualEndAt || '', gmv: '' }];
    var type1Html = type1 ? '<div class="ha-abnormal-modal-section"><h4 class="ha-abnormal-modal-section-title"><i class="fas fa-broadcast-tower"></i> ' + t('tc.ha.abnormal_type1') + '</h4>' +
      '<div class="ha-abnormal-modal-field"><label>' + t('tc.ha.abnormal_th_room') + '</label><input type="text" class="ha-abnormal-modal-room" value="' + (s.roomId || '').replace(/"/g, '&quot;') + '" placeholder="Room ID"></div>' +
      '<div class="ha-abnormal-modal-field"><label>' + t('tc.ha.abnormal_th_start') + '</label><input type="datetime-local" class="ha-abnormal-modal-actual-start" value="' + (s.actualStartAt ? s.actualStartAt.replace(' ', 'T').substr(0, 16) : '') + '"></div>' +
      '<div class="ha-abnormal-modal-field"><label>' + t('tc.ha.abnormal_th_end') + '</label><input type="datetime-local" class="ha-abnormal-modal-actual-end" value="' + (s.actualEndAt ? s.actualEndAt.replace(' ', 'T').substr(0, 16) : '') + '"></div></div>' : '';
    var type2Html = type2 ? '<div class="ha-abnormal-modal-section"><h4 class="ha-abnormal-modal-section-title"><i class="fas fa-user-check"></i> ' + t('tc.ha.abnormal_type2') + '</h4>' +
      '<div class="ha-abnormal-modal-hosts" id="haAbnormalModalHosts">' + segs.map(function (seg, idx) {
        return '<div class="ha-abnormal-modal-seg" data-idx="' + idx + '">' +
          '<div class="ha-abnormal-modal-seg-planned">' + (seg.host || '') + (seg.plannedStartAt && seg.plannedEndAt ? ' ' + formatLiveStartEnd(seg.plannedStartAt, seg.plannedEndAt) : '') + '</div>' +
          '<div class="ha-abnormal-modal-seg-fields">' +
          '<div class="ha-abnormal-modal-seg-field"><label>' + t('tc.ha.abnormal_th_host') + '</label><input type="text" class="ha-abnormal-modal-seg-host" placeholder="' + t('tc.ha.abnormal_th_host') + '" value="' + (seg.host || seg.creatorName || '').replace(/"/g, '&quot;') + '"></div>' +
          '<div class="ha-abnormal-modal-seg-field"><label>' + t('tc.ha.abnormal_th_start') + '</label><input type="datetime-local" class="ha-abnormal-modal-seg-start" value="' + ((seg.actualStartAt || seg.startAt) ? (seg.actualStartAt || seg.startAt).replace(' ', 'T').substr(0, 16) : '') + '" title="' + t('tc.ha.abnormal_th_start') + '"></div>' +
          '<div class="ha-abnormal-modal-seg-field"><label>' + t('tc.ha.abnormal_th_end') + '</label><input type="datetime-local" class="ha-abnormal-modal-seg-end" value="' + ((seg.actualEndAt || seg.endAt) ? (seg.actualEndAt || seg.endAt).replace(' ', 'T').substr(0, 16) : '') + '" title="' + t('tc.ha.abnormal_th_end') + '"></div>' +
          '<div class="ha-abnormal-modal-seg-field"><label>' + t('tc.ha.past_lives_th_gmv') + '</label><input type="number" class="ha-abnormal-modal-seg-gmv" value="' + (seg.gmv !== '' ? seg.gmv : '') + '" min="0" step="0.01" placeholder="' + t('tc.ha.past_lives_th_gmv') + '"></div>' +
          '<button type="button" class="btn btn-ghost btn-xs ha-abnormal-modal-seg-del"><i class="fas fa-trash"></i></button>' +
          '</div></div>';
      }).join('') + '</div>' +
      '<button type="button" class="btn btn-ghost btn-sm ha-abnormal-modal-add-host" id="haAbnormalModalAddHost"><i class="fas fa-plus"></i> ' + t('tc.ha.abnormal_add_segment') + '</button></div>' : '';
    var modal = document.getElementById('haAbnormalModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'haAbnormalModal';
      modal.className = 'ha-rules-creator-modal-overlay ha-abnormal-modal-overlay';
      modal.innerHTML = '<div class="ha-rules-creator-modal ha-abnormal-modal">' +
        '<button type="button" class="ha-modal-close ha-abnormal-modal-close" aria-label="Close"><i class="fas fa-times"></i></button>' +
        '<h3 class="ha-rules-modal-title">' + t('tc.ha.abnormal_title') + ' - ' + (s.scheduleId != null ? s.scheduleId : '') + '</h3>' +
        '<div class="ha-abnormal-modal-body" id="haAbnormalModalBody"></div>' +
        '<div class="ha-rules-creator-modal-footer">' +
          '<button type="button" class="btn btn-ghost ha-abnormal-modal-cancel">' + t('common.cancel') + '</button>' +
          '<button type="button" class="btn btn-primary ha-abnormal-modal-save">' + t('tc.ha.abnormal_save') + '</button>' +
        '</div></div>';
      document.body.appendChild(modal);
    }
    var bodyEl = document.getElementById('haAbnormalModalBody');
    if (!bodyEl) return;
    bodyEl.innerHTML = type1Html + type2Html;
    bodyEl.setAttribute('data-session-id', sessionId);
    modal.classList.add('show');
    var closeBtn = modal.querySelector('.ha-abnormal-modal-close');
    var cancelBtn = modal.querySelector('.ha-abnormal-modal-cancel');
    var saveBtn = modal.querySelector('.ha-abnormal-modal-save');
    if (closeBtn) closeBtn.onclick = function () { modal.classList.remove('show'); };
    if (cancelBtn) cancelBtn.onclick = function () { modal.classList.remove('show'); };
    if (saveBtn) saveBtn.onclick = function () {
      var roomId = (bodyEl.querySelector('.ha-abnormal-modal-room') || {}).value;
      var actualStart = (bodyEl.querySelector('.ha-abnormal-modal-actual-start') || {}).value;
      var actualEnd = (bodyEl.querySelector('.ha-abnormal-modal-actual-end') || {}).value;
      var segsOut = [];
      bodyEl.querySelectorAll('.ha-abnormal-modal-seg').forEach(function (segEl) {
        var h = (segEl.querySelector('.ha-abnormal-modal-seg-host') || {}).value || '';
        var st = (segEl.querySelector('.ha-abnormal-modal-seg-start') || {}).value || '';
        var en = (segEl.querySelector('.ha-abnormal-modal-seg-end') || {}).value || '';
        var gmvVal = (segEl.querySelector('.ha-abnormal-modal-seg-gmv') || {}).value || '';
        var gmv = gmvVal === '' ? null : (parseFloat(gmvVal) || 0);
        if (h || st || en || gmvVal !== '') segsOut.push({ host: h, actualStartAt: st ? st.replace('T', ' ') : '', actualEndAt: en ? en.replace('T', ' ') : '', gmv: gmv });
      });
      haLiveSessionEdits[sessionId] = haLiveSessionEdits[sessionId] || {};
      if (type1) {
        haLiveSessionEdits[sessionId].roomId = roomId ? roomId.trim() : null;
        if (actualStart && actualEnd) {
          haLiveSessionEdits[sessionId].actualStartAt = actualStart.replace('T', ' ');
          haLiveSessionEdits[sessionId].actualEndAt = actualEnd.replace('T', ' ');
        }
      }
      if (type2 && segsOut.length) {
        haLiveSessionEdits[sessionId].hostSegments = segsOut.map(function (seg) {
          return { host: seg.host, startAt: seg.actualStartAt, endAt: seg.actualEndAt, gmv: seg.gmv };
        });
        if (segsOut.length === 1 && segsOut[0].actualStartAt && segsOut[0].actualEndAt) {
          haLiveSessionEdits[sessionId].actualStartAt = segsOut[0].actualStartAt;
          haLiveSessionEdits[sessionId].actualEndAt = segsOut[0].actualEndAt;
        }
      }
      haLiveSessionEditsSave();
      modal.classList.remove('show');
      renderHaSettle();
      bindHaSettlementInnerEvents();
      showToast(t('tc.ha.abnormal_save') + ' OK');
    };
    bodyEl.querySelectorAll('.ha-abnormal-modal-seg-del').forEach(function (btn) {
      btn.addEventListener('click', function () { btn.closest('.ha-abnormal-modal-seg').remove(); });
    });
    var addHostBtn = document.getElementById('haAbnormalModalAddHost');
    if (addHostBtn) {
      addHostBtn.onclick = function () {
        var hostsWrap = document.getElementById('haAbnormalModalHosts');
        if (!hostsWrap) return;
        var div = document.createElement('div');
        div.className = 'ha-abnormal-modal-seg';
        div.setAttribute('data-idx', String(hostsWrap.querySelectorAll('.ha-abnormal-modal-seg').length));
        div.innerHTML = '<div class="ha-abnormal-modal-seg-planned"></div><div class="ha-abnormal-modal-seg-fields">' +
          '<div class="ha-abnormal-modal-seg-field"><label>' + t('tc.ha.abnormal_th_host') + '</label><input type="text" class="ha-abnormal-modal-seg-host" placeholder="' + t('tc.ha.abnormal_th_host') + '"></div>' +
          '<div class="ha-abnormal-modal-seg-field"><label>' + t('tc.ha.abnormal_th_start') + '</label><input type="datetime-local" class="ha-abnormal-modal-seg-start" title="' + t('tc.ha.abnormal_th_start') + '"></div>' +
          '<div class="ha-abnormal-modal-seg-field"><label>' + t('tc.ha.abnormal_th_end') + '</label><input type="datetime-local" class="ha-abnormal-modal-seg-end" title="' + t('tc.ha.abnormal_th_end') + '"></div>' +
          '<div class="ha-abnormal-modal-seg-field"><label>' + t('tc.ha.past_lives_th_gmv') + '</label><input type="number" class="ha-abnormal-modal-seg-gmv" min="0" step="0.01" placeholder="' + t('tc.ha.past_lives_th_gmv') + '"></div>' +
          '<button type="button" class="btn btn-ghost btn-xs ha-abnormal-modal-seg-del"><i class="fas fa-trash"></i></button></div>';
        hostsWrap.appendChild(div);
        div.querySelector('.ha-abnormal-modal-seg-del').addEventListener('click', function () { div.remove(); });
      };
    }
  }

  function renderHaSettle() {
    var body = document.getElementById('haSettleBody');
    if (!body) return;
    if (haSettleActiveTab === 'batch') {
      body.innerHTML = haSettleBatchDetailId ? renderHaBatchDetailPage(haSettleBatchDetailId) : renderHaBatchListPage();
    } else if (haSettleActiveTab === 'withdraw') {
      body.innerHTML = renderHaWithdrawPage();
    } else if (haSettleActiveTab === 'rules') {
      body.innerHTML = renderHaSettleRulesV2();
    } else if (haSettleActiveTab === 'other_rewards') {
      body.innerHTML = renderHaOtherRewardsPage();
    } else if (haSettleActiveTab === 'past_lives') {
      body.innerHTML = renderHaPastLivesPage();
    } else {
      body.innerHTML = '<div class="ha-settle-content"><p class="ha-rules-hint">Unknown tab.</p></div>';
    }
  }

  function bindHaSettlementEvents() {
    haSettleRulesLoad();
    haLiveSessionEditsLoad();
    var tabs = document.querySelectorAll('.ha-settle-tab');
    var body = document.getElementById('haSettleBody');
    if (!body) return;
    if (!tabs.length) {
      body.innerHTML = '<div class="ha-settle-content"><p class="ha-rules-hint">Settlement tabs not found.</p></div>';
      return;
    }
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var tabKey = tab.getAttribute('data-tab');
        if (tabKey === haSettleActiveTab) return;
        haSettleActiveTab = tabKey;
        if (tabKey !== 'batch') haSettleBatchDetailId = null;
        if (tabKey !== 'past_lives') haPastLivesView = 'list';
        if (tabKey === 'rules') haSettleRulesV2Load();
        if (tabKey === 'other_rewards') haOtherRewardsLoad();
        tabs.forEach(function (t) { t.classList.toggle('ha-settle-tab--active', t.getAttribute('data-tab') === haSettleActiveTab); });
        renderHaSettle();
        bindHaSettlementInnerEvents();
      });
    });
    renderHaSettle();
    bindHaSettlementInnerEvents();
  }

  function bindHaSettlementInnerEvents() {
    if (haSettleActiveTab === 'rules') {
      document.querySelectorAll('.ha-rules-v2-country-tab').forEach(function (el) {
        el.addEventListener('click', function () {
          var c = el.getAttribute('data-rules-v2-country');
          if (c) {
            haSettleRulesV2CountryFilter = c;
            renderHaSettle();
            bindHaSettlementInnerEvents();
          }
        });
      });
      document.querySelectorAll('.ha-rules-v2-dim-tab').forEach(function (el) {
        el.addEventListener('click', function () {
          var tab = el.getAttribute('data-rules-v2-tab');
          if (tab) {
            haSettleRulesV2ActiveTab = tab;
            renderHaSettle();
            bindHaSettlementInnerEvents();
          }
        });
      });
      var submitBtn = document.querySelector('.ha-rules-v2-submit');
      if (submitBtn) {
        submitBtn.addEventListener('click', function () {
          var formCard = submitBtn.closest('.ha-rules-v2-form');
          var dimension = (formCard && formCard.getAttribute('data-rules-v2-dimension')) || 'live_account';
          var countryEl = document.getElementById('haRulesV2Country');
          var country = (countryEl && countryEl.value) ? countryEl.value : 'US';
          var liveAccountUsername = '';
          var creatorId = null;
          if (dimension === 'live_account') {
            var laEl = document.getElementById('haRulesV2LiveAccount');
            liveAccountUsername = (laEl && laEl.value) ? laEl.value.trim() : '';
            if (!liveAccountUsername) { showToast(t('tc.ha.rules_live_account_select_first'), 'warn'); return; }
          } else if (dimension === 'creator') {
            var crHidden = document.getElementById('haRulesV2Creator');
            var crVals = [];
            if (crHidden) {
              crVals = Array.from(crHidden.options || [])
                .filter(function (o) { return o.selected; })
                .map(function (o) { return o.value; })
                .filter(Boolean);
            }
            if (!crVals.length) { showToast(t('tc.ha.rules_creator_select_first'), 'warn'); return; }
            creatorId = crVals.map(function (v) { return parseInt(v, 10) || v; });
          }
          var cpsEffectiveStartEl = document.getElementById('haRulesV2CpsEffectiveStart');
          var cpsEffectiveEndEl = document.getElementById('haRulesV2CpsEffectiveEnd');
          var currencyEl = document.getElementById('haRulesV2Currency');
          var cpsEffectiveStart = cpsEffectiveStartEl && cpsEffectiveStartEl.value ? cpsEffectiveStartEl.value.trim() : '';
          var cpsEffectiveEnd = cpsEffectiveEndEl && cpsEffectiveEndEl.value ? cpsEffectiveEndEl.value.trim() : '';
          var currency = (currencyEl && currencyEl.value) ? currencyEl.value : 'USD';
          var hourlyRates = [];
          document.querySelectorAll('#haRulesV2HourlyList .ha-rules-v2-hourly-row').forEach(function (row) {
            var effectiveStartEl = row.querySelector('.ha-rules-hourly-effective-start');
            var effectiveEndEl = row.querySelector('.ha-rules-hourly-effective-end');
            var rateEl = row.querySelector('.ha-rules-hourly-rate');
            hourlyRates.push({
              id: row.getAttribute('data-id') || 'hr' + Date.now(),
              effectiveStart: effectiveStartEl && effectiveStartEl.value ? effectiveStartEl.value : '',
              effectiveEnd: effectiveEndEl && effectiveEndEl.value ? effectiveEndEl.value : '',
              rate: parseFloat(rateEl && rateEl.value) || 0,
              createdAt: parseInt(row.getAttribute('data-created-at'), 10) || Date.now()
            });
          });
          var hourlyEffectiveStart = '';
          var hourlyEffectiveEnd = '';
          hourlyRates.forEach(function (r) {
            if (r.effectiveStart && (!hourlyEffectiveStart || r.effectiveStart < hourlyEffectiveStart)) hourlyEffectiveStart = r.effectiveStart;
            if (r.effectiveEnd && (!hourlyEffectiveEnd || r.effectiveEnd > hourlyEffectiveEnd)) hourlyEffectiveEnd = r.effectiveEnd;
          });
          var cpsTiers = [];
          document.querySelectorAll('#haRulesV2CpsTiers .ha-rules-v2-tier-row').forEach(function (row) {
            var minEl = row.querySelector('.ha-rules-cps-min');
            var maxEl = row.querySelector('.ha-rules-cps-max');
            var rateEl = row.querySelector('.ha-rules-cps-rate');
            var min = parseFloat(minEl && minEl.value) || 0;
            var maxVal = maxEl && maxEl.value ? maxEl.value.trim() : '';
            var max = maxVal === '' ? null : parseFloat(maxVal) || null;
            var rate = parseFloat(rateEl && rateEl.value) || 0;
            cpsTiers.push({ id: row.getAttribute('data-id') || 't' + Date.now(), min: min, max: max, rate: rate });
          });
          var cpsModeEl = document.querySelector('input[name="haRulesV2CpsMode"]:checked');
          var cpsMode = (cpsModeEl && cpsModeEl.value === 'per_session') ? 'per_session' : 'per_hour';
          var config = { currency: currency, hourlyRates: hourlyRates, cpsTiers: cpsTiers, cpsMode: cpsMode };
          var byCreatorObj = {};
            if (dimension === 'creator' && Array.isArray(creatorId)) {
              creatorId.forEach(function (cid) { byCreatorObj[cid] = config; });
            } else if (dimension === 'creator' && creatorId != null) {
              byCreatorObj[creatorId] = config;
            }
            var record = {
            id: 'r2_' + Date.now() + '_' + Math.random().toString(36).slice(2),
            dimension: dimension,
            country: country,
            liveAccountUsername: dimension === 'live_account' ? liveAccountUsername : undefined,
            creatorId: dimension === 'creator' ? (Array.isArray(creatorId) ? creatorId[0] : creatorId) : undefined,
            hourlyEffectiveStart: hourlyEffectiveStart,
            hourlyEffectiveEnd: hourlyEffectiveEnd,
            cpsEffectiveStart: cpsEffectiveStart,
            cpsEffectiveEnd: cpsEffectiveEnd,
            merchant: dimension === 'merchant' ? config : {},
            byCreator: dimension === 'creator' ? byCreatorObj : {},
            byLiveAccount: dimension === 'live_account' ? (function () { var o = {}; o[liveAccountUsername] = config; return o; })() : {},
            createdAt: Date.now(),
            createdBy: (typeof currentUser === 'object' && currentUser && currentUser.id) ? currentUser.id : null
          };
          haSettleRulesV2.push(record);
          haSettleRulesV2Save();
          renderHaSettle();
          bindHaSettlementInnerEvents();
          showToast(t('tc.ha.rules_saved'));
        });
      }
      // Creator tag-style multi-select
      var creatorSearch = document.getElementById('haRulesV2CreatorSearch');
      var creatorTagsWrap = document.getElementById('haRulesV2CreatorTags');
      var creatorSuggestions = document.getElementById('haRulesV2CreatorSuggestions');
      var creatorHiddenSelect = document.getElementById('haRulesV2Creator');
      if (creatorSearch && creatorTagsWrap && creatorSuggestions && creatorHiddenSelect) {
        function getAllCreators() {
          return (haManageUsers || []).map(function (u) {
            return { id: String(u.id), name: u.name || ('#' + u.id) };
          });
        }
        function getSelectedIds() {
          return Array.from(creatorHiddenSelect.options || [])
            .filter(function (o) { return o.selected; })
            .map(function (o) { return o.value; });
        }
        function syncHiddenSelect(ids) {
          var idSet = {};
          ids.forEach(function (id) { idSet[id] = true; });
          Array.from(creatorHiddenSelect.options || []).forEach(function (o) {
            o.selected = !!idSet[o.value];
          });
        }
        function renderCreatorTags() {
          var all = getAllCreators();
          var selectedIds = getSelectedIds();
          creatorTagsWrap.innerHTML = selectedIds.map(function (id) {
            var item = all.filter(function (c) { return String(c.id) === String(id); })[0];
            var label = item ? item.name : ('#' + id);
            return '<span class="ms-tag" data-id="' + id + '">' + label + '<button type="button" class="ms-tag-remove" aria-label="Remove">×</button></span>';
          }).join('');
        }
        function renderSuggestions(keyword) {
          var all = getAllCreators();
          var selectedIds = getSelectedIds();
          var kw = (keyword || '').toLowerCase();
          var candidates = all.filter(function (c) {
            if (selectedIds.indexOf(String(c.id)) !== -1) return false;
            if (!kw) return true;
            return (c.name || '').toLowerCase().indexOf(kw) !== -1 || String(c.id).indexOf(kw) !== -1;
          });
          if (!candidates.length) {
            creatorSuggestions.classList.add('ms-dropdown--hidden');
            creatorSuggestions.innerHTML = '<div class="ms-no-result">' + t('crm.tags.add_to') + '</div>';
            return;
          }
          creatorSuggestions.innerHTML = candidates.map(function (c) {
            return '<div class="ms-option" data-id="' + c.id + '">' + (c.name || ('#' + c.id)) + '</div>';
          }).join('');
          creatorSuggestions.classList.remove('ms-dropdown--hidden');
        }
        creatorSearch.addEventListener('input', function () {
          renderSuggestions(creatorSearch.value);
        });
        creatorSearch.addEventListener('focus', function () {
          renderSuggestions(creatorSearch.value);
        });
        document.addEventListener('click', function (e) {
          if (!creatorSuggestions.contains(e.target) && e.target !== creatorSearch) {
            creatorSuggestions.classList.add('ms-dropdown--hidden');
          }
        });
        creatorSuggestions.addEventListener('click', function (e) {
          var item = e.target.closest('.ms-option');
          if (!item) return;
          var id = item.getAttribute('data-id');
          var ids = getSelectedIds();
          if (ids.indexOf(id) === -1) ids.push(id);
          syncHiddenSelect(ids);
          renderCreatorTags();
          creatorSearch.value = '';
          renderSuggestions('');
        });
        creatorTagsWrap.addEventListener('click', function (e) {
          var btn = e.target.closest('.ms-tag-remove');
          if (!btn) return;
          var pill = btn.closest('.ms-tag');
          if (!pill) return;
          var id = pill.getAttribute('data-id');
          var ids = getSelectedIds().filter(function (x) { return String(x) !== String(id); });
          syncHiddenSelect(ids);
          renderCreatorTags();
          renderSuggestions(creatorSearch.value);
        });
        // initial render (no selection yet)
        renderCreatorTags();
      }
      var hourlyAddV2 = document.querySelector('.ha-rules-v2-hourly-add');
      if (hourlyAddV2) {
        hourlyAddV2.addEventListener('click', function () {
          var tbody = document.getElementById('haRulesV2HourlyList');
          if (!tbody) return;
          var id = 'hr' + Date.now();
          var tr = document.createElement('tr');
          tr.className = 'ha-rules-v2-hourly-row ha-rules-hourly-row';
          tr.setAttribute('data-id', id);
          tr.setAttribute('data-created-at', String(Date.now()));
          tr.innerHTML = '<td><div class="ha-rules-cps-effective-inputs"><input type="date" class="ha-rules-input ha-rules-hourly-effective-start" value=""><span class="ha-rules-cps-effective-sep">–</span><input type="date" class="ha-rules-input ha-rules-hourly-effective-end" value=""></div></td><td><input type="number" class="ha-rules-input ha-rules-hourly-rate" value="100" min="0" step="1"> ' + t('tc.ha.rules_hourly_ph') + '</td><td><button type="button" class="btn btn-ghost btn-xs ha-rules-hourly-remove"><i class="fas fa-trash-alt"></i></button></td>';
          tbody.appendChild(tr);
          tr.querySelector('.ha-rules-hourly-remove').addEventListener('click', function () {
            if (tbody.querySelectorAll('.ha-rules-v2-hourly-row').length > 1) tr.remove();
          });
        });
      }
      var cpsAddV2 = document.querySelector('.ha-rules-v2-cps-add');
      if (cpsAddV2) {
        cpsAddV2.addEventListener('click', function () {
          var tbody = document.getElementById('haRulesV2CpsTiers');
          if (!tbody) return;
          var id = 't' + Date.now();
          var tr = document.createElement('tr');
          tr.className = 'ha-rules-v2-tier-row';
          tr.setAttribute('data-id', id);
          tr.innerHTML = '<td><input type="number" class="ha-rules-input ha-rules-cps-min" value="0" min="0" step="1"></td><td><input type="number" class="ha-rules-input ha-rules-cps-max" value="" min="0" step="1" placeholder="' + t('tc.ha.rules_cps_max_unlimited') + '"></td><td><input type="number" class="ha-rules-input ha-rules-cps-rate" value="0" min="0" max="100" step="0.1"> %</td><td><button type="button" class="btn btn-ghost btn-xs ha-rules-tier-remove"><i class="fas fa-trash-alt"></i></button></td>';
          tbody.appendChild(tr);
          tr.querySelector('.ha-rules-tier-remove').addEventListener('click', function () { tr.remove(); });
        });
      }
      document.querySelectorAll('.ha-rules-v2-form .ha-rules-hourly-remove').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var row = btn.closest('.ha-rules-v2-hourly-row');
          var tbody = document.getElementById('haRulesV2HourlyList');
          if (row && tbody && tbody.querySelectorAll('.ha-rules-v2-hourly-row').length > 1) row.remove();
        });
      });
      document.querySelectorAll('.ha-rules-v2-form .ha-rules-tier-remove').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var row = btn.closest('.ha-rules-v2-tier-row');
          if (row) row.remove();
        });
      });
      return;
    }
    if (haSettleActiveTab === 'other_rewards') {
      document.querySelectorAll('.ha-other-rewards-country-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
          haOtherRewardsCountryFilter = tab.getAttribute('data-country') || '';
          renderHaSettle();
          bindHaSettlementInnerEvents();
        });
      });
      var periodStartInput = document.querySelector('.ha-other-reward-filter-period-start');
      if (periodStartInput) {
        periodStartInput.addEventListener('change', function () {
          haOtherRewardsPeriodStartFilter = periodStartInput.value || '';
          renderHaSettle();
          bindHaSettlementInnerEvents();
        });
      }
      var periodEndInput = document.querySelector('.ha-other-reward-filter-period-end');
      if (periodEndInput) {
        periodEndInput.addEventListener('change', function () {
          haOtherRewardsPeriodEndFilter = periodEndInput.value || '';
          renderHaSettle();
          bindHaSettlementInnerEvents();
        });
      }
      var creatorFilterInput = document.querySelector('.ha-other-reward-filter-creator');
      if (creatorFilterInput) {
        creatorFilterInput.addEventListener('input', function () {
          haOtherRewardsCreatorFilter = creatorFilterInput.value || '';
          renderHaSettle();
          bindHaSettlementInnerEvents();
        });
      }
      var titleFilterInput = document.querySelector('.ha-other-reward-filter-title');
      if (titleFilterInput) {
        titleFilterInput.addEventListener('input', function () {
          haOtherRewardsTitleFilter = titleFilterInput.value || '';
          renderHaSettle();
          bindHaSettlementInnerEvents();
        });
      }
      var exportExcelBtn = document.querySelector('.ha-other-reward-export-excel');
      if (exportExcelBtn) {
        exportExcelBtn.addEventListener('click', function () {
          haOtherRewardsLoad();
          var filtered = (haOtherRewards || []).filter(function (r) {
            if (haOtherRewardsCountryFilter && r.country && r.country !== haOtherRewardsCountryFilter) return false;
            if (haOtherRewardsCreatorFilter && (!r.creatorName || r.creatorName.toLowerCase().indexOf(haOtherRewardsCreatorFilter.toLowerCase()) === -1)) return false;
            if (haOtherRewardsTitleFilter && (!r.title || String(r.title).toLowerCase().indexOf(haOtherRewardsTitleFilter.toLowerCase()) === -1)) return false;
            if (haOtherRewardsPeriodStartFilter || haOtherRewardsPeriodEndFilter) {
              var rStart = r.periodStart || '';
              var rEnd = r.periodEnd || '';
              var fStart = haOtherRewardsPeriodStartFilter || '0000-00-00';
              var fEnd = haOtherRewardsPeriodEndFilter || '9999-12-31';
              if (!rStart || !rEnd) return false;
              if (rEnd < fStart || rStart > fEnd) return false;
            }
            return true;
          });
          if (!filtered.length) { showToast(t('tc.ha.other_rewards_empty'), 'info'); return; }
          var headers = [t('tc.ha.custom_entry_creator'), t('tc.ha.custom_entry_title'), t('tc.ha.custom_entry_amount'), t('tc.ha.custom_entry_currency'), t('tc.ha.other_rewards_period'), t('tc.ha.filter_live_account'), t('tc.ha.other_rewards_created_by'), t('tc.ha.other_rewards_settlement_status')];
          var rows = filtered.map(function (r) {
            var period = (r.periodStart && r.periodEnd) ? r.periodStart + ' ~ ' + r.periodEnd : '';
            var createdByName = r.createdBy && typeof findMemberName === 'function' ? (findMemberName(r.createdBy).name || '') : '';
            var statusText = haOtherRewardIsUsedInBatch(r.id) ? t('tc.ha.settled') : t('tc.ha.unsettled');
            return [r.creatorName || '', r.title || '', r.amount != null ? r.amount : '', r.currency || '', period, r.country || '', createdByName, statusText];
          });
          var csv = [headers.join(','), rows.map(function (row) {
            return row.map(function (cell) { return '"' + String(cell).replace(/"/g, '""') + '"'; }).join(',');
          }).join('\n')].join('\n');
          var bom = '\uFEFF';
          var blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8' });
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = 'predefined_bonuses_' + new Date().toISOString().slice(0, 10) + '.csv';
          a.click();
          URL.revokeObjectURL(url);
          showToast(t('tc.ha.other_rewards_export_excel') + ' OK', 'success');
        });
      }
      var addBtn = document.querySelector('.ha-other-reward-add');
      if (addBtn) addBtn.addEventListener('click', function () { haOtherRewardModalOpen(null); });
      document.querySelectorAll('.ha-other-reward-add-inline').forEach(function (btn) {
        btn.addEventListener('click', function () { haOtherRewardModalOpen(null); });
      });
      document.querySelectorAll('.ha-other-reward-remove').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id = btn.getAttribute('data-id');
          if (!confirm(t('tc.ha.rules_creator_remove_confirm'))) return;
          haOtherRewards = (haOtherRewards || []).filter(function (x) { return String(x.id) !== String(id); });
          haOtherRewardsSave();
          renderHaSettle();
          bindHaSettlementInnerEvents();
          showToast(t('tc.ha.other_rewards_saved'));
        });
      });
      var modal = document.getElementById('haOtherRewardModal');
      if (modal) {
        modal.querySelectorAll('.ha-other-reward-modal-close, .ha-other-reward-modal-cancel').forEach(function (b) {
          b.addEventListener('click', function () { modal.classList.remove('show'); });
        });
        modal.querySelector('.ha-other-reward-modal-save').addEventListener('click', function () {
          haOtherRewardModalSave();
          modal.classList.remove('show');
          renderHaSettle();
          bindHaSettlementInnerEvents();
          showToast(t('tc.ha.other_rewards_saved'));
        });
      }
      return;
    }
    if (haSettleActiveTab === 'past_lives') {
      if (haPastLivesView === 'abnormal') {
        var backBtn = document.querySelector('.ha-past-lives-abnormal-back-btn');
        if (backBtn) {
          backBtn.addEventListener('click', function () {
            haPastLivesView = 'list';
            renderHaSettle();
            bindHaSettlementInnerEvents();
          });
        }
        document.querySelectorAll('.ha-abnormal-handle-btn').forEach(function (btn) {
          btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var sid = btn.getAttribute('data-session-id');
            if (sid) haAbnormalModalOpen(sid);
          });
        });
        return;
      }
      var fHost = document.getElementById('haPastLivesFilterHost');
      var fRoom = document.getElementById('haPastLivesFilterRoom');
      var fLa = document.getElementById('haPastLivesFilterLa');
      var fDateStart = document.getElementById('haPastLivesFilterDateStart');
      var fDateEnd = document.getElementById('haPastLivesFilterDateEnd');
      var fSettledRadios = document.querySelectorAll('input[name="haPastLivesFilterSettled"]');
      function applyPastLivesFilters() {
        haPastLivesFilterHost = (fHost && fHost.value) || '';
        haPastLivesFilterRoom = (fRoom && fRoom.value) || '';
        haPastLivesFilterLa = (fLa && fLa.value) || '';
        haPastLivesFilterDateStart = (fDateStart && fDateStart.value) || '';
        haPastLivesFilterDateEnd = (fDateEnd && fDateEnd.value) || '';
        var checked = fSettledRadios && Array.from(fSettledRadios).find(function (r) { return r.checked; });
        haPastLivesFilterSettled = (checked && checked.value) || '';
        renderHaSettle();
        bindHaSettlementInnerEvents();
      }
      if (fHost) fHost.addEventListener('change', applyPastLivesFilters);
      if (fHost) fHost.addEventListener('input', applyPastLivesFilters);
      if (fRoom) fRoom.addEventListener('change', applyPastLivesFilters);
      if (fRoom) fRoom.addEventListener('input', applyPastLivesFilters);
      if (fLa) fLa.addEventListener('change', applyPastLivesFilters);
      if (fLa) fLa.addEventListener('input', applyPastLivesFilters);
      if (fDateStart) fDateStart.addEventListener('change', applyPastLivesFilters);
      if (fDateEnd) fDateEnd.addEventListener('change', applyPastLivesFilters);
      if (fSettledRadios && fSettledRadios.length) fSettledRadios.forEach(function (r) { r.addEventListener('change', applyPastLivesFilters); });
      var exportBtn = document.getElementById('haPastLivesExport');
      if (exportBtn) {
        exportBtn.addEventListener('click', function () {
          var list = haPastLivesFilteredSessions();
          if (!list.length) { showToast(t('tc.ha.past_lives_empty')); return; }
          var headers = [t('tc.ha.past_lives_th_schedule_id'), t('tc.ha.past_lives_th_host'), t('tc.ha.past_lives_th_room_id'), t('tc.ha.past_lives_th_event'), t('tc.ha.past_lives_filter_la'), t('tc.ha.past_lives_th_planned'), t('tc.ha.past_lives_th_actual'), t('tc.ha.past_lives_th_duration'), t('tc.ha.past_lives_th_gmv'), t('tc.ha.past_lives_th_settled') + '/' + t('tc.ha.past_lives_th_batch_sn')];
          var rows = list.map(function (s) {
            var planned = formatLiveStartEnd(s.startAt, s.endAt) || '';
            var actual = formatLiveStartEnd(s.actualStartAt, s.actualEndAt) || '';
            var dur = s.durationSeconds ? (Math.round(s.durationSeconds / 3600 * 100) / 100) : '';
            var settledBatch = s.settled ? (t('tc.ha.settled') + ' ' + (s.batchSn || '')) : t('tc.ha.unsettled');
            return [s.scheduleId != null ? s.scheduleId : '', s.creatorName || '', s.roomId || '', s.eventName || '', (s.liveAccountUsername ? '@' + String(s.liveAccountUsername).replace(/^@/, '') : ''), planned, actual, dur, (s.gmv != null ? s.gmv : 0), settledBatch];
          });
          var csv = [headers.join(','), rows.map(function (r) { return r.map(function (c) { return '"' + String(c).replace(/"/g, '""') + '"'; }).join(','); }).join('\n')].join('\n');
          var blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
          var a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'past_lives_' + (new Date().toISOString().slice(0, 10)) + '.csv';
          a.click();
          URL.revokeObjectURL(a.href);
          showToast('Exported');
        });
      }
      var fixAbnormalEntry = document.getElementById('haPastLivesFixAbnormalEntry');
      if (fixAbnormalEntry) {
        fixAbnormalEntry.addEventListener('click', function () {
          haPastLivesView = 'abnormal';
          renderHaSettle();
          bindHaSettlementInnerEvents();
        });
      }
      document.querySelectorAll('.ha-past-lives-abn-badge').forEach(function (badge) {
        badge.addEventListener('click', function () {
          var row = badge.closest('tr');
          if (row) {
            haPastLivesView = 'abnormal';
            renderHaSettle();
            bindHaSettlementInnerEvents();
          }
        });
      });
      document.querySelectorAll('.ha-past-lives-gmv-edit').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var row = btn.closest('tr');
          if (!row) return;
          var disp = row.querySelector('.ha-past-lives-gmv-display');
          var inp = row.querySelector('.ha-past-lives-gmv-input');
          var saveBtn = row.querySelector('.ha-past-lives-gmv-save');
          if (disp) disp.style.display = 'none';
          if (inp) { inp.style.display = 'inline-block'; inp.focus(); }
          if (btn) btn.style.display = 'none';
          if (saveBtn) saveBtn.style.display = 'inline-block';
        });
      });
      document.querySelectorAll('.ha-past-lives-gmv-save').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var sid = btn.getAttribute('data-session-id');
          var row = btn.closest('tr');
          if (!row) return;
          var inp = row.querySelector('.ha-past-lives-gmv-input');
          var val = inp && inp.value !== '' ? parseFloat(inp.value) : 0;
          if (isNaN(val)) val = 0;
          haLiveSessionEdits[sid] = haLiveSessionEdits[sid] || {};
          haLiveSessionEdits[sid].gmv = val;
          haLiveSessionEditsSave();
          var disp = row.querySelector('.ha-past-lives-gmv-display');
          var s = haLiveSessions.filter(function (x) { return x.sessionId === sid; })[0];
          var cur = (s && s.currency) || 'USD';
          if (disp) { disp.textContent = haFormatAmount(val, cur); disp.style.display = 'inline'; }
          if (inp) inp.style.display = 'none';
          var editBtn = row.querySelector('.ha-past-lives-gmv-edit');
          if (editBtn) editBtn.style.display = 'inline-block';
          if (btn) btn.style.display = 'none';
          showToast(t('common.save') + ' OK');
        });
      });
      return;
    }
    if (haSettleActiveTab === 'batch') {
      if (haSettleBatchDetailId) {
        var backBtn = document.querySelector('.ha-batch-detail-back-btn');
        if (backBtn) {
          backBtn.addEventListener('click', function () {
            haSettleBatchDetailId = null;
            renderHaSettle();
            bindHaSettlementInnerEvents();
          });
        }
        var summaryEl = document.getElementById('haBatchDetailSummary');
        if (summaryEl) {
          summaryEl.querySelectorAll('.ha-batch-detail-summary-card--filter').forEach(function (card) {
            card.addEventListener('click', function () {
              var type = card.getAttribute('data-settle-type');
              if (type) {
                haBatchDetailSettleType = type;
                renderHaSettle();
                bindHaSettlementInnerEvents();
              }
            });
          });
        }
        var tableWrap = document.getElementById('haBatchDetailTableWrap');
        if (tableWrap) {
          tableWrap.querySelectorAll('.ha-batch-creator-row--expandable').forEach(function (row) {
            row.addEventListener('click', function () {
              var next = row.nextElementSibling;
              if (next && next.classList.contains('ha-batch-lives-row')) {
                next.classList.toggle('ha-batch-lives-row--expanded');
                row.classList.toggle('ha-batch-creator-row--expanded');
              }
            });
          });
        }
        return;
      }
      var genBtn = document.querySelector('.ha-settle-generate');
      if (genBtn) {
        genBtn.addEventListener('click', function () {
          var modal = document.getElementById('haGenerateBatchModal');
          if (!modal) return;
          var startEl = document.getElementById('haGenerateDateStart');
          var endEl = document.getElementById('haGenerateDateEnd');
          if (startEl && endEl) {
            var today = new Date();
            var defEnd = today.toISOString().slice(0, 10);
            var defStart = new Date(today);
            defStart.setDate(defStart.getDate() - 6);
            defStart = defStart.toISOString().slice(0, 10);
            startEl.value = defStart;
            endEl.value = defEnd;
          }
          modal.classList.add('show');
        });
      }
      var genModal = document.getElementById('haGenerateBatchModal');
      if (genModal) {
        function closeGenModal() { genModal.classList.remove('show'); }
        genModal.querySelector('.ha-generate-batch-close')?.addEventListener('click', closeGenModal);
        genModal.querySelector('.ha-generate-batch-cancel')?.addEventListener('click', closeGenModal);
        genModal.addEventListener('click', function (e) { if (e.target === genModal) closeGenModal(); });
        genModal.querySelectorAll('input[name="haGenerateCountryScope"]').forEach(function (radio) {
          radio.addEventListener('change', function () {
            var wrap = genModal.querySelector('.ha-generate-country-select-wrap');
            if (wrap) wrap.style.display = (radio.value === 'specific') ? 'block' : 'none';
          });
        });
        genModal.querySelector('.ha-generate-batch-confirm')?.addEventListener('click', function () {
          var startEl = document.getElementById('haGenerateDateStart');
          var endEl = document.getElementById('haGenerateDateEnd');
          var scopeAll = genModal.querySelector('input[name="haGenerateCountryScope"][value="all"]')?.checked;
          var countrySelect = document.getElementById('haGenerateCountrySelect');
          var genCountry = (!scopeAll && countrySelect && countrySelect.value) ? countrySelect.value.trim() : null;
          var includeHourly = genModal.querySelector('.ha-generate-include-hourly')?.checked;
          var includeCommission = genModal.querySelector('.ha-generate-include-commission')?.checked;
          var includeOtherRewards = genModal.querySelector('.ha-generate-include-other-rewards')?.checked;
          var startDate = startEl?.value || '2024-03-08';
          var endDate = endEl?.value || '2024-03-14';
          if (startDate > endDate) {
            showToast(t('tc.ha.generate_date_invalid'), 'warn');
            return;
          }
          if (!includeHourly && !includeCommission && !includeOtherRewards) {
            showToast(t('tc.ha.generate_modal_types_required'), 'warn');
            return;
          }
          haSettleRulesLoad();
          var newBatches = haSettleRulesGenerateBatch(startDate, endDate, { includeHourly: !!includeHourly, includeCommission: !!includeCommission, includeOtherRewards: !!includeOtherRewards, country: genCountry });
          if (newBatches && newBatches.length) {
            for (var i = newBatches.length - 1; i >= 0; i--) haSettleBatches.unshift(newBatches[i]);
            haSettleBatchFilter = 'draft';
            haSettleBatchPage = 1;
            closeGenModal();
            renderHaSettle();
            bindHaSettlementInnerEvents();
            showToast(t('tc.ha.batch_generated'));
          }
        });
      }
      var countryTabs = document.querySelectorAll('.ha-settle-country-tab');
      countryTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          haSettleBatchCountryFilter = (tab.getAttribute('data-country') || '').trim();
          haSettleBatchPage = 1;
          renderHaSettle();
          bindHaSettlementInnerEvents();
        });
      });
      var statusBtns = document.querySelectorAll('.ha-settle-filter-pills .ha-settle-pill');
      statusBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var status = btn.getAttribute('data-status');
          if (status) {
            haSettleBatchFilter = status;
            haSettleBatchPage = 1;
            renderHaSettle();
            bindHaSettlementInnerEvents();
          }
        });
      });
      var table = document.querySelector('.ha-settle-table');
      if (!table) return;
      table.addEventListener('click', function (e) {
        var btnMoreToggle = e.target.closest('.ha-settle-more-toggle');
        var btnView = e.target.closest('.ha-settle-view');
        var btnConfirm = e.target.closest('.ha-settle-confirm');
        if (btnMoreToggle) {
          e.preventDefault();
          e.stopPropagation();
          var wrap = btnMoreToggle.closest('.ha-settle-more-wrap');
          if (!wrap) return;
          var existing = document.getElementById('ha-settle-more-portal');
          if (existing && existing.getAttribute('data-batch-id') === batchId) {
            existing.remove();
            return;
          }
          if (existing) existing.remove();
          var batchId = wrap.getAttribute('data-id') || '';
          var rect = btnMoreToggle.getBoundingClientRect();
          var portal = document.createElement('div');
          portal.id = 'ha-settle-more-portal';
          portal.setAttribute('data-batch-id', batchId);
          portal.className = 'ha-settle-more-menu ha-settle-more-menu--portal';
          portal.innerHTML = '<button type="button" class="ha-settle-more-item ha-settle-cancel" data-id="' + batchId + '"><i class="fas fa-times-circle"></i> Cancel</button>' +
            '<button type="button" class="ha-settle-more-item ha-settle-regenerate" data-id="' + batchId + '"><i class="fas fa-sync-alt"></i> Regenerate</button>';
          document.body.appendChild(portal);
          var menuW = 160;
          var left = rect.right - menuW;
          var top = rect.bottom + 4;
          if (left < 8) left = 8;
          if (left + menuW > window.innerWidth - 8) left = window.innerWidth - menuW - 8;
          if (top + 80 > window.innerHeight - 8) top = rect.top - 80 - 4;
          if (top < 8) top = 8;
          portal.style.left = left + 'px';
          portal.style.top = top + 'px';
          function closePortal() {
            var p = document.getElementById('ha-settle-more-portal');
            if (p) p.remove();
            document.removeEventListener('click', closeHandler);
          }
          function closeHandler(ev) {
            if (portal.contains(ev.target) || btnMoreToggle.contains(ev.target)) return;
            closePortal();
          }
          portal.querySelector('.ha-settle-cancel').addEventListener('click', function () {
            haSettleBatches = haSettleBatches.filter(function (b) { return b.id !== batchId; });
            closePortal();
            renderHaSettle();
            bindHaSettlementInnerEvents();
          });
          portal.querySelector('.ha-settle-regenerate').addEventListener('click', function () {
            var src = haSettleBatches.filter(function (b) { return b.id === batchId; })[0];
            if (src) {
              var clone = JSON.parse(JSON.stringify(src));
              clone.id = src.id + '-R' + Date.now();
              clone.status = 'draft';
              clone.confirmedBy = null;
              clone.confirmedAt = null;
              clone.createdAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
              clone.createdBy = (typeof currentUser === 'object' && currentUser && currentUser.id) ? currentUser.id : null;
              haSettleBatches.unshift(clone);
            }
            closePortal();
            renderHaSettle();
            bindHaSettlementInnerEvents();
          });
          setTimeout(function () { document.addEventListener('click', closeHandler); }, 0);
          return;
        }
        if (btnView) {
          var id = btnView.getAttribute('data-id');
          haSettleBatchDetailId = id;
          renderHaSettle();
          bindHaSettlementInnerEvents();
        } else if (btnConfirm) {
          var id = btnConfirm.getAttribute('data-id');
          var modal = document.getElementById('haConfirmSendModal');
          if (modal) {
            modal.setAttribute('data-pending-batch-id', id || '');
            modal.classList.add('show');
          }
        }
      });
      var confirmSendModal = document.getElementById('haConfirmSendModal');
      if (confirmSendModal) {
        function closeConfirmSendModal() {
          confirmSendModal.classList.remove('show');
          confirmSendModal.removeAttribute('data-pending-batch-id');
        }
        function doConfirmSend() {
          var id = confirmSendModal.getAttribute('data-pending-batch-id');
          if (id) {
            haSettleBatches.forEach(function (b) {
              if (b.id === id) {
                b.status = 'confirmed';
                if (typeof currentUser === 'object' && currentUser && currentUser.id) {
                  b.confirmedBy = currentUser.id;
                }
                b.confirmedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
              }
            });
            renderHaSettle();
            bindHaSettlementInnerEvents();
          }
          closeConfirmSendModal();
        }
        var closeBtn = confirmSendModal.querySelector('.ha-confirm-send-close');
        var cancelBtn = confirmSendModal.querySelector('.ha-confirm-send-cancel');
        var okBtn = confirmSendModal.querySelector('.ha-confirm-send-ok');
        if (closeBtn) closeBtn.addEventListener('click', closeConfirmSendModal);
        if (cancelBtn) cancelBtn.addEventListener('click', closeConfirmSendModal);
        if (okBtn) okBtn.addEventListener('click', doConfirmSend);
        confirmSendModal.addEventListener('click', function (e) {
          if (e.target === confirmSendModal) closeConfirmSendModal();
        });
      }
      var pager = document.querySelector('.ha-settle-pagination');
      if (pager) {
        pager.addEventListener('click', function (e) {
          var btn = e.target.closest('.ha-settle-page-btn');
          if (!btn || btn.disabled) return;
          var dir = btn.getAttribute('data-dir');
          var laFilteredPager = (haSettleBatchCountryFilter && haSettleBatchCountryFilter !== '') ? haSettleBatches.filter(function (b) { return haBatchGetCountry(b) === haSettleBatchCountryFilter; }) : haSettleBatches;
          var filteredPager = haSettleBatchFilter === 'all' ? laFilteredPager : laFilteredPager.filter(function (b) { return b.status === haSettleBatchFilter; });
          var totalPages = Math.max(1, Math.ceil(filteredPager.length / haSettleBatchPageSize));
          if (dir === 'prev' && haSettleBatchPage > 1) {
            haSettleBatchPage -= 1;
          } else if (dir === 'next' && haSettleBatchPage < totalPages) {
            haSettleBatchPage += 1;
          } else {
            return;
          }
          renderHaSettle();
          bindHaSettlementInnerEvents();
        });
      }
    } else {
      var wdCountryTabs = document.querySelectorAll('.ha-settle-withdraw-content .ha-settle-country-tab');
      wdCountryTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          haSettleWithdrawCountryFilter = (tab.getAttribute('data-country') || '').trim();
          renderHaSettle();
          bindHaSettlementInnerEvents();
        });
      });
      var withdrawStatusBtns = document.querySelectorAll('.ha-settle-filter-pills .ha-settle-pill');
      withdrawStatusBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var status = btn.getAttribute('data-status');
          if (status) {
            haSettleWithdrawFilter = status;
            renderHaSettle();
            bindHaSettlementInnerEvents();
          }
        });
      });
      function getHaWithdrawSelectedIds() {
        var cbs = document.querySelectorAll('.ha-withdraw-select:checked');
        return Array.prototype.map.call(cbs, function (cb) { return cb.getAttribute('data-id'); }).filter(Boolean);
      }
      var selectAllCb = document.getElementById('haWithdrawSelectAll');
      if (selectAllCb) {
        selectAllCb.addEventListener('change', function () {
          var checked = selectAllCb.checked;
          document.querySelectorAll('.ha-withdraw-select').forEach(function (cb) { cb.checked = checked; });
        });
      }
      var tableWithdraw = document.querySelector('.ha-settle-table--withdraw');
      if (tableWithdraw) tableWithdraw.addEventListener('change', function (e) {
        if (e.target.classList.contains('ha-withdraw-select')) {
          var all = document.querySelectorAll('.ha-withdraw-select');
          var checked = document.querySelectorAll('.ha-withdraw-select:checked');
          if (selectAllCb) selectAllCb.checked = all.length > 0 && checked.length === all.length;
        }
      });
      var exportBtn = document.getElementById('haExportPending');
      if (exportBtn) exportBtn.addEventListener('click', function () {
        function wdGetCountry(r) { return r.country || (r.currency === 'CNY' ? 'CN' : r.currency === 'EUR' ? 'DE' : 'US'); }
        var base = haSettleWithdrawCountryFilter ? haSettleWithdrawRequests.filter(function (r) { return wdGetCountry(r) === haSettleWithdrawCountryFilter; }) : haSettleWithdrawRequests;
        var pending = base.filter(function (r) { return r.status === 'pending'; });
        var selectedIds = getHaWithdrawSelectedIds();
        var toExport = selectedIds.length ? pending.filter(function (r) { return selectedIds.indexOf(r.id) !== -1; }) : pending;
        if (!toExport.length) {
          showToast(selectedIds.length ? t('tc.ha.withdraw_empty') : t('tc.ha.withdraw_empty'), 'info');
          return;
        }
        var headers = ['Request ID', t('tc.ha.th_creator'), t('tc.ha.withdraw_paypal'), 'Amount', 'Created at'];
        var rows = toExport.map(function (r) {
          var paypalLabel = (r.paypalName || '') + (r.paypalContact ? ' · ' + r.paypalContact : '');
          return [r.id, r.host, paypalLabel, '$' + r.amount.toLocaleString(), r.createdAt];
        });
        var csv = [headers.join(','), rows.map(function (row) {
          return row.map(function (cell) { return '"' + String(cell).replace(/"/g, '""') + '"'; }).join(',');
        }).join('\n')].join('\n');
        var bom = '\uFEFF';
        var blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'withdrawals_pending_' + new Date().toISOString().slice(0, 10) + '.csv';
        a.click();
        URL.revokeObjectURL(url);
      });
      var approveAllBtn = document.getElementById('haApproveAllPending');
      if (approveAllBtn) approveAllBtn.addEventListener('click', function () {
        // Second confirmation modal for withdraw approval actions
        var modal = document.getElementById('haWithdrawConfirmModal');
        if (!modal) {
          modal = document.createElement('div');
          modal.id = 'haWithdrawConfirmModal';
          modal.className = 'modal-overlay';
          modal.innerHTML = '<div class="modal">' +
            '<button type="button" class="modal-close" id="haWithdrawConfirmModalClose"><i class="fas fa-times"></i></button>' +
            '<h3 class="modal-title" id="haWithdrawConfirmModalTitle"></h3>' +
            '<div class="modal-desc" id="haWithdrawConfirmModalDesc"></div>' +
            '<div style="display:flex;justify-content:flex-end;gap:var(--space-md);margin-top:var(--space-xl)">' +
            '<button class="btn btn-secondary" type="button" id="haWithdrawConfirmModalCancel">' + t('common.cancel') + '</button>' +
            '<button class="btn btn-primary" type="button" id="haWithdrawConfirmModalOk"></button>' +
            '</div>' +
            '</div>';
          document.body.appendChild(modal);
        }
        var okBtn = document.getElementById('haWithdrawConfirmModalOk');
        var cancelBtn = document.getElementById('haWithdrawConfirmModalCancel');
        var closeBtn = document.getElementById('haWithdrawConfirmModalClose');
        var descEl = document.getElementById('haWithdrawConfirmModalDesc');
        var titleEl = document.getElementById('haWithdrawConfirmModalTitle');
        var openHaWithdrawConfirm = function (desc, okText, onConfirm) {
          if (titleEl) titleEl.textContent = t('tc.ha.withdraw_confirm_modal_title');
          if (descEl) descEl.textContent = desc;
          if (okBtn) okBtn.textContent = okText;
          if (modal) modal.classList.add('active');
          if (cancelBtn) cancelBtn.onclick = function () { if (modal) modal.classList.remove('active'); };
          if (closeBtn) closeBtn.onclick = function () { if (modal) modal.classList.remove('active'); };
          if (modal) modal.onclick = function (e) { if (e.target === modal && modal) modal.classList.remove('active'); };
          if (okBtn) okBtn.onclick = function () {
            if (modal) modal.classList.remove('active');
            if (typeof onConfirm === 'function') onConfirm();
          };
        };
        function wdGetCountry(r) { return r.country || (r.currency === 'CNY' ? 'CN' : r.currency === 'EUR' ? 'DE' : 'US'); }
        var base = haSettleWithdrawCountryFilter ? haSettleWithdrawRequests.filter(function (r) { return wdGetCountry(r) === haSettleWithdrawCountryFilter; }) : haSettleWithdrawRequests;
        var pending = base.filter(function (r) { return r.status === 'pending'; });
        var selectedIds = getHaWithdrawSelectedIds();
        var toApprove = selectedIds.length ? pending.filter(function (r) { return selectedIds.indexOf(r.id) !== -1; }) : pending;
        if (!toApprove.length) {
          showToast(t('tc.ha.withdraw_empty'), 'info');
          return;
        }
        var confirmMsg = selectedIds.length ? t('tc.ha.withdraw_approve_selected_confirm') : t('tc.ha.withdraw_approve_all_confirm');
        var doneMsg = selectedIds.length ? t('tc.ha.withdraw_approve_selected_done') : t('tc.ha.withdraw_approve_all_done');
        openHaWithdrawConfirm(confirmMsg, t('tc.ha.approve'), function () {
          haSettleWithdrawRequests.forEach(function (r) {
            if (toApprove.indexOf(r) !== -1) r.status = 'approved';
          });
          showToast(doneMsg, 'success');
          renderHaSettle();
          bindHaSettlementInnerEvents();
        });
      });
      var table2 = document.querySelector('.ha-settle-table');
      if (!table2) return;
      table2.addEventListener('click', function (e) {
        var approve = e.target.closest('.ha-approve');
        var reject = e.target.closest('.ha-reject');
        if (approve || reject) {
          var id = (approve || reject).getAttribute('data-id');
          var msg = approve ? t('tc.ha.withdraw_approve_confirm') : t('tc.ha.withdraw_reject_confirm');
          // Reuse the modal created/initialized by the bulk handler above if possible
          var modal = document.getElementById('haWithdrawConfirmModal');
          if (!modal) {
            // Fallback: if user reaches single approve/reject before bulk init, create it here
            modal = document.createElement('div');
            modal.id = 'haWithdrawConfirmModal';
            modal.className = 'modal-overlay';
            modal.innerHTML = '<div class="modal">' +
              '<button type="button" class="modal-close" id="haWithdrawConfirmModalClose"><i class="fas fa-times"></i></button>' +
              '<h3 class="modal-title" id="haWithdrawConfirmModalTitle"></h3>' +
              '<div class="modal-desc" id="haWithdrawConfirmModalDesc"></div>' +
              '<div style="display:flex;justify-content:flex-end;gap:var(--space-md);margin-top:var(--space-xl)">' +
              '<button class="btn btn-secondary" type="button" id="haWithdrawConfirmModalCancel">' + t('common.cancel') + '</button>' +
              '<button class="btn btn-primary" type="button" id="haWithdrawConfirmModalOk"></button>' +
              '</div>' +
              '</div>';
            document.body.appendChild(modal);
          }
          var okBtn = document.getElementById('haWithdrawConfirmModalOk');
          var cancelBtn = document.getElementById('haWithdrawConfirmModalCancel');
          var closeBtn = document.getElementById('haWithdrawConfirmModalClose');
          var descEl = document.getElementById('haWithdrawConfirmModalDesc');
          var titleEl = document.getElementById('haWithdrawConfirmModalTitle');
          if (titleEl) titleEl.textContent = t('tc.ha.withdraw_confirm_modal_title');
          if (descEl) descEl.textContent = msg;
          if (okBtn) okBtn.textContent = approve ? t('tc.ha.approve') : t('tc.ha.reject');
          if (modal) modal.classList.add('active');
          if (cancelBtn) cancelBtn.onclick = function () { if (modal) modal.classList.remove('active'); };
          if (closeBtn) closeBtn.onclick = function () { if (modal) modal.classList.remove('active'); };
          if (modal) modal.onclick = function (e) { if (e.target === modal && modal) modal.classList.remove('active'); };
          if (okBtn) okBtn.onclick = function () {
            if (modal) modal.classList.remove('active');
            haSettleWithdrawRequests.forEach(function (r) {
              if (r.id === id) r.status = approve ? 'approved' : 'rejected';
            });
            renderHaSettle();
            bindHaSettlementInnerEvents();
          };
        }
      });
    }
  }

  function bindTenantCenterPanelEvents(panel) {
    if (panel === 'ha_manage') bindHaManageEvents();
    if (panel === 'ha_settlement') bindHaSettlementEvents();
    if (panel === 'tenant_tts') {
      var auths = loadTtsAuth();
      var btnConnect = document.getElementById('btnTtsConnect') || document.getElementById('btnTtsConnectEmpty');
      if (btnConnect) {
        btnConnect.addEventListener('click', function () {
          // 在真实环境中，这里应跳转到 TikTok 授权页面，完成授权后由后端回调并写入授权记录。
          // 当前 demo 中，我们模拟新增一条 US 店铺授权，便于后续流程联调。
          var country = 'US';
          var shopName = 'New TikTok Shop';
          var id = 'tts_' + country.toLowerCase() + '_' + Date.now();
          var shopId = 'TTS-' + String(Date.now()).slice(-8);
          auths.push({
            id: id,
            country: country,
            marketplace: country,
            shopName: shopName,
            shopId: shopId,
            status: 'active',
            authorizedAt: new Date().toISOString(),
            revokedAt: null
          });
          saveTtsAuth(auths);
          var main = document.getElementById('tcMain');
          if (main) {
            main.innerHTML = renderTenantCenterMain('tenant_tts');
            bindTenantCenterPanelEvents('tenant_tts');
          }
          showToast(t('tc.tts.toast_connected'));
        });
      }
      document.querySelectorAll('.tc-tts-remove').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id = btn.getAttribute('data-id');
          if (!id) return;
          if (!confirm(t('tc.tts.remove_confirm'))) return;
          var list = loadTtsAuth().filter(function (a) { return a.id !== id; });
          saveTtsAuth(list);
          var main = document.getElementById('tcMain');
          if (main) {
            main.innerHTML = renderTenantCenterMain('tenant_tts');
            bindTenantCenterPanelEvents('tenant_tts');
          }
          showToast(t('tc.tts.toast_removed'));
        });
      });
      document.querySelectorAll('.tc-tts-renew').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id = btn.getAttribute('data-id');
          if (!id) return;
          var list = loadTtsAuth();
          list.forEach(function (a) {
            if (a.id === id) a.authorizedAt = new Date().toISOString();
          });
          saveTtsAuth(list);
          var main = document.getElementById('tcMain');
          if (main) {
            main.innerHTML = renderTenantCenterMain('tenant_tts');
            bindTenantCenterPanelEvents('tenant_tts');
          }
          showToast(t('tc.tts.toast_renewed'));
        });
      });
    }
  }

  function renderTenantCenter() {
    return '<div class="tc-page">' +
      '<header class="tc-topbar">' +
        '<h1 class="page-title tc-topbar-title">' + t('nav.tenant_center') + '</h1>' +
        '<div class="tc-topbar-actions">' +
          '<button type="button" class="btn btn-secondary tc-topbar-btn">' + t('tc.cancel_subscription') + '</button>' +
        '</div>' +
      '</header>' +
      '<div class="tc-body">' +
        '<aside class="tc-sidebar">' + renderTenantCenterSidebar() + '</aside>' +
        '<main class="tc-main" id="tcMain">' + renderTenantCenterMain(tcPanel) + '</main>' +
      '</div>' +
    '</div>';
  }

  function renderAnalytics() {
    return renderTenantCenter();
  }

  function renderBenefitsStore() {
    var planType = getRole();
    var descKey = planType === 'affiliate' ? 'tc.benefits_store_desc_affiliate' : 'tc.benefits_store_desc_live';
    return '<div class="tc-page tc-benefits-store-page">' +
      '<header class="tc-topbar">' +
        '<div>' +
          '<h1 class="page-title tc-topbar-title">' + t('tc.benefits_store') + '</h1>' +
          '<p class="tc-benefits-store-desc">' + t(descKey) + '</p>' +
        '</div>' +
      '</header>' +
      '<div class="tc-benefits-store-body">' +
        '<main class="tc-main tc-benefits-store-main">' + renderPlanCards() + '</main>' +
      '</div>' +
    '</div>';
  }

  var hourlyPayRulesMode = 'session';
  var hourlyPayRulesLadder = [{ min_gmv: 0, max_gmv: 300, hourly_rate: 50 }, { min_gmv: 300, max_gmv: 1500, hourly_rate: 75 }, { min_gmv: 1500, max_gmv: null, hourly_rate: 100 }];

  function renderHourlyPayRulesPage() {
    var ladderRows = (hourlyPayRulesLadder || []).map(function (row, idx) {
      return '<tr class="hpr-ladder-row" data-idx="' + idx + '">' +
        '<td><input type="number" class="ha-rules-input hpr-min-gmv" value="' + (row.min_gmv || 0) + '" min="0" step="1"></td>' +
        '<td><input type="number" class="ha-rules-input hpr-max-gmv" value="' + (row.max_gmv != null ? row.max_gmv : '') + '" min="0" step="1" placeholder="No limit"></td>' +
        '<td><input type="number" class="ha-rules-input hpr-hourly-rate" value="' + (row.hourly_rate || 0) + '" min="0" step="0.01"> $/hr</td>' +
        '<td><button type="button" class="btn btn-ghost btn-xs hpr-row-remove" data-idx="' + idx + '"><i class="fas fa-trash-alt"></i></button></td>' +
        '</tr>';
    }).join('');
    var formulaSession = 'avg_gmv_per_hour = session_gmv / session_hours<br>hourly_pay = hourly_rate × session_hours';
    var formulaCycle = 'cycle_avg_gmv_per_hour = total_gmv / total_hours<br>hourly_pay = cycle_hourly_rate × session_hours';
    var formulaHtml = hourlyPayRulesMode === 'session' ? formulaSession : formulaCycle;
    return '<div class="hpr-page">' +
      '<header class="hpr-header">' +
        '<h1 class="page-title">Host Hourly Pay Rules</h1>' +
      '</header>' +
      '<div class="hpr-body">' +
        '<div class="card ha-settle-card hpr-card">' +
          '<div class="ha-settle-intro">' +
            '<div class="or-tabs hpr-mode-tabs">' +
              '<button type="button" class="or-tab' + (hourlyPayRulesMode === 'session' ? ' or-tab--active' : '') + '" data-mode="session">Session-Based Mode</button>' +
              '<button type="button" class="or-tab' + (hourlyPayRulesMode === 'cycle' ? ' or-tab--active' : '') + '" data-mode="cycle">Cycle-Based Mode</button>' +
            '</div>' +
          '</div>' +
          '<div class="ha-rules-sections">' +
            '<section class="ha-rules-section">' +
              '<h4 class="ha-rules-section-title">GMV Ladder</h4>' +
              '<table class="ha-rules-table"><thead><tr><th>Min GMV ($)</th><th>Max GMV ($)</th><th>Hourly Rate ($/hr)</th><th></th></tr></thead><tbody id="hprLadderBody">' + ladderRows + '</tbody></table>' +
              '<button type="button" class="btn btn-ghost btn-sm hpr-add-row"><i class="fas fa-plus"></i> Add Row</button>' +
            '</section>' +
            '<section class="ha-rules-section hpr-formula-section">' +
              '<h4 class="ha-rules-section-title">Formula</h4>' +
              '<div class="hpr-formula-box" id="hprFormulaBox">' + formulaHtml + '</div>' +
            '</section>' +
            '<div class="ha-rules-actions">' +
              '<button type="button" class="btn btn-primary hpr-save"><i class="fas fa-save"></i> Save</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function render(routeId) {
    var app = document.getElementById('app');
    if (!app) return;
    if (routeId === 'dashboard') {
      app.innerHTML = '<h1 class="page-title">' + t('dashboard.title') + '</h1><p style="color:var(--text-subtext);font-size:14px;line-height:1.6">' + t('dashboard.desc') + '</p>';
      setSidebarActive('');
      return;
    }
    if (routeId === 'creators') app.innerHTML = renderCreators();
    else if (routeId === 'discover') app.innerHTML = renderDiscover();
    else if (routeId === 'outreach') app.innerHTML = renderOutreach();
    else if (routeId === 'analytics') app.innerHTML = renderAnalytics();
    else if (routeId === 'settlement') {
      tcPanel = 'ha_settlement';
      app.innerHTML = renderAnalytics();
      setSidebarActive('settlement');
      bindPageEvents('analytics');
      return;
    }
    else if (routeId === 'benefits-store') app.innerHTML = renderBenefitsStore();
    else if (routeId === 'hourly-pay-rules') {
      setSidebarActive(routeId);
      app.innerHTML = '<div class="hpr-loading"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
      getHourlyPayRules().then(function (data) {
        hourlyPayRulesMode = data.mode || 'session';
        hourlyPayRulesLadder = (data.ladder || []).length ? data.ladder : [{ min_gmv: 0, max_gmv: 300, hourly_rate: 50 }, { min_gmv: 300, max_gmv: 1500, hourly_rate: 75 }, { min_gmv: 1500, max_gmv: null, hourly_rate: 100 }];
        app.innerHTML = renderHourlyPayRulesPage();
        bindPageEvents(routeId);
      }).catch(function () {
        app.innerHTML = renderHourlyPayRulesPage();
        bindPageEvents(routeId);
      });
      return;
    }
    else app.innerHTML = '<h1 class="page-title">Affiliate</h1><p>Choose Find Creators, Outreach, or Creator CRM from the sidebar.</p>';

    setSidebarActive(routeId);
    bindPageEvents(routeId);
  }

  function bindPageEvents(routeId) {
    if (routeId === 'creators') {
      bindCrmEvents();
    }
    if (routeId === 'hourly-pay-rules') {
      document.querySelectorAll('.hpr-mode-tabs .or-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
          var mode = tab.getAttribute('data-mode');
          if (mode === hourlyPayRulesMode) return;
          hourlyPayRulesMode = mode;
          document.querySelectorAll('.hpr-mode-tabs .or-tab').forEach(function (t) { t.classList.toggle('or-tab--active', t.getAttribute('data-mode') === mode); });
          var formulaBox = document.getElementById('hprFormulaBox');
          if (formulaBox) formulaBox.innerHTML = mode === 'session' ? 'avg_gmv_per_hour = session_gmv / session_hours<br>hourly_pay = hourly_rate × session_hours' : 'cycle_avg_gmv_per_hour = total_gmv / total_hours<br>hourly_pay = cycle_hourly_rate × session_hours';
        });
      });
      var addBtn = document.querySelector('.hpr-add-row');
      if (addBtn) addBtn.addEventListener('click', function () {
        var last = hourlyPayRulesLadder[hourlyPayRulesLadder.length - 1];
        var minStart = last ? (last.max_gmv != null ? last.max_gmv : last.min_gmv + 500) : 0;
        hourlyPayRulesLadder.push({ min_gmv: minStart, max_gmv: null, hourly_rate: 100 });
        var app = document.getElementById('app');
        if (app) app.innerHTML = renderHourlyPayRulesPage();
        bindPageEvents(routeId);
      });
      document.querySelectorAll('.hpr-row-remove').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var idx = parseInt(btn.getAttribute('data-idx'), 10);
          if (!isNaN(idx) && hourlyPayRulesLadder.length > 1) {
            hourlyPayRulesLadder.splice(idx, 1);
            var app = document.getElementById('app');
            if (app) app.innerHTML = renderHourlyPayRulesPage();
            bindPageEvents(routeId);
          }
        });
      });
      var ladderBody = document.getElementById('hprLadderBody');
      if (ladderBody) {
        ladderBody.addEventListener('change', function (e) {
          var row = e.target.closest('.hpr-ladder-row');
          if (!row) return;
          var idx = parseInt(row.getAttribute('data-idx'), 10);
          if (isNaN(idx) || !hourlyPayRulesLadder[idx]) return;
          var minEl = row.querySelector('.hpr-min-gmv');
          var maxEl = row.querySelector('.hpr-max-gmv');
          var rateEl = row.querySelector('.hpr-hourly-rate');
          hourlyPayRulesLadder[idx].min_gmv = parseFloat(minEl && minEl.value) || 0;
          var maxVal = maxEl && maxEl.value.trim();
          hourlyPayRulesLadder[idx].max_gmv = maxVal === '' ? null : parseFloat(maxVal) || null;
          hourlyPayRulesLadder[idx].hourly_rate = parseFloat(rateEl && rateEl.value) || 0;
        });
      }
      var saveBtn = document.querySelector('.hpr-save');
      if (saveBtn) saveBtn.addEventListener('click', function () {
        ladderBody = document.getElementById('hprLadderBody');
        if (ladderBody) {
          ladderBody.querySelectorAll('.hpr-ladder-row').forEach(function (row) {
            var idx = parseInt(row.getAttribute('data-idx'), 10);
            if (isNaN(idx) || !hourlyPayRulesLadder[idx]) return;
            var minEl = row.querySelector('.hpr-min-gmv');
            var maxEl = row.querySelector('.hpr-max-gmv');
            var rateEl = row.querySelector('.hpr-hourly-rate');
            hourlyPayRulesLadder[idx].min_gmv = parseFloat(minEl && minEl.value) || 0;
            var maxVal = maxEl && maxEl.value.trim();
            hourlyPayRulesLadder[idx].max_gmv = maxVal === '' ? null : parseFloat(maxVal) || null;
            hourlyPayRulesLadder[idx].hourly_rate = parseFloat(rateEl && rateEl.value) || 0;
          });
        }
        var data = { mode: hourlyPayRulesMode, ladder: hourlyPayRulesLadder };
        saveHourlyPayRules(data).then(function () { showToast('Rules saved'); }).catch(function () { showToast('Save failed', 'warn'); });
      });
      return;
    }
    if (routeId === 'discover') {
      // Mode tab switching
      document.querySelectorAll('.fc-mode-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
          var mode = tab.getAttribute('data-mode');
          if (mode === discoverMode) return;
          discoverMode = mode;
          document.querySelectorAll('.fc-mode-tab').forEach(function (t) { t.classList.toggle('fc-mode-tab--active', t.getAttribute('data-mode') === mode); });
          var body = document.getElementById('discoverModeBody');
          if (body) body.innerHTML = mode === 'ai' ? renderDiscoverAI() : renderDiscoverFilter();
          var rs = document.getElementById('discoverResultsSection');
          if (rs) rs.classList.add('fc-results-section--hidden');
          bindDiscoverModeEvents();
        });
      });
      bindDiscoverModeEvents();
      var btnGoTenant = document.getElementById('btnGoTenant');
      if (btnGoTenant) {
        btnGoTenant.addEventListener('click', function () {
          tcPanel = 'tenant_tts';
          window.location.hash = '#/affiliate/analytics';
        });
      }
    }
    if (routeId === 'outreach') {
      document.querySelectorAll('.or-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
          activeOutreachTab = tab.getAttribute('data-tab');
          document.querySelectorAll('.or-tab').forEach(function (t) { t.classList.toggle('or-tab--active', t.getAttribute('data-tab') === activeOutreachTab); });
          var body = document.getElementById('outreachTabBody');
          if (body) body.innerHTML = renderOutreachTabContent(activeOutreachTab);
          bindOutreachTabEvents(activeOutreachTab);
        });
      });
      bindOutreachTabEvents(activeOutreachTab);
    }
    if (routeId === 'analytics') {
      document.querySelectorAll('.tc-nav-item[data-tc-panel]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          e.preventDefault();
          var panel = a.getAttribute('data-tc-panel');
          if (panel === tcPanel) return;
          tcPanel = panel;
          document.querySelectorAll('.tc-nav-item[data-tc-panel]').forEach(function (el) {
            el.classList.toggle('tc-nav-item--active', el.getAttribute('data-tc-panel') === tcPanel);
          });
          var main = document.getElementById('tcMain');
          if (main) main.innerHTML = renderTenantCenterMain(tcPanel);
          bindTenantCenterPanelEvents(tcPanel);
        });
      });
      bindTenantCenterPanelEvents(tcPanel);
    }
  }

  function addDiscoverToLeads(items) {
    var added = 0;
    var skipped = 0;
    var existingHandles = creators.map(function (c) { return c.tiktokId; });
    var addedIds = [];

    items.forEach(function (item) {
      if (existingHandles.indexOf(item.handle) !== -1) {
        skipped++;
        return;
      }
      var newId = 'dc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
      creators.push({
        id: newId,
        source: 'Find Creators',
        owner: currentUser.id,
        enrichStatus: 'enriched',
        tiktokId: item.handle,
        name: item.name,
        fans: item.followers,
        category: item.category,
        email: item.hasEmail ? (item.name.toLowerCase().replace(/\s+/g, '') + '@example.com') : '',
        isPartner: false,
        stage: 'Lead',
        tags: item.category ? [item.category] : [],
        lastReach: '',
        reachCount: 0,
        samples: []
      });
      existingHandles.push(item.handle);
      addedIds.push(item.id);
      added++;
    });

    if (added > 0 && skipped > 0) {
      showToast(t('discover.toast.partial').replace('{0}', added).replace('{1}', skipped), 'warn');
    } else if (added > 0) {
      showToast(t('discover.toast.success').replace('{0}', added), 'success');
    } else {
      showToast(t('discover.toast.duplicate'), 'warn');
    }

    return addedIds;
  }

  function markLeadBtnAdded(btn) {
    btn.disabled = true;
    btn.classList.add('btn-added');
    btn.classList.remove('btn-primary');
    btn.innerHTML = '<i class="fas fa-check"></i> ' + t('discover.added');
  }

  function showDiscoverResults() {
    var results = document.getElementById('discoverResults');
    var resultsSection = document.getElementById('discoverResultsSection');
    var meta = document.getElementById('discoverMeta');
    var batchBtn = document.getElementById('discoverBatchAdd');

    var mockList = [
      { id: 'd1', name: 'GlowWithHolly', handle: '@glowwithholly', followers: '350k', category: 'Beauty', country: 'US', avgViews: '45.2k', engagement: '4.2%', gmv: '$12.8k', hasEmail: true,
        ecom: { unitsSold: '2,340', gpm: '8.5%', avgRevPerBuyer: '$18.50', videoGmv: '$8.2k', liveGmv: '$4.6k' },
        video: { medViews: '38k', medLikes: '1.8k', medComments: '142', medShares: '89', publishCnt30d: 12, ecEngagement: '5.1%' },
        live: { streamCnt30d: 8, medViews: '2.1k', medLikes: '340', medComments: '95', engagement: '6.8%' },
        social: { instagram: '@glowwithholly', youtube: 'GlowHolly', twitter: '', linkedin: '', facebook: '' },
        outreach: { lastReachedAt: '2024-02-20', reachCount: 2, successful: 1 }
      },
      { id: 'd2', name: 'BeautyByZara', handle: '@beautybyzara', followers: '180k', category: 'Beauty', country: 'ID', avgViews: '22.1k', engagement: '5.8%', gmv: '$6.3k', hasEmail: true,
        ecom: { unitsSold: '980', gpm: '6.2%', avgRevPerBuyer: '$12.30', videoGmv: '$4.1k', liveGmv: '$2.2k' },
        video: { medViews: '19k', medLikes: '1.1k', medComments: '87', medShares: '45', publishCnt30d: 18, ecEngagement: '6.4%' },
        live: { streamCnt30d: 3, medViews: '1.4k', medLikes: '210', medComments: '62', engagement: '7.2%' },
        social: { instagram: '@beautybyzara', youtube: '', twitter: '@zarabeauty', linkedin: '', facebook: 'zarabeautyofficial' },
        outreach: { lastReachedAt: '', reachCount: 0, successful: 0 }
      },
      { id: 'd3', name: 'StyleQueenMia', handle: '@stylequeenmia', followers: '520k', category: 'Fashion', country: 'US', avgViews: '68.5k', engagement: '3.1%', gmv: '$28.4k', hasEmail: false,
        ecom: { unitsSold: '5,120', gpm: '11.3%', avgRevPerBuyer: '$24.80', videoGmv: '$18.9k', liveGmv: '$9.5k' },
        video: { medViews: '55k', medLikes: '2.4k', medComments: '198', medShares: '156', publishCnt30d: 8, ecEngagement: '3.8%' },
        live: { streamCnt30d: 12, medViews: '4.8k', medLikes: '680', medComments: '145', engagement: '5.4%' },
        social: { instagram: '@stylequeenmia', youtube: 'MiaStyleQueen', twitter: '@miastyle', linkedin: '', facebook: '' },
        outreach: { lastReachedAt: '2024-03-01', reachCount: 1, successful: 0 }
      }
    ];

    function socialIcons(s) {
      var icons = [];
      if (s.instagram) icons.push('<a class="fc-social-icon" title="Instagram: ' + s.instagram + '"><i class="fab fa-instagram"></i></a>');
      if (s.youtube) icons.push('<a class="fc-social-icon" title="YouTube: ' + s.youtube + '"><i class="fab fa-youtube"></i></a>');
      if (s.twitter) icons.push('<a class="fc-social-icon" title="Twitter: ' + s.twitter + '"><i class="fab fa-twitter"></i></a>');
      if (s.facebook) icons.push('<a class="fc-social-icon" title="Facebook: ' + s.facebook + '"><i class="fab fa-facebook"></i></a>');
      if (s.linkedin) icons.push('<a class="fc-social-icon" title="LinkedIn: ' + s.linkedin + '"><i class="fab fa-linkedin"></i></a>');
      return icons.length ? icons.join('') : '<span class="fc-detail-na">-</span>';
    }

    function detailRow(cr) {
      var outreachStatus = cr.outreach.reachCount > 0
        ? 'Last: ' + cr.outreach.lastReachedAt + ' &middot; ' + cr.outreach.reachCount + 'x &middot; ' + cr.outreach.successful + ' successful'
        : 'Never contacted';

      return '<tr class="fc-detail-row fc-detail-row--hidden" data-detail="' + cr.id + '"><td colspan="9"><div class="fc-detail">' +
        '<div class="fc-detail-group">' +
          '<div class="fc-detail-label">E-Commerce</div>' +
          '<div class="fc-detail-grid">' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Units Sold</span><span class="fc-detail-val">' + cr.ecom.unitsSold + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">GPM</span><span class="fc-detail-val">' + cr.ecom.gpm + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Avg Rev/Buyer</span><span class="fc-detail-val">' + cr.ecom.avgRevPerBuyer + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Video GMV</span><span class="fc-detail-val">' + cr.ecom.videoGmv + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Live GMV</span><span class="fc-detail-val">' + cr.ecom.liveGmv + '</span></div>' +
          '</div>' +
        '</div>' +
        '<div class="fc-detail-group">' +
          '<div class="fc-detail-label">Video</div>' +
          '<div class="fc-detail-grid">' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Med Views</span><span class="fc-detail-val">' + cr.video.medViews + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Med Likes</span><span class="fc-detail-val">' + cr.video.medLikes + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Med Comments</span><span class="fc-detail-val">' + cr.video.medComments + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Med Shares</span><span class="fc-detail-val">' + cr.video.medShares + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Published (30d)</span><span class="fc-detail-val">' + cr.video.publishCnt30d + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">E-Com Engagement</span><span class="fc-detail-val">' + cr.video.ecEngagement + '</span></div>' +
          '</div>' +
        '</div>' +
        '<div class="fc-detail-group">' +
          '<div class="fc-detail-label">Live</div>' +
          '<div class="fc-detail-grid">' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Streams (30d)</span><span class="fc-detail-val">' + cr.live.streamCnt30d + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Med Views</span><span class="fc-detail-val">' + cr.live.medViews + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Med Likes</span><span class="fc-detail-val">' + cr.live.medLikes + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Med Comments</span><span class="fc-detail-val">' + cr.live.medComments + '</span></div>' +
            '<div class="fc-detail-item"><span class="fc-detail-key">Engagement</span><span class="fc-detail-val">' + cr.live.engagement + '</span></div>' +
          '</div>' +
        '</div>' +
        '<div class="fc-detail-group">' +
          '<div class="fc-detail-label">Social</div>' +
          '<div class="fc-detail-socials">' + socialIcons(cr.social) + '</div>' +
        '</div>' +
        '<div class="fc-detail-group">' +
          '<div class="fc-detail-label">Outreach</div>' +
          '<div class="fc-detail-val">' + outreachStatus + '</div>' +
        '</div>' +
      '</div></td></tr>';
    }

    var tableRows = mockList.map(function (cr) {
      var emailIcon = cr.hasEmail
        ? '<i class="fas fa-check-circle fc-has-email" title="Email available"></i>'
        : '<i class="fas fa-minus-circle fc-no-email" title="No email"></i>';
      return '<tr class="fc-main-row" data-id="' + cr.id + '">' +
        '<td><input type="checkbox" class="discover-row-cb" value="' + cr.id + '"></td>' +
        '<td><span class="avatar-cell"></span></td>' +
        '<td class="fc-creator-cell"><strong>' + cr.name + '</strong><br><span class="fc-handle">' + cr.handle + '</span></td>' +
        '<td>' + cr.followers + '</td>' +
        '<td>' + cr.category + '</td>' +
        '<td>' + cr.country + '</td>' +
        '<td>' + cr.avgViews + '</td>' +
        '<td>' + cr.engagement + '</td>' +
        '<td>' + cr.gmv + '</td>' +
        '<td class="fc-email-cell">' + emailIcon + '</td>' +
        '<td class="fc-col-actions"><button class="btn btn-primary btn-sm btn-add-lead" data-id="' + cr.id + '">' + t('discover.add_single') + '</button></td>' +
      '</tr>' + detailRow(cr);
    }).join('');

    if (meta) meta.textContent = mockList.length + ' ' + t('discover.found');
    if (resultsSection) resultsSection.classList.remove('fc-results-section--hidden');
    if (results) results.innerHTML =
      '<div class="table-wrap discover-table-wrap">' +
      '<table class="fc-results-table"><thead><tr>' +
        '<th width="40"><input type="checkbox" id="discoverSelectAll" title="Select all"></th>' +
        '<th width="48"></th>' +
        '<th>Creator</th>' +
        '<th>Followers</th>' +
        '<th>Category</th>' +
        '<th>Country</th>' +
        '<th>Avg Views</th>' +
        '<th>Engage.</th>' +
        '<th>GMV</th>' +
        '<th width="50">Email</th>' +
        '<th width="120" class="fc-col-actions">Actions</th>' +
      '</tr></thead><tbody>' + tableRows + '</tbody></table></div>';

    // Expandable detail rows
    document.querySelectorAll('.fc-main-row').forEach(function (row) {
      row.addEventListener('click', function (e) {
        if (e.target.closest('input, button, a')) return;
        var id = row.getAttribute('data-id');
        var detail = document.querySelector('.fc-detail-row[data-detail="' + id + '"]');
        if (detail) {
          var isOpen = !detail.classList.contains('fc-detail-row--hidden');
          document.querySelectorAll('.fc-detail-row').forEach(function (d) { d.classList.add('fc-detail-row--hidden'); });
          document.querySelectorAll('.fc-main-row').forEach(function (r) { r.classList.remove('fc-main-row--expanded'); });
          if (!isOpen) {
            detail.classList.remove('fc-detail-row--hidden');
            row.classList.add('fc-main-row--expanded');
          }
        }
      });
    });

    function findMock(id) {
      for (var i = 0; i < mockList.length; i++) { if (mockList[i].id === id) return mockList[i]; }
      return null;
    }

    document.querySelectorAll('.btn-add-lead').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-id');
        var item = findMock(id);
        if (!item) return;
        var addedIds = addDiscoverToLeads([item]);
        if (addedIds.length > 0) {
          markLeadBtnAdded(b);
        }
      });
    });

    var selectAll = document.getElementById('discoverSelectAll');
    function syncSelectionUI() {
      var checked = document.querySelectorAll('.discover-row-cb:checked').length;
      if (meta) meta.textContent = mockList.length + ' ' + t('discover.found') + (checked ? ' \u2022 ' + checked + ' selected' : '');
      if (batchBtn) batchBtn.classList.toggle('btn--disabled-look', checked === 0);
    }
    if (selectAll) selectAll.addEventListener('change', function () {
      document.querySelectorAll('.discover-row-cb').forEach(function (cb) { cb.checked = selectAll.checked; });
      syncSelectionUI();
    });
    document.querySelectorAll('.discover-row-cb').forEach(function (cb) { cb.addEventListener('change', syncSelectionUI); });

    if (batchBtn) batchBtn.onclick = function () {
      var checkedBoxes = document.querySelectorAll('.discover-row-cb:checked');
      if (checkedBoxes.length === 0) { showToast(t('discover.toast.no_selection'), 'warn'); return; }
      var items = [];
      checkedBoxes.forEach(function (cb) {
        var item = findMock(cb.value);
        if (item) items.push(item);
      });
      var addedIds = addDiscoverToLeads(items);
      addedIds.forEach(function (id) {
        var btn = document.querySelector('.btn-add-lead[data-id="' + id + '"]');
        if (btn) markLeadBtnAdded(btn);
      });
      checkedBoxes.forEach(function (cb) { cb.checked = false; });
      if (selectAll) selectAll.checked = false;
      syncSelectionUI();
    };
    syncSelectionUI();

    if (resultsSection) {
      requestAnimationFrame(function () {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  function bindDiscoverModeEvents() {
    if (discoverMode === 'ai') {
      var input = document.getElementById('discoverInput');
      var send = document.getElementById('discoverSend');
      var messages = document.getElementById('discoverMessages');
      function sendMsg() {
        var text = (input && input.value) ? input.value.trim() : '';
        if (!text) return;
        messages.innerHTML += '<div class="discover-msg user">' + text + '</div>';
        input.value = '';
        syncSendBtn();
        messages.scrollTop = messages.scrollHeight;
        var meta = document.getElementById('discoverMeta');
        if (meta) meta.textContent = 'Searching...';
        setTimeout(function () {
          messages.innerHTML += '<div class="discover-msg bot">Here are matching creators based on your description:</div>';
          messages.scrollTop = messages.scrollHeight;
          showDiscoverResults();
        }, 800);
      }
      function syncSendBtn() {
        if (send) send.disabled = !(input && input.value.trim());
      }
      if (send) send.addEventListener('click', sendMsg);
      if (input) {
        input.addEventListener('input', syncSendBtn);
        input.addEventListener('keydown', function (e) { if (e.key === 'Enter') sendMsg(); });
      }
    }
    if (discoverMode === 'filter') {
      var filterSearch = document.getElementById('filterSearch');
      var filterReset = document.getElementById('filterReset');
      if (filterSearch) filterSearch.addEventListener('click', function () {
        discoverAppliedFilters = getDiscoverAppliedFilters();
        showDiscoverResults();
        renderDiscoverActiveTags();
      });
      if (filterReset) filterReset.addEventListener('click', function () {
        document.querySelectorAll('.fc-filter-panel select').forEach(function (s) { s.selectedIndex = 0; });
        document.querySelectorAll('.fc-filter-panel input[type="text"]').forEach(function (i) { i.value = ''; });
        document.querySelectorAll('.fc-filter-panel input[type="checkbox"]').forEach(function (cb) { cb.checked = false; });
        discoverAppliedFilters = [];
        renderDiscoverActiveTags();
        var rs = document.getElementById('discoverResultsSection');
        if (rs) rs.classList.add('fc-results-section--hidden');
      });
      document.querySelectorAll('.fc-filter-clear').forEach(function (btn) {
        btn.addEventListener('click', function () {
          document.querySelectorAll('.fc-filter-panel select').forEach(function (s) { s.selectedIndex = 0; });
          document.querySelectorAll('.fc-filter-panel input[type="text"]').forEach(function (i) { i.value = ''; });
          document.querySelectorAll('.fc-filter-panel input[type="checkbox"]').forEach(function (cb) { cb.checked = false; });
          discoverAppliedFilters = [];
          renderDiscoverActiveTags();
          var rs = document.getElementById('discoverResultsSection');
          if (rs) rs.classList.add('fc-results-section--hidden');
        });
      });
      document.querySelectorAll('.fc-filter-dim').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var dim = btn.getAttribute('data-dim');
          if (dim && dim !== filterDimension) {
            filterDimension = dim;
            var body = document.getElementById('discoverModeBody');
            if (body) body.innerHTML = renderDiscoverFilter();
            bindDiscoverModeEvents();
          }
        });
      });
      bindBrandCollabsDropdown();
    }
  }

  function getDiscoverAppliedFilters() {
    var list = [];
    function add(key, label) { if (label) list.push({ key: key, label: label }); }
    function selVal(id) { var el = document.getElementById(id); return el && el.value ? el.value.trim() : ''; }
    function selText(id) { var el = document.getElementById(id); if (!el || !el.value) return ''; var opt = el.options[el.selectedIndex]; return opt ? opt.text : el.value; }
    function rangeVal(idMin, idMax) { var min = selVal(idMin), max = selVal(idMax); if (!min && !max) return ''; return (min || '—') + ' – ' + (max || '—'); }
    function cb(id) { var el = document.getElementById(id); return el && el.checked; }

    var category = selText('ffCategory'); if (category) add('category', t('discover.filter.product_category') + ': ' + category);
    var commission = selText('ffCommission'); if (commission) add('commission', t('discover.filter.avg_commission') + ': ' + commission);
    var contentType = selText('ffContentType'); if (contentType) add('contentType', t('discover.filter.content_type') + ': ' + contentType);
    var agency = selText('ffAgency'); if (agency) add('agency', t('discover.filter.creator_agency') + ': ' + agency);
    var categoryPro = selText('ffCategoryPro'); if (categoryPro) add('categoryPro', t('discover.filter.category_pro') + ': ' + categoryPro);
    if (cb('ffFastGrowing')) add('fastGrowing', t('discover.filter.fast_growing'));
    if (cb('ffLiveCreators')) add('liveCreators', t('discover.filter.live_creators'));

    var followerAge = selText('ffFollowerAge'); if (followerAge) add('followerAge', t('discover.filter.follower_age') + ': ' + followerAge);
    var followerRange = rangeVal('ffFollowerMin', 'ffFollowerMax'); if (followerRange) add('followerCount', t('discover.filter.follower_count') + ': ' + followerRange);
    var gender = selText('ffGender'); if (gender) add('gender', t('discover.filter.follower_gender') + ': ' + gender);

    var gmvRange = rangeVal('ffGmvMin', 'ffGmvMax'); if (gmvRange) add('gmv', t('discover.filter.gmv') + ': ' + gmvRange);
    var soldRange = rangeVal('ffSoldMin', 'ffSoldMax'); if (soldRange) add('itemsSold', t('discover.filter.items_sold') + ': ' + soldRange);
    var vidViewRange = rangeVal('ffVidViewMin', 'ffVidViewMax'); if (vidViewRange) add('avgViewsVideo', t('discover.filter.avg_views_video') + ': ' + vidViewRange);
    var liveViewRange = rangeVal('ffLiveViewMin', 'ffLiveViewMax'); if (liveViewRange) add('avgViewersLive', t('discover.filter.avg_viewers_live') + ': ' + liveViewRange);
    var engRange = rangeVal('ffVidEngMin', 'ffVidEngMax'); if (engRange) add('engagementRate', t('discover.filter.engagement_rate') + ': ' + engRange);
    var brand = selVal('ffBrandCollabs'); if (brand) add('brandCollabs', t('discover.filter.brand_collabs') + ': ' + brand);

    return list;
  }

  function clearDiscoverFilterByKey(key) {
    var pairs = {
      category: ['ffCategory'],
      commission: ['ffCommission'],
      contentType: ['ffContentType'],
      agency: ['ffAgency'],
      categoryPro: ['ffCategoryPro'],
      fastGrowing: ['ffFastGrowing'],
      liveCreators: ['ffLiveCreators'],
      followerAge: ['ffFollowerAge'],
      followerCount: ['ffFollowerMin', 'ffFollowerMax'],
      gender: ['ffGender'],
      gmv: ['ffGmvMin', 'ffGmvMax'],
      itemsSold: ['ffSoldMin', 'ffSoldMax'],
      avgViewsVideo: ['ffVidViewMin', 'ffVidViewMax'],
      avgViewersLive: ['ffLiveViewMin', 'ffLiveViewMax'],
      engagementRate: ['ffVidEngMin', 'ffVidEngMax'],
      brandCollabs: ['ffBrandCollabs']
    };
    var ids = pairs[key];
    if (!ids) return;
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      if (el.type === 'checkbox') el.checked = false;
      else if (el.tagName === 'SELECT') el.selectedIndex = 0;
      else el.value = '';
    });
  }

  function renderDiscoverActiveTags() {
    var container = document.getElementById('discoverActiveTags');
    if (!container) return;
    if (!discoverAppliedFilters.length) {
      container.innerHTML = '';
      container.style.display = 'none';
      var badge = document.getElementById('discoverFilterBadge');
      if (badge) { badge.textContent = ''; badge.style.display = 'none'; }
      return;
    }
    container.style.display = 'flex';
    container.innerHTML = discoverAppliedFilters.map(function (f) {
      return '<span class="crf-active-tag">' + f.label + '<button type="button" class="crf-active-remove" data-clear="' + f.key + '">&times;</button></span>';
    }).join('');
    var badge = document.getElementById('discoverFilterBadge');
    if (badge) { badge.textContent = discoverAppliedFilters.length; badge.style.display = ''; }
    container.querySelectorAll('.crf-active-remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-clear');
        clearDiscoverFilterByKey(key);
        discoverAppliedFilters = getDiscoverAppliedFilters();
        renderDiscoverActiveTags();
        showDiscoverResults();
      });
    });
  }

  function bindBrandCollabsDropdown() {
    var wrap = document.getElementById('fcBrandWrap');
    var input = document.getElementById('ffBrandCollabs');
    var dropdown = document.getElementById('fcBrandDropdown');
    if (!wrap || !input || !dropdown) return;

    function renderOptions(q) {
      var filter = (q || '').toLowerCase().trim();
      var items = filter
        ? BRAND_LIST.filter(function (b) { return b.toLowerCase().indexOf(filter) !== -1; })
        : BRAND_LIST.slice();
      var html = '<div class="fc-brand-option fc-brand-option--any" data-value="">' + t('common.any') + '</div>';
      if (items.length) {
        html += items.map(function (b) {
        var esc = String(b).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return '<div class="fc-brand-option" data-value="' + esc + '">' + b + '</div>';
      }).join('');
      } else {
        html += '<div class="fc-brand-no-result">' + (filter ? t('discover.filter.brand_no_match') : '') + '</div>';
      }
      dropdown.innerHTML = html;
      dropdown.classList.remove('fc-brand-dropdown--hidden');
    }

    function closeDropdown() {
      dropdown.classList.add('fc-brand-dropdown--hidden');
    }

    function selectValue(val) {
      input.value = val || '';
      input.placeholder = t('discover.filter.brand_search_ph');
      closeDropdown();
    }

    input.addEventListener('focus', function () { renderOptions(input.value); });
    input.addEventListener('input', function () { renderOptions(input.value); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeDropdown(); input.blur(); }
    });

    dropdown.addEventListener('click', function (e) {
      var opt = e.target.closest('.fc-brand-option');
      if (!opt) return;
      var val = opt.getAttribute('data-value');
      selectValue(val);
    });

    document.addEventListener('click', function (e) {
      if (wrap && !wrap.contains(e.target)) closeDropdown();
    });
  }

  function bindOutreachTabEvents(tab) {
    if (tab === 'tasks') {
      var modal = document.getElementById('newTaskModal');
      var btnNew = document.getElementById('btnNewOutreach');
      var closeModal = document.getElementById('closeNewTaskModal');
      var cancelTask = document.getElementById('cancelNewTask');
      var confirmTask = document.getElementById('confirmNewTask');
      function toggleModal(show) { if (modal) modal.classList.toggle('active', show); }
      if (btnNew) btnNew.addEventListener('click', function () { toggleModal(true); });
      if (closeModal) closeModal.addEventListener('click', function () { toggleModal(false); });
      if (cancelTask) cancelTask.addEventListener('click', function () { toggleModal(false); });
      if (modal) modal.addEventListener('click', function (e) { if (e.target === modal) toggleModal(false); });

      // --- Multi-select tag dropdown ---
      var msWrap = document.getElementById('msWrap');
      var msInput = document.getElementById('msInput');
      var msDropdown = document.getElementById('msDropdown');
      var msSelectedEl = document.getElementById('msSelected');
      var audTagsEl = document.getElementById('audTags');
      var allTagsStr = audTagsEl ? audTagsEl.getAttribute('data-all-tags') : '';
      var allTagsList = allTagsStr ? allTagsStr.split(',') : [];
      var selectedTags = [];

      function renderDropdown(filter) {
        var q = (filter || '').toLowerCase();
        var items = allTagsList.filter(function (t) {
          return selectedTags.indexOf(t) === -1 && (!q || t.toLowerCase().indexOf(q) !== -1);
        });
        if (!items.length) {
          msDropdown.innerHTML = '<div class="ms-no-result">' + (q ? 'No matching tags' : 'All tags selected') + '</div>';
        } else {
          msDropdown.innerHTML = items.map(function (t) {
            return '<div class="ms-option" data-value="' + t + '">' + t + '</div>';
          }).join('');
        }
        msDropdown.classList.remove('ms-dropdown--hidden');
      }

      function checkConflicts() {
        var banner = document.getElementById('conflictBanner');
        if (!banner || !selectedTags.length) {
          if (banner) banner.classList.add('or-conflict--hidden');
          return;
        }
        var activeTasks = outreachTasks.filter(function (t) {
          return t.status === 'pending' || t.status === 'sending';
        });
        var conflicts = [];
        activeTasks.forEach(function (t) {
          if (!t.audienceTags) return;
          var overlap = t.audienceTags.filter(function (tag) { return selectedTags.indexOf(tag) !== -1; });
          if (overlap.length) {
            conflicts.push({ task: t.name, tags: overlap, assignee: t.assignee });
          }
        });
        if (conflicts.length) {
          var msgs = conflicts.map(function (c) {
            var who = '';
            for (var i = 0; i < teamMembers.length; i++) { if (teamMembers[i].id === c.assignee) { who = teamMembers[i].name; break; } }
            return '<strong>"' + c.task + '"</strong> (by ' + who + ') already targets <strong>' + c.tags.join(', ') + '</strong>';
          });
          banner.querySelector('.or-conflict-text').innerHTML =
            '<strong>Audience overlap detected</strong><ul>' + msgs.map(function (m) { return '<li>' + m + '</li>'; }).join('') + '</ul>' +
            '<span class="or-conflict-hint">Creators in overlapping tags may receive duplicate emails. Consider adjusting your audience.</span>';
          banner.classList.remove('or-conflict--hidden');
        } else {
          banner.classList.add('or-conflict--hidden');
        }
      }

      function renderSelected() {
        msSelectedEl.innerHTML = selectedTags.map(function (t) {
          return '<span class="ms-tag">' + t + '<button type="button" class="ms-tag-remove" data-value="' + t + '">&times;</button></span>';
        }).join('');
        msSelectedEl.querySelectorAll('.ms-tag-remove').forEach(function (btn) {
          btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var val = btn.getAttribute('data-value');
            selectedTags = selectedTags.filter(function (s) { return s !== val; });
            renderSelected();
            checkConflicts();
            if (!msDropdown.classList.contains('ms-dropdown--hidden')) renderDropdown(msInput.value);
          });
        });
        checkConflicts();
      }

      if (msInput) {
        msInput.addEventListener('focus', function () { renderDropdown(msInput.value); });
        msInput.addEventListener('input', function () { renderDropdown(msInput.value); });
      }
      if (msDropdown) {
        msDropdown.addEventListener('click', function (e) {
          var opt = e.target.closest('.ms-option');
          if (!opt) return;
          var val = opt.getAttribute('data-value');
          if (selectedTags.indexOf(val) === -1) selectedTags.push(val);
          msInput.value = '';
          renderSelected();
          renderDropdown('');
          msInput.focus();
        });
      }

      document.addEventListener('click', function closeMs(e) {
        if (msWrap && !msWrap.contains(e.target)) {
          if (msDropdown) msDropdown.classList.add('ms-dropdown--hidden');
        }
      });

      // --- Audience tab switching (mutual exclusion) ---
      var audTabs = document.querySelectorAll('.or-aud-tab');
      var audTagsPanel = document.getElementById('audTags');
      var audUpload = document.getElementById('audUpload');
      var uploadZone = document.getElementById('uploadZone');
      var fileInput = document.getElementById('newTaskFile');

      audTabs.forEach(function (t) {
        t.addEventListener('click', function () {
          var mode = t.getAttribute('data-aud');
          audTabs.forEach(function (b) { b.classList.toggle('or-aud-tab--active', b === t); });
          if (audTagsPanel) audTagsPanel.classList.toggle('or-aud-panel--hidden', mode !== 'tags');
          if (audUpload) audUpload.classList.toggle('or-aud-panel--hidden', mode !== 'upload');
          if (mode === 'tags' && fileInput) {
            fileInput.value = '';
            if (uploadZone) {
              uploadZone.classList.remove('or-upload-zone--has-file');
              var p = uploadZone.querySelector('p');
              if (p) p.textContent = 'Drag & drop a .csv or .xlsx file here, or click to browse';
            }
          }
          if (mode === 'upload') {
            selectedTags = [];
            renderSelected();
          }
        });
      });

      // Upload zone
      if (uploadZone && fileInput) {
        uploadZone.addEventListener('click', function (e) {
          if (e.target === fileInput) return;
          fileInput.click();
        });
        fileInput.addEventListener('change', function () {
          if (fileInput.files && fileInput.files.length) {
            uploadZone.querySelector('p').textContent = fileInput.files[0].name;
            uploadZone.classList.add('or-upload-zone--has-file');
          }
        });
      }

      // Sending account verification strong hint + create button enable/disable (UI-only)
      var newTaskSender = document.getElementById('newTaskSender');
      var newTaskSenderHint = document.getElementById('newTaskSenderHint');
      function updateSenderVerifyUI() {
        var senderId = newTaskSender ? newTaskSender.value : '';
        var senderAcc = senderId ? emailAccounts.filter(function (a) { return a.id === senderId; })[0] : null;
        var hintText = '';
        var badgeHtml = '<span class="badge badge-neutral">' + t('common.hint') + '</span>';
        var canCreate = false;

        if (!senderId) {
          hintText = t('outreach.modal.hint_select_sender');
          canCreate = false;
        } else if (!senderAcc || senderAcc.type !== 'sending') {
          hintText = t('outreach.modal.hint_sender_unusable');
          canCreate = false;
        } else if (senderAcc.status === 'Verified') {
          hintText = t('outreach.modal.hint_sender_verified');
          badgeHtml = '<span class="badge badge-success">' + t('outreach.acct.badge_verified') + '</span>';
          canCreate = true;
        } else {
          hintText = t('outreach.modal.hint_sender_pending');
          badgeHtml = '<span class="badge badge-warning">' + t('outreach.acct.badge_pending') + '</span>';
          canCreate = false;
        }

        if (newTaskSenderHint) {
          newTaskSenderHint.innerHTML = badgeHtml + '<span class="or-sender-verify-hint-text">' + hintText + '</span>';
        }
        if (confirmTask) confirmTask.disabled = !canCreate;
      }
      if (newTaskSender) {
        newTaskSender.addEventListener('change', updateSenderVerifyUI);
      }
      // Initialize on modal open
      updateSenderVerifyUI();

      if (confirmTask) confirmTask.addEventListener('click', function () {
        var name = document.getElementById('newTaskName').value.trim();
        var sender = document.getElementById('newTaskSender').value;
        var tpl = document.getElementById('newTaskTemplate').value;
        if (!name) { alert('Please enter a task name.'); return; }
        if (!sender) { alert('Please select a sending account.'); return; }
        if (!tpl) { alert('Please select an email template.'); return; }

        // UI safeguard: only allow creation from verified sending accounts
        var senderAcc = emailAccounts.filter(function (a) { return a.id === sender; })[0];
        if (!senderAcc || senderAcc.type !== 'sending' || senderAcc.status !== 'Verified') {
          alert(t('outreach.modal.alert_select_verified_sender'));
          return;
        }

        var activeAud = document.querySelector('.or-aud-tab--active');
        var audMode = activeAud ? activeAud.getAttribute('data-aud') : 'tags';
        if (audMode === 'tags') {
          if (!selectedTags.length) { alert('Please select at least one creator tag.'); return; }
        } else {
          if (!fileInput || !fileInput.files || !fileInput.files.length) { alert('Please upload a spreadsheet file.'); return; }
        }

        var newTask = {
          id: 't' + (outreachTasks.length + 1),
          name: name,
          createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
          createdBy: currentUser.id,
          assignee: currentUser.id,
          audienceCount: audMode === 'tags' ? Math.floor(Math.random() * 50 + 10) : 0,
          audienceTags: audMode === 'tags' ? selectedTags.slice() : [],
          delivered: 0, opened: 0, clicked: 0, replied: 0,
          status: 'pending'
        };
        outreachTasks.push(newTask);
        toggleModal(false);
        document.getElementById('outreachTabBody').innerHTML = renderOutreachTasks();
        bindOutreachTabEvents('tasks');
      });

      document.querySelectorAll('.outreach-retry').forEach(function (btn) {
        btn.addEventListener('click', function () {
          alert('Retry sending for task: ' + btn.getAttribute('data-id'));
        });
      });
    }
    if (tab === 'accounts') {
      var emailModal = document.getElementById('addEmailModal');
      var btnAddEmail = document.getElementById('btnAddEmail');
      var closeEmailModal = document.getElementById('closeEmailModal');
      var cancelEmail = document.getElementById('cancelEmail');
      var confirmEmail = document.getElementById('confirmEmail');
      var emailReplyFields = document.getElementById('emailReplyFields');
      var currentEmailType = 'sending';

      function toggleEmailModal(show) { if (emailModal) emailModal.classList.toggle('active', show); }

      var sendingVerifyPopupModal = document.getElementById('sendingVerifyPopupModal');
      var closeSendingVerifyPopup = document.getElementById('closeSendingVerifyPopup');
      var okSendingVerifyPopup = document.getElementById('okSendingVerifyPopup');
      function toggleSendingVerifyPopup(show) {
        if (!sendingVerifyPopupModal) return;
        sendingVerifyPopupModal.classList.toggle('active', !!show);
      }
      if (closeSendingVerifyPopup) closeSendingVerifyPopup.addEventListener('click', function () { toggleSendingVerifyPopup(false); });
      if (okSendingVerifyPopup) okSendingVerifyPopup.addEventListener('click', function () { toggleSendingVerifyPopup(false); });
      if (sendingVerifyPopupModal) sendingVerifyPopupModal.addEventListener('click', function (e) { if (e.target === sendingVerifyPopupModal) toggleSendingVerifyPopup(false); });

      if (btnAddEmail) btnAddEmail.addEventListener('click', function () { toggleEmailModal(true); });
      if (closeEmailModal) closeEmailModal.addEventListener('click', function () { toggleEmailModal(false); });
      if (cancelEmail) cancelEmail.addEventListener('click', function () { toggleEmailModal(false); });
      if (emailModal) emailModal.addEventListener('click', function (e) { if (e.target === emailModal) toggleEmailModal(false); });

      document.querySelectorAll('[data-email-type]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          currentEmailType = btn.getAttribute('data-email-type');
          document.querySelectorAll('[data-email-type]').forEach(function (b) { b.classList.toggle('or-aud-tab--active', b === btn); });
          if (emailReplyFields) emailReplyFields.style.display = currentEmailType === 'receiving' ? '' : 'none';
        });
      });

      if (confirmEmail) confirmEmail.addEventListener('click', function () {
        var addr = document.getElementById('emailAddr').value.trim();
        if (!addr) { alert('Please enter an email address.'); return; }
        if (currentEmailType === 'receiving') {
          var appPass = document.getElementById('emailAppPassword').value;
          if (!appPass) { alert('Please enter the app password (third-party client security password).'); return; }
        }
        var newId = 'e' + (emailAccounts.length + 1);
        emailAccounts.push({
          id: newId,
          type: currentEmailType,
          email: addr,
          provider: currentEmailType === 'sending' ? 'SMTP' : 'IMAP',
          status: currentEmailType === 'sending' ? 'Pending' : 'connected'
        });

        document.getElementById('outreachTabBody').innerHTML = renderOutreachTabContent('accounts');
        bindOutreachTabEvents('accounts');

        if (currentEmailType === 'sending') {
          // Open the hint popup to remind users to verify in their email inbox.
          var popup = document.getElementById('sendingVerifyPopupModal');
          if (popup) popup.classList.add('active');
        } else {
          showToast('已添加接收邮箱', 'success');
        }
        toggleEmailModal(false);
      });

      var deleteEmailModal = document.getElementById('deleteEmailConfirmModal');
      var deleteEmailConfirmMsg = document.getElementById('deleteEmailConfirmMsg');
      var deleteEmailIdToRemove = null;
      function toggleDeleteEmailModal(show) { if (deleteEmailModal) deleteEmailModal.classList.toggle('active', !!show); }
      document.querySelectorAll('.or-remove-account').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id = btn.getAttribute('data-id');
          var card = btn.closest('.or-account-card');
          var email = card ? (card.querySelector('.or-account-email') && card.querySelector('.or-account-email').textContent) : '';
          deleteEmailIdToRemove = id;
          if (deleteEmailConfirmMsg) deleteEmailConfirmMsg.textContent = t('outreach.acct.remove_confirm_msg') + (email ? ' (' + email + ')' : '');
          toggleDeleteEmailModal(true);
        });
      });
      function doRemoveEmailAndClose() {
        if (deleteEmailIdToRemove) {
          emailAccounts = emailAccounts.filter(function (a) { return a.id !== deleteEmailIdToRemove; });
          document.getElementById('outreachTabBody').innerHTML = renderOutreachTabContent('accounts');
          bindOutreachTabEvents('accounts');
          showToast(t('outreach.acct.removed'), 'success');
        }
        deleteEmailIdToRemove = null;
        toggleDeleteEmailModal(false);
      }
      if (document.getElementById('closeDeleteEmailConfirm')) document.getElementById('closeDeleteEmailConfirm').addEventListener('click', function () { toggleDeleteEmailModal(false); deleteEmailIdToRemove = null; });
      if (document.getElementById('cancelDeleteEmail')) document.getElementById('cancelDeleteEmail').addEventListener('click', function () { toggleDeleteEmailModal(false); deleteEmailIdToRemove = null; });
      if (document.getElementById('confirmDeleteEmail')) document.getElementById('confirmDeleteEmail').addEventListener('click', doRemoveEmailAndClose);
      if (deleteEmailModal) deleteEmailModal.addEventListener('click', function (e) { if (e.target === deleteEmailModal) { toggleDeleteEmailModal(false); deleteEmailIdToRemove = null; } });
    }
    if (tab === 'templates') {
      var btnNewTpl = document.getElementById('btnNewTemplate');
      if (btnNewTpl) btnNewTpl.addEventListener('click', function () {
        alert('Create new email template: opens the template editor with subject, body, and variable placeholders.');
      });
      document.querySelectorAll('.or-edit-tpl').forEach(function (btn) {
        btn.addEventListener('click', function () {
          alert('Edit template: ' + btn.getAttribute('data-id'));
        });
      });

      document.querySelectorAll('.tpl-filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          tplFilter.owner = btn.getAttribute('data-tpl-owner');
          document.getElementById('outreachTabBody').innerHTML = renderOutreachTemplates();
          bindOutreachTabEvents('templates');
        });
      });

      var tplSearchInput = document.getElementById('tplSearchInput');
      var tplSearchTimer = null;
      if (tplSearchInput) {
        tplSearchInput.addEventListener('input', function () {
          clearTimeout(tplSearchTimer);
          tplSearchTimer = setTimeout(function () {
            tplFilter.search = tplSearchInput.value.trim();
            document.getElementById('outreachTabBody').innerHTML = renderOutreachTemplates();
            bindOutreachTabEvents('templates');
            var inp = document.getElementById('tplSearchInput');
            if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
          }, 250);
        });
      }
    }
  }

  function applyLangUI() {
    var label = document.getElementById('langLabel');
    if (label) label.textContent = getLang() === 'zh' ? '中' : 'EN';
    var storeText = document.getElementById('navBenefitsStoreText');
    if (storeText) storeText.textContent = t('tc.benefits_store');
    var storeLink = document.getElementById('navBenefitsStore');
    if (storeLink) storeLink.setAttribute('title', t('tc.benefits_store'));
    updateSidebarLang();
  }

  function updateSidebarLang() {
    var navMap = {
      'Dashboard': 'nav.dashboard', 'Live Calendar': 'nav.live_calendar', 'Live Console': 'nav.live_console',
      'Live Settings': 'nav.live_settings', 'Live Products': 'nav.live_products', 'Merchant Center': 'nav.merchant',
      'Find Creators': 'nav.find_creators', 'Outreach': 'nav.outreach', 'Creator CRM': 'nav.creator_crm',
      'Analytics (Soon)': 'nav.analytics', 'Analytics': 'nav.analytics', 'Tenant Center': 'nav.tenant_center', 'Settlement': 'tc.ha_settlement', 'Profile': 'nav.profile', 'Account': 'nav.account'
    };
    document.querySelectorAll('.sidebar-primary-icon').forEach(function (a) {
      var origTitle = a.getAttribute('data-orig-title') || a.getAttribute('title');
      if (!a.getAttribute('data-orig-title')) a.setAttribute('data-orig-title', origTitle);
      var key = navMap[origTitle];
      if (key) {
        var translated = t(key);
        a.setAttribute('title', translated);
        var tooltip = a.querySelector('.sidebar-tooltip');
        if (tooltip) tooltip.textContent = translated;
      }
    });
  }

  function init() {
    applyRoleUI();
    applyLangUI();

    // 菜单旁边文字小弹窗：hover 时在图标右侧显示
    var sidebarTooltipEl = null;
    function showSidebarTooltip(iconEl) {
      var tooltip = iconEl.querySelector('.sidebar-tooltip');
      var text = (tooltip && tooltip.textContent) ? tooltip.textContent.trim() : (iconEl.getAttribute('title') || '').trim();
      if (!text) return;
      if (sidebarTooltipEl) { sidebarTooltipEl.remove(); sidebarTooltipEl = null; }
      var rect = iconEl.getBoundingClientRect();
      sidebarTooltipEl = document.createElement('div');
      sidebarTooltipEl.className = 'sidebar-tooltip-popup';
      sidebarTooltipEl.textContent = text;
      document.body.appendChild(sidebarTooltipEl);
      var gap = 10;
      var left = rect.right + gap;
      var top = rect.top + (rect.height / 2) - (sidebarTooltipEl.offsetHeight / 2);
      if (left + sidebarTooltipEl.offsetWidth > window.innerWidth) left = rect.left - sidebarTooltipEl.offsetWidth - gap;
      if (top < 8) top = 8;
      if (top + sidebarTooltipEl.offsetHeight > window.innerHeight - 8) top = window.innerHeight - sidebarTooltipEl.offsetHeight - 8;
      sidebarTooltipEl.style.left = left + 'px';
      sidebarTooltipEl.style.top = top + 'px';
    }
    function hideSidebarTooltip() {
      if (sidebarTooltipEl) { sidebarTooltipEl.remove(); sidebarTooltipEl = null; }
    }
    document.querySelectorAll('.sidebar-primary-icon').forEach(function (a) {
      a.addEventListener('mouseenter', function () { showSidebarTooltip(a); });
      a.addEventListener('mouseleave', hideSidebarTooltip);
    });

    document.querySelectorAll('.role-switcher-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var role = btn.getAttribute('data-role');
        if (role === getRole()) return;
        setRole(role);
        if (role === 'affiliate') window.location.hash = '#/affiliate/discover';
        else window.location.hash = '#/';
        onHashChange();
      });
    });

    // Language switcher
    var langTrigger = document.getElementById('langTrigger');
    var langDropdown = document.getElementById('langDropdown');
    var langSwitcher = document.getElementById('langSwitcher');
    if (langTrigger) {
      langTrigger.addEventListener('click', function (e) {
        e.stopPropagation();
        langDropdown.classList.toggle('lang-dropdown--hidden');
      });
    }
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        setLang(lang);
        applyLangUI();
        langDropdown.classList.add('lang-dropdown--hidden');
        onHashChange();
      });
    });
    document.addEventListener('click', function (e) {
      if (langSwitcher && !langSwitcher.contains(e.target)) {
        if (langDropdown) langDropdown.classList.add('lang-dropdown--hidden');
      }
    });

    function onHashChange() {
      var path = getRoute();
      if (getRole() === 'live' && path.indexOf('affiliate') === 0) {
        window.location.hash = '#/';
        return;
      }
      var routeId = ROUTES[path];
      if (path === '') routeId = getRole() === 'affiliate' ? 'discover' : 'dashboard';
      if (!routeId) routeId = 'creators';
      render(routeId);
    }
    window.addEventListener('hashchange', onHashChange);
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = getRole() === 'affiliate' ? '#/affiliate/discover' : '#/';
    }
    onHashChange();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
