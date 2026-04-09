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
      'nav.dashboard': 'Dashboard', 'nav.live_calendar': 'Live Calendar', 'nav.live_schedule': 'Live Schedule', 'nav.live_console': 'Live Console',
      'nav.live_settings': 'Live Settings', 'nav.live_products': 'Live Products', 'nav.merchant': 'Merchant Center',
      'live_settings.title': 'Live Settings',
      'live_settings.desc': 'Configure live operation modules from one place.',
      'live_settings.flash_title': 'Auto-Setting Flash Sale',
      'live_settings.flash_desc': 'Create and manage reusable flash sale templates, submission schedules, and task execution for TikTok creator deals.',
      'live_settings.comments_title': 'Auto-Comments Library',
      'live_settings.comments_desc': 'Preset comments that can be auto-triggered during your livestream to boost engagement and keep the chat lively.',
      'live_settings.cast_title': 'Casting Device',
      'live_settings.cast_desc': 'Bind a TV device code to a room name for easy mobile casting and device management.',
      'live_settings.existing': 'Existing module',
      'live_settings.back': 'Back to Live Settings',
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
      'tc.tenant': 'Tenant', 'tc.profile': 'Profile', 'tc.live_account': 'Live Account', 'tc.tenant_tts': 'TikTok Shop', 'tc.tenant_host': 'Tenant Host', 'tc.admin': 'Admin', 'tc.account_settings': 'Account settings',
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
      'tc.tts.title': 'TikTok Shop',
      'tc.tts.desc': 'Manage TikTok Shop connections by authorization type.',
      'tc.tts.auth_btn': 'Authorize TikTok Shop',
      'tc.tts.shop_id': 'Shop ID',
      'tc.tts.marketplace': 'Marketplace',
      'tc.tts.auth_status': 'Auth status',
      'tc.tts.auth_active': 'Active',
      'tc.tts.auth_revoked': 'Revoked',
      'tc.tts.last_update': 'Last update',
      'tc.tts.renew': 'Renew',
      'tc.tts.remove': 'Remove',
      'tc.tts.remove_confirm': 'Disconnect this TikTok Shop authorization?',
      'tc.tts.empty_title': 'No TikTok Shop connected yet',
      'tc.tts.empty_desc': 'Authorize a TikTok Shop to start using shop-based features.',
      'tc.tts.empty_cta': 'Authorize TikTok Shop',
      'tc.tts.na': '—',
      'tc.tts.toast_connected': 'TikTok Shop connected',
      'tc.tts.toast_removed': 'Authorization removed',
      'tc.tts.toast_renewed': 'Authorization renewed',
      'tc.tts.type_label': 'Authorization type',
      'tc.tts.type_isv': 'TikTok ISV',
      'tc.tts.type_tap': 'TAP Seller',
      'tc.tts.type_isv_desc': 'Used to sync shop products and run flash sale setup.',
      'tc.tts.type_tap_desc': 'Used by Find Creators to load the shop affiliate marketplace.',
      'tc.tts.section_isv': 'TikTok ISV',
      'tc.tts.section_tap': 'TAP Seller',
      'tc.tts.section_isv_desc': 'For product sync and flash sale setup.',
      'tc.tts.section_tap_desc': 'For Find Creators marketplace access.',
      'tc.tts.auth_btn_isv': 'Authorize TikTok ISV',
      'tc.tts.auth_btn_tap': 'Authorize TAP Seller',
      'tc.tts.connected_count': 'connected',
      'tc.tts.seller_login': 'Seller Center Login',
      'tc.tts.seller_login_connected': 'Connected',
      'tc.tts.seller_login_required': 'Login required',
      'tc.tts.complete_login': 'Complete Seller Center Login',
      'tc.tts.manage_login': 'Enter Seller Center',
      'tc.tts.toast_login_connected': 'Seller Center login connected',
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
      'tc.ha.generate_modal_live_account': 'Live account',
      'tc.ha.generate_modal_live_account_all': 'All',
      'tc.ha.generate_modal_creator': 'Creator',
      'tc.ha.generate_modal_creator_all': 'All',
      'tc.ha.generate_modal_optional': '(Optional)',
      'tc.ha.generate_modal_select_ph': 'Select or search...',
      'tc.ha.generate_modal_filter_hint': 'Leave optional fields blank to include all eligible data.',
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
      'tc.ha.rules_priority_hint': 'Live Account + Creator > Live Account',
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
      'tc.ha.rules_v2_desc': 'Rules are scoped by Live Account and effective period. Optionally limit to specific creators. Records are immutable—create a new one to replace.',
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
      'tc.ha.rules_v2_empty': 'Create a rule above: pick a Live Account, optionally add creators, then set hourly rates and CPS tiers.',
      'tc.ha.rules_v2_create': 'Create',
      'tc.ha.rules_v2_dimension': 'Dimension',
      'tc.ha.rules_v2_tab_merchant': 'Merchant default',
      'tc.ha.rules_v2_tab_live_account': 'Live Account',
      'tc.ha.rules_v2_tab_creator': 'Creator',
      'tc.ha.rules_v2_section_subject': 'Scope',
      'tc.ha.rules_v2_section_currency': 'Currency',
      'tc.ha.rules_v2_history': 'Settings history',
      'tc.ha.rules_v2_status': 'Status',
      'tc.ha.rules_cps_add': 'Add tier',
      'tc.ha.rules_bonus': 'Fixed rewards',
      'tc.ha.rules_bonus_hint': 'By date. Multiple rewards on the same date are summed.',
      'tc.ha.rules_bonus_date': 'Date',
      'tc.ha.rules_bonus_default': 'Default',
      'tc.ha.rules_bonus_title': 'Title',
      'tc.ha.rules_bonus_amount': 'Amount',
      'tc.ha.rules_bonus_note': 'Note',
      'tc.ha.rules_bonus_currency': 'Currency',
      'tc.ha.rules_bonus_add': 'Add reward',
      'tc.ha.rules_creator': 'Creator overrides',
      'tc.ha.rules_creator_hint': 'Override Live Account rules for specific creators.',
      'tc.ha.rules_creator_name': 'Creator',
      'tc.ha.rules_creator_multi_hint': 'Search and add multiple creators as tags',
      'tc.ha.rules_v2_creators_optional': 'Creators (optional)',
      'tc.ha.rules_la_creator_hint': 'Leave empty to apply to all creators under this Live Account. Selected creators use this rule and override the account-wide rule.',
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
      'tc.ha.past_lives_desc': 'Review sessions, edit GMV, and fix data issues.',
      'tc.ha.past_lives_filter_host': 'Host',
      'tc.ha.past_lives_filter_room': 'Room ID',
      'tc.ha.past_lives_filter_la': 'Live account',
      'tc.ha.past_lives_filter_date': 'Date range',
      'tc.ha.past_lives_filter_settled': 'Statement status',
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
      'tc.ha.past_lives_empty': 'No sessions match your filters.',
      'tc.ha.past_lives_desc_exclude': 'Unsettled, normal sessions are included when you generate a statement. Select rows in the table to exclude or restore. Use filters below to focus on included or excluded sessions.',
      'tc.ha.past_lives_th_select': 'Select',
      'tc.ha.past_lives_th_select_title': 'Select rows for bulk exclude or restore.',
      'tc.ha.past_lives_batch_title': 'Bulk actions',
      'tc.ha.past_lives_batch_hint': 'Select rows in the table, then choose an action.',
      'tc.ha.past_lives_batch_aria': 'Bulk actions for statements',
      'tc.ha.past_lives_batch_disable_title': 'Select at least one row',
      'tc.ha.past_lives_batch_selected': '{0} selected',
      'tc.ha.past_lives_batch_exclude': 'Exclude from statement',
      'tc.ha.past_lives_batch_include': 'Include again',
      'tc.ha.past_lives_batch_exclude_done': 'Excluded {0} session(s).',
      'tc.ha.past_lives_batch_include_done': 'Restored {0} session(s).',
      'tc.ha.past_lives_batch_none_applicable': 'Nothing to update for this selection.',
      'tc.ha.past_lives_settle_excluded': 'Excluded',
      'tc.ha.past_lives_filter_stmt_scope': 'Next statement',
      'tc.ha.past_lives_filter_stmt_all': 'All',
      'tc.ha.past_lives_filter_stmt_in_scope': 'Included',
      'tc.ha.past_lives_filter_stmt_excluded': 'Excluded',
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
      // Live schedule (#/live/schedule) — keys shared with zh; use t('ls.*')
      'ls.title': 'Live management',
      'ls.intro': 'Collect host availability, set hour targets, generate draft sessions, sync to TikTok, then track live runs and GMV.',
      'ls.tab.host_avail': 'Host availability',
      'ls.tab.targets': 'Hour targets',
      'ls.tab.batches': 'Schedules',
      'ls.sess.draft': 'Draft',
      'ls.sess.pending_confirm': 'Pending host',
      'ls.sess.pending_sync': 'Pending sync',
      'ls.sess.pending_live': 'Upcoming',
      'ls.sess.live': 'Live',
      'ls.sess.ended': 'Ended',
      'ls.phase.scheduled': 'Scheduled',
      'ls.phase.live': 'Live',
      'ls.phase.ended': 'Ended',
      'ls.th.schedule_id': 'Schedule ID',
      'ls.th.subject_account': 'Subject & Live account',
      'ls.th.created_follower': 'Created by & Co-host',
      'ls.th.subject': 'Subject',
      'ls.th.account': 'Account',
      'ls.th.time': 'Time',
      'ls.th.hosts_segments': 'Hosts (planned)',
      'ls.th.follower': 'Follower',
      'ls.th.tiktok_sid': 'TikTok session ID',
      'ls.th.tiktok_live_event_sync': 'TikTok Live Event',
      'ls.tiktok_sync.status_idle': 'Not synced',
      'ls.tiktok_sync.status_syncing': 'Syncing',
      'ls.tiktok_sync.status_failed': 'Failed',
      'ls.tiktok_sync.fail_auth': 'Live account login expired. Sign in again, then retry.',
      'ls.tiktok_sync.fail_other': 'System error',
      'ls.th.created_by': 'Created by',
      'ls.th.remark_en': 'Notes (EN)',
      'ls.search.sessions_ph': 'Search ID, subject, account, follower, hosts, notes…',
      'ls.empty.sessions': 'No sessions in this status',
      'ls.empty.sessions_hint': 'Try another status tab, clear the search box, or generate schedules from the Host schedule tab.',
      'ls.btn.push_host': 'Push to hosts',
      'ls.btn.batch_push': 'Push selected',
      'ls.btn.batch_sync_tiktok': 'Sync selected to TikTok',
      'ls.btn.edit_schedule': 'Edit schedule',
      'ls.btn.cancel_schedule': 'Cancel schedule',
      'ls.btn.sync_tiktok': 'Sync to TikTok',
      'ls.btn.view': 'View details',
      'ls.select_all': 'Select all',
      'ls.modal.batch_sync_title': 'Sync TikTok for selected sessions?',
      'ls.modal.batch_sync_body': 'TikTok Live Events will be created for {0} session(s) (MVP mock).',
      'ls.toast.batch_sync_none': 'No sessions available to sync.',
      'ls.toast.batch_sync_done': 'Synced {0} session(s) (MVP mock).',
      'ls.targets.save': 'Save targets',
      'ls.targets.generate': 'Generate schedule',
      'ls.targets.add': 'Add target',
      'ls.targets.hint': 'Tip: select hosts on the Availability tab before generating. You can also open the same flow from here.',
      'ls.targets.th.account': 'Account',
      'ls.targets.th.period': 'Period',
      'ls.targets.th.target_h': 'Target hours',
      'ls.targets.th.planned_h': 'Planned hours',
      'ls.targets.th.accepted_h': 'Accepted hours',
      'ls.targets.th.rate': 'Progress',
      'ls.targets.th.updated': 'Updated',
      'ls.targets.th.actions': 'Actions',
      'ls.targets.cancel': 'Void',
      'ls.targets.empty': 'No targets yet.',
      'ls.host.search_ph': 'Search hosts',
      'ls.host.tz_merchant': '(merchant)',
      'ls.host.week_prev': 'Previous week',
      'ls.host.week_this': 'This week',
      'ls.host.week_next': 'Next week',
      'ls.host.tz_display_label': 'Time display',
      'ls.host.window': 'Window: {0}. Chips show availability after draft allocation.',
      'ls.host.tz_legend_display': 'Time display: {0}',
      'ls.host.tz_legend_boundary': 'Date boundary: {0}',
      'ls.host.tz_legend_note': 'Cell times follow display timezone; week/day boundary follows merchant timezone.',
      'ls.host.select_all': 'Select all',
      'ls.host.gen': 'Generate schedule',
      'ls.host.selected_n': '{0} selected',
      'ls.host.gen_hint': 'Select hosts, then set period, account, and timezone.',
      'ls.host.overflow': '+{0} more',
      'ls.targets.past_locked': 'Past periods are read-only.',
      'ls.host.th.matrix': 'Host',
      'ls.host.badge.open': 'Open',
      'ls.host.badge.full': 'Allocated',
      'ls.host.summary_remain': '{0} h left',
      'ls.host.metric_avail': 'Avail {0}h',
      'ls.host.metric_alloc': 'Alloc {0}h',
      'ls.host.tooltip.no_avail': 'Not reported (excluded from draft).',
      'ls.host.tooltip.day': 'Avail {0}h · alloc {1}h',
      'ls.host.cell.none': 'Not reported',
      'ls.host.cell.more': 'more',
      'ls.host.row.hint': 'Click a day cell to edit availability.',
      'ls.host.empty_matrix': 'No availability in this 7-day window.',
      'ls.user_id': 'User ID',
      'ls.weekday.0': 'Mon', 'ls.weekday.1': 'Tue', 'ls.weekday.2': 'Wed', 'ls.weekday.3': 'Thu', 'ls.weekday.4': 'Fri', 'ls.weekday.5': 'Sat', 'ls.weekday.6': 'Sun',
      'ls.drawer.close': 'Close',
      'ls.drawer.tab.sessions': 'Sessions',
      'ls.drawer.tab.segments': 'Relay segments',
      'ls.drawer.host.avail': 'Availability',
      'ls.drawer.host.planned': 'Planned allocation',
      'ls.drawer.edit_slot_title': 'Edit availability slot',
      'ls.drawer.add_slot_title': 'Add availability slot',
      'ls.drawer.add_slot_btn': 'Add slot',
      'ls.host.add_slot_btn': 'Add host availability',
      'ls.host.add_slot_modal_title': 'Add availability for a host',
      'ls.host.add_slot_date_label': 'Date',
      'ls.host.add_slot_modal_ok': 'Continue',
      'ls.host.add_slot_no_hosts': 'No hosts found. Import or add availability first.',
      'ls.host.add_slot_no_date': 'Please select a date.',
      'ls.host.batch_modal_title': 'Batch add host availability',
      'ls.host.batch_hint': 'Each row: pick a host and time range. Multiple hosts can be mixed in one batch. Empty rows are skipped. Times use the display timezone above.',
      'ls.host.batch_tz_label': 'Timezone',
      'ls.host.batch_add_row': 'Add row',
      'ls.host.batch_remove_row': 'Remove row',
      'ls.host.batch_save': 'Save all',
      'ls.host.batch_empty': 'Please fill at least one complete row.',
      'ls.host.batch_err_incomplete_row': 'Each row needs host, date, start time, and end time.',
      'ls.host.batch_err_time_order': 'Start must be before end on every row.',
      'ls.host.batch_keep_one_row': 'Keep at least one row.',
      'ls.host.batch_saved': 'Saved {0} availability slot(s).',
      'ls.drawer.avail_empty': 'No availability slots yet.',
      'ls.drawer.stats_impact_hint': 'Editing or voiding slots affects planned allocation for subsequent draft generation; regenerate in merchant goals.',
      'ls.drawer.add_slot_no_host': 'No host selected.',
      'ls.drawer.add_slot_no_day': 'Open this drawer from a calendar day first.',
      'ls.drawer.add_slot_day_mismatch': 'Start and end must fall on the calendar day opened in this drawer.',
      'ls.drawer.th.status': 'Status',
      'ls.drawer.th.start': 'Start',
      'ls.drawer.th.end': 'End',
      'ls.drawer.th.duration': 'Duration',
      'ls.drawer.tz_label': 'Timezone',
      'ls.drawer.th.source': 'Source',
      'ls.drawer.th.updated_at': 'Updated',
      'ls.drawer.avail_status_valid': 'Active',
      'ls.drawer.avail_status_voided': 'Voided',
      'ls.drawer.avail_void': 'Void',
      'ls.drawer.avail_restore': 'Restore',
      'ls.modal.detail': 'Schedule details',
      'ls.modal.edit': 'Edit schedule',
      'ls.modal.save': 'Save',
      'ls.modal.update': 'Update',
      'ls.section.account': 'Account',
      'ls.section.schedule': 'Schedule & hosts',
      'ls.section.remark': 'Notes',
      'ls.live_ended.hint': 'Most fields are read-only. Per host segment you can edit actual start/end and GMV (including notes). TikTok Live Events cannot be edited while live or after.',
      'ls.gmv.ccy_hint': 'GMV currency comes from the server (live room). Current: {0}',
      'ls.banner.host_checkin': 'Host hasn’t checked in.',
      'ls.readonly.empty_sessions': 'No sessions',
      'ls.detail.seg_hosts': 'Hosts',
      'ls.format.gmv_label': 'Direct GMV: {0}',
      'ls.edit.hint_streamed': 'After the stream ends, only actual start/end times and GMV can be edited.',
      'ls.edit.hint_full': 'Edit all schedule fields (MVP preview).',
      'ls.modal.seg_hosts_title': 'Host segments',
      'ls.seg.empty': 'No segments yet',
      'ls.seg.del_disabled': 'Cannot delete',
      'ls.seg.add_host': 'Add host segment',
      'ls.seg.host': 'Host',
      'ls.seg.start': 'Start',
      'ls.seg.end': 'End',
      'ls.seg.gmv': 'GMV',
      'ls.seg.gmv_note': 'GMV notes',
      'common.close': 'Close',
      'tc.ha.stat_batches': 'Batches'
    },
    zh: {
      // nav
      'nav.dashboard': '仪表盘', 'nav.live_calendar': '直播日历', 'nav.live_schedule': '直播排期', 'nav.live_console': '直播控制台',
      'nav.live_settings': '直播设置', 'nav.live_products': '直播商品', 'nav.merchant': '商家中心',
      'live_settings.title': '直播设置',
      'live_settings.desc': '在一个入口中管理直播相关功能设置。',
      'live_settings.flash_title': '自动设置秒杀',
      'live_settings.flash_desc': '创建并管理 TikTok Creator Flash Sale 的模版、提报排期和任务执行。',
      'live_settings.comments_title': '自动评论库',
      'live_settings.comments_desc': '预设评论内容，在直播过程中自动触发，提升互动和评论活跃度。',
      'live_settings.cast_title': '投屏设备',
      'live_settings.cast_desc': '绑定电视设备码与房间名称，便于移动端投屏和设备管理。',
      'live_settings.existing': '现有模块',
      'live_settings.back': '返回直播设置',
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
      'tc.tenant': '租户', 'tc.profile': '个人资料', 'tc.live_account': '直播账号', 'tc.tenant_tts': 'TikTok Shop', 'tc.tenant_host': '租户主持', 'tc.admin': '管理', 'tc.account_settings': '账户设置',
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
      'tc.tts.title': 'TikTok Shop',
      'tc.tts.desc': '按授权类型管理 TikTok Shop 连接。',
      'tc.tts.auth_btn': '授权 TikTok Shop',
      'tc.tts.shop_id': 'Shop ID',
      'tc.tts.marketplace': 'Marketplace',
      'tc.tts.auth_status': '授权状态',
      'tc.tts.auth_active': '有效',
      'tc.tts.auth_revoked': '已撤销',
      'tc.tts.last_update': '最近更新',
      'tc.tts.renew': '续期',
      'tc.tts.remove': '移除',
      'tc.tts.remove_confirm': '确定要断开该 TikTok Shop 授权吗？',
      'tc.tts.empty_title': '暂无已连接的 TikTok Shop',
      'tc.tts.empty_desc': '先完成 TikTok Shop 授权后，再使用相关能力。',
      'tc.tts.empty_cta': '授权 TikTok Shop',
      'tc.tts.na': '—',
      'tc.tts.toast_connected': 'TikTok Shop 已连接',
      'tc.tts.toast_removed': '授权已移除',
      'tc.tts.toast_renewed': '授权已续期',
      'tc.tts.type_label': '授权类型',
      'tc.tts.type_isv': 'TikTok ISV',
      'tc.tts.type_tap': 'TAP Seller',
      'tc.tts.type_isv_desc': '用于同步店铺商品和执行秒杀设置。',
      'tc.tts.type_tap_desc': '用于 Find Creator 获取店铺所在地区的 Affiliate MarketPlace。',
      'tc.tts.section_isv': 'TikTok ISV',
      'tc.tts.section_tap': 'TAP Seller',
      'tc.tts.section_isv_desc': '用于商品同步和秒杀设置。',
      'tc.tts.section_tap_desc': '用于 Find Creator 市场能力。',
      'tc.tts.auth_btn_isv': '授权 TikTok ISV',
      'tc.tts.auth_btn_tap': '授权 TAP Seller',
      'tc.tts.connected_count': '已连接',
      'tc.tts.seller_login': 'Seller Center 登录',
      'tc.tts.seller_login_connected': '已连接',
      'tc.tts.seller_login_required': '需完成登录',
      'tc.tts.complete_login': '完成 Seller Center 登录',
      'tc.tts.manage_login': '进入 Seller Center',
      'tc.tts.toast_login_connected': 'Seller Center 登录已连接',
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
      'tc.ha.generate_modal_live_account': '直播账号',
      'tc.ha.generate_modal_live_account_all': '全部',
      'tc.ha.generate_modal_creator': '创作者',
      'tc.ha.generate_modal_creator_all': '全部',
      'tc.ha.generate_modal_optional': '(可选)',
      'tc.ha.generate_modal_select_ph': '选择或搜索...',
      'tc.ha.generate_modal_filter_hint': '可选字段留空则包含全部可结算数据。',
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
      'tc.ha.rules_priority_hint': 'Live Account + Creator > Live Account',
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
      'tc.ha.rules_v2_creators_optional': 'Creator（可选）',
      'tc.ha.rules_la_creator_hint': '不选则对该直播账号下全部 Creator 生效；指定后仅对选中 Creator 生效，且优先于账号级规则。',
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
      'tc.ha.rules_v2_desc': '规则按 Live Account 与生效期配置，可选指定 Creator。记录不可删除；需替换时创建相同生效期的新记录。',
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
      'tc.ha.rules_v2_empty': '在上方创建规则：选择直播账号，可选添加 Creator，再配置时薪与 CPS 阶梯。',
      'tc.ha.rules_v2_create': '创建',
      'tc.ha.rules_v2_dimension': '维度',
      'tc.ha.rules_v2_tab_merchant': '商家默认',
      'tc.ha.rules_v2_tab_live_account': '直播账号',
      'tc.ha.rules_v2_tab_creator': 'Creator',
      'tc.ha.rules_v2_section_subject': '主体',
      'tc.ha.rules_v2_section_currency': '币种',
      'tc.ha.rules_v2_history': '设置历史',
      'tc.ha.rules_v2_status': '生效状态',
      'tc.ha.rules_cps_add': '新增阶梯',
      'tc.ha.rules_bonus': '每场固定奖励',
      'tc.ha.rules_bonus_hint': '按发生日期录入。同一天多条奖励累加。支持多币种。',
      'tc.ha.rules_bonus_date': '发生日期',
      'tc.ha.rules_bonus_default': '默认',
      'tc.ha.rules_bonus_title': '名称',
      'tc.ha.rules_bonus_amount': '金额',
      'tc.ha.rules_bonus_note': '备注',
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
      'tc.ha.past_lives_desc': '查看场次、编辑 GMV，并处理异常数据。',
      'tc.ha.past_lives_filter_host': '主播名称/ID',
      'tc.ha.past_lives_filter_room': 'Room ID',
      'tc.ha.past_lives_filter_la': '直播账号',
      'tc.ha.past_lives_filter_date': '直播日期',
      'tc.ha.past_lives_filter_settled': '结算单状态',
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
      'tc.ha.past_lives_empty': '当前筛选下没有场次。',
      'tc.ha.past_lives_desc_exclude': '未结算且数据正常的场次，生成结算单时会默认计入。在表格中勾选后，可用下方批量操作排除或恢复；「下期结算」筛选可快速查看将计入或已排除的场次。',
      'tc.ha.past_lives_th_select': '选择',
      'tc.ha.past_lives_th_select_title': '勾选后可批量排除或恢复计入结算单。',
      'tc.ha.past_lives_batch_title': '批量操作',
      'tc.ha.past_lives_batch_hint': '先在表格中勾选场次，再点击右侧按钮。',
      'tc.ha.past_lives_batch_aria': '结算单批量操作',
      'tc.ha.past_lives_batch_disable_title': '请先勾选至少一场',
      'tc.ha.past_lives_batch_selected': '已选 {0} 场',
      'tc.ha.past_lives_batch_exclude': '排除出结算单',
      'tc.ha.past_lives_batch_include': '恢复计入',
      'tc.ha.past_lives_batch_exclude_done': '已排除 {0} 场。',
      'tc.ha.past_lives_batch_include_done': '已恢复 {0} 场。',
      'tc.ha.past_lives_batch_none_applicable': '当前选择没有可更新的场次。',
      'tc.ha.past_lives_settle_excluded': '不计入',
      'tc.ha.past_lives_filter_stmt_scope': '下期结算',
      'tc.ha.past_lives_filter_stmt_all': '全部',
      'tc.ha.past_lives_filter_stmt_in_scope': '将计入',
      'tc.ha.past_lives_filter_stmt_excluded': '已排除',
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
      'ls.title': '直播管理',
      'ls.intro': '收集主播空闲时段、提报目标小时数、生成初排并与 TikTok 同步，开播后回填实际上下播与 GMV。',
      'ls.tab.host_avail': '主播日程',
      'ls.tab.targets': '直播目标',
      'ls.tab.batches': '主播排期',
      'ls.sess.draft': '暂存',
      'ls.sess.pending_confirm': '待确认',
      'ls.sess.pending_sync': '待同步',
      'ls.sess.pending_live': '待直播',
      'ls.sess.live': '直播中',
      'ls.sess.ended': '已直播',
      'ls.phase.scheduled': '待直播',
      'ls.phase.live': '直播中',
      'ls.phase.ended': '已直播',
      'ls.th.schedule_id': '排期ID',
      'ls.th.subject_account': '主题与直播账号',
      'ls.th.created_follower': '创建人与跟播人',
      'ls.th.subject': '主题',
      'ls.th.account': '直播账号',
      'ls.th.time': '直播时间',
      'ls.th.hosts_segments': '主播（计划分段）',
      'ls.th.follower': '跟播人',
      'ls.th.tiktok_sid': 'TikTok Session ID',
      'ls.th.tiktok_live_event_sync': 'TikTok Live Event',
      'ls.tiktok_sync.status_idle': '未同步',
      'ls.tiktok_sync.status_syncing': '同步中',
      'ls.tiktok_sync.status_failed': '失败',
      'ls.tiktok_sync.fail_auth': '直播账号登录已过期，请重新登录后重试。',
      'ls.tiktok_sync.fail_other': '系统错误',
      'ls.th.created_by': '创建人',
      'ls.th.remark_en': '备注（英文）',
      'ls.search.sessions_ph': '搜索排期ID、主题、账号、跟播、主播、备注…',
      'ls.empty.sessions': '当前状态下暂无排期',
      'ls.empty.sessions_hint': '可切换上方状态、清空搜索，或在「主播日程」中生成排期。',
      'ls.btn.push_host': '推送主播',
      'ls.btn.batch_push': '批量推送主播',
      'ls.btn.batch_sync_tiktok': '批量同步 TikTok',
      'ls.btn.edit_schedule': '编辑排期',
      'ls.btn.cancel_schedule': '取消排期',
      'ls.btn.sync_tiktok': '同步 TikTok',
      'ls.btn.view': '查看详情',
      'ls.select_all': '全选',
      'ls.modal.batch_sync_title': '批量同步 TikTok？',
      'ls.modal.batch_sync_body': '将为选中的 {0} 个场次创建 TikTok Live Event（MVP Mock）。',
      'ls.toast.batch_sync_none': '没有可同步的场次。',
      'ls.toast.batch_sync_done': '已同步 {0} 个场次（MVP Mock）。',
      'ls.targets.save': '保存目标小时数',
      'ls.targets.generate': '自动排期',
      'ls.targets.add': '新增直播目标',
      'ls.targets.hint': '提示：推荐在「主播日程」勾选主播后使用自动排期；也可在此打开同一配置。',
      'ls.targets.th.account': '直播账号',
      'ls.targets.th.period': '周期',
      'ls.targets.th.target_h': '目标小时数',
      'ls.targets.th.planned_h': '已初排小时数',
      'ls.targets.th.accepted_h': '已接受小时数',
      'ls.targets.th.rate': '完成率',
      'ls.targets.th.updated': '更新时间',
      'ls.targets.th.actions': '操作',
      'ls.targets.cancel': '作废',
      'ls.targets.empty': '暂无账号目标配置',
      'ls.host.search_ph': '搜索主播',
      'ls.host.tz_merchant': '（商家本机）',
      'ls.host.week_prev': '上一周',
      'ls.host.week_this': '本周',
      'ls.host.week_next': '下一周',
      'ls.host.tz_display_label': '时区',
      'ls.host.window': '当前窗口：{0}；单元格内为当天可用时段（已扣除初排占用后的剩余）。',
      'ls.host.tz_legend_display': '时间展示：{0}',
      'ls.host.tz_legend_boundary': '日期边界：{0}',
      'ls.host.tz_legend_note': '单元格时间按展示时区显示；周/日边界按商家时区计算。',
      'ls.host.select_all': '全选',
      'ls.host.gen': '自动排期',
      'ls.host.selected_n': '已选 {0} 人',
      'ls.host.gen_hint': '勾选主播后配置周期、直播账号与时区',
      'ls.host.overflow': '+{0}段',
      'ls.targets.past_locked': '过往周期不可修改',
      'ls.host.th.matrix': '主播日程',
      'ls.host.badge.open': '有空',
      'ls.host.badge.full': '已分配完',
      'ls.host.summary_remain': '剩余 {0}h',
      'ls.host.metric_avail': '可用 {0}h',
      'ls.host.metric_alloc': '已分配 {0}h',
      'ls.host.tooltip.no_avail': '未提报（不参与初排）',
      'ls.host.tooltip.day': '该天可用 {0}h · 已分配 {1}h',
      'ls.host.cell.none': '未提报',
      'ls.host.cell.more': '段',
      'ls.host.row.hint': '点击某天单元格可编辑可用时段',
      'ls.host.empty_matrix': '暂无主播可用时段（或不在当前7天窗口内）',
      'ls.user_id': '用户ID',
      'ls.weekday.0': '周一', 'ls.weekday.1': '周二', 'ls.weekday.2': '周三', 'ls.weekday.3': '周四', 'ls.weekday.4': '周五', 'ls.weekday.5': '周六', 'ls.weekday.6': '周日',
      'ls.drawer.close': '关闭',
      'ls.drawer.tab.sessions': '场次',
      'ls.drawer.tab.segments': 'Relay 分段',
      'ls.drawer.host.avail': '可用时段',
      'ls.drawer.host.planned': '已分配计划',
      'ls.drawer.edit_slot_title': '编辑空闲时段',
      'ls.drawer.add_slot_title': '添加空闲时段',
      'ls.drawer.add_slot_btn': '录入空闲时段',
      'ls.host.add_slot_btn': '添加主播空闲时段',
      'ls.host.add_slot_modal_title': '添加主播空闲时段',
      'ls.host.add_slot_date_label': '日期',
      'ls.host.add_slot_modal_ok': '继续',
      'ls.host.add_slot_no_hosts': '暂无主播数据，请先导入或在抽屉中录入。',
      'ls.host.add_slot_no_date': '请选择日期。',
      'ls.host.batch_modal_title': '批量录入主播空闲时段',
      'ls.host.batch_hint': '每行选择主播并填写时段；同一弹窗可混填多位主播。空行可留空（自动跳过）。时间按当前展示时区解析。',
      'ls.host.batch_tz_label': '时区',
      'ls.host.batch_add_row': '添加一行',
      'ls.host.batch_remove_row': '删除此行',
      'ls.host.batch_save': '保存全部',
      'ls.host.batch_empty': '请至少完整填写一行。',
      'ls.host.batch_err_incomplete_row': '每一行需同时选择主播并填写日期、开始时间、结束时间。',
      'ls.host.batch_err_time_order': '每一行开始时间须早于结束时间。',
      'ls.host.batch_keep_one_row': '至少保留一行。',
      'ls.host.batch_saved': '已保存 {0} 条空闲时段。',
      'ls.drawer.avail_empty': '暂无可用时段',
      'ls.drawer.stats_impact_hint': '编辑/作废时段会影响「后续初排生成」的 planned allocation，请在商家目标中手动重新生成。',
      'ls.drawer.add_slot_no_host': '未选择主播。',
      'ls.drawer.add_slot_no_day': '请先从日历某天打开本抽屉。',
      'ls.drawer.add_slot_day_mismatch': '开始与结束须落在当前抽屉对应的日期。',
      'ls.drawer.th.status': '状态',
      'ls.drawer.th.start': '开始',
      'ls.drawer.th.end': '结束',
      'ls.drawer.th.duration': '时长',
      'ls.drawer.tz_label': '时区',
      'ls.drawer.th.source': '来源',
      'ls.drawer.th.updated_at': '更新时间',
      'ls.drawer.avail_status_valid': '有效',
      'ls.drawer.avail_status_voided': '已作废',
      'ls.drawer.avail_void': '作废',
      'ls.drawer.avail_restore': '恢复',
      'ls.modal.detail': '排期详情',
      'ls.modal.edit': '编辑排期',
      'ls.modal.save': '保存',
      'ls.modal.update': '更新排期',
      'ls.section.account': '直播账号信息',
      'ls.section.schedule': '日程与主播',
      'ls.section.remark': '排期备注',
      'ls.live_ended.hint': '以下字段不可编辑；每个主播分段仅可修改实际上下播与 GMV（含备注）。直播中或已结束时不可修改 TikTok Live Events。',
      'ls.gmv.ccy_hint': 'GMV 币种由服务端按直播间商品币种下发，当前：{0}',
      'ls.banner.host_checkin': '主播尚未在 App 打卡上播。',
      'ls.readonly.empty_sessions': '暂无场次',
      'ls.detail.seg_hosts': '主播信息',
      'ls.format.gmv_label': 'Direct GMV：{0}',
      'ls.edit.hint_streamed': '已直播：仅可编辑实际上下播与 GMV。',
      'ls.edit.hint_full': '可编辑全部排期字段（MVP 预览）。',
      'ls.modal.seg_hosts_title': '主播分段',
      'ls.seg.empty': '暂无分段',
      'ls.seg.del_disabled': '不可删除',
      'ls.seg.add_host': '添加主播',
      'ls.seg.host': '主播',
      'ls.seg.start': '开始',
      'ls.seg.end': '结束',
      'ls.seg.gmv': 'GMV',
      'ls.seg.gmv_note': 'GMV 备注',
      'common.close': '关闭',
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
    'tenant-center': 'analytics',
    'affiliate/settlement': 'settlement',
    'benefits-store': 'benefits-store',
    'hosts/hourly-pay-rules': 'hourly-pay-rules',
    'live/schedule': 'live_schedule',
    'live/settings': 'live_settings',
    'live/settings/flash-sale': 'live_settings_flash_sale'
  };

  function getRole() { return localStorage.getItem(ROLE_KEY) || 'live'; }
  function setRole(role) { localStorage.setItem(ROLE_KEY, role); applyRoleUI(); }
  function applyRoleUI() {
    var role = getRole();
    var navLive = document.getElementById('navLive');
    var navAffiliate = document.getElementById('navAffiliate');
    if (navLive) { navLive.classList.toggle('hidden', role === 'affiliate'); }
    if (navAffiliate) { navAffiliate.classList.toggle('visible', role === 'affiliate'); }
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
      var navRoute = a.getAttribute('data-route');
      var isActive = navRoute === routeId ||
        (navRoute === 'live_settings' && routeId === 'live_settings_flash_sale') ||
        (navRoute === 'tenant_center_shared' && routeId === 'analytics');
      a.classList.toggle('active', isActive);
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
  var tcTtsAuthTab = 'isv';

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
      var auths = loadTtsAuth().map(function (a) {
        if (!a.authType) a.authType = 'tap_seller';
        return a;
      });
      var activeType = tcTtsAuthTab === 'tap_seller' ? 'tap_seller' : 'isv';
      var renderAuthCards = function (type) {
        var sectionAuths = auths.filter(function (a) { return a.authType === type; });
        var cards = sectionAuths.length ? sectionAuths.map(function (a) {
          var mp = a.marketplace || a.country || '';
          var shopLabel = (a.shopName || 'TikTok Shop') + (mp ? ' · ' + mp : '');
          var status = (a.status || 'active') === 'active' ? t('tc.tts.auth_active') : t('tc.tts.auth_revoked');
          var lastUpdate = formatTtsDate(a.authorizedAt, a.country);
          var sellerLoginStatus = a.sellerCenterStatus === 'connected' ? 'connected' : 'required';
          var sellerLoginText = sellerLoginStatus === 'connected' ? t('tc.tts.seller_login_connected') : t('tc.tts.seller_login_required');
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
                (a.authType === 'isv' ? '<div class="tc-tts-field"><span>' + t('tc.tts.seller_login') + '</span><span class="tc-tts-status tc-tts-status--' + sellerLoginStatus + '">' + sellerLoginText + '</span></div>' : '') +
                '<div class="tc-tts-field"><span>' + t('tc.tts.marketplace') + '</span><span>' + (mp || t('tc.tts.na')) + '</span></div>' +
                '<div class="tc-tts-field"><span>' + t('tc.tts.last_update') + '</span><span class="tc-tts-date">' + (lastUpdate || t('tc.tts.na')) + '</span></div>' +
              '</div>' +
              '<div class="tc-tts-footer">' +
                (a.authType === 'isv' ? '<button type="button" class="btn ' + (sellerLoginStatus === 'connected' ? 'btn-secondary' : 'btn-primary') + ' btn-sm tc-tts-login" data-id="' + a.id + '">' + (sellerLoginStatus === 'connected' ? t('tc.tts.manage_login') : t('tc.tts.complete_login')) + '</button>' : '') +
                '<button type="button" class="btn btn-secondary btn-sm tc-tts-renew" data-id="' + a.id + '">' + t('tc.tts.renew') + '</button>' +
                '<button type="button" class="btn btn-sm tc-tts-remove tc-tts-remove--destructive" data-id="' + a.id + '">' + t('tc.tts.remove') + '</button>' +
              '</div>' +
            '</div>';
        }).join('') : '<div class="tc-tts-empty tc-tts-empty--section"><div class="tc-tts-empty-icon"><i class="fab fa-tiktok"></i></div><div class="tc-tts-empty-title">' + t('tc.tts.empty_title') + '</div><p class="tc-tts-empty-desc">' + (type === 'isv' ? t('tc.tts.type_isv_desc') : t('tc.tts.type_tap_desc')) + '</p></div>';
        var title = type === 'isv' ? t('tc.tts.section_isv') : t('tc.tts.section_tap');
        var desc = type === 'isv' ? t('tc.tts.section_isv_desc') : t('tc.tts.section_tap_desc');
        var btnLabel = type === 'isv' ? t('tc.tts.auth_btn_isv') : t('tc.tts.auth_btn_tap');
        return '' +
          '<section class="tc-tts-type-section">' +
            '<div class="tc-tts-type-head">' +
              '<div><div class="tc-tts-type-topline"><h3 class="tc-tts-type-title">' + title + '</h3><span class="tc-tts-type-count">' + sectionAuths.length + ' ' + t('tc.tts.connected_count') + '</span></div><p class="tc-tts-type-desc">' + desc + '</p></div>' +
              '<button type="button" class="btn btn-primary tc-tts-connect-type" data-auth-type="' + type + '"><i class="fab fa-tiktok"></i> ' + btnLabel + '</button>' +
            '</div>' +
            '<div class="tc-tts-list' + (sectionAuths.length ? '' : ' tc-tts-list--empty') + '">' + cards + '</div>' +
          '</section>';
      };

      return '' +
        '<div class="tc-tenant-tts-page">' +
          '<div class="tc-panel-header">' +
            '<div class="tc-ha-head">' +
              '<h2 class="tc-section-title">' + t('tc.tts.title') + '</h2>' +
              '<p class="tc-ha-desc">' + t('tc.tts.desc') + '</p>' +
            '</div>' +
          '</div>' +
          '<div class="card tc-card tc-tts-card-wrap">' +
            '<div class="tc-tts-tabs" role="tablist" aria-label="' + t('tc.tts.title') + '">' +
              '<button type="button" class="tc-tts-tab' + (activeType === 'isv' ? ' tc-tts-tab--active' : '') + '" data-tts-tab="isv" role="tab" aria-selected="' + (activeType === 'isv' ? 'true' : 'false') + '">' + t('tc.tts.type_isv') + '</button>' +
              '<button type="button" class="tc-tts-tab' + (activeType === 'tap_seller' ? ' tc-tts-tab--active' : '') + '" data-tts-tab="tap_seller" role="tab" aria-selected="' + (activeType === 'tap_seller' ? 'true' : 'false') + '">' + t('tc.tts.type_tap') + '</button>' +
            '</div>' +
            '<div id="ttsAuthList">' + renderAuthCards(activeType) + '</div>' +
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
      excludeFromSettlement: !!e.excludeFromSettlement,
      _hostIndex: s._hostIndex,
      _liveIndex: s._liveIndex,
      _batch: s._batch,
      _host: s._host
    };
  }
  function haPastLivesSessionEligibleForExclude(s) {
    var m = typeof s.excludeFromSettlement !== 'undefined' ? s : haGetSessionWithEdits(s);
    if (m.settled) return false;
    if (haLiveSessionIsAbnormal(m)) return false;
    return true;
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
  // Settlement detail host drawer (performance: render details only when opened)
  var haBatchDetailDrawerHostMap = {};
  var haBatchDetailDrawerCurrency = 'USD';
  // Track current opened host for drawer type-switching.
  var haBatchDetailDrawerActiveHostIdx = null;
  var haSettleWithdrawFilter = 'pending';
  var haSettleWithdrawCountryFilter = undefined;
  var haPastLivesFilterHost = '';
  var haPastLivesFilterRoom = '';
  var haPastLivesFilterLa = '';
  var haPastLivesFilterDateStart = '';
  var haPastLivesFilterDateEnd = '';
  var haPastLivesFilterSettled = '';
  var haPastLivesFilterStmtScope = '';
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
    var num = Number(amount);
    // UI 口径：两位小数，四舍五入；同时输出千分位分隔
    var rounded = Math.round((num + Number.EPSILON) * 100) / 100;
    var n = rounded.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
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
  function haSettleRulesV2CountryMatches(r, country) {
    return r.country == null || r.country === '' || r.country === country;
  }
  function haSettleRulesV2GetRecord(country, sessionDateStr, type) {
    if (!country || !sessionDateStr || !/^\d{4}-\d{2}-\d{2}$/.test(sessionDateStr)) return null;
    haSettleRulesV2Load();
    var list = (haSettleRulesV2 || []).filter(function (r) {
      if (!haSettleRulesV2CountryMatches(r, country)) return false;
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
      if (!haSettleRulesV2CountryMatches(r, country)) return false;
      if ((r.dimension || 'merchant') !== 'merchant') return false;
      return matchDate(r, isHourly);
    }).sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); })[0];
    var laRec = laNorm ? (haSettleRulesV2 || []).filter(function (r) {
      if (!haSettleRulesV2CountryMatches(r, country)) return false;
      if ((r.dimension || '') !== 'live_account') return false;
      var rLa = (r.liveAccountUsername || '').replace(/^@/, '');
      if (rLa !== laNorm) return false;
      if (!matchDate(r, isHourly)) return false;
      if (r.creatorIds && r.creatorIds.length) return false;
      if (r.byCreator && Object.keys(r.byCreator).length) return false;
      return true;
    }).sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); })[0] : null;
    var crRec = creatorId != null ? (haSettleRulesV2 || []).filter(function (r) {
      if (!haSettleRulesV2CountryMatches(r, country)) return false;
      if (!matchDate(r, isHourly)) return false;
      if ((r.dimension || '') === 'live_account') {
        var rLa = (r.liveAccountUsername || '').replace(/^@/, '');
        if (!laNorm || rLa !== laNorm) return false;
        if (r.creatorIds && r.creatorIds.length) {
          return r.creatorIds.some(function (id) { return String(id) === String(creatorId); });
        }
        if (r.byCreator && (r.byCreator[creatorId] || r.byCreator[String(creatorId)])) return true;
        return false;
      }
      if ((r.dimension || '') === 'creator') {
        var rLa2 = (r.liveAccountUsername || '').replace(/^@/, '');
        if (rLa2 && laNorm && rLa2 !== laNorm) return false;
        var rId = r.creatorId;
        if (rId != null && String(rId) === String(creatorId)) return true;
        if (r.byCreator && (r.byCreator[creatorId] || r.byCreator[String(creatorId)])) return true;
        return false;
      }
      return false;
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
    var liveAccountFilters = (opts.liveAccountUsernames || []).map(function (la) { return (la || '').replace(/^@/, ''); }).filter(Boolean);
    var creatorFilters = (opts.creatorNames || []).map(function (n) { return (n || '').trim(); }).filter(Boolean);
    var sessionsInRange = haLiveSessions.filter(function (s) {
      var merged = haGetSessionWithEdits(s);
      if (merged.excludeFromSettlement) return false;
      var t = merged.startAt ? new Date(merged.startAt).getTime() : 0;
      if (t < startTs || t > endTs) return false;
      if (liveAccountFilters.length) {
        var sLa = (merged.liveAccountUsername || '').replace(/^@/, '');
        if (liveAccountFilters.indexOf(sLa) === -1) return false;
      }
      if (creatorFilters.length && creatorFilters.indexOf((merged.creatorName || '').trim()) === -1) return false;
      return true;
    });
    var byLa = {};
    sessionsInRange.forEach(function (s) {
      s = haGetSessionWithEdits(s);
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
  function renderHaSettleRulesV2() {
    haSettleRulesV2Load();
    var createForm = renderHaSettleRulesV2CreateForm();
    var historyTable = renderHaSettleRulesV2HistoryTable();
    return '<div class="ha-settle-content ha-rules-v2-page">' +
      '<div class="card ha-settle-card ha-rules-card">' +
        '<div class="ha-settle-intro">' +
          '<h3 class="ha-rules-title">' + t('tc.ha.rules_v2_title') + '</h3>' +
          '<p class="ha-settle-desc">' + t('tc.ha.rules_v2_desc') + '</p>' +
          '<p class="ha-rules-v2-priority" title="' + t('tc.ha.rules_priority_hint') + '"><i class="fas fa-info-circle"></i> ' + t('tc.ha.rules_priority') + ': ' + t('tc.ha.rules_priority_hint') + '</p>' +
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
    else if (dim === 'live_account') {
      var hasScopedCreators = (record.creatorIds && record.creatorIds.length) || (record.byCreator && Object.keys(record.byCreator).length);
      if (record.byLiveAccount && !hasScopedCreators) {
        var laKey = record.liveAccountUsername || Object.keys(record.byLiveAccount)[0];
        cfg = laKey ? record.byLiveAccount[laKey] : null;
      } else if (record.byCreator) {
        var keys = Object.keys(record.byCreator);
        cfg = keys.length ? (record.byCreator[keys[0]] || record.byCreator[String(keys[0])]) : null;
      }
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
  function haRulesV2HistorySubjectLabel(r) {
    var dim = r.dimension || 'merchant';
    var la = (r.liveAccountUsername || '').replace(/^@/, '') || '—';
    function nameForCreatorId(id) {
      var u = (haManageUsers || []).filter(function (x) { return String(x.id) === String(id); })[0];
      return u ? (u.name || ('#' + id)) : ('#' + id);
    }
    if (dim === 'creator') {
      if (r.creatorId != null) {
        var single = nameForCreatorId(r.creatorId);
        return la !== '—' ? (la + ' · ' + single) : single;
      }
      if (r.byCreator && Object.keys(r.byCreator).length) {
        var cids = Object.keys(r.byCreator);
        var cnames = cids.map(function (id) { return nameForCreatorId(id); }).join(', ');
        return la !== '—' ? (la + ' · ' + cnames) : cnames;
      }
    }
    if (dim === 'live_account') {
      var idList = [];
      if (r.creatorIds && r.creatorIds.length) idList = r.creatorIds.slice();
      else if (r.byCreator && Object.keys(r.byCreator).length) idList = Object.keys(r.byCreator);
      if (idList.length) {
        var names = idList.map(function (id) { return nameForCreatorId(id); }).join(', ');
        return la + ' · ' + names;
      }
      return la;
    }
    return r.country || la || '—';
  }
  function renderHaSettleRulesV2HistoryTable() {
    var filtered = (haSettleRulesV2 || []).filter(function (r) {
      var dim = r.dimension || 'merchant';
      return dim === 'live_account' || dim === 'creator';
    });
    var sorted = filtered.slice().sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); });
    if (!sorted.length) {
      return '<div class="ha-rules-v2-history-empty ha-rules-empty-state">' +
        '<div class="ha-rules-empty-icon"><i class="fas fa-sliders-h"></i></div>' +
        '<p class="ha-rules-empty-title">' + t('tc.ha.rules_v2_empty_title') + '</p>' +
        '<p class="ha-rules-empty-desc">' + t('tc.ha.rules_v2_empty') + '</p>' +
      '</div>';
    }
    var baseCols = [t('tc.ha.rules_v2_subject'), t('tc.ha.rules_v2_hourly_summary'), t('tc.ha.rules_v2_cps_summary'), t('tc.ha.rules_effective_period'), t('tc.ha.rules_v2_status'), t('tc.ha.rules_v2_meta')];
    var cols = baseCols;
    var headerRow = '<tr>' + cols.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr>';
    var rows = sorted.map(function (r) {
      var creatorName = r.createdBy ? findMemberName(r.createdBy).name : '-';
      var createdAtStr = r.createdAt ? new Date(r.createdAt).toLocaleString(getLang() === 'zh' ? 'zh-CN' : 'en-US', { dateStyle: 'short', timeStyle: 'short' }) : '-';
      var todayStr = new Date().toISOString().slice(0, 10);
      function inEffectiveRange(start, end) {
        return (!start || todayStr >= start) && (!end || todayStr <= end);
      }
      var hourlyActive = inEffectiveRange(r.hourlyEffectiveStart, r.hourlyEffectiveEnd);
      var cpsActive = inEffectiveRange(r.cpsEffectiveStart, r.cpsEffectiveEnd);
      var statusRaw = '';
      if (hourlyActive || cpsActive) {
        statusRaw = getLang() === 'zh' ? '生效' : 'Active';
      } else {
        var starts = [];
        if (r.hourlyEffectiveStart) starts.push(r.hourlyEffectiveStart);
        if (r.cpsEffectiveStart) starts.push(r.cpsEffectiveStart);
        if (starts.length) {
          var minStart = starts.slice().sort()[0];
          statusRaw = todayStr < minStart ? (getLang() === 'zh' ? '待生效' : 'Pending') : (getLang() === 'zh' ? '已失效' : 'Expired');
        } else {
          statusRaw = getLang() === 'zh' ? '已失效' : 'Expired';
        }
      }
      var statusVal = (statusRaw ? (function () {
        var s = statusRaw.toLowerCase();
        var cls = 'ha-rules-v2-status-badge';
        if (s === 'active' || s === '生效') cls += ' ha-rules-v2-status-badge--active';
        else if (s === 'pending' || s === '待生效') cls += ' ha-rules-v2-status-badge--pending';
        else if (s === 'expired' || s === '已失效') cls += ' ha-rules-v2-status-badge--expired';
        return '<span class="' + cls + '">' + statusRaw + '</span>';
      })() : '—');
      var subjectVal = haRulesV2HistorySubjectLabel(r);
      var effectivePeriod = (r.hourlyEffectiveStart || r.hourlyEffectiveEnd || r.cpsEffectiveStart || r.cpsEffectiveEnd)
        ? ((r.hourlyEffectiveStart || r.cpsEffectiveStart || '') + ' – ' + (r.hourlyEffectiveEnd || r.cpsEffectiveEnd || ''))
        : '—';
      var metaVal = '<span class="ha-rules-v2-meta">' + (creatorName !== '-' ? creatorName + ' · ' : '') + createdAtStr + '</span>';
      var cfg = haRulesV2GetConfig(r);
      var hourlyVal = haRulesV2FormatHourlySummary(cfg);
      var cpsVal = haRulesV2FormatCpsSummary(cfg);
      var cells = [subjectVal, hourlyVal, cpsVal, effectivePeriod, statusVal, metaVal];
      return '<tr>' + cells.map(function (cell) {
        var content = (typeof cell === 'string' && cell.indexOf('<') !== -1) ? cell : (cell || '—');
        return '<td>' + content + '</td>';
      }).join('') + '</tr>';
    }).join('');
    return '<div class="ha-rules-v2-history-table-wrap"><table class="ha-rules-table ha-rules-v2-history-table"><thead>' + headerRow + '</thead><tbody>' + rows + '</tbody></table></div>';
  }
  function renderHaSettleRulesV2CreateForm() {
    var laUsers = [];
    (haManageUsers || []).forEach(function (u) {
      var la = u.liveAccount;
      if (la && la.username) {
        var un = (la.username + '').replace(/^@/, '');
        if (laUsers.indexOf(un) === -1) laUsers.push(un);
      }
    });
    var liveAccountOpts = '<option value="">' + t('tc.ha.rules_live_account_select') + '</option>' + laUsers.map(function (un) { return '<option value="' + un + '">' + un + '</option>'; }).join('');
    var creatorOpts = '';
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
    var dimBlock =
      '<div class="ha-rules-block"><label class="ha-rules-block-label">' + t('tc.ha.rules_v2_tab_live_account') + '</label><select class="ha-rules-select ha-rules-v2-live-account" id="haRulesV2LiveAccount">' + liveAccountOpts + '</select></div>' +
      '<div class="ha-rules-block ha-rules-block--full">' +
        '<label class="ha-rules-block-label">' + t('tc.ha.rules_v2_creators_optional') + '</label>' +
        '<div class="ms-wrap" id="haRulesV2CreatorTagSelect">' +
          '<div class="ms-selected" id="haRulesV2CreatorTags"></div>' +
          '<input type="text" class="ms-input" id="haRulesV2CreatorSearch" placeholder="' + t('tc.ha.rules_creator_add_search_ph') + '">' +
          '<div class="ms-dropdown ms-dropdown--hidden" id="haRulesV2CreatorSuggestions"></div>' +
        '</div>' +
        '<p class="ha-rules-hint">' + t('tc.ha.rules_la_creator_hint') + '</p>' +
        '<select class="ha-rules-select ha-rules-v2-creator" id="haRulesV2Creator" multiple style="display:none">' + creatorOpts + '</select>' +
      '</div>';
    return '<div class="ha-rules-v2-form card" data-rules-v2-dimension="live_account">' +
      '<h4 class="ha-rules-v2-form-title">' + t('tc.ha.rules_v2_create_new') + '</h4>' +
      '<div class="ha-rules-v2-form-section">' +
        '<h5 class="ha-rules-v2-form-section-title">' + t('tc.ha.rules_v2_section_subject') + '</h5>' +
        dimBlock +
      '</div>' +
      '<div class="ha-rules-v2-form-section ha-rules-v2-form-section--last">' +
        '<h5 class="ha-rules-v2-form-section-title">' + t('tc.ha.rules_v2_section_currency') + '</h5>' +
        '<div class="ha-rules-block ha-rules-block--inline"><select class="ha-rules-select ha-rules-v2-currency" id="haRulesV2Currency"><option value="USD">USD</option><option value="CNY">CNY</option><option value="EUR">EUR</option></select></div>' +
      '</div>' +
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
    var subjectVal = haRulesV2HistorySubjectLabel(rec);
    var m = rec.merchant || {};
    var hourlyRows = (m.hourlyRates || []).map(function (r) {
      var rowPeriod = (r.effectiveStart || r.effectiveEnd) ? ((r.effectiveStart || '') + ' – ' + (r.effectiveEnd || '')) : '—';
      return '<tr><td>' + rowPeriod + '</td><td>' + (r.rate || 0) + ' ' + t('tc.ha.rules_hourly_ph') + '</td></tr>';
    }).join('');
    var tiersRows = (m.cpsTiers || []).map(function (tier) {
      return '<tr><td>' + (tier.min || 0) + '</td><td>' + (tier.max != null ? tier.max : '—') + '</td><td>' + (tier.rate || 0) + ' %</td></tr>';
    }).join('');
    return '<div class="ha-rules-v2-detail card">' +
      '<h4 class="ha-rules-v2-form-title">' + subjectVal + ' · ' + (rec.hourlyEffectiveStart || '') + ' – ' + (rec.cpsEffectiveEnd || '') + '</h4>' +
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
    var liveAccountSet = {};
    (haSettleBatches || []).forEach(function (b) { var la = (b.liveAccountUsername || '').replace(/^@/, ''); if (la) liveAccountSet[la] = true; });
    (haManageUsers || []).forEach(function (u) { var la = u.liveAccount && (u.liveAccount.username || '').replace(/^@/, ''); if (la) liveAccountSet[la] = true; });
    var liveAccountList = Object.keys(liveAccountSet).sort();
    var creatorSet = {};
    (haSettleBatches || []).forEach(function (b) { (b.hosts || []).forEach(function (h) { var n = (h.name || '').trim(); if (n) creatorSet[n] = true; }); });
    (haManageUsers || []).forEach(function (u) { var n = (u.name || '').trim(); if (n) creatorSet[n] = true; });
    var creatorList = Object.keys(creatorSet).sort();
    var genModalHtml = '<div class="ha-rules-creator-modal-overlay ha-generate-batch-modal" id="haGenerateBatchModal">' +
      '<div class="ha-rules-creator-modal">' +
        '<button type="button" class="ha-modal-close ha-generate-batch-close" aria-label="Close"><i class="fas fa-times"></i></button>' +
        '<h3 class="ha-rules-modal-title">' + t('tc.ha.generate_modal_title') + '</h3>' +
        '<div class="ha-rules-creator-modal-body">' +
          '<div class="ha-generate-batch-form">' +
            '<div class="ha-rules-field"><label class="ha-rules-block-label">' + t('tc.ha.generate_modal_live_account') + ' <span class="ha-rules-label-optional">' + t('tc.ha.generate_modal_optional') + '</span></label><div class="ms-wrap ha-generate-ms-wrap" id="haGenerateLiveAccountWrap">' +
              '<div class="ms-selected" id="haGenerateLiveAccountTags"></div>' +
              '<input type="text" class="ms-input" id="haGenerateLiveAccountSearch" placeholder="' + t('tc.ha.generate_modal_select_ph') + '" autocomplete="off">' +
              '<div class="ms-dropdown ms-dropdown--hidden" id="haGenerateLiveAccountDropdown"></div>' +
            '</div></div>' +
            '<div class="ha-rules-field"><label class="ha-rules-block-label">' + t('tc.ha.generate_modal_creator') + ' <span class="ha-rules-label-optional">' + t('tc.ha.generate_modal_optional') + '</span></label><div class="ms-wrap ha-generate-ms-wrap" id="haGenerateCreatorWrap">' +
              '<div class="ms-selected" id="haGenerateCreatorTags"></div>' +
              '<input type="text" class="ms-input" id="haGenerateCreatorSearch" placeholder="' + t('tc.ha.generate_modal_select_ph') + '" autocomplete="off">' +
              '<div class="ms-dropdown ms-dropdown--hidden" id="haGenerateCreatorDropdown"></div>' +
            '</div></div>' +
            '<p class="ha-rules-hint ha-generate-filter-hint">' + t('tc.ha.generate_modal_filter_hint') + '</p>' +
            '<div class="ha-rules-field"><label class="ha-rules-block-label">' + t('tc.ha.generate_modal_period') + ' <span class="ha-rules-required">*</span></label><div class="ha-generate-batch-dates"><input type="date" class="ha-rules-input" id="haGenerateDateStart"><span class="ha-settle-date-sep">–</span><input type="date" class="ha-rules-input" id="haGenerateDateEnd"></div></div>' +
            '<div class="ha-rules-field"><label class="ha-rules-block-label">' + t('tc.ha.generate_modal_settle_types') + ' <span class="ha-rules-required">*</span></label><div class="ha-generate-batch-types"><label class="ha-generate-type-opt"><input type="checkbox" class="ha-generate-include-hourly" checked> ' + t('tc.ha.generate_modal_include_hourly') + '</label><label class="ha-generate-type-opt"><input type="checkbox" class="ha-generate-include-commission" checked> ' + t('tc.ha.generate_modal_include_commission') + '</label><label class="ha-generate-type-opt"><input type="checkbox" class="ha-generate-include-other-rewards" checked> ' + t('tc.ha.generate_modal_include_other_rewards') + '</label></div></div>' +
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
    haBatchDetailDrawerCurrency = cur;
    var statusCls = batch.status === 'draft' ? 'badge--pending' : 'badge--success';

    var hosts = (batch.hosts || []).slice();
    hosts.sort(function (a, b) { return ((b.total || 0) - (a.total || 0)); });

    var hasHourly = (batch.totalHourly || 0) > 0 || hosts.some(function (h) { return (h.hourly || 0) > 0; });
    var hasCps = (batch.totalCommission || 0) > 0 || hosts.some(function (h) { return (h.commission || 0) > 0; });
    var hasOtherRewards = (batch.totalBonus || 0) > 0 || hosts.some(function (h) { return (h.otherRewards && h.otherRewards.length) || (h.bonus || 0) > 0; });

    var lang = getLang();
    var emptyHourlyText = (lang === 'zh') ? '暂无时薪明细' : 'No hourly settlement.';
    var emptyCpsText = (lang === 'zh') ? '暂无CPS明细' : 'No CPS settlement.';
    var emptyOtherText = (lang === 'zh') ? '暂无其他奖励' : 'No other rewards.';

    var summaryCards = [];
    if (hasHourly) summaryCards.push('<div class="ha-batch-detail-summary-card"><span class="ha-batch-detail-summary-icon"><i class="fas fa-clock"></i></span><span class="ha-batch-detail-summary-label">' + t('tc.ha.th_hourly_total') + '</span><span class="ha-batch-detail-summary-value">' + haFormatAmount(batch.totalHourly || 0, cur) + '</span></div>');
    if (hasCps) summaryCards.push('<div class="ha-batch-detail-summary-card"><span class="ha-batch-detail-summary-icon"><i class="fas fa-percent"></i></span><span class="ha-batch-detail-summary-label">' + t('tc.ha.th_commission_total') + '</span><span class="ha-batch-detail-summary-value">' + haFormatAmount(batch.totalCommission || 0, cur) + '</span></div>');
    if (hasOtherRewards) summaryCards.push('<div class="ha-batch-detail-summary-card"><span class="ha-batch-detail-summary-icon"><i class="fas fa-gift"></i></span><span class="ha-batch-detail-summary-label">' + t('tc.ha.bonus_other') + '</span><span class="ha-batch-detail-summary-value">' + haFormatAmount(batch.totalBonus || 0, cur) + '</span></div>');
    summaryCards.push('<div class="ha-batch-detail-summary-card ha-batch-detail-summary-card--total"><span class="ha-batch-detail-summary-icon"><i class="fas fa-wallet"></i></span><span class="ha-batch-detail-summary-label">' + t('tc.ha.batch_total') + '</span><span class="ha-batch-detail-summary-value">' + haFormatAmount(batch.totalAmount || 0, cur) + '</span></div>');

    var tableHeader = '<tr><th>' + t('tc.ha.th_creator') + '</th><th>' + t('tc.ha.th_hourly_total') + '</th><th>' + t('tc.ha.th_commission_total') + '</th><th>' + t('tc.ha.bonus_other') + '</th><th>' + t('tc.ha.batch_total') + '</th></tr>';

    var emptyRow = '<tr><td colspan="5" class="ha-settle-empty ha-rules-empty-state"><span class="ha-rules-empty-text">' + (lang === 'zh' ? '暂无结算明细' : 'No settlement detail.') + '</span></td></tr>';

    function computeOtherRewardsTotal(h, currency) {
      var bonus = h && h.bonus ? (Number(h.bonus) || 0) : 0;
      var arr = (h && h.otherRewards && h.otherRewards.length) ? h.otherRewards : [];
      var sum = arr.reduce(function (s, r) { return s + (Number(r.amount) || 0); }, 0);
      return Math.round((bonus + sum) * 100) / 100;
    }

    function hostCurrency(h) {
      return (h && h.currency) ? h.currency : cur;
    }

    var creatorRows = [];
    haBatchDetailDrawerHostMap = {};
    if (hosts.length) {
      hosts.forEach(function (h, hi) {
        var hCur = hostCurrency(h);
        var hourlyTotal = h.hourly || 0;
        var cpsTotal = h.commission || 0;
        var otherTotal = computeOtherRewardsTotal(h, hCur);
        var totalAmt = (h.total != null) ? h.total : (hourlyTotal + cpsTotal + otherTotal);

        var hostName = h.name || '-';
        var hostIdx = String(hi);
        haBatchDetailDrawerHostMap[hostIdx] = h;

        creatorRows.push(
          '<tr class="ha-batch-host-row" data-host-idx="' + hostIdx + '">' +
            '<td><span class="ha-batch-expand-icon"><i class="fas fa-chevron-right"></i></span>' + hostName + '</td>' +
            '<td class="ha-amount-cell">' + haFormatAmount(hourlyTotal, hCur) + '</td>' +
            '<td class="ha-amount-cell">' + haFormatAmount(cpsTotal, hCur) + '</td>' +
            '<td class="ha-amount-cell">' + haFormatAmount(otherTotal, hCur) + '</td>' +
            '<td class="ha-amount-cell">' + haFormatAmount(totalAmt, hCur) + '</td>' +
          '</tr>'
        );
      });
    }

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
      '<div class="ha-settle-drawer-overlay" id="haBatchDetailDrawerOverlay"></div>' +
      '<aside class="ha-settle-drawer" id="haBatchDetailDrawer" aria-hidden="true">' +
        '<div class="ha-settle-drawer-header">' +
          '<div>' +
            '<div class="ha-settle-drawer-title" id="haBatchDetailDrawerHostTitle">-</div>' +
            '<div class="ha-settle-drawer-subtitle" id="haBatchDetailDrawerHostTotal">-</div>' +
          '</div>' +
          '<button type="button" class="ha-settle-drawer-close" id="haBatchDetailDrawerClose" aria-label="Close"><i class="fas fa-times"></i></button>' +
        '</div>' +
        '<div class="ha-settle-drawer-body" id="haBatchDetailDrawerBody"></div>' +
      '</aside>' +
    '</div>';
  }

  // Render host details content for batch detail drawer (lazy render)
  function renderHaBatchDetailDrawerHostBody(hostIdx, forcedActiveType) {
    var host = haBatchDetailDrawerHostMap[String(hostIdx)];
    if (!host) return '<div class="ha-rules-empty-state"><span class="ha-rules-empty-text">Not found.</span></div>';

    var lang = getLang();
    var cur = haBatchDetailDrawerCurrency || 'USD';
    var hCur = host.currency || cur;

    var emptyHourlyText = (lang === 'zh') ? '暂无时薪明细' : 'No hourly settlement.';
    var emptyCpsText = (lang === 'zh') ? '暂无CPS明细' : 'No CPS settlement.';
    var emptyOtherText = (lang === 'zh') ? '暂无其他奖励' : 'No other rewards.';

    function computeOtherRewardsTotal(h) {
      var bonus = h && h.bonus ? (Number(h.bonus) || 0) : 0;
      var arr = (h && h.otherRewards && h.otherRewards.length) ? h.otherRewards : [];
      var sum = arr.reduce(function (s, r) { return s + (Number(r.amount) || 0); }, 0);
      return Math.round((bonus + sum) * 100) / 100;
    }

    var hourlyTotal = host.hourly || 0;
    var cpsTotal = host.commission || 0;
    var otherTotal = computeOtherRewardsTotal(host);
    var hostTotal = (host.total != null) ? host.total : (hourlyTotal + cpsTotal + otherTotal);

    var lives = host.lives || [];
    var totalDur = lives.reduce(function (s, lv) { return s + (lv.durationSeconds || 0); }, 0);

    // ===== Active type (default by totals, can be forced) =====
    var typesForDefault = [
      { key: 'hourly', total: hourlyTotal },
      { key: 'cps', total: cpsTotal },
      { key: 'other_rewards', total: otherTotal }
    ];
    typesForDefault.sort(function (a, b) { return (b.total || 0) - (a.total || 0); });
    var validForced = forcedActiveType && typesForDefault.some(function (x) { return x.key === forcedActiveType; });
    var activeType = validForced
      ? forcedActiveType
      : (typesForDefault[0] && typesForDefault[0].key ? typesForDefault[0].key : 'hourly');

    var hourlyTable = '';
    var cpsTable = '';
    var otherTable = '';

    // ===== Hourly (merged columns) =====
    if (activeType === 'hourly') {
      var hourlyRows = lives.map(function (lv) {
        var handle = lv.handle || (lv.liveAccountUsername ? ('@' + String(lv.liveAccountUsername).replace(/^@/, '')) : null) || host.handle || '-';
        var hr = lv.hourlyRate != null ? lv.hourlyRate : (totalDur ? (hourlyTotal || 0) / (totalDur / 3600) : 0);
        var amt = lv.hourlyAmount != null ? lv.hourlyAmount : (totalDur ? (hourlyTotal || 0) * (lv.durationSeconds || 0) / totalDur : 0);
        if (!(amt > 0)) return null;

        return '' +
          '<tr>' +
          '  <td>' +
          '    <div class="ha-batch-merged-cell">' +
          '      <div class="ha-batch-merged-top">' + (lv.roomId || '-') + '</div>' +
          '      <div class="ha-batch-merged-sub">' + (handle || '-') + '</div>' +
          '      <div class="ha-batch-merged-event">' + (lv.eventName || '-') + '</div>' +
          '    </div>' +
          '  </td>' +
          '  <td>' +
          '    <div class="ha-batch-merged-cell">' +
          '      <div class="ha-batch-merged-top">' + formatLiveStartEnd(lv.startAt, lv.endAt) + '</div>' +
          '      <div class="ha-batch-merged-sub">' + formatDurationSeconds(lv.durationSeconds) + '</div>' +
          '    </div>' +
          '  </td>' +
          '  <td class="ha-amount-cell">' +
          '    <div class="ha-batch-merged-cell">' +
          '      <div class="ha-batch-merged-top">' + t('tc.ha.live_hourly_rate') + ': ' + haFormatAmount(hr, hCur) + '</div>' +
          '      <div class="ha-batch-merged-amount">' + haFormatAmount(amt, hCur) + '</div>' +
          '    </div>' +
          '  </td>' +
          '</tr>';
      }).filter(Boolean).join('');

      var hourlyTableBody = hourlyRows ? hourlyRows : '<tr><td colspan="3" class="ha-rules-empty-state"><span class="ha-rules-empty-text">' + emptyHourlyText + '</span></td></tr>';

      var hourlyRoomHandleTh = (lang === 'zh') ? 'Room ID & Handle' : 'Room ID & Handle';
      var hourlyRateAmtTh = (lang === 'zh') ? 'Rate & Amount' : 'Rate & Amount';
      hourlyTable = '<table class="ha-batch-lives-table"><thead><tr>' +
        '<th>' + hourlyRoomHandleTh + '</th>' +
        '<th>' + t('tc.ha.live_start_end') + ' / ' + t('tc.ha.live_duration') + '</th>' +
        '<th>' + hourlyRateAmtTh + '</th>' +
        '</tr></thead><tbody>' + hourlyTableBody + '</tbody></table>';
    }

    // ===== CPS (merged columns) =====
    if (activeType === 'cps') {
      var cpsRows = lives.map(function (lv) {
        var handle = lv.handle || (lv.liveAccountUsername ? ('@' + String(lv.liveAccountUsername).replace(/^@/, '')) : null) || host.handle || '-';
        var rate = lv.cpsRate != null ? ((lv.cpsRate * 100) + '%') : '—';
        var amt = lv.cpsAmount != null ? lv.cpsAmount : (lives.length ? (cpsTotal || 0) / lives.length : 0);
        if (!(amt > 0)) return null;

        return '' +
          '<tr>' +
          '  <td>' +
          '    <div class="ha-batch-merged-cell">' +
          '      <div class="ha-batch-merged-top">' + (lv.roomId || '-') + '</div>' +
          '      <div class="ha-batch-merged-sub">' + (handle || '-') + '</div>' +
          '      <div class="ha-batch-merged-event">' + (lv.eventName || '-') + '</div>' +
          '    </div>' +
          '  </td>' +
          '  <td>' +
          '    <div class="ha-batch-merged-cell">' +
          '      <div class="ha-batch-merged-top">' + formatLiveStartEnd(lv.startAt, lv.endAt) + '</div>' +
          '      <div class="ha-batch-merged-sub">' + formatDurationSeconds(lv.durationSeconds) + '</div>' +
          '    </div>' +
          '  </td>' +
          '  <td class="ha-amount-cell">' +
          '    <div class="ha-batch-merged-cell">' +
          '      <div class="ha-batch-merged-top">' + t('tc.ha.live_gmv') + ': ' + haFormatAmount(lv.gmv, hCur) + '</div>' +
          '      <div class="ha-batch-merged-top">' + t('tc.ha.live_cps_rate') + ': ' + rate + '</div>' +
          '      <div class="ha-batch-merged-amount">' + haFormatAmount(amt, hCur) + '</div>' +
          '    </div>' +
          '  </td>' +
          '</tr>';
      }).filter(Boolean).join('');

      var cpsTableBody = cpsRows ? cpsRows : '<tr><td colspan="3" class="ha-rules-empty-state"><span class="ha-rules-empty-text">' + emptyCpsText + '</span></td></tr>';

      var hourlyRoomHandleTh = (lang === 'zh') ? 'Room ID & Handle' : 'Room ID & Handle';
      cpsTable = '<table class="ha-batch-lives-table"><thead><tr>' +
        '<th>' + hourlyRoomHandleTh + '</th>' +
        '<th>' + t('tc.ha.live_start_end') + ' / ' + t('tc.ha.live_duration') + '</th>' +
        '<th>' + (lang === 'zh' ? 'GMV / CPS Rate & Amount' : 'GMV / CPS Rate & Amount') + '</th>' +
        '</tr></thead><tbody>' + cpsTableBody + '</tbody></table>';
    }

    // ===== Other rewards (merged columns) =====
    if (activeType === 'other_rewards') {
      var rewards = (host.otherRewards && host.otherRewards.length) ? host.otherRewards : (host.bonus ? [{ title: t('tc.ha.bonus_other'), date: '', amount: host.bonus }] : []);
      var otherRows = rewards.map(function (r) {
        var noteVal = (r.note != null && String(r.note).trim() !== '') ? r.note
          : (r.remark != null && String(r.remark).trim() !== '') ? r.remark
            : (r.remarks != null && String(r.remarks).trim() !== '') ? r.remarks
              : (r.备注 != null && String(r.备注).trim() !== '') ? r.备注
                : '-';
        return '' +
          '<tr>' +
          '  <td>' +
          '    <div class="ha-batch-merged-cell">' +
          '      <div class="ha-batch-merged-sub">' + (r.title || '-') + '</div>' +
          '      <div class="ha-batch-merged-top">' + (r.date || '-') + '</div>' +
          '    </div>' +
          '  </td>' +
          '  <td class="ha-amount-cell">' + haFormatAmount(r.amount || 0, hCur) + '</td>' +
          '  <td>' + noteVal + '</td>' +
          '</tr>';
      }).join('');

      var otherTableBody = otherRows ? otherRows : '<tr><td colspan="3" class="ha-rules-empty-state"><span class="ha-rules-empty-text">' + emptyOtherText + '</span></td></tr>';

      otherTable = '<table class="ha-batch-lives-table ha-batch-other-rewards-table"><thead><tr>' +
        '<th>' + (lang === 'zh' ? 'Title & Date' : 'Title & Date') + '</th>' +
        '<th>' + t('tc.ha.rules_bonus_amount') + '</th>' +
        '<th>' + t('tc.ha.rules_bonus_note') + '</th>' +
        '</tr></thead><tbody>' + otherTableBody + '</tbody></table>';
    }

    // ===== Active type & panes =====
    function typePane(paneKey, titleHtml, totalHtml, tableHtml) {
      var isActive = paneKey === activeType;
      return '' +
        '<div class="ha-batch-drawer-pane" data-pane="' + paneKey + '"' + (isActive ? '' : ' hidden') + '>' +
          '<div class="ha-batch-host-type-block">' +
            '<div class="ha-batch-host-type-header">' +
              '<span class="ha-batch-host-type-title">' + titleHtml + '</span>' +
              '<span class="ha-batch-host-type-total">' + totalHtml + '</span>' +
            '</div>' +
            tableHtml +
          '</div>' +
        '</div>';
    }

    var hourlyPane = typePane(
      'hourly',
      '<i class="fas fa-clock"></i> ' + t('tc.ha.rules_hourly'),
      haFormatAmount(hourlyTotal || 0, hCur),
      hourlyTable
    );
    var cpsPane = typePane(
      'cps',
      '<i class="fas fa-percent"></i> ' + t('tc.ha.rules_cps'),
      haFormatAmount(cpsTotal || 0, hCur),
      cpsTable
    );
    var otherPane = typePane(
      'other_rewards',
      '<i class="fas fa-gift"></i> ' + t('tc.ha.bonus_other'),
      haFormatAmount(otherTotal || 0, hCur),
      otherTable
    );

    var panesHtml = hourlyPane + cpsPane + otherPane;

    // ===== Top panels (Settlement-level style cards) =====
    function panelCard(key, iconHtml, label, total) {
      var isActive = key === activeType;
      return '' +
        '<div class="ha-batch-detail-summary-card ha-batch-detail-summary-card--filter' + (isActive ? ' ha-batch-detail-summary-card--active' : '') + '" ' +
          'role="button" tabindex="0" data-pane="' + key + '">' +
          '<span class="ha-batch-detail-summary-icon">' + iconHtml + '</span>' +
          '<span class="ha-batch-detail-summary-label">' + label + '</span>' +
          '<span class="ha-batch-detail-summary-value">' + haFormatAmount(total || 0, hCur) + '</span>' +
        '</div>';
    }

    var panelsHtml =
      '<div class="ha-batch-detail-summary ha-batch-drawer-summary">' +
      panelCard('hourly', '<i class="fas fa-clock"></i>', t('tc.ha.rules_hourly'), hourlyTotal) +
      panelCard('cps', '<i class="fas fa-percent"></i>', t('tc.ha.rules_cps'), cpsTotal) +
      panelCard('other_rewards', '<i class="fas fa-gift"></i>', t('tc.ha.bonus_other'), otherTotal) +
      '<div class="ha-batch-detail-summary-card ha-batch-detail-summary-card--total">' +
        '<span class="ha-batch-detail-summary-icon"><i class="fas fa-wallet"></i></span>' +
        '<span class="ha-batch-detail-summary-label">' + t('tc.ha.batch_total') + '</span>' +
        '<span class="ha-batch-detail-summary-value">' + haFormatAmount(hostTotal || 0, hCur) + '</span>' +
      '</div>' +
      '</div>';

    return '' +
      '<div class="ha-batch-drawer-meta-line">' +
      (lang === 'zh' ? '合计口径：主播合计 = 时薪 + CPS + 其他' : 'Accounting: Host total = Hourly + CPS + Bonuses') +
      '</div>' +
      panelsHtml +
      '<div class="ha-batch-drawer-panes">' + panesHtml + '</div>';
  }

  function haOpenBatchDetailHostDrawer(hostIdx, activePaneKey) {
    var drawer = document.getElementById('haBatchDetailDrawer');
    var overlay = document.getElementById('haBatchDetailDrawerOverlay');
    var body = document.getElementById('haBatchDetailDrawerBody');
    var hostTitleEl = document.getElementById('haBatchDetailDrawerHostTitle');
    var hostTotalEl = document.getElementById('haBatchDetailDrawerHostTotal');
    if (!drawer || !overlay || !body) return;

    var host = haBatchDetailDrawerHostMap[String(hostIdx)];
    if (!host) return;

    haBatchDetailDrawerActiveHostIdx = String(hostIdx);

    var cur = haBatchDetailDrawerCurrency || 'USD';
    var hCur = host.currency || cur;
    var hourlyTotal = host.hourly || 0;
    var cpsTotal = host.commission || 0;
    var otherTotal = (host.bonus || 0) + (host.otherRewards || []).reduce(function (s, r) { return s + (Number(r.amount) || 0); }, 0);
    otherTotal = Math.round(otherTotal * 100) / 100;
    var hostTotal = (host.total != null) ? host.total : (hourlyTotal + cpsTotal + otherTotal);

    if (hostTitleEl) hostTitleEl.textContent = host.name || '-';
    if (hostTotalEl) hostTotalEl.textContent = haFormatAmount(hostTotal || 0, hCur);

    // Render content
    var html = renderHaBatchDetailDrawerHostBody(hostIdx, activePaneKey);
    body.innerHTML = html;

    // Show drawer
    drawer.classList.add('ha-settle-drawer--open');
    overlay.classList.add('ha-settle-drawer-overlay--open');
    drawer.setAttribute('aria-hidden', 'false');

    if (!document.body.dataset.haBatchDetailDrawerEscBound) {
      document.body.dataset.haBatchDetailDrawerEscBound = '1';
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          haCloseBatchDetailHostDrawer();
        }
      });
    }
  }

  function haCloseBatchDetailHostDrawer() {
    var drawer = document.getElementById('haBatchDetailDrawer');
    var overlay = document.getElementById('haBatchDetailDrawerOverlay');
    if (!drawer || !overlay) return;
    drawer.classList.remove('ha-settle-drawer--open');
    overlay.classList.remove('ha-settle-drawer-overlay--open');
    drawer.setAttribute('aria-hidden', 'true');
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
    if (haPastLivesFilterStmtScope === 'in_scope') {
      list = list.filter(function (s) {
        return !s.settled && !haLiveSessionIsAbnormal(s) && !s.excludeFromSettlement;
      });
    } else if (haPastLivesFilterStmtScope === 'excluded') {
      list = list.filter(function (s) { return !!s.excludeFromSettlement; });
    }
    return list;
  }

  function renderHaPastLivesPage() {
    if (haPastLivesView === 'abnormal') return renderHaPastLivesAbnormalPage();
    var list = haPastLivesFilteredSessions();
    var abnormalCount = haLiveSessionAbnormalCount();
    var filterHtml = '<div class="ha-past-lives-filters">' +
      '<div class="ha-past-lives-filters-row ha-past-lives-filters-row--inputs">' +
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
      '</div>' +
      '<div class="ha-past-lives-filters-row ha-past-lives-filters-row--segments">' +
      '<div class="ha-past-lives-filter-group">' +
        '<span class="ha-past-lives-filter-label">' + t('tc.ha.past_lives_filter_settled') + '</span>' +
        '<div class="ha-past-lives-segmented" role="radiogroup" aria-label="' + t('tc.ha.past_lives_filter_settled') + '">' +
          '<label class="ha-past-lives-segmented-item' + (haPastLivesFilterSettled === '' ? ' ha-past-lives-segmented-item--active' : '') + '">' +
            '<input type="radio" name="haPastLivesFilterSettled" value=""' + (haPastLivesFilterSettled === '' ? ' checked' : '') + '>' +
            '<span>' + t('common.all') + '</span></label>' +
          '<label class="ha-past-lives-segmented-item' + (haPastLivesFilterSettled === 'yes' ? ' ha-past-lives-segmented-item--active' : '') + '">' +
            '<input type="radio" name="haPastLivesFilterSettled" value="yes"' + (haPastLivesFilterSettled === 'yes' ? ' checked' : '') + '>' +
            '<span>' + t('tc.ha.settled') + '</span></label>' +
          '<label class="ha-past-lives-segmented-item' + (haPastLivesFilterSettled === 'no' ? ' ha-past-lives-segmented-item--active' : '') + '">' +
            '<input type="radio" name="haPastLivesFilterSettled" value="no"' + (haPastLivesFilterSettled === 'no' ? ' checked' : '') + '>' +
            '<span>' + t('tc.ha.unsettled') + '</span></label>' +
        '</div>' +
      '</div>' +
      '<div class="ha-past-lives-filter-group">' +
        '<span class="ha-past-lives-filter-label">' + t('tc.ha.past_lives_filter_stmt_scope') + '</span>' +
        '<div class="ha-past-lives-segmented" role="radiogroup" aria-label="' + t('tc.ha.past_lives_filter_stmt_scope') + '">' +
          '<label class="ha-past-lives-segmented-item' + (haPastLivesFilterStmtScope === '' ? ' ha-past-lives-segmented-item--active' : '') + '">' +
            '<input type="radio" name="haPastLivesFilterStmtScope" value=""' + (haPastLivesFilterStmtScope === '' ? ' checked' : '') + '>' +
            '<span>' + t('tc.ha.past_lives_filter_stmt_all') + '</span></label>' +
          '<label class="ha-past-lives-segmented-item' + (haPastLivesFilterStmtScope === 'in_scope' ? ' ha-past-lives-segmented-item--active' : '') + '">' +
            '<input type="radio" name="haPastLivesFilterStmtScope" value="in_scope"' + (haPastLivesFilterStmtScope === 'in_scope' ? ' checked' : '') + '>' +
            '<span>' + t('tc.ha.past_lives_filter_stmt_in_scope') + '</span></label>' +
          '<label class="ha-past-lives-segmented-item' + (haPastLivesFilterStmtScope === 'excluded' ? ' ha-past-lives-segmented-item--active' : '') + '">' +
            '<input type="radio" name="haPastLivesFilterStmtScope" value="excluded"' + (haPastLivesFilterStmtScope === 'excluded' ? ' checked' : '') + '>' +
            '<span>' + t('tc.ha.past_lives_filter_stmt_excluded') + '</span></label>' +
        '</div>' +
      '</div>' +
      '<div class="ha-past-lives-filter-actions">' +
        '<button type="button" class="btn btn-primary btn-sm" id="haPastLivesExport"><i class="fas fa-file-export"></i> ' + t('tc.ha.past_lives_export') + '</button>' +
        (abnormalCount > 0 ? '<button type="button" class="btn btn-secondary btn-sm ha-past-lives-fix-abnormal-entry" id="haPastLivesFixAbnormalEntry"><i class="fas fa-exclamation-triangle"></i> ' + t('tc.ha.past_lives_fix_abnormal') + ' (' + abnormalCount + ')</button>' : '') +
      '</div>' +
      '</div>' +
      '</div>';
    var rows = list.map(function (s) {
      var planned = formatLiveStartEnd(s.startAt, s.endAt) || '—';
      var actual = formatLiveStartEnd(s.actualStartAt, s.actualEndAt) || '—';
      var dur = s.durationSeconds ? (Math.round(s.durationSeconds / 3600 * 100) / 100) : '—';
      var gmvVal = s.gmv != null ? s.gmv : 0;
      var gmvDisplay = haFormatAmount(gmvVal, s.currency);
      var sidEsc = (s.sessionId || '').replace(/"/g, '&quot;');
      var settledBatchCell;
      if (s.settled) settledBatchCell = t('tc.ha.settled') + ' ' + (s.batchSn || '');
      else if (s.excludeFromSettlement) settledBatchCell = t('tc.ha.unsettled') + ' · <span class="badge badge--muted ha-past-lives-excluded-badge">' + t('tc.ha.past_lives_settle_excluded') + '</span>';
      else settledBatchCell = t('tc.ha.unsettled');
      var isAbn = haLiveSessionIsAbnormal(s);
      var abnBadge = isAbn ? '<span class="badge badge--warning ha-past-lives-abn-badge" title="' + t('tc.ha.past_lives_fix_abnormal') + '"><i class="fas fa-exclamation-triangle"></i></span>' : '';
      var canSelect = haPastLivesSessionEligibleForExclude(s);
      var chkCell = canSelect
        ? '<td class="ha-past-lives-td-checkbox"><input type="checkbox" class="ha-past-lives-row-check" data-session-id="' + sidEsc + '" aria-label="' + t('tc.ha.past_lives_th_select') + '"></td>'
        : '<td class="ha-past-lives-td-checkbox ha-past-lives-td-checkbox--na" title="' + (s.settled ? t('tc.ha.settled') : t('tc.ha.past_lives_fix_abnormal')) + '">—</td>';
      return '<tr class="ha-past-lives-row' + (isAbn ? ' ha-past-lives-row--abnormal' : '') + '" data-session-id="' + sidEsc + '">' +
        chkCell +
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
    var batchBarHtml = '<div class="ha-past-lives-batch-bar ha-past-lives-batch-bar--idle" id="haPastLivesBatchBar" role="region" aria-label="' + t('tc.ha.past_lives_batch_aria') + '">' +
      '<div class="ha-past-lives-batch-bar-inner">' +
        '<div class="ha-past-lives-batch-bar-text">' +
          '<span class="ha-past-lives-batch-title">' + t('tc.ha.past_lives_batch_title') + '</span>' +
          '<p class="ha-past-lives-batch-lead" id="haPastLivesBatchLead">' + t('tc.ha.past_lives_batch_hint') + '</p>' +
        '</div>' +
        '<div class="ha-past-lives-batch-actions">' +
        '<button type="button" class="btn btn-secondary btn-sm" id="haPastLivesBatchExclude" disabled title="' + t('tc.ha.past_lives_batch_disable_title') + '"><i class="fas fa-ban"></i> ' + t('tc.ha.past_lives_batch_exclude') + '</button>' +
        '<button type="button" class="btn btn-ghost btn-sm" id="haPastLivesBatchInclude" disabled title="' + t('tc.ha.past_lives_batch_disable_title') + '"><i class="fas fa-undo"></i> ' + t('tc.ha.past_lives_batch_include') + '</button>' +
        '</div></div></div>';
    var tableHtml = '<table class="ha-rules-table ha-settle-table ha-past-lives-table"><thead><tr>' +
      '<th class="ha-past-lives-th-checkbox" title="' + t('tc.ha.past_lives_th_select_title') + '"><input type="checkbox" id="haPastLivesSelectAll" class="ha-past-lives-select-all" aria-label="' + t('tc.ha.select_all') + '" title="' + t('tc.ha.past_lives_th_select_title') + '"></th>' +
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
      '<th></th></tr></thead><tbody>' + (rows || '<tr><td colspan="12" class="ha-rules-empty-state">' + t('tc.ha.past_lives_empty') + '</td></tr>') + '</tbody></table>';
    return '<div class="ha-settle-content ha-past-lives-content">' +
      '<div class="card ha-settle-card">' +
        '<div class="ha-settle-intro">' +
          '<h3 class="ha-rules-title">' + t('tc.ha.past_lives_title') + '</h3>' +
          '<p class="ha-settle-desc">' + t('tc.ha.past_lives_desc') + '</p>' +
          '<div class="ha-past-lives-callout" role="note">' +
            '<span class="ha-past-lives-callout-icon" aria-hidden="true"><i class="fas fa-info-circle"></i></span>' +
            '<p class="ha-past-lives-callout-text">' + t('tc.ha.past_lives_desc_exclude') + '</p>' +
          '</div>' +
          filterHtml +
        '</div>' +
        batchBarHtml +
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

  function haRulesV2PopulateCreatorsForLiveAccount(laUn) {
    var sel = document.getElementById('haRulesV2Creator');
    if (!sel) return;
    laUn = (laUn || '').replace(/^@/, '');
    var users = (haManageUsers || []).filter(function (u) {
      var w = u.liveAccount && u.liveAccount.username ? (u.liveAccount.username + '').replace(/^@/, '') : '';
      return laUn && w === laUn;
    });
    sel.innerHTML = users.map(function (u) {
      return '<option value="' + u.id + '">' + (u.name || ('#' + u.id)) + '</option>';
    }).join('');
  }
  function bindHaSettlementInnerEvents() {
    if (haSettleActiveTab === 'rules') {
      var submitBtn = document.querySelector('.ha-rules-v2-submit');
      if (submitBtn) {
        submitBtn.addEventListener('click', function () {
          var laEl = document.getElementById('haRulesV2LiveAccount');
          var liveAccountUsername = (laEl && laEl.value) ? laEl.value.trim() : '';
          if (!liveAccountUsername) { showToast(t('tc.ha.rules_live_account_select_first'), 'warn'); return; }
          var countryRaw = haGetLiveAccountCountry(liveAccountUsername);
          var country = countryRaw != null && countryRaw !== '' ? countryRaw : '';
          var crHidden = document.getElementById('haRulesV2Creator');
          var crVals = [];
          if (crHidden) {
            crVals = Array.from(crHidden.options || [])
              .filter(function (o) { return o.selected; })
              .map(function (o) { return o.value; })
              .filter(Boolean);
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
          var creatorIdsNum = crVals.map(function (v) { return parseInt(v, 10) || v; });
          creatorIdsNum.forEach(function (cid) { byCreatorObj[cid] = config; });
          var record = {
            id: 'r2_' + Date.now() + '_' + Math.random().toString(36).slice(2),
            dimension: 'live_account',
            country: country,
            liveAccountUsername: liveAccountUsername,
            creatorIds: creatorIdsNum.length ? creatorIdsNum : undefined,
            hourlyEffectiveStart: hourlyEffectiveStart,
            hourlyEffectiveEnd: hourlyEffectiveEnd,
            cpsEffectiveStart: cpsEffectiveStart,
            cpsEffectiveEnd: cpsEffectiveEnd,
            merchant: {},
            byCreator: creatorIdsNum.length ? byCreatorObj : {},
            byLiveAccount: creatorIdsNum.length ? {} : (function () { var o = {}; o[liveAccountUsername] = config; return o; })(),
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
        function getCreatorsForCurrentLa() {
          var laEl = document.getElementById('haRulesV2LiveAccount');
          var laUn = (laEl && laEl.value) ? (laEl.value + '').replace(/^@/, '') : '';
          if (!laUn) return [];
          return (haManageUsers || []).filter(function (u) {
            var w = u.liveAccount && u.liveAccount.username ? (u.liveAccount.username + '').replace(/^@/, '') : '';
            return w === laUn;
          }).map(function (u) {
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
          var pool = getCreatorsForCurrentLa();
          var selectedIds = getSelectedIds();
          var kw = (keyword || '').toLowerCase();
          var candidates = pool.filter(function (c) {
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
        var laSelectEl = document.getElementById('haRulesV2LiveAccount');
        if (laSelectEl) {
          laSelectEl.addEventListener('change', function () {
            haRulesV2PopulateCreatorsForLiveAccount(laSelectEl.value);
            syncHiddenSelect([]);
            renderCreatorTags();
            creatorSuggestions.classList.add('ms-dropdown--hidden');
          });
        }
        haRulesV2PopulateCreatorsForLiveAccount(laSelectEl && laSelectEl.value);
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
      var fStmtScopeRadios = document.querySelectorAll('input[name="haPastLivesFilterStmtScope"]');
      function applyPastLivesFilters() {
        haPastLivesFilterHost = (fHost && fHost.value) || '';
        haPastLivesFilterRoom = (fRoom && fRoom.value) || '';
        haPastLivesFilterLa = (fLa && fLa.value) || '';
        haPastLivesFilterDateStart = (fDateStart && fDateStart.value) || '';
        haPastLivesFilterDateEnd = (fDateEnd && fDateEnd.value) || '';
        var checked = fSettledRadios && Array.from(fSettledRadios).find(function (r) { return r.checked; });
        haPastLivesFilterSettled = (checked && checked.value) || '';
        var checkedStmt = fStmtScopeRadios && Array.from(fStmtScopeRadios).find(function (r) { return r.checked; });
        haPastLivesFilterStmtScope = (checkedStmt && checkedStmt.value) || '';
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
      if (fStmtScopeRadios && fStmtScopeRadios.length) fStmtScopeRadios.forEach(function (r) { r.addEventListener('change', applyPastLivesFilters); });
      var batchBar = document.getElementById('haPastLivesBatchBar');
      var batchLeadEl = document.getElementById('haPastLivesBatchLead');
      var selectAllCb = document.getElementById('haPastLivesSelectAll');
      function getPastLivesCheckedIds() {
        return Array.from(document.querySelectorAll('.ha-past-lives-row-check:checked')).map(function (c) { return c.getAttribute('data-session-id'); }).filter(Boolean);
      }
      function updatePastLivesBatchBar() {
        var n = document.querySelectorAll('.ha-past-lives-row-check:checked').length;
        var exBtn = document.getElementById('haPastLivesBatchExclude');
        var incBtn = document.getElementById('haPastLivesBatchInclude');
        if (batchBar) {
          batchBar.classList.toggle('ha-past-lives-batch-bar--active', n > 0);
          batchBar.classList.toggle('ha-past-lives-batch-bar--idle', n === 0);
        }
        if (batchLeadEl) {
          batchLeadEl.textContent = n > 0 ? t('tc.ha.past_lives_batch_selected').replace('{0}', String(n)) : t('tc.ha.past_lives_batch_hint');
        }
        if (exBtn) exBtn.disabled = n === 0;
        if (incBtn) incBtn.disabled = n === 0;
        if (selectAllCb) {
          var all = document.querySelectorAll('.ha-past-lives-row-check');
          selectAllCb.indeterminate = false;
          var allChecked = all.length > 0 && n === all.length;
          selectAllCb.checked = allChecked;
          if (n > 0 && !allChecked) selectAllCb.indeterminate = true;
        }
      }
      if (selectAllCb) {
        selectAllCb.addEventListener('change', function () {
          document.querySelectorAll('.ha-past-lives-row-check').forEach(function (c) { c.checked = selectAllCb.checked; });
          updatePastLivesBatchBar();
        });
      }
      document.querySelectorAll('.ha-past-lives-row-check').forEach(function (c) {
        c.addEventListener('change', updatePastLivesBatchBar);
      });
      function pastLivesSetExcludeForIds(ids, exclude) {
        var n = 0;
        if (exclude) {
          ids.forEach(function (sid) {
            var raw = haLiveSessions.filter(function (x) { return x.sessionId === sid; })[0];
            if (!raw || !haPastLivesSessionEligibleForExclude(raw)) return;
            if (haGetSessionWithEdits(raw).excludeFromSettlement) return;
            haLiveSessionEdits[sid] = haLiveSessionEdits[sid] || {};
            haLiveSessionEdits[sid].excludeFromSettlement = true;
            n++;
          });
        } else {
          ids.forEach(function (sid) {
            if (!haLiveSessionEdits[sid] || !haLiveSessionEdits[sid].excludeFromSettlement) return;
            delete haLiveSessionEdits[sid].excludeFromSettlement;
            if (!Object.keys(haLiveSessionEdits[sid]).length) delete haLiveSessionEdits[sid];
            n++;
          });
        }
        if (n) haLiveSessionEditsSave();
        return n;
      }
      var btnBatchExclude = document.getElementById('haPastLivesBatchExclude');
      var btnBatchInclude = document.getElementById('haPastLivesBatchInclude');
      if (btnBatchExclude) {
        btnBatchExclude.addEventListener('click', function () {
          var ids = getPastLivesCheckedIds();
          if (!ids.length) return;
          var n = pastLivesSetExcludeForIds(ids, true);
          if (n) { showToast(t('tc.ha.past_lives_batch_exclude_done').replace('{0}', String(n))); renderHaSettle(); bindHaSettlementInnerEvents(); }
          else showToast(t('tc.ha.past_lives_batch_none_applicable'), 'warn');
        });
      }
      if (btnBatchInclude) {
        btnBatchInclude.addEventListener('click', function () {
          var ids = getPastLivesCheckedIds();
          if (!ids.length) return;
          var n = pastLivesSetExcludeForIds(ids, false);
          if (n) { showToast(t('tc.ha.past_lives_batch_include_done').replace('{0}', String(n))); renderHaSettle(); bindHaSettlementInnerEvents(); }
          else showToast(t('tc.ha.past_lives_batch_none_applicable'), 'warn');
        });
      }
      updatePastLivesBatchBar();
      var exportBtn = document.getElementById('haPastLivesExport');
      if (exportBtn) {
        exportBtn.addEventListener('click', function () {
          var list = haPastLivesFilteredSessions();
          if (!list.length) { showToast(t('tc.ha.past_lives_empty')); return; }
          var headers = [t('tc.ha.past_lives_th_schedule_id'), t('tc.ha.past_lives_th_host'), t('tc.ha.past_lives_th_room_id'), t('tc.ha.past_lives_th_event'), t('tc.ha.past_lives_filter_la'), t('tc.ha.past_lives_th_planned'), t('tc.ha.past_lives_th_actual'), t('tc.ha.past_lives_th_duration'), t('tc.ha.past_lives_th_gmv'), t('tc.ha.past_lives_th_settled') + '/' + t('tc.ha.past_lives_th_batch_sn'), t('tc.ha.past_lives_filter_stmt_scope')];
          var rows = list.map(function (s) {
            var planned = formatLiveStartEnd(s.startAt, s.endAt) || '';
            var actual = formatLiveStartEnd(s.actualStartAt, s.actualEndAt) || '';
            var dur = s.durationSeconds ? (Math.round(s.durationSeconds / 3600 * 100) / 100) : '';
            var settledBatch = s.settled ? (t('tc.ha.settled') + ' ' + (s.batchSn || '')) : t('tc.ha.unsettled');
            var stmtScope = s.excludeFromSettlement ? t('tc.ha.past_lives_filter_stmt_excluded') : t('tc.ha.past_lives_filter_stmt_in_scope');
            return [s.scheduleId != null ? s.scheduleId : '', s.creatorName || '', s.roomId || '', s.eventName || '', (s.liveAccountUsername ? '@' + String(s.liveAccountUsername).replace(/^@/, '') : ''), planned, actual, dur, (s.gmv != null ? s.gmv : 0), settledBatch, stmtScope];
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

        // Drawer: host list -> right side drawer
        document.querySelectorAll('.ha-batch-host-row').forEach(function (row) {
          row.addEventListener('click', function () {
            var idx = row.getAttribute('data-host-idx');
            if (idx == null) return;
            haOpenBatchDetailHostDrawer(idx);
          });
        });

        var overlay = document.getElementById('haBatchDetailDrawerOverlay');
        if (overlay) overlay.addEventListener('click', haCloseBatchDetailHostDrawer);

        var closeBtn = document.getElementById('haBatchDetailDrawerClose');
        if (closeBtn) closeBtn.addEventListener('click', haCloseBatchDetailHostDrawer);

        var drawerBody = document.getElementById('haBatchDetailDrawerBody');
        if (drawerBody && !drawerBody.dataset.bindTypeTabs) {
          drawerBody.dataset.bindTypeTabs = '1';
          drawerBody.addEventListener('click', function (e) {
            var card = e.target.closest('.ha-batch-detail-summary-card--filter[data-pane]');
            if (!card) return;
            var paneKey = card.getAttribute('data-pane');
            if (!paneKey) return;
            // Re-render only the active type's table to reduce heavy DOM cost.
            // Keep current scroll position.
            var oldScrollTop = drawerBody.scrollTop;
            var hostIdx = haBatchDetailDrawerActiveHostIdx;
            if (hostIdx != null) haOpenBatchDetailHostDrawer(hostIdx, paneKey);
            drawerBody.scrollTop = oldScrollTop;
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
        (function setupGenMultiSelects() {
          function getLiveAccountList() {
            var set = {};
            (haSettleBatches || []).forEach(function (b) { var la = (b.liveAccountUsername || '').replace(/^@/, ''); if (la) set[la] = true; });
            (haManageUsers || []).forEach(function (u) { var la = u.liveAccount && (u.liveAccount.username || '').replace(/^@/, ''); if (la) set[la] = true; });
            return Object.keys(set).sort();
          }
          function getCreatorList() {
            var set = {};
            (haSettleBatches || []).forEach(function (b) { (b.hosts || []).forEach(function (h) { var n = (h.name || '').trim(); if (n) set[n] = true; }); });
            (haManageUsers || []).forEach(function (u) { var n = (u.name || '').trim(); if (n) set[n] = true; });
            return Object.keys(set).sort();
          }
          var laTags = document.getElementById('haGenerateLiveAccountTags');
          var laSearch = document.getElementById('haGenerateLiveAccountSearch');
          var laDropdown = document.getElementById('haGenerateLiveAccountDropdown');
          var laWrap = document.getElementById('haGenerateLiveAccountWrap');
          if (laTags && laSearch && laDropdown && laWrap) {
            function renderLaDropdown(kw) {
              var all = getLiveAccountList();
              var selected = Array.from(laTags.querySelectorAll('.ms-tag')).map(function (t) { return t.getAttribute('data-value') || ''; }).filter(Boolean);
              var k = (kw || '').toLowerCase();
              var candidates = all.filter(function (la) {
                if (selected.indexOf(la) !== -1) return false;
                return !k || la.toLowerCase().indexOf(k) !== -1;
              });
              if (!candidates.length) {
                laDropdown.classList.add('ms-dropdown--hidden');
                laDropdown.innerHTML = '<div class="ms-no-result">' + t('tc.ha.generate_modal_live_account_all') + '</div>';
                return;
              }
              laDropdown.innerHTML = candidates.map(function (la) { return '<div class="ms-option" data-value="' + la + '">@' + la + '</div>'; }).join('');
              laDropdown.classList.remove('ms-dropdown--hidden');
            }
            laSearch.addEventListener('focus', function () { renderLaDropdown(laSearch.value); });
            laSearch.addEventListener('input', function () { renderLaDropdown(laSearch.value); });
            laDropdown.addEventListener('click', function (e) {
              var opt = e.target.closest('.ms-option');
              if (!opt) return;
              var val = opt.getAttribute('data-value');
              laTags.insertAdjacentHTML('beforeend', '<span class="ms-tag" data-value="' + val + '">@' + val + '<button type="button" class="ms-tag-remove" aria-label="Remove">&times;</button></span>');
              laSearch.value = '';
              renderLaDropdown('');
            });
            laTags.addEventListener('click', function (e) {
              var btn = e.target.closest('.ms-tag-remove');
              if (btn) { var t = btn.closest('.ms-tag'); if (t) t.remove(); }
            });
          }
          var crTags = document.getElementById('haGenerateCreatorTags');
          var crSearch = document.getElementById('haGenerateCreatorSearch');
          var crDropdown = document.getElementById('haGenerateCreatorDropdown');
          var crWrap = document.getElementById('haGenerateCreatorWrap');
          if (crTags && crSearch && crDropdown && crWrap) {
            function renderCrDropdown(kw) {
              var all = getCreatorList();
              var selected = Array.from(crTags.querySelectorAll('.ms-tag')).map(function (t) { return t.getAttribute('data-value') || ''; }).filter(Boolean);
              var k = (kw || '').toLowerCase();
              var candidates = all.filter(function (n) {
                if (selected.indexOf(n) !== -1) return false;
                return !k || n.toLowerCase().indexOf(k) !== -1;
              });
              if (!candidates.length) {
                crDropdown.classList.add('ms-dropdown--hidden');
                crDropdown.innerHTML = '<div class="ms-no-result">' + t('tc.ha.generate_modal_creator_all') + '</div>';
                return;
              }
              crDropdown.innerHTML = candidates.map(function (n) { return '<div class="ms-option" data-value="' + n.replace(/"/g, '&quot;') + '">' + n + '</div>'; }).join('');
              crDropdown.classList.remove('ms-dropdown--hidden');
            }
            crSearch.addEventListener('focus', function () { renderCrDropdown(crSearch.value); });
            crSearch.addEventListener('input', function () { renderCrDropdown(crSearch.value); });
            crDropdown.addEventListener('click', function (e) {
              var opt = e.target.closest('.ms-option');
              if (!opt) return;
              var val = opt.getAttribute('data-value');
              crTags.insertAdjacentHTML('beforeend', '<span class="ms-tag" data-value="' + val.replace(/"/g, '&quot;') + '">' + val + '<button type="button" class="ms-tag-remove" aria-label="Remove">&times;</button></span>');
              crSearch.value = '';
              renderCrDropdown('');
            });
            crTags.addEventListener('click', function (e) {
              var btn = e.target.closest('.ms-tag-remove');
              if (btn) { var t = btn.closest('.ms-tag'); if (t) t.remove(); }
            });
          }
          if (!window._haGenDropdownClickListenerAdded) {
            window._haGenDropdownClickListenerAdded = true;
            document.addEventListener('click', function (e) {
              var modal = document.getElementById('haGenerateBatchModal');
              if (!modal || !modal.classList.contains('show')) return;
              if (e.target.closest('.ha-generate-ms-wrap')) return;
              modal.querySelectorAll('.ms-dropdown').forEach(function (d) { d.classList.add('ms-dropdown--hidden'); });
            });
          }
        })();
        function getGenSelectedLiveAccounts() {
          var tags = genModal.querySelectorAll('#haGenerateLiveAccountTags .ms-tag');
          return Array.from(tags).map(function (t) { return t.getAttribute('data-value') || ''; }).filter(Boolean);
        }
        function getGenSelectedCreators() {
          var tags = genModal.querySelectorAll('#haGenerateCreatorTags .ms-tag');
          return Array.from(tags).map(function (t) { return t.getAttribute('data-value') || ''; }).filter(Boolean);
        }
        genModal.querySelector('.ha-generate-batch-confirm')?.addEventListener('click', function () {
          var startEl = document.getElementById('haGenerateDateStart');
          var endEl = document.getElementById('haGenerateDateEnd');
          var genLiveAccounts = getGenSelectedLiveAccounts();
          var genCreators = getGenSelectedCreators();
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
          var newBatches = haSettleRulesGenerateBatch(startDate, endDate, { includeHourly: !!includeHourly, includeCommission: !!includeCommission, includeOtherRewards: !!includeOtherRewards, liveAccountUsernames: genLiveAccounts.length ? genLiveAccounts : undefined, creatorNames: genCreators.length ? genCreators : undefined });
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
      document.querySelectorAll('.tc-tts-tab').forEach(function (tabBtn) {
        tabBtn.addEventListener('click', function () {
          tcTtsAuthTab = tabBtn.getAttribute('data-tts-tab') === 'tap_seller' ? 'tap_seller' : 'isv';
          var main = document.getElementById('tcMain');
          if (main) {
            main.innerHTML = renderTenantCenterMain('tenant_tts');
            bindTenantCenterPanelEvents('tenant_tts');
          }
        });
      });
      var auths = loadTtsAuth();
      document.querySelectorAll('.tc-tts-connect-type').forEach(function (btnConnect) {
        btnConnect.addEventListener('click', function () {
          var authType = btnConnect.getAttribute('data-auth-type') || 'tap_seller';
          var country = authType === 'isv' ? 'US' : 'UK';
          var shopName = authType === 'isv' ? 'New ISV Shop' : 'New TAP Shop';
          var id = 'tts_' + authType + '_' + country.toLowerCase() + '_' + Date.now();
          var shopId = 'TTS-' + String(Date.now()).slice(-8);
          auths.push({
            id: id,
            authType: authType,
            country: country,
            marketplace: country,
            shopName: shopName,
            shopId: shopId,
            status: 'active',
            sellerCenterStatus: authType === 'isv' ? 'required' : null,
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
      });
      document.querySelectorAll('.tc-tts-login').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id = btn.getAttribute('data-id');
          if (!id) return;
          var list = loadTtsAuth();
          list.forEach(function (a) {
            if (a.id === id) a.sellerCenterStatus = 'connected';
          });
          saveTtsAuth(list);
          var main = document.getElementById('tcMain');
          if (main) {
            main.innerHTML = renderTenantCenterMain('tenant_tts');
            bindTenantCenterPanelEvents('tenant_tts');
          }
          showToast(t('tc.tts.toast_login_connected'));
        });
      });
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

  // ================= Live Schedule (直播排期) Module =================
  var LS_HOST_AVAIL_KEY = 'wahool_ls_host_avail';
  var LS_TARGETS_KEY = 'wahool_ls_targets';
  var LS_BATCHES_KEY = 'wahool_ls_batches';
  var LS_TIMEZONE_DISPLAY_KEY = 'wahool_ls_timezone_display';

  var lsActiveTab = 'host_avail'; // host_avail | targets | batches
  var lsHostAvailabilities = [];
  var lsMerchantTargets = [];
  var lsScheduleBatches = [];

  var lsActiveWeekStart = null; // YYYY-MM-DD (Mon)

  var lsSessionDurationMinutes = 120; // fixed session template for MVP
  var lsMaxRelaySegments = 3;

  var lsHostFilter = { host: '', source: 'all', status: 'all' };
  var lsTargetsPeriodStartFilter = '';
  // 主播排期列表：按「直播场次」维度 + 状态 Tab（暂存/待确认/待同步/待直播/直播中/已直播）
  var lsSessionListFilter = { tab: 'draft', q: '' };

  /** i18n helper: replace {0} {1} in t(key) */
  function lsT(key, a0, a1) {
    var s = t(key);
    if (a0 != null && a0 !== undefined) s = s.replace(/\{0\}/g, String(a0));
    if (a1 != null && a1 !== undefined) s = s.replace(/\{1\}/g, String(a1));
    return s;
  }

  var lsBatchDrawerBatchId = null;
  var lsHostDrawerHostId = null;
  var lsHostDrawerDayDate = null; // YYYY-MM-DD
  var lsHostDrawerTab = 'availability'; // availability | planned

  var lsGenerateInitialHostIdsFilter = null; // for “自动排期” modal selection (array)
  var lsGenerateInitialAccountUsernamesFilter = null; // for “自动排期” modal selection (array)
  /** 自动排期弹窗所选时区；执行 `lsGenerateInitialSchedule` 后清空 */
  var lsGenerateInitialTimeZone = null;

  var lsMerchantTimeZone = (function () {
    try {
      if (typeof Intl === 'undefined' || !Intl.DateTimeFormat) return 'UTC';
      return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    } catch (e) {
      return 'UTC';
    }
  })();

  var lsDisplayTimeZone = lsMerchantTimeZone;
  try {
    var savedTz = localStorage.getItem(LS_TIMEZONE_DISPLAY_KEY);
    if (savedTz) lsDisplayTimeZone = savedTz;
  } catch (e) {}

  function lsGetTimeZoneOffsetMs(timeZone, date) {
    // Returns: offsetMs = (timeZone_wall_clock_as_UTC) - (original_instant_ms)
    // Used to convert wall time in a timeZone to an instant.
    var dtf = new Intl.DateTimeFormat('en-US', {
      timeZone: timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    var parts = dtf.formatToParts(date);
    var map = {};
    parts.forEach(function (p) { if (p && p.type) map[p.type] = p.value; });
    var asUTC = Date.UTC(
      Number(map.year),
      Number(map.month) - 1,
      Number(map.day),
      Number(map.hour),
      Number(map.minute),
      Number(map.second)
    );
    return asUTC - date.getTime();
  }

  function lsParseDateTimeParts(dateTimeStr) {
    if (!dateTimeStr) return null;
    var m = String(dateTimeStr).trim().match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
    if (!m) return null;
    return {
      y: Number(m[1]),
      mo: Number(m[2]),
      d: Number(m[3]),
      h: Number(m[4]),
      mi: Number(m[5])
    };
  }

  function lsWallTimeToMs(dateTimeStr, timeZone) {
    var p = lsParseDateTimeParts(dateTimeStr);
    if (!p) return NaN;
    // Guess by interpreting wall time as UTC, then correct by timezone offset (DST safe enough for MVP).
    var guessMs = Date.UTC(p.y, p.mo - 1, p.d, p.h, p.mi, 0);
    var offset = lsGetTimeZoneOffsetMs(timeZone, new Date(guessMs));
    return guessMs - offset;
  }

  function lsFormatMs(ms, timeZone) {
    if (!isFinite(ms)) return '';
    var dtf = new Intl.DateTimeFormat('en-CA', {
      timeZone: timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    // en-CA 输出顺序稳定：YYYY-MM-DD, 再拼接时分
    var parts = dtf.formatToParts(new Date(ms));
    var map = {};
    parts.forEach(function (p) { if (p && p.type) map[p.type] = p.value; });
    // map: year, month, day, hour, minute
    return map.year + '-' + map.month + '-' + map.day + ' ' + map.hour + ':' + map.minute;
  }

  function lsFormatMsTimeOnly(ms, timeZone) {
    if (!isFinite(ms)) return '';
    var dtf = new Intl.DateTimeFormat('en-CA', {
      timeZone: timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    var parts = dtf.formatToParts(new Date(ms));
    var map = {};
    parts.forEach(function (p) { if (p && p.type) map[p.type] = p.value; });
    return (map.hour || '00') + ':' + (map.minute || '00');
  }

  // Data storage: all startAt/endAt strings are treated as wall time in "merchant time zone".
  function lsMsToStr(ms) {
    try {
      return lsFormatMs(ms, lsMerchantTimeZone);
    } catch (e) {
      return '';
    }
  }

  function lsMsToStrDisplay(ms) {
    try {
      return lsFormatMs(ms, lsDisplayTimeZone);
    } catch (e) {
      return '';
    }
  }

  function lsMsToTimeStr(ms) {
    try {
      return lsFormatMsTimeOnly(ms, lsDisplayTimeZone);
    } catch (e) {
      return '';
    }
  }

  function lsStrToMs(s) {
    if (!s) return NaN;
    try {
      if (String(s).indexOf('T') !== -1) return new Date(s).getTime();
      return lsWallTimeToMs(s, lsMerchantTimeZone);
    } catch (e) {
      return NaN;
    }
  }

  function lsDateStrFromDateTime(dateTimeStr) {
    if (!dateTimeStr) return '';
    // "YYYY-MM-DD HH:mm"
    var parts = String(dateTimeStr).split(' ');
    return parts[0] || '';
  }

  function lsTimeStrFromDateTime(dateTimeStr) {
    if (!dateTimeStr) return '';
    var parts = String(dateTimeStr).split(' ');
    return parts[1] ? parts[1].slice(0, 5) : '';
  }

  function lsAddDaysToDateStr(dateStr, deltaDays) {
    if (!dateStr) return '';
    var m = String(dateStr).trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) return dateStr;
    var y = Number(m[1]);
    var mo = Number(m[2]) - 1;
    var d0 = Number(m[3]);
    var ms = Date.UTC(y, mo, d0, 0, 0, 0);
    var d = new Date(ms);
    d.setUTCDate(d.getUTCDate() + deltaDays);
    var pad = function (n) { return String(n).padStart(2, '0'); };
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }

  function lsGetDayRangeMs(dateStr) {
    // IMPORTANT: range calculations must use merchant timezone,
    // while display formatting uses lsDisplayTimeZone.
    var startMs = lsWallTimeToMs(dateStr + ' 00:00', lsMerchantTimeZone);
    if (!isFinite(startMs)) return null;
    var endDateStr = lsAddDaysToDateStr(dateStr, 1);
    var endMs = lsWallTimeToMs(endDateStr + ' 00:00', lsMerchantTimeZone);
    if (!isFinite(endMs)) endMs = startMs + 24 * 60 * 60 * 1000;
    return { startMs: startMs, endMs: endMs };
  }

  function lsComputeHoursOverlap(startAt, endAt, rangeStartMs, rangeEndMs) {
    var s = lsStrToMs(startAt);
    var e = lsStrToMs(endAt);
    if (!isFinite(s) || !isFinite(e) || !(s < e)) return 0;
    var a = Math.max(s, rangeStartMs);
    var b = Math.min(e, rangeEndMs);
    if (!(a < b)) return 0;
    return (b - a) / 3600000;
  }

  function lsMsToTimeStr(ms) {
    try {
      return lsFormatMsTimeOnly(ms, lsDisplayTimeZone);
    } catch (e) {
      return '';
    }
  }

  function lsGetWeekDateStrs(weekStartDateStr) {
    var arr = [];
    for (var i = 0; i < 7; i++) arr.push(lsAddDaysToDateStr(weekStartDateStr, i));
    return arr;
  }

  function lsComputeAvailableHoursForHostDay(hostId, dayDateStr, sourceFilter) {
    var r = lsGetDayRangeMs(dayDateStr);
    if (!r) return 0;
    var list = (lsHostAvailabilities || []).filter(function (s) {
      if (!s || s.hostId !== hostId) return false;
      if (s.cancelled) return false;
      if (sourceFilter && sourceFilter !== 'all' && s.source !== sourceFilter) return false;
      return lsComputeHoursOverlap(s.startAt, s.endAt, r.startMs, r.endMs) > 0;
    });
    var sum = 0;
    list.forEach(function (s) { sum += lsComputeHoursOverlap(s.startAt, s.endAt, r.startMs, r.endMs); });
    return sum;
  }

  function lsComputeAllocatedHoursForHostDay(hostId, dayDateStr) {
    var r = lsGetDayRangeMs(dayDateStr);
    if (!r) return 0;
    var sum = 0;
    (lsScheduleBatches || []).forEach(function (b) {
      (b.sessions || []).forEach(function (s) {
        (s.segments || []).forEach(function (seg) {
          if (seg.hostId !== hostId) return;
          sum += lsComputeHoursOverlap(seg.startAt, seg.endAt, r.startMs, r.endMs);
        });
      });
    });
    return sum;
  }

  function lsGetActiveHostDaySegments(hostId, dayDateStr, sourceFilter) {
    var r = lsGetDayRangeMs(dayDateStr);
    if (!r) return [];
    var list = (lsHostAvailabilities || []).filter(function (s) {
      if (!s || s.hostId !== hostId) return false;
      if (s.cancelled) return false;
      if (sourceFilter && sourceFilter !== 'all' && s.source !== sourceFilter) return false;
      return lsComputeHoursOverlap(s.startAt, s.endAt, r.startMs, r.endMs) > 0;
    });
    // Clip to day boundaries for display.
    list.sort(function (a, b) { return lsStrToMs(a.startAt) - lsStrToMs(b.startAt); });
    return list.map(function (s) {
      var sMs = lsStrToMs(s.startAt);
      var eMs = lsStrToMs(s.endAt);
      var cs = Math.max(sMs, r.startMs);
      var ce = Math.min(eMs, r.endMs);
      return Object.assign({}, s, {
        _clipStartMs: cs,
        _clipEndMs: ce
      });
    });
  }

  function lsMergeHostAvailabilitiesForDay(hostId, dayDateStr) {
    var dayRange = lsGetDayRangeMs(dayDateStr);
    if (!dayRange) return;
    var nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');

    var segments = (lsHostAvailabilities || []).filter(function (s) {
      if (!s || s.hostId !== hostId) return false;
      if (s.cancelled) return false;
      return lsComputeHoursOverlap(s.startAt, s.endAt, dayRange.startMs, dayRange.endMs) > 0;
    });
    if (!segments.length) return;

    // Normalize into clipped intervals for the day and merge overlap/adjacent.
    var intervals = segments.slice().map(function (s) {
      var sMs = lsStrToMs(s.startAt);
      var eMs = lsStrToMs(s.endAt);
      return {
        _seg: s,
        startMs: Math.max(sMs, dayRange.startMs),
        endMs: Math.min(eMs, dayRange.endMs),
      };
    }).sort(function (a, b) { return a.startMs - b.startMs; });

    // Build merged groups; each group owns a set of original segments.
    var groups = [];
    for (var i = 0; i < intervals.length; i++) {
      var it = intervals[i];
      if (!groups.length) {
        groups.push({ startMs: it.startMs, endMs: it.endMs, segs: [it._seg] });
        continue;
      }
      var last = groups[groups.length - 1];
      if (it.startMs <= last.endMs) {
        last.endMs = Math.max(last.endMs, it.endMs);
        last.segs.push(it._seg);
      } else {
        groups.push({ startMs: it.startMs, endMs: it.endMs, segs: [it._seg] });
      }
    }

    // Apply merged intervals back to existing segments:
    // - first segment in each group => update boundaries
    // - rest => cancel
    groups.forEach(function (g) {
      if (!g.segs.length) return;
      g.segs[0].startAt = lsMsToStr(g.startMs);
      g.segs[0].endAt = lsMsToStr(g.endMs);
      g.segs[0].updatedAt = nowStr;
      for (var i = 1; i < g.segs.length; i++) {
        g.segs[i].cancelled = true;
        g.segs[i].updatedAt = nowStr;
      }
    });
  }

  function lsFormatPeriod(period) {
    if (!period) return '';
    if (period.startAt && period.endAt) return period.startAt + ' ~ ' + period.endAt;
    return period;
  }

  function lsGetPeriodSeeds() {
    // MVP: single default period for demo.
    return { startAt: '2026-03-25', endAt: '2026-03-31' };
  }

  function lsCoerceScheduleIdNumber(v) {
    if (v == null || v === '') return NaN;
    if (typeof v === 'number' && isFinite(v)) return v;
    var s = String(v).trim();
    if (/^\d{1,4}$/.test(s)) return parseInt(s, 10);
    return NaN;
  }

  function lsMaxScheduleNumericId() {
    var max = 0;
    (lsScheduleBatches || []).forEach(function (b) {
      (b.sessions || []).forEach(function (s) {
        if (!s) return;
        var n = lsCoerceScheduleIdNumber(s.scheduleId);
        if (isFinite(n) && n > max) max = n;
      });
    });
    return max;
  }

  /** 排期 ID 展示：4 位纯数字（不足补零） */
  function lsFormatScheduleIdDisplay(v) {
    var n = lsCoerceScheduleIdNumber(v);
    if (!isFinite(n)) {
      var s = String(v == null ? '' : v).trim();
      return s || '-';
    }
    n = Math.min(9999, Math.max(0, Math.floor(n)));
    return String(n).padStart(4, '0');
  }

  /** 将缺失或非数字的 scheduleId 规范为 1001–9999 循环递增的数字 */
  function lsNormalizeSessionScheduleIds() {
    var next = lsMaxScheduleNumericId() + 1;
    if (next < 1001) next = 1001;
    if (next > 9999) next = 1001;
    (lsScheduleBatches || []).forEach(function (b) {
      (b.sessions || []).forEach(function (s) {
        if (!s) return;
        var n = lsCoerceScheduleIdNumber(s.scheduleId);
        if (isFinite(n) && n >= 0 && n <= 9999) {
          s.scheduleId = Math.floor(n);
          return;
        }
        s.scheduleId = next;
        next += 1;
        if (next > 9999) next = 1001;
      });
    });
  }

  function lsNormalizeScheduleBatches() {
    (lsScheduleBatches || []).forEach(function (b) {
      if (!b) return;
      if (!b.createdBy) b.createdBy = '商家';
      (b.sessions || []).forEach(function (s) {
        if (!s) return;
        if (s.tiktokSessionId == null && s.tiktokEventId) s.tiktokSessionId = s.tiktokEventId;
        if (s.gmvCurrency == null) s.gmvCurrency = 'USD';
        if (s.syncStatus === 'synced' && !s.livePhase) s.livePhase = 'scheduled';
        if (s.pushedToHost == null) s.pushedToHost = b.status !== 'initial';
        if (s.syncStatus === 'pending' && !s.tiktokLiveEventSyncStatus) s.tiktokLiveEventSyncStatus = 'idle';
      });
    });
    lsNormalizeSessionScheduleIds();
    lsRecomputeBatchStatuses();
  }

  /** 是否存在至少一场未取消的 session（用于判断 localStorage 里的 batches 是否为空占位） */
  function lsScheduleBatchesHasAnySession(arr) {
    return Array.isArray(arr) && arr.some(function (b) {
      return b && (b.sessions || []).some(function (s) { return s && !s.cancelled; });
    });
  }

  /**
   * 演示用：单批次多场次，每场 3 个主播分段（与列表「主播（计划分段）」一致）
   * period: { startAt, endAt } 与商家目标周期对齐
   */
  function lsBuildDemoScheduleBatches(period) {
    return [
      {
        id: 'LSB-2026-03-DEMO-001',
        periodStart: period.startAt,
        periodEnd: period.endAt,
        status: 'waiting_sync',
        createdBy: (typeof currentUser === 'object' && currentUser && currentUser.id) ? currentUser.id : 'u1',
        createdAt: '2026-03-24 10:30',
        updatedAt: '2026-03-24 10:30',
        sessions: [
          {
            id: 'sess-ps-001',
            scheduleId: 1001,
            eventName: 'Live Event A',
            liveAccountUsername: 'homechef_mike',
            tiktokSessionId: '4026548741',
            pushedToHost: true,
            syncStatus: 'pending',
            tiktokLiveEventSyncStatus: 'idle',
            livePhase: 'scheduled',
            plannedStartAt: '2026-03-26 18:00',
            plannedEndAt: '2026-03-26 21:00',
            detail: {
              liveType: '达播',
              subject: 'Live Event A',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'Mock pending sync · ready to sync (success path).'
            },
            segments: [
              { id: 'seg-ps-001-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-26 18:00', endAt: '2026-03-26 19:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-001-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-26 19:00', endAt: '2026-03-26 20:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-001-h3', hostId: 'h3', hostName: 'Priscilla Melendez', startAt: '2026-03-26 20:00', endAt: '2026-03-26 21:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' }
            ]
          },
          {
            id: 'sess-ps-002',
            scheduleId: 1002,
            eventName: 'Live Event B',
            liveAccountUsername: 'alex_creator',
            tiktokSessionId: '4026548742',
            pushedToHost: true,
            syncStatus: 'pending',
            tiktokLiveEventSyncStatus: 'failed',
            tiktokSyncFailureCode: 'live_account_auth_expired',
            livePhase: 'scheduled',
            plannedStartAt: '2026-03-27 18:00',
            plannedEndAt: '2026-03-27 21:00',
            detail: {
              liveType: '店播',
              subject: 'Live Event B',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'PS mock: second session, multi-host plan.'
            },
            segments: [
              { id: 'seg-ps-002-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-27 18:00', endAt: '2026-03-27 19:15', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-002-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-27 19:15', endAt: '2026-03-27 20:15', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-002-h3', hostId: 'h3', hostName: 'Priscilla Melendez', startAt: '2026-03-27 20:15', endAt: '2026-03-27 21:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' }
            ]
          },
          {
            id: 'sess-ps-003',
            scheduleId: 1010,
            eventName: 'Live Event B2',
            liveAccountUsername: 'homechef_mike',
            tiktokSessionId: '4026548748',
            pushedToHost: true,
            syncStatus: 'pending',
            tiktokLiveEventSyncStatus: 'syncing',
            livePhase: 'scheduled',
            plannedStartAt: '2026-03-26 18:00',
            plannedEndAt: '2026-03-26 21:00',
            detail: {
              liveType: '达播',
              subject: 'Live Event B2',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'PS mock: TikTok Live Event sync in progress.'
            },
            segments: [
              { id: 'seg-ps-003-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-26 18:00', endAt: '2026-03-26 19:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-003-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-26 19:00', endAt: '2026-03-26 20:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-003-h3', hostId: 'h3', hostName: 'Priscilla Melendez', startAt: '2026-03-26 20:00', endAt: '2026-03-26 21:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' }
            ]
          },
          {
            id: 'sess-ps-004',
            scheduleId: 1009,
            eventName: 'Live Event B3',
            liveAccountUsername: 'alex_creator',
            tiktokSessionId: '4026548749',
            pushedToHost: true,
            syncStatus: 'pending',
            tiktokLiveEventSyncStatus: 'failed',
            tiktokSyncFailureCode: 'other',
            tiktokSyncFailureDetail: 'TikTok API error 429: rate limit exceeded',
            livePhase: 'scheduled',
            plannedStartAt: '2026-03-27 18:00',
            plannedEndAt: '2026-03-27 21:00',
            detail: {
              liveType: '店播',
              subject: 'Live Event B3',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'PS mock: sync failed (system error).'
            },
            segments: [
              { id: 'seg-ps-004-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-27 18:00', endAt: '2026-03-27 19:15', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-004-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-27 19:15', endAt: '2026-03-27 20:15', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-004-h3', hostId: 'h3', hostName: 'Priscilla Melendez', startAt: '2026-03-27 20:15', endAt: '2026-03-27 21:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' }
            ]
          },
          {
            id: 'sess-ps-005',
            scheduleId: 1011,
            eventName: 'Live Event OK-1',
            liveAccountUsername: 'priscilla_live',
            tiktokSessionId: '4026548750',
            pushedToHost: true,
            syncStatus: 'pending',
            tiktokLiveEventSyncStatus: 'idle',
            livePhase: 'scheduled',
            plannedStartAt: '2026-03-28 10:00',
            plannedEndAt: '2026-03-28 13:00',
            detail: {
              liveType: '店播',
              subject: 'Live Event OK-1',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'Mock: pending sync · ready (success).'
            },
            segments: [
              { id: 'seg-ps-005-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-28 10:00', endAt: '2026-03-28 11:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-005-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-28 11:00', endAt: '2026-03-28 12:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-005-h3', hostId: 'h3', hostName: 'Priscilla Melendez', startAt: '2026-03-28 12:00', endAt: '2026-03-28 13:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' }
            ]
          },
          {
            id: 'sess-ps-006',
            scheduleId: 1012,
            eventName: 'Live Event OK-2',
            liveAccountUsername: 'homechef_mike',
            tiktokSessionId: '4026548751',
            pushedToHost: true,
            syncStatus: 'pending',
            tiktokLiveEventSyncStatus: 'idle',
            livePhase: 'scheduled',
            plannedStartAt: '2026-03-29 10:00',
            plannedEndAt: '2026-03-29 12:00',
            detail: {
              liveType: '达播',
              subject: 'Live Event OK-2',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'Mock: another row ready to sync successfully.'
            },
            segments: [
              { id: 'seg-ps-006-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-29 10:00', endAt: '2026-03-29 11:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-006-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-29 11:00', endAt: '2026-03-29 12:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' }
            ]
          },
          {
            id: 'sess-ps-007',
            scheduleId: 1013,
            eventName: 'Live Event Fail-Auth-2',
            liveAccountUsername: 'priscilla_live',
            tiktokSessionId: '4026548752',
            pushedToHost: true,
            syncStatus: 'pending',
            tiktokLiveEventSyncStatus: 'failed',
            tiktokSyncFailureCode: 'live_account_auth_expired',
            livePhase: 'scheduled',
            plannedStartAt: '2026-03-30 14:00',
            plannedEndAt: '2026-03-30 17:00',
            detail: {
              liveType: '店播',
              subject: 'Live Event Fail-Auth-2',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'Mock: sync failed · live account login expired (duplicate case).'
            },
            segments: [
              { id: 'seg-ps-007-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-30 14:00', endAt: '2026-03-30 15:30', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-007-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-30 15:30', endAt: '2026-03-30 17:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' }
            ]
          },
          {
            id: 'sess-ps-008',
            scheduleId: 1014,
            eventName: 'Live Event Fail-Other-2',
            liveAccountUsername: 'homechef_mike',
            tiktokSessionId: '4026548753',
            pushedToHost: true,
            syncStatus: 'pending',
            tiktokLiveEventSyncStatus: 'failed',
            tiktokSyncFailureCode: 'other',
            tiktokSyncFailureDetail: 'Internal error: upstream timeout after 30s (request_id: req_8f2a1c)',
            livePhase: 'scheduled',
            plannedStartAt: '2026-03-31 19:00',
            plannedEndAt: '2026-03-31 22:00',
            detail: {
              liveType: '达播',
              subject: 'Live Event Fail-Other-2',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'Mock: sync failed · other / system error message.'
            },
            segments: [
              { id: 'seg-ps-008-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-31 19:00', endAt: '2026-03-31 20:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-008-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-31 20:00', endAt: '2026-03-31 21:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-ps-008-h3', hostId: 'h3', hostName: 'Priscilla Melendez', startAt: '2026-03-31 21:00', endAt: '2026-03-31 22:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' }
            ]
          },
          {
            id: 'sess-pl-001',
            scheduleId: 1003,
            eventName: 'Live Event C',
            liveAccountUsername: 'homechef_mike',
            tiktokSessionId: '4026548743',
            pushedToHost: true,
            syncStatus: 'synced',
            livePhase: 'scheduled',
            plannedStartAt: '2026-03-27 18:00',
            plannedEndAt: '2026-03-27 21:00',
            detail: {
              liveType: '达播',
              subject: 'Live Event C',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'PL mock: synced, waiting to go live.'
            },
            segments: [
              { id: 'seg-pl-001-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-27 18:00', endAt: '2026-03-27 19:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-pl-001-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-27 19:00', endAt: '2026-03-27 20:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-pl-001-h3', hostId: 'h3', hostName: 'Priscilla Melendez', startAt: '2026-03-27 20:00', endAt: '2026-03-27 21:00', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' }
            ]
          },
          {
            id: 'sess-pl-002',
            scheduleId: 1004,
            eventName: 'Live Event D',
            liveAccountUsername: 'priscilla_live',
            tiktokSessionId: '4026548744',
            pushedToHost: true,
            syncStatus: 'synced',
            livePhase: 'scheduled',
            plannedStartAt: '2026-03-28 18:00',
            plannedEndAt: '2026-03-28 21:30',
            detail: {
              liveType: '店播',
              subject: 'Live Event D',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'PL mock: waiting to live, 3 segments.'
            },
            segments: [
              { id: 'seg-pl-002-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-28 18:00', endAt: '2026-03-28 19:30', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-pl-002-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-28 19:30', endAt: '2026-03-28 20:30', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' },
              { id: 'seg-pl-002-h3', hostId: 'h3', hostName: 'Priscilla Melendez', startAt: '2026-03-28 20:30', endAt: '2026-03-28 21:30', decisionStatus: 'accepted', decisionReason: '', gmv: 0, gmvRemark: '', actualStartAt: '', actualEndAt: '' }
            ]
          },
          {
            id: 'sess-li-001',
            scheduleId: 1005,
            eventName: 'Live Event E',
            liveAccountUsername: 'homechef_mike',
            tiktokSessionId: '4026548745',
            pushedToHost: true,
            syncStatus: 'synced',
            livePhase: 'live',
            plannedStartAt: '2026-03-28 18:00',
            plannedEndAt: '2026-03-28 21:00',
            detail: {
              liveType: '达播',
              subject: 'Live Event E',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'LI mock: live, editable actual times & GMV.'
            },
            segments: [
              { id: 'seg-li-001-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-28 18:00', endAt: '2026-03-28 19:00', decisionStatus: 'accepted', decisionReason: '', gmv: 5200.25, gmvRemark: 'Strong start', actualStartAt: '2026-03-28 18:01', actualEndAt: '2026-03-28 18:58' },
              { id: 'seg-li-001-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-28 19:00', endAt: '2026-03-28 20:00', decisionStatus: 'accepted', decisionReason: '', gmv: 4100.00, gmvRemark: 'Nice momentum', actualStartAt: '2026-03-28 19:05', actualEndAt: '2026-03-28 19:55' },
              { id: 'seg-li-001-h3', hostId: 'h3', hostName: 'Priscilla Melendez', startAt: '2026-03-28 20:00', endAt: '2026-03-28 21:00', decisionStatus: 'accepted', decisionReason: '', gmv: 3200.75, gmvRemark: 'Good conversion', actualStartAt: '2026-03-28 20:03', actualEndAt: '2026-03-28 20:57' }
            ]
          },
          {
            id: 'sess-li-002',
            scheduleId: 1006,
            eventName: 'Live Event F',
            liveAccountUsername: 'alex_creator',
            tiktokSessionId: '4026548746',
            pushedToHost: true,
            syncStatus: 'synced',
            livePhase: 'live',
            plannedStartAt: '2026-03-29 18:00',
            plannedEndAt: '2026-03-29 21:00',
            detail: {
              liveType: '店播',
              subject: 'Live Event F',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'LI mock: another live session.'
            },
            segments: [
              { id: 'seg-li-002-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-29 18:00', endAt: '2026-03-29 19:00', decisionStatus: 'accepted', decisionReason: '', gmv: 2800.00, gmvRemark: 'OK', actualStartAt: '2026-03-29 18:00', actualEndAt: '2026-03-29 18:55' },
              { id: 'seg-li-002-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-29 19:00', endAt: '2026-03-29 20:00', decisionStatus: 'accepted', decisionReason: '', gmv: 3600.50, gmvRemark: 'Great', actualStartAt: '2026-03-29 19:02', actualEndAt: '2026-03-29 19:58' },
              { id: 'seg-li-002-h3', hostId: 'h3', hostName: 'Priscilla Melendez', startAt: '2026-03-29 20:00', endAt: '2026-03-29 21:00', decisionStatus: 'accepted', decisionReason: '', gmv: 4100.10, gmvRemark: 'Very good', actualStartAt: '2026-03-29 20:02', actualEndAt: '2026-03-29 20:59' }
            ]
          },
          {
            id: 'sess-en-001',
            scheduleId: 1007,
            eventName: 'Live Event G',
            liveAccountUsername: 'priscilla_live',
            tiktokSessionId: '4026548747',
            pushedToHost: true,
            syncStatus: 'synced',
            livePhase: 'ended',
            plannedStartAt: '2026-03-29 18:00',
            plannedEndAt: '2026-03-29 21:00',
            detail: {
              liveType: '达播',
              subject: 'Live Event G',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'EN mock: ended session, streamed view.'
            },
            segments: [
              { id: 'seg-en-001-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-29 18:00', endAt: '2026-03-29 19:00', decisionStatus: 'accepted', decisionReason: '', gmv: 5100.00, gmvRemark: 'Complete', actualStartAt: '2026-03-29 18:00', actualEndAt: '2026-03-29 18:59' },
              { id: 'seg-en-001-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-29 19:00', endAt: '2026-03-29 20:00', decisionStatus: 'accepted', decisionReason: '', gmv: 3900.00, gmvRemark: 'Complete', actualStartAt: '2026-03-29 19:01', actualEndAt: '2026-03-29 20:00' },
              { id: 'seg-en-001-h3', hostId: 'h3', hostName: 'Priscilla Melendez', startAt: '2026-03-29 20:00', endAt: '2026-03-29 21:00', decisionStatus: 'accepted', decisionReason: '', gmv: 3300.00, gmvRemark: 'Complete', actualStartAt: '2026-03-29 20:02', actualEndAt: '2026-03-29 21:00' }
            ]
          },
          {
            id: 'sess-en-002',
            scheduleId: 1008,
            eventName: 'Live Event H',
            liveAccountUsername: 'homechef_mike',
            tiktokSessionId: '4026548748',
            pushedToHost: true,
            syncStatus: 'synced',
            livePhase: 'ended',
            plannedStartAt: '2026-03-30 18:00',
            plannedEndAt: '2026-03-30 21:00',
            detail: {
              liveType: '店播',
              subject: 'Live Event H',
              timeZone: lsDisplayTimeZone,
              follower: 'darren.chen',
              remarkEn: 'EN mock: ended session #2.'
            },
            segments: [
              { id: 'seg-en-002-h1', hostId: 'h1', hostName: 'Maribel Maldonado', startAt: '2026-03-30 18:00', endAt: '2026-03-30 19:00', decisionStatus: 'accepted', decisionReason: '', gmv: 2400.00, gmvRemark: 'Done', actualStartAt: '2026-03-30 18:00', actualEndAt: '2026-03-30 18:57' },
              { id: 'seg-en-002-h2', hostId: 'h2', hostName: 'Alex Chen', startAt: '2026-03-30 19:00', endAt: '2026-03-30 20:00', decisionStatus: 'accepted', decisionReason: '', gmv: 3100.00, gmvRemark: 'Done', actualStartAt: '2026-03-30 19:03', actualEndAt: '2026-03-30 20:00' },
              { id: 'seg-en-002-h3', hostId: 'h3', hostName: 'Priscilla Melendez', startAt: '2026-03-30 20:00', endAt: '2026-03-30 21:00', decisionStatus: 'accepted', decisionReason: '', gmv: 3600.00, gmvRemark: 'Done', actualStartAt: '2026-03-30 20:02', actualEndAt: '2026-03-30 21:00' }
            ]
          }
        ]
      }
    ];
  }

  function lsLoadOrSeed() {
    function safeLoad(key) {
      try {
        var raw = localStorage.getItem(key);
        if (!raw) return null;
        return JSON.parse(raw);
      } catch (e) {
        return null;
      }
    }

    var host = safeLoad(LS_HOST_AVAIL_KEY);
    var targets = safeLoad(LS_TARGETS_KEY);
    var batches = safeLoad(LS_BATCHES_KEY);
    if (host && targets && batches != null) {
      lsHostAvailabilities = host;
      lsMerchantTargets = targets;
      lsScheduleBatches = Array.isArray(batches) ? batches : [];
      lsNormalizeScheduleBatches();
      // 修复：localStorage 里 batches 可能是 []（空数组仍为 truthy），会导致永远不种演示数据
      if (!lsScheduleBatchesHasAnySession(lsScheduleBatches)) {
        var periodInject = lsGetPeriodSeeds();
        if (targets && targets.length && targets[0].periodStart) {
          periodInject = { startAt: targets[0].periodStart, endAt: targets[0].periodEnd || periodInject.endAt };
        }
        lsScheduleBatches = lsBuildDemoScheduleBatches(periodInject);
        lsNormalizeScheduleBatches();
        lsSaveAll();
      }
      // 已有 localStorage 批次时不会全量重种：若用户曾「同步」导致无待同步场次，或缺少演示批次，则合并/恢复 Demo 批次
      lsEnsureDemoScheduleBatchForPendingSync();
      if (!lsActiveWeekStart && targets && targets.length && targets[0].periodStart) lsActiveWeekStart = targets[0].periodStart;
      return;
    }

    var period = lsGetPeriodSeeds();
    // Seed hosts + availability (free slots). In real product, come from Excel import and/or APP report.
    lsHostAvailabilities = [
      // 2026-03-25 同一天：mock 多条 APP 提报时段（用于展示矩阵 cells 内的多段 chips）
      { id: 'ha1a', hostId: 'h1', hostName: 'Maribel Maldonado', userId: '1001', liveAccountUsername: 'homechef_mike', startAt: '2026-03-25 18:00', endAt: '2026-03-25 19:00', source: 'APP提报', updatedAt: '2026-03-24 10:00', cancelled: false },
      { id: 'ha1b', hostId: 'h1', hostName: 'Maribel Maldonado', userId: '1001', liveAccountUsername: 'homechef_mike', startAt: '2026-03-25 19:00', endAt: '2026-03-25 20:00', source: 'APP提报', updatedAt: '2026-03-24 10:00', cancelled: false },
      { id: 'ha1c', hostId: 'h1', hostName: 'Maribel Maldonado', userId: '1001', liveAccountUsername: 'homechef_mike', startAt: '2026-03-25 20:00', endAt: '2026-03-25 21:00', source: 'APP提报', updatedAt: '2026-03-24 10:00', cancelled: false },
      { id: 'ha1d', hostId: 'h1', hostName: 'Maribel Maldonado', userId: '1001', liveAccountUsername: 'homechef_mike', startAt: '2026-03-25 21:00', endAt: '2026-03-25 22:00', source: 'APP提报', updatedAt: '2026-03-24 10:00', cancelled: false },
      { id: 'ha2', hostId: 'h2', hostName: 'Alex Chen', userId: '2002', liveAccountUsername: 'alex_creator', startAt: '2026-03-26 16:00', endAt: '2026-03-26 20:00', source: 'APP提报', updatedAt: '2026-03-24 10:00', cancelled: false },
      { id: 'ha2b', hostId: 'h2', hostName: 'Alex Chen', userId: '2002', liveAccountUsername: 'alex_creator', startAt: '2026-03-26 22:00', endAt: '2026-03-26 23:00', source: 'APP提报', updatedAt: '2026-03-24 10:00', cancelled: false },
      { id: 'ha3', hostId: 'h3', hostName: 'Priscilla Melendez', userId: '3003', liveAccountUsername: 'priscilla_live', startAt: '2026-03-27 18:00', endAt: '2026-03-27 22:00', source: 'APP提报', updatedAt: '2026-03-24 10:00', cancelled: false },
      { id: 'ha4', hostId: 'h1', hostName: 'Maribel Maldonado', userId: '1001', liveAccountUsername: 'homechef_mike', startAt: '2026-03-28 17:00', endAt: '2026-03-28 21:30', source: 'APP提报', updatedAt: '2026-03-24 12:00', cancelled: false }
    ];

    lsMerchantTargets = [
      { id: 't1', liveAccountUsername: 'homechef_mike', periodStart: period.startAt, periodEnd: period.endAt, targetHours: 6, plannedHours: 0, acceptedHours: 0, status: '未生成', updatedAt: '2026-03-24 09:00' },
      { id: 't2', liveAccountUsername: 'alex_creator', periodStart: period.startAt, periodEnd: period.endAt, targetHours: 4, plannedHours: 0, acceptedHours: 0, status: '未生成', updatedAt: '2026-03-24 09:00' }
    ];

    // Seed: Live Schedule mock batches（用于演示不同 Tab 状态）
    // 注意：这里的 segments 是“一个场次内多个主播的计划时段”，对应列表的“主播（计划分段）”
    lsScheduleBatches = lsBuildDemoScheduleBatches(period);

    lsSaveAll();
    if (!lsTargetsPeriodStartFilter) lsTargetsPeriodStartFilter = period.startAt;
    if (!lsActiveWeekStart) lsActiveWeekStart = period.startAt;
  }

  function lsSaveAll() {
    try { localStorage.setItem(LS_HOST_AVAIL_KEY, JSON.stringify(lsHostAvailabilities)); } catch (e) {}
    try { localStorage.setItem(LS_TARGETS_KEY, JSON.stringify(lsMerchantTargets)); } catch (e) {}
    try { localStorage.setItem(LS_BATCHES_KEY, JSON.stringify(lsScheduleBatches)); } catch (e) {}
  }

  function lsComputeAvailabilityConflicts(list) {
    // Conflict rule (MVP): overlap inside same host.
    var byHost = {};
    (list || []).forEach(function (s) {
      if (s && s.cancelled) return;
      var hid = s.hostId || '';
      if (!hid) return;
      byHost[hid] = byHost[hid] || [];
      byHost[hid].push(s);
    });
    var conflictMap = {};
    Object.keys(byHost).forEach(function (hid) {
      var arr = byHost[hid].slice().sort(function (a, b) { return lsStrToMs(a.startAt) - lsStrToMs(b.startAt); });
      for (var i = 0; i < arr.length; i++) {
        var a = arr[i];
        var aStart = lsStrToMs(a.startAt);
        var aEnd = lsStrToMs(a.endAt);
        if (!(aStart < aEnd)) continue;
        for (var j = i + 1; j < arr.length; j++) {
          var b = arr[j];
          var bStart = lsStrToMs(b.startAt);
          var bEnd = lsStrToMs(b.endAt);
          if (!(bStart < bEnd)) continue;
          if (bStart >= aEnd) break;
          if (bEnd > aStart && bStart < aEnd) {
            conflictMap[a.id] = (conflictMap[a.id] || []).concat(['与另一空闲段重叠（' + b.startAt + '–' + b.endAt + '）']);
            conflictMap[b.id] = (conflictMap[b.id] || []).concat(['与另一空闲段重叠（' + a.startAt + '–' + a.endAt + '）']);
          }
        }
      }
    });
    return conflictMap;
  }

  function lsGetSessionStatusBadge(status) {
    if (status === 'initial') return { cls: 'badge-secondary', label: '初排' };
    if (status === 'waiting_host') return { cls: 'badge-warning', label: '待主播确认' };
    if (status === 'waiting_sync') return { cls: 'badge-primary', label: '待同步' };
    if (status === 'synced') return { cls: 'badge-success', label: '已同步' };
    return { cls: 'badge-secondary', label: status || '-' };
  }

  function lsIsBatchReadyForSync(batch) {
    if (!batch) return false;
    if (batch.status !== 'waiting_sync' && batch.status !== 'waiting_host') return false;
    var total = 0;
    var accepted = 0;
    var rejected = 0;
    (batch.sessions || []).forEach(function (s) {
      if (!s || s.cancelled || !s.pushedToHost) return;
      (s.segments || []).forEach(function (seg) {
        total++;
        if (seg.decisionStatus === 'accepted') accepted++;
        else if (seg.decisionStatus === 'rejected') rejected++;
      });
    });
    return total > 0 && accepted === total && rejected === 0;
  }

  /**
   * 场次行状态（与「主播排期」Tab 对齐）
   * draft 暂存 | pending_confirm 待确认 | pending_sync 待同步 | pending_live 待直播 | live 直播中 | ended 已直播
   */
  function lsComputeSessionRowStatus(batch, session) {
    if (!batch || !session || session.cancelled) return null;
    if (!session.pushedToHost) return 'draft';
    var segs = session.segments || [];
    var allAccepted = segs.length > 0 && segs.every(function (seg) { return seg.decisionStatus === 'accepted'; });
    if (!allAccepted) return 'pending_confirm';
    if (session.syncStatus !== 'synced') return 'pending_sync';
    if (session.livePhase === 'live') return 'live';
    if (session.livePhase === 'ended') return 'ended';
    return 'pending_live';
  }

  var LS_DEMO_BATCH_ID = 'LSB-2026-03-DEMO-001';

  /**
   * 从 localStorage 恢复后：若不存在演示批次则追加；若演示批次内「待同步」为 0（曾全部同步过），则恢复演示场次。
   * 仅影响 id 为 LS_DEMO_BATCH_ID 的批次，不改动用户自建批次。
   */
  function lsEnsureDemoScheduleBatchForPendingSync() {
    var periodInject = lsGetPeriodSeeds();
    if (lsMerchantTargets && lsMerchantTargets.length && lsMerchantTargets[0].periodStart) {
      periodInject = {
        startAt: lsMerchantTargets[0].periodStart,
        endAt: lsMerchantTargets[0].periodEnd || periodInject.endAt
      };
    }
    var demoArr;
    try {
      demoArr = lsBuildDemoScheduleBatches(periodInject);
    } catch (e) {
      return;
    }
    var demoBatch = demoArr && demoArr[0];
    if (!demoBatch || demoBatch.id !== LS_DEMO_BATCH_ID) return;

    var list = lsScheduleBatches || [];
    var idx = list.findIndex(function (b) { return b && b.id === LS_DEMO_BATCH_ID; });
    if (idx === -1) {
      lsScheduleBatches = list.concat([JSON.parse(JSON.stringify(demoBatch))]);
      lsNormalizeScheduleBatches();
      lsSaveAll();
      return;
    }
    var existing = list[idx];
    var pendingN = 0;
    (existing.sessions || []).forEach(function (s) {
      if (!s || s.cancelled) return;
      if (lsComputeSessionRowStatus(existing, s) === 'pending_sync') pendingN++;
    });
    if (pendingN > 0) return;

    existing.sessions = JSON.parse(JSON.stringify(demoBatch.sessions));
    existing.status = demoBatch.status;
    existing.periodStart = demoBatch.periodStart;
    existing.periodEnd = demoBatch.periodEnd;
    existing.updatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
    lsNormalizeScheduleBatches();
    lsSaveAll();
  }

  /** 各直播状态 Tab 的排期数量（与达人触达 Tab 计数一致，不受搜索框过滤） */
  function lsCountSessionsByStatus() {
    var counts = { draft: 0, pending_confirm: 0, pending_sync: 0, pending_live: 0, live: 0, ended: 0 };
    (lsScheduleBatches || []).forEach(function (b) {
      (b.sessions || []).forEach(function (s) {
        var st = lsComputeSessionRowStatus(b, s);
        if (st && counts[st] != null) counts[st]++;
      });
    });
    return counts;
  }

  /** 将指定场次标记为已推送主播（可单场或多选） */
  function lsPushSessionsToHost(batch, sessionIds) {
    if (!batch || !sessionIds || !sessionIds.length) return;
    var set = {};
    sessionIds.forEach(function (id) { if (id) set[id] = true; });
    var hadPushedBefore = (batch.sessions || []).some(function (s) { return s && s.pushedToHost; });
    var anyNewPush = false;
    var nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');
    (batch.sessions || []).forEach(function (s) {
      if (!s || s.cancelled) return;
      if (!set[s.id]) return;
      if (s.pushedToHost) return;
      anyNewPush = true;
      s.pushedToHost = true;
      (s.segments || []).forEach(function (seg) {
        seg.decisionStatus = 'pending';
        seg.decisionReason = '';
      });
    });
    if (!anyNewPush) return;
    batch.updatedAt = nowStr;
    if (!hadPushedBefore) {
      (lsMerchantTargets || []).forEach(function (t) {
        if (t.periodStart !== batch.periodStart) return;
        if ((Number(t.plannedHours) || 0) > 0) {
          t.acceptedHours = 0;
          t.status = '等待主播确认';
        }
        t.updatedAt = batch.updatedAt;
      });
    }
    lsRecomputeBatchStatuses();
    lsSaveAll();
  }

  function lsSessionHostsLabel(session) {
    var names = [];
    var seen = {};
    (session.segments || []).forEach(function (seg) {
      var n = (seg && seg.hostName) ? seg.hostName : (seg && seg.hostId);
      if (!n) return;
      if (seen[n]) return;
      seen[n] = true;
      names.push(n);
    });
    return names.length ? names.join('、') : '-';
  }

  /** 列表展示用：与编辑详情页 detail 字段对齐（只读，不写入默认 detail） */
  function lsSessionDetailDisplay(s) {
    var d = (s && s.detail) ? s.detail : {};
    return {
      subject: String(d.subject || (s && s.eventName) || '').trim(),
      liveType: d.liveType ? String(d.liveType) : '',
      timeZone: d.timeZone ? String(d.timeZone) : '',
      follower: d.follower ? String(d.follower) : '',
      remarkEn: String(d.remarkEn || '').trim()
    };
  }

  /** 场次下列表：与结算 Fix Issue 列表 Host 列一致（ha-abnormal-host-tag）+ 计划时段 */
  function lsSessionHostsSegmentsHtml(s) {
    var segs = (s && s.segments) ? s.segments : [];
    if (!segs.length) {
      return '<span class="ls-sess-cell-muted">-</span>';
    }
    var inner = segs.map(function (seg) {
      var name = String(seg.hostName || seg.hostId || '-').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      var plan = (String(seg.startAt || '').replace(/</g, '&lt;')) + ' ~ ' + (String(seg.endAt || '').replace(/</g, '&lt;'));
      var acc = seg.decisionStatus === 'accepted';
      var statusTag = acc
        ? '<span class="ha-abnormal-host-tag ha-abnormal-host-tag--status ha-abnormal-host-tag--ok">已确认</span>'
        : '<span class="ha-abnormal-host-tag ha-abnormal-host-tag--status ha-abnormal-host-tag--pending">待确认</span>';
      return '<div class="ls-sess-host-stack">' +
        '<div class="ls-sess-host-stack-line">' +
        '<span class="ha-abnormal-host-tag">' + name + '</span>' +
        statusTag +
        '</div>' +
        '<div class="ls-sess-host-stack-plan">' + plan + '</div>' +
        '</div>';
    }).join('');
    // 只有 1 位主播时补一个不可见占位块，保持与多主播行的视觉基线一致。
    if (segs.length === 1) {
      inner += '<div class="ls-sess-host-stack ls-sess-host-stack--placeholder" aria-hidden="true">' +
        '<div class="ls-sess-host-stack-line">' +
        '<span class="ha-abnormal-host-tag">-</span>' +
        '<span class="ha-abnormal-host-tag ha-abnormal-host-tag--status ha-abnormal-host-tag--pending">-</span>' +
        '</div>' +
        '<div class="ls-sess-host-stack-plan">-</div>' +
        '</div>';
    }
    return '<div class="ha-abnormal-host-tags ls-sess-host-tags-col">' + inner + '</div>';
  }

  function lsSessionRemarkCell(s) {
    var r = lsSessionDetailDisplay(s).remarkEn;
    if (!r) return '<span class="ls-sess-cell-muted">-</span>';
    var show = r.length > 56 ? r.slice(0, 56) + '…' : r;
    return '<span class="ls-sess-remark-preview" title="' + String(r).replace(/"/g, '&quot;').replace(/</g, '&lt;') + '">' + show.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>';
  }

  function lsSessionTimeCell(s) {
    var dd = lsSessionDetailDisplay(s);
    var tz = dd.timeZone || lsDisplayTimeZone || '-';
    var start = s.plannedStartAt || '-';
    var end = s.plannedEndAt || '-';
    return '<div class="ls-sess-time-cell">' +
      '<div class="ls-sess-time-tz">' + String(tz).replace(/</g, '&lt;') + '</div>' +
      '<div class="ls-sess-time-range">' + String(start).replace(/</g, '&lt;') + ' ~ ' + String(end).replace(/</g, '&lt;') + '</div>' +
      '</div>';
  }

  /**
   * 「待同步」Tab：展示 TikTok Live Event 创建任务状态（与场次 syncStatus 区分：此为子任务）。
   * tiktokLiveEventSyncStatus: idle | syncing | failed
   * tiktokSyncFailureCode: live_account_auth_expired | other
   */
  function lsSessionTikTokLiveEventSyncCell(s) {
    if (!s || s.syncStatus === 'synced') {
      return '<span class="ls-sess-cell-muted">—</span>';
    }
    var job = s.tiktokLiveEventSyncStatus || 'idle';
    var code = s.tiktokSyncFailureCode || '';
    var detail = (s.tiktokSyncFailureDetail || '').trim();
    if (job === 'syncing') {
      return '' +
        '<div class="ls-sess-stack">' +
        '<span class="badge badge-primary"><i class="fas fa-spinner fa-spin" style="margin-right:6px" aria-hidden="true"></i>' + lsEscHtml(t('ls.tiktok_sync.status_syncing')) + '</span>' +
        '</div>';
    }
    if (job === 'failed') {
      var reasonText = code === 'live_account_auth_expired'
        ? t('ls.tiktok_sync.fail_auth')
        : (detail || t('ls.tiktok_sync.fail_other'));
      var maxLen = 80;
      var truncated = reasonText.length > maxLen ? reasonText.slice(0, maxLen) + '…' : reasonText;
      var titleAttr = String(reasonText).replace(/"/g, '&quot;').replace(/</g, '&lt;');
      return '' +
        '<div class="ls-sess-stack">' +
        '<span class="badge badge-warning">' + lsEscHtml(t('ls.tiktok_sync.status_failed')) + '</span>' +
        '<div class="ls-sess-stack__sub ls-sess-tiktok-sync-reason" title="' + titleAttr + '">' + lsEscHtml(truncated) + '</div>' +
        '</div>';
    }
    return '' +
      '<div class="ls-sess-stack">' +
      '<span class="badge badge-secondary">' + lsEscHtml(t('ls.tiktok_sync.status_idle')) + '</span>' +
      '</div>';
  }

  /** MVP Mock：单场同步 TikTok，写入 TikTok Session ID 并进入「待直播」 */
  function lsApplyTikTokSyncToSession(batch, session, idx) {
    if (!batch || !session) return;
    session.idempotencyKey = (batch.id || '') + '_' + (session.id || '');
    delete session.tiktokLiveEventSyncStatus;
    delete session.tiktokSyncFailureCode;
    delete session.tiktokSyncFailureDetail;
    session.syncStatus = 'synced';
    session.tiktokSessionId = String(Date.now());
    session.tiktokEventId = session.tiktokSessionId;
    session.syncAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
    session.livePhase = 'scheduled';
    batch.updatedAt = session.syncAt;
    var allSynced = true;
    (batch.sessions || []).forEach(function (x) {
      if (!x || x.cancelled || !x.pushedToHost) return;
      if (x.syncStatus !== 'synced') allSynced = false;
    });
    if (allSynced) batch.status = 'synced';
  }

  function lsRecomputeBatchStatuses() {
    (lsScheduleBatches || []).forEach(function (b) {
      if (!b || b.status === 'synced') return;
      var pushed = (b.sessions || []).filter(function (s) { return s && !s.cancelled && s.pushedToHost; });
      if (!pushed.length) {
        b.status = 'initial';
        return;
      }
      var total = 0;
      var accepted = 0;
      var rejected = 0;
      pushed.forEach(function (s) {
        (s.segments || []).forEach(function (seg) {
          total++;
          if (seg.decisionStatus === 'accepted') accepted++;
          else if (seg.decisionStatus === 'rejected') rejected++;
        });
      });
      if (total === 0) return;
      if (accepted === total && rejected === 0) {
        b.status = 'waiting_sync';
        var allPushedSynced = pushed.every(function (s) { return s.syncStatus === 'synced'; });
        if (allPushedSynced) b.status = 'synced';
      } else {
        b.status = 'waiting_host';
      }
    });
  }

  function lsGenerateInitialSchedule() {
    // Generate a new batch for all targets in the currently selected period startAt.
    var periodStart = lsTargetsPeriodStartFilter;
    if (!periodStart) return;
    var genTz = lsGenerateInitialTimeZone || lsDisplayTimeZone || lsMerchantTimeZone;
    lsGenerateInitialTimeZone = null;
    function msToStrGen(ms) {
      try {
        return lsFormatMs(ms, genTz);
      } catch (e) {
        return '';
      }
    }
    var hostIdsFilter = lsGenerateInitialHostIdsFilter;
    var accountUsernamesFilter = lsGenerateInitialAccountUsernamesFilter;

    var targets = (lsMerchantTargets || []).filter(function (t) {
      if (!t) return false;
      if (t.periodStart !== periodStart) return false;
      if (accountUsernamesFilter && accountUsernamesFilter.length && accountUsernamesFilter.indexOf(t.liveAccountUsername) === -1) return false;
      return true;
    });
    if (!targets.length) {
      showToast('No targets to generate.', 'warn');
      return;
    }

    // Regeneration: clear previous batches & reset planned metrics for this period.
    (lsMerchantTargets || []).forEach(function (t) {
      if (t.periodStart !== periodStart) return;
      t.plannedHours = 0;
      // acceptedHours/real acceptance are not recalculated in MVP; keep as-is if already present.
      // If you need strict reset, you can also set acceptedHours = 0 here.
      t.status = '未生成';
      t.updatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
    });
    lsScheduleBatches = (lsScheduleBatches || []).filter(function (b) { return b.periodStart !== periodStart; });

    // Shared free blocks across all sessions in a batch (prevents host conflicts).
    var periodEnd = (targets[0] && targets[0].periodEnd) || '';
    var periodStartMs = lsStrToMs(periodStart + ' 00:00');
    var periodEndMs = lsStrToMs(periodEnd + ' 23:59');

    var freeBlocks = []; // [{timeMs, hostId, hostName}]
    (lsHostAvailabilities || []).forEach(function (slot) {
      if (slot && slot.cancelled) return;
      if (hostIdsFilter && hostIdsFilter.length && hostIdsFilter.indexOf(slot.hostId) === -1) return;
      var sMs = lsStrToMs(slot.startAt);
      var eMs = lsStrToMs(slot.endAt);
      if (!(sMs < eMs)) return;
      if (eMs < periodStartMs || sMs > periodEndMs) return;
      var cursor = new Date(sMs);
      cursor.setMinutes(0, 0, 0);
      var hourMs = 60 * 60 * 1000;
      var start = cursor.getTime();
      if (start < sMs) start += hourMs;
      for (var tm = start; tm + hourMs <= eMs; tm += hourMs) {
        freeBlocks.push({ timeMs: tm, hostId: slot.hostId, hostName: slot.hostName, hostKey: slot.hostId });
      }
    });

    // Map free block by time+host and allow consumption.
    var freeMap = {};
    freeBlocks.forEach(function (b) {
      freeMap[b.timeMs + '|' + b.hostKey] = true;
    });

    function anyHostAt(timeMs) {
      var ids = Object.keys(freeMap);
      for (var i = 0; i < ids.length; i++) {
        var k = ids[i];
        var parts = k.split('|');
        if (Number(parts[0]) === timeMs && freeMap[k]) return parts[1];
      }
      return null;
    }

    function getHostsAt(timeMs) {
      var out = [];
      Object.keys(freeMap).forEach(function (k) {
        var parts = k.split('|');
        if (Number(parts[0]) === timeMs && freeMap[k]) out.push(parts[1]);
      });
      return out;
    }

    function hostNameById(hostId) {
      var h = (lsHostAvailabilities || []).find(function (s) { return s.hostId === hostId; });
      return h ? (h.hostName || hostId) : hostId;
    }

    // Candidate start hours: all times that have at least one free host.
    var timesSet = {};
    freeBlocks.forEach(function (b) { timesSet[b.timeMs] = true; });
    var times = Object.keys(timesSet).map(function (x) { return Number(x); }).sort(function (a, b) { return a - b; });

    function isTimeBlockFeasible(startMs) {
      var hours = lsSessionDurationMinutes / 60;
      for (var i = 0; i < hours; i++) {
        if (!anyHostAt(startMs + i * 60 * 60 * 1000)) return false;
      }
      return true;
    }

    function pickHostForHour(timeMs, preferredHostId) {
      var hosts = getHostsAt(timeMs);
      if (!hosts.length) return null;
      if (preferredHostId && hosts.indexOf(preferredHostId) !== -1) return preferredHostId;
      // otherwise pick the first available hostKey (stable by insertion order).
      return hosts[0];
    }

    var newBatchId = 'LSB-' + periodStart + '-' + Date.now();
    var batch = {
      id: newBatchId,
      periodStart: periodStart,
      periodEnd: periodEnd,
      status: 'initial',
      createdBy: '商家',
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      liveAccountTargets: targets.map(function (t) { return { liveAccountUsername: t.liveAccountUsername, targetHours: t.targetHours }; }),
      sessions: []
    };

    var accountNeedHours = {};
    targets.forEach(function (t) { accountNeedHours[t.liveAccountUsername] = Number(t.targetHours) || 0; });

    var sessionIndex = 1;
    var nextScheduleNumericId = lsMaxScheduleNumericId() + 1;
    if (nextScheduleNumericId < 1001) nextScheduleNumericId = 1001;
    if (nextScheduleNumericId > 9999) nextScheduleNumericId = 1001;
    // Greedy allocation across accounts: iterate times and allocate sessions to the account with largest remaining need.
    while (times.length && Object.keys(accountNeedHours).some(function (k) { return accountNeedHours[k] > 0; })) {
      // Choose next feasible time start
      var chosenStart = null;
      for (var ti = 0; ti < times.length; ti++) {
        var st = times[ti];
        if (isTimeBlockFeasible(st)) { chosenStart = st; break; }
      }
      if (chosenStart == null) break;

      var remainingSorted = Object.keys(accountNeedHours).sort(function (a, b) { return (accountNeedHours[b] || 0) - (accountNeedHours[a] || 0); });
      var chosenAccount = remainingSorted[0];
      if (!chosenAccount || (accountNeedHours[chosenAccount] || 0) <= 0) {
        accountNeedHours[chosenAccount] = 0;
        break;
      }

      var hours = lsSessionDurationMinutes / 60;
      var segments = [];
      var preferredHost = null;
      var relaySegmentsExceeded = false;
      for (var hi = 0; hi < hours; hi++) {
        var hTime = chosenStart + hi * 60 * 60 * 1000;
        var hostId = pickHostForHour(hTime, preferredHost);
        if (!hostId) break;
        // consume block
        freeMap[hTime + '|' + hostId] = false;

        if (segments.length && segments[segments.length - 1].hostId === hostId) {
          segments[segments.length - 1].endAt = msToStrGen(hTime + 60 * 60 * 1000);
        } else {
          if (segments.length >= lsMaxRelaySegments) relaySegmentsExceeded = true;
          segments.push({
            id: 'seg-' + newBatchId + '-' + sessionIndex + '-' + segments.length,
            hostId: hostId,
            hostName: hostNameById(hostId),
            startAt: msToStrGen(hTime),
            startAtMs: hTime,
            endAt: msToStrGen(hTime + 60 * 60 * 1000),
            endAtMs: hTime + 60 * 60 * 1000,
            decisionStatus: 'pending',
            decisionReason: ''
          });
        }
        preferredHost = hostId;
      }

      var plannedStartAt = msToStrGen(chosenStart);
      plannedEndAt = msToStrGen(chosenStart + lsSessionDurationMinutes * 60 * 1000);

      if (!segments.length) {
        // can't allocate anymore at this time.
        // Remove this start time so we don't stuck.
        times = times.filter(function (t) { return t !== chosenStart; });
        continue;
      }

      // Add session
      var sessionDurationHours = lsSessionDurationMinutes / 60;
      var sidNum = nextScheduleNumericId;
      nextScheduleNumericId += 1;
      if (nextScheduleNumericId > 9999) nextScheduleNumericId = 1001;
      batch.sessions.push({
        id: 'sess-' + newBatchId + '-' + sessionIndex,
        scheduleId: sidNum,
        liveAccountUsername: chosenAccount,
        eventName: 'Live Event ' + sessionIndex,
        plannedStartAt: plannedStartAt,
        plannedStartAtMs: chosenStart,
        plannedEndAt: plannedEndAt,
        plannedEndAtMs: chosenStart + lsSessionDurationMinutes * 60 * 1000,
        segments: segments,
        availabilityReason: '按空闲段小时块顺序自动分配（相同主播连续可用会自动合并接力段）。',
        conflictReason: relaySegmentsExceeded ? ('接力段数量超过上限（最大 ' + lsMaxRelaySegments + ' 段），建议在初排阶段人工调整以提升确认成功率。') : '',
        syncStatus: 'not_synced',
        tiktokEventId: null,
        tiktokSessionId: null,
        livePhase: null,
        pushedToHost: false,
        syncAt: null
      });

      // Reduce remaining hours for that account
      accountNeedHours[chosenAccount] = Math.max(0, (accountNeedHours[chosenAccount] || 0) - sessionDurationHours);
      sessionIndex++;

      // Remove this start time so we don't reuse exact same block start across sessions.
      times = times.filter(function (t) { return t !== chosenStart; });
    }

    // Update merchant targets planned hours based on sessions.
    (batch.sessions || []).forEach(function (s) {
      var t = lsMerchantTargets.find(function (x) { return x.liveAccountUsername === s.liveAccountUsername && x.periodStart === periodStart; });
      if (t) t.plannedHours = (Number(t.plannedHours) || 0) + (lsSessionDurationMinutes / 60);
      if (t) t.status = '初排中';
      if (t) t.updatedAt = batch.updatedAt;
    });

    if (lsMerchantTargets && lsMerchantTargets.length) {
      lsMerchantTargets.forEach(function (t) {
        if (t.periodStart === periodStart) {
          if ((Number(t.plannedHours) || 0) <= 0) t.status = '未生成';
          t.updatedAt = t.updatedAt || batch.updatedAt;
        }
      });
    }

    (batch.sessions || []).forEach(function (s) {
      if (!s) return;
      s.detail = s.detail || {};
      s.detail.timeZone = genTz;
    });

    lsScheduleBatches.unshift(batch);
    lsSaveAll();
    showToast('初排生成完成（MVP Mock）', 'success');

    // Keep the selection; user can regenerate with a different host from the modal.
  }

  function renderLiveSchedule() {
    lsLoadOrSeed();
    lsRecomputeBatchStatuses();

    var tabButtons = [
      { key: 'host_avail', label: t('ls.tab.host_avail') },
      { key: 'targets', label: t('ls.tab.targets') },
      { key: 'batches', label: t('ls.tab.batches') }
    ];

    var activeTab = lsActiveTab;
    var tabHtml = '<div class="or-tabs" id="lsTabs">' + tabButtons.map(function (b) {
      var active = b.key === activeTab;
      return '<button type="button" class="or-tab' + (active ? ' or-tab--active' : '') + '" data-ls-tab="' + b.key + '">' + b.label + '</button>';
    }).join('') + '</div>';

    var bodyHtml = renderLiveScheduleTab(activeTab);

    return '' +
      '<div class="ha-settle-content ls-live-schedule" id="lsRoot">' +
      '<div class="ha-settle-card">' +
      '<div class="ha-settle-intro ls-live-schedule-intro">' +
      '<h3 class="ha-rules-title">' + t('ls.title') + '</h3>' +
      '<p class="ha-settle-desc ls-live-schedule-desc">' + t('ls.intro') + '</p>' +
      '</div>' +
      tabHtml +
      '<div class="or-tab-body" id="lsTabBody">' + bodyHtml + '</div>' +
      '</div>' +
      renderLiveScheduleBatchDrawerMarkup() +
      renderLiveScheduleHostDrawerMarkup() +
      renderLiveScheduleModalsMarkup();
  }

  function renderLiveScheduleTab(tabKey) {
    if (tabKey === 'host_avail') return renderLiveScheduleHostAvailTab();
    if (tabKey === 'targets') return renderLiveScheduleTargetsTab();
    return renderLiveScheduleBatchesTab();
  }

  function renderLiveScheduleHostAvailTab() {
    var weekStart = lsActiveWeekStart;
    if (!weekStart) {
      var fallback = (lsMerchantTargets && lsMerchantTargets.length ? lsMerchantTargets[0].periodStart : '') || (lsHostAvailabilities[0] ? lsDateStrFromDateTime(lsHostAvailabilities[0].startAt) : (lsGetPeriodSeeds().startAt || ''));
      weekStart = fallback;
      lsActiveWeekStart = weekStart;
    }

    var weekDays = lsGetWeekDateStrs(weekStart); // Mon-Sun
    function lsDayLabel(dateStr, dayIdx) {
      var parts = String(dateStr || '').split('-');
      var mm = parts[1] || '';
      var dd = parts[2] || '';
      return t('ls.weekday.' + dayIdx) + ' (' + mm + '/' + dd + ')';
    }

    var sourceFilter = 'all';

    var q = (lsHostFilter.host || '').toLowerCase();

    // Timezone switch (display only). Default is merchant local timezone.
    var lsTzList = [
      'UTC',
      'America/Los_Angeles',
      'America/New_York',
      'Europe/London',
      'Europe/Paris',
      'Asia/Shanghai',
      'Asia/Tokyo',
      'Asia/Singapore',
      'Australia/Sydney'
    ];
    if (lsTzList.indexOf(lsMerchantTimeZone) === -1) lsTzList.unshift(lsMerchantTimeZone);
    if (lsTzList.indexOf(lsDisplayTimeZone) === -1) lsTzList.push(lsDisplayTimeZone);
    function lsTzShortName(tz) {
      if (!tz) return '';
      if (tz === 'UTC') return 'UTC';
      var parts = String(tz).split('/');
      return parts[parts.length - 1] || tz;
    }

    // Build host scope from available segments (excluding cancelled).
    var hostMap = {};
    (lsHostAvailabilities || []).forEach(function (s) {
      if (!s || s.cancelled) return;
      if (!s.hostId) return;
      if (q && String(s.hostName || '').toLowerCase().indexOf(q) === -1) return;
      var d = lsDateStrFromDateTime(s.startAt);
      if (!d) return;
      // Include hosts that have any overlap within week
      var dayIdx = weekDays.indexOf(d);
      if (dayIdx === -1) return;
      // Source filter is applied at cell level, but we keep host in scope if any segment hits the week.
      hostMap[s.hostId] = hostMap[s.hostId] || { hostId: s.hostId, hostName: s.hostName || s.hostId, userId: s.userId || '' };
    });

    function lsFormatUserId(userId) {
      if (userId === null || userId === undefined || userId === '') return '-';
      return String(userId).replace(/\D/g, '').padStart(4, '0');
    }

    var hosts = Object.keys(hostMap).map(function (hid) { return hostMap[hid]; }).sort(function (a, b) {
      return String(a.hostName || '').localeCompare(String(b.hostName || ''));
    });

    function sumAvailableForHost(hostId) {
      var total = 0;
      for (var i = 0; i < 7; i++) total += lsComputeAvailableHoursForHostDay(hostId, weekDays[i], sourceFilter);
      return total;
    }

    function sumAllocatedForHost(hostId) {
      var total = 0;
      for (var i = 0; i < 7; i++) total += lsComputeAllocatedHoursForHostDay(hostId, weekDays[i]);
      return total;
    }

    function lsChipHtml(seg, showActiveBadge) {
      var cs = seg._clipStartMs != null ? seg._clipStartMs : lsStrToMs(seg.startAt);
      var ce = seg._clipEndMs != null ? seg._clipEndMs : lsStrToMs(seg.endAt);
      var t1 = lsMsToTimeStr(cs);
      var t2 = lsMsToTimeStr(ce);
      return '<span class="badge ' + (showActiveBadge ? 'badge-primary' : 'badge-secondary') + '" style="margin-right:6px;margin-bottom:2px;white-space:nowrap;cursor:pointer">' + t1 + '-' + t2 + '</span>';
    }

    var rows = hosts.map(function (h) {
      var hostId = h.hostId;
      var availWeek = sumAvailableForHost(hostId);
      var allocatedWeek = sumAllocatedForHost(hostId);
      var remainingWeek = Math.max(0, availWeek - allocatedWeek);
      var badgeCls = remainingWeek > 0 ? 'badge-primary' : 'badge-warning';

      var cells = weekDays.map(function (dayDateStr, dayIdx) {
        var activeSegs = lsGetActiveHostDaySegments(hostId, dayDateStr, sourceFilter);
        var availDay = lsComputeAvailableHoursForHostDay(hostId, dayDateStr, sourceFilter);
        var allocatedDay = lsComputeAllocatedHoursForHostDay(hostId, dayDateStr);
        var remainingDay = Math.max(0, availDay - allocatedDay);

        var tooltip = '';
        var cellOpacity = '';
        var segsHtml = '';
        if (!activeSegs.length) {
          tooltip = t('ls.host.tooltip.no_avail');
          segsHtml = '<div style="color:var(--text-subtext);font-size:12px">' + t('ls.host.cell.none') + '</div>';
        } else {
          tooltip = lsT('ls.host.tooltip.day', remainingDay.toFixed(1), allocatedDay.toFixed(1));
          if (remainingDay <= 0) {
            cellOpacity = 'opacity:0.65';
          }
          var maxChips = 4;
          segsHtml = activeSegs.slice(0, maxChips).map(function (seg) {
            return lsChipHtml(seg, remainingDay > 0);
          }).join('');
          if (activeSegs.length > maxChips) {
            segsHtml += '<span class="badge badge-secondary" style="white-space:nowrap;cursor:pointer">' + lsT('ls.host.overflow', activeSegs.length - maxChips) + '</span>';
          }
        }

        return '' +
          '<td>' +
          '  <div class="ls-host-matrix-cell" data-open-host-drawer="1" data-host-id="' + hostId + '" data-day-date="' + dayDateStr + '" title="' + String(tooltip).replace(/"/g, '&quot;') + '" style="min-height:52px;' + cellOpacity + '">' +
          '    <div style="display:flex;flex-wrap:wrap;align-items:flex-start">' +
          '      ' + segsHtml +
          '    </div>' +
          '  </div>' +
          '</td>';
      }).join('');

      var userIdStr = lsFormatUserId(h.userId);

      return '' +
        '<tr>' +
        '<td style="min-width:240px">' +
        '  <div style="display:flex;justify-content:flex-start;gap:10px;align-items:flex-start">' +
        '    <input type="checkbox" class="ls-host-row-pick" data-host-id="' + String(hostId).replace(/"/g, '&quot;') + '" style="margin-top:4px;flex-shrink:0" />' +
        '    <div style="flex:1;min-width:0">' +
        '      <div style="font-weight:600">' + (h.hostName || hostId) + '</div>' +
        '      <div style="font-size:12px;color:var(--text-subtext);margin-top:4px">' + t('ls.user_id') + ': ' + userIdStr + '</div>' +
        '      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">' +
        '        <span class="badge badge-secondary">' + lsT('ls.host.metric_avail', availWeek.toFixed(1)) + '</span>' +
        '        <span class="badge badge-secondary">' + lsT('ls.host.metric_alloc', allocatedWeek.toFixed(1)) + '</span>' +
        '        <span class="badge ' + badgeCls + '">' + (remainingWeek > 0 ? t('ls.host.badge.open') : t('ls.host.badge.full')) + '（' + lsT('ls.host.summary_remain', remainingWeek.toFixed(1)) + '）</span>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '  <div style="font-size:12px;color:var(--text-subtext);margin-top:10px">' + t('ls.host.row.hint') + '</div>' +
        '</td>' +
        cells +
        '</tr>';
    }).join('');

    var weekRangeLabel = weekStart + ' ~ ' + lsAddDaysToDateStr(weekStart, 6);

    return '' +
      '<div class="card ha-settle-card ls-live-schedule-card">' +
      '  <div class="ha-settle-intro">' +
      '    <div class="filters-row ls-host-schedule-filters" style="flex-wrap:wrap;align-items:center">' +
      '      <input class="input" id="lsHostSearch" placeholder="' + lsEscHtml(t('ls.host.search_ph')) + '" value="' + (lsHostFilter.host || '') + '" />' +
      '      <select class="select" id="lsTimeZoneSelect" style="min-width:220px">' +
      lsTzList.map(function (tz) {
        var active = tz === lsDisplayTimeZone;
        var suffix = tz === lsMerchantTimeZone ? t('ls.host.tz_merchant') : '';
        return '<option value="' + tz + '"' + (active ? ' selected' : '') + '>' + lsTzShortName(tz) + ' ' + suffix + '</option>';
      }).join('') +
      '      </select>' +
      '      <div class="ls-host-schedule-filters__spacer" style="flex:1;min-width:8px"></div>' +
      '      <div class="ls-host-schedule-filters__right" style="display:flex;flex-wrap:wrap;align-items:center;gap:10px">' +
      '        <button type="button" class="btn btn-ghost btn-sm" id="lsWeekPrev"><i class="fas fa-chevron-left"></i> ' + t('ls.host.week_prev') + '</button>' +
      '        <button type="button" class="btn btn-ghost btn-sm" id="lsWeekThis"><i class="fas fa-calendar-day"></i> ' + t('ls.host.week_this') + '</button>' +
      '        <button type="button" class="btn btn-ghost btn-sm" id="lsWeekNext">' + t('ls.host.week_next') + ' <i class="fas fa-chevron-right"></i></button>' +
      '      </div>' +
      '    </div>' +
      '    <div class="ls-host-window-hint" style="font-size:12px;color:var(--text-subtext);margin-top:10px">' + lsT('ls.host.window', weekRangeLabel) + '</div>' +
      '  </div>' +
      '  <div class="ls-host-gen-toolbar">' +
      '    <label class="ls-host-gen-toolbar-left" style="display:inline-flex;align-items:center;gap:8px;cursor:pointer">' +
      '      <input type="checkbox" id="lsHostSelectAllPicks" title="' + lsEscHtml(t('ls.host.select_all')) + '" />' +
      '      <span style="font-size:12px;color:var(--text-body)">' + t('ls.host.select_all') + '</span>' +
      '    </label>' +
      '    <div class="ls-host-gen-toolbar__genpair">' +
      '      <button type="button" class="btn btn-primary btn-sm ls-ai-generate-btn" id="lsHostAvailGenBtn" disabled><i class="fas fa-wand-magic-sparkles" aria-hidden="true"></i> ' + t('ls.host.gen') + '</button>' +
      '      <span id="lsHostAvailGenCount" style="font-size:12px;color:var(--text-subtext)">' + lsT('ls.host.selected_n', '0') + '</span>' +
      '      <span style="font-size:12px;color:var(--text-subtext)">' + t('ls.host.gen_hint') + '</span>' +
      '    </div>' +
      '    <div class="ls-host-gen-toolbar__spacer" style="flex:1;min-width:8px"></div>' +
      '    <div class="ls-host-gen-toolbar__actions">' +
      '      <button type="button" class="btn btn-secondary btn-sm" id="lsHostAvailAddSlotBtn"><i class="fas fa-plus"></i> ' + t('ls.host.add_slot_btn') + '</button>' +
      '    </div>' +
      '  </div>' +
      '  <div class="table-wrap ha-settle-table-wrap">' +
      '    <table class="ha-settle-table" style="table-layout:fixed">' +
      '      <thead>' +
      '        <tr>' +
      '          <th style="min-width:240px">' + t('ls.host.th.matrix') + '</th>' +
      weekDays.map(function (d, idx) { return '<th style="width:120px">' + lsDayLabel(d, idx) + '</th>'; }).join('') +
      '        </tr>' +
      '      </thead>' +
      '      <tbody>' + (rows || '<tr><td colspan="8" class="ha-settle-empty ha-rules-empty-state"><span class="ha-rules-empty-text">' + t('ls.host.empty_matrix') + '</span></td></tr>') + '</tbody>' +
      '    </table>' +
      '  </div>' +
      '</div>';
  }

  function renderLiveScheduleHostDrawerAvailabilityTable() {
    var hostId = lsHostDrawerHostId;
    var dayDateStr = lsHostDrawerDayDate;
    if (!hostId || !dayDateStr) return '<div>请选择一个日期</div>';

    var dayRange = lsGetDayRangeMs(dayDateStr);
    if (!dayRange) return '<div>日期无效</div>';

    var addToolbar = '<div class="ls-avail-drawer-actions">' +
      '<button type="button" class="btn btn-primary btn-sm" id="lsAvailAddManual">' +
      '<i class="fas fa-plus"></i> ' + t('ls.drawer.add_slot_btn') + '</button>' +
      '</div>';

    var segs = (lsHostAvailabilities || []).filter(function (s) {
      if (!s || s.hostId !== hostId) return false;
      var sMs = lsStrToMs(s.startAt);
      var eMs = lsStrToMs(s.endAt);
      if (!isFinite(sMs) || !isFinite(eMs) || !(sMs < eMs)) return false;
      if (s.cancelled) {
        // still show cancelled segments for restore
      }
      return lsComputeHoursOverlap(s.startAt, s.endAt, dayRange.startMs, dayRange.endMs) > 0;
    });

    segs.sort(function (a, b) { return lsStrToMs(a.startAt) - lsStrToMs(b.startAt); });

    if (!segs.length) {
      return addToolbar + '<div class="ha-settle-empty ha-rules-empty-state" style="padding:16px"><span class="ha-rules-empty-text">' + t('ls.drawer.avail_empty') + '</span></div>';
    }

    var rows = segs.map(function (s) {
      var sMs = lsStrToMs(s.startAt);
      var eMs = lsStrToMs(s.endAt);
      var cs = Math.max(sMs, dayRange.startMs);
      var ce = Math.min(eMs, dayRange.endMs);
      var durH = (ce - cs) / 3600000;
      var statusBadge = s.cancelled
        ? '<span class="badge badge-secondary">' + t('ls.drawer.avail_status_voided') + '</span>'
        : '<span class="badge badge-success">' + t('ls.drawer.avail_status_valid') + '</span>';
      var startT = lsMsToTimeStr(cs);
      var endT = lsMsToTimeStr(ce);
      var actions = '';
      if (!s.cancelled) {
        actions += '<button type="button" class="btn btn-ghost btn-sm ls-avail-edit" data-avail-id="' + (s.id || '') + '"><i class="fas fa-pen"></i> ' + t('common.edit') + '</button>';
        actions += '<button type="button" class="btn btn-secondary btn-sm ls-avail-cancel" data-avail-id="' + (s.id || '') + '"><i class="fas fa-trash"></i> ' + t('ls.drawer.avail_void') + '</button>';
      } else {
        actions += '<button type="button" class="btn btn-ghost btn-sm ls-avail-restore" data-avail-id="' + (s.id || '') + '"><i class="fas fa-rotate-left"></i> ' + t('ls.drawer.avail_restore') + '</button>';
      }
      return '' +
        '<tr>' +
        '<td style="width:140px">' + statusBadge + '</td>' +
        '<td style="white-space:nowrap">' + startT + '</td>' +
        '<td style="white-space:nowrap">' + endT + '</td>' +
        '<td style="white-space:nowrap">' + (durH > 0 ? (durH.toFixed(1) + 'h') : '-') + '</td>' +
        '<td>' + (s.source || '-') + '</td>' +
        '<td>' + (s.updatedAt || '-') + '</td>' +
        '<td class="ha-settle-actions">' + actions + '</td>' +
        '</tr>';
    }).join('');

    return addToolbar +
      '<div class="table-wrap ha-settle-table-wrap">' +
      '  <table class="ha-settle-table">' +
      '    <thead>' +
      '      <tr>' +
      '        <th>' + t('ls.drawer.th.status') + '</th>' +
      '        <th>' + t('ls.drawer.th.start') + '</th>' +
      '        <th>' + t('ls.drawer.th.end') + '</th>' +
      '        <th>' + t('ls.drawer.th.duration') + '</th>' +
      '        <th>' + t('ls.drawer.th.source') + '</th>' +
      '        <th>' + t('ls.drawer.th.updated_at') + '</th>' +
      '        <th style="text-align:right">' + t('common.actions') + '</th>' +
      '      </tr>' +
      '    </thead>' +
      '    <tbody>' + rows + '</tbody>' +
      '  </table>' +
      '</div>';
  }

  function renderLiveScheduleHostDrawerPlannedTable() {
    var hostId = lsHostDrawerHostId;
    var dayDateStr = lsHostDrawerDayDate;
    if (!hostId || !dayDateStr) return '<div>请选择一个日期</div>';

    var dayRange = lsGetDayRangeMs(dayDateStr);
    if (!dayRange) return '<div>日期无效</div>';

    var rows = [];
    (lsScheduleBatches || []).forEach(function (b) {
      (b.sessions || []).forEach(function (sess) {
        (sess.segments || []).forEach(function (seg) {
          if (seg.hostId !== hostId) return;
          if (lsComputeHoursOverlap(seg.startAt, seg.endAt, dayRange.startMs, dayRange.endMs) <= 0) return;
          var durH = lsComputeHoursOverlap(seg.startAt, seg.endAt, dayRange.startMs, dayRange.endMs);
          rows.push({
            sessionEventName: sess.eventName || '-',
            plannedStartAt: (sess.plannedStartAtMs != null ? lsMsToStrDisplay(sess.plannedStartAtMs) : (sess.plannedStartAt || '-')),
            plannedEndAt: (sess.plannedEndAtMs != null ? lsMsToStrDisplay(sess.plannedEndAtMs) : (sess.plannedEndAt || '-')),
            segStartAtMs: (seg.startAtMs != null ? seg.startAtMs : lsStrToMs(seg.startAt)),
            durationH: durH,
            batchId: b.id || '-'
          });
        });
      });
    });

    rows.sort(function (a, b) {
      var as = (a.segStartAtMs != null && isFinite(a.segStartAtMs) ? a.segStartAtMs : 0);
      var bs = (b.segStartAtMs != null && isFinite(b.segStartAtMs) ? b.segStartAtMs : 0);
      return as - bs;
    });

    if (!rows.length) {
      return '<div class="ha-settle-empty ha-rules-empty-state" style="padding:16px"><span class="ha-rules-empty-text">该天暂无计划分配</span></div>';
    }

    var tableRows = rows.map(function (r) {
      return '' +
        '<tr>' +
        '<td>' + (r.sessionEventName || '-') + '<div style="font-size:12px;color:var(--text-subtext);margin-top:4px">批次：' + (r.batchId || '-') + '</div></td>' +
        '<td>' + (r.plannedStartAt || '-') + '</td>' +
        '<td>' + (r.plannedEndAt || '-') + '</td>' +
        '<td style="white-space:nowrap">' + (r.durationH ? (r.durationH.toFixed(1) + 'h') : '-') + '</td>' +
        '</tr>';
    }).join('');

    return '' +
      '<div class="table-wrap ha-settle-table-wrap">' +
      '  <table class="ha-settle-table">' +
      '    <thead><tr>' +
      '      <th>Session</th>' +
      '      <th>计划开始</th>' +
      '      <th>计划结束</th>' +
      '      <th style="text-align:right">计划消耗时长</th>' +
      '    </tr></thead>' +
      '    <tbody>' + tableRows + '</tbody>' +
      '  </table>' +
      '</div>';
  }

  function lsRenderHostDrawerContent() {
    var el = document.getElementById('lsHostDrawerContent');
    if (!el) return;

    var hostId = lsHostDrawerHostId;
    var dayDateStr = lsHostDrawerDayDate;
    var host = (lsHostAvailabilities || []).find(function (s) { return s.hostId === hostId; });
    var hostName = host ? (host.hostName || hostId) : hostId || '-';

    var availH = lsComputeAvailableHoursForHostDay(hostId, dayDateStr, 'all');
    var allocatedH = lsComputeAllocatedHoursForHostDay(hostId, dayDateStr);
    var remainingH = Math.max(0, availH - allocatedH);

    // Sync active tab UI
    var typeTabs = document.querySelectorAll('#lsHostDrawerTypeTabs [data-ls-drawer-tab]');
    typeTabs.forEach(function (btn) {
      var v = btn.getAttribute('data-ls-drawer-tab');
      if (v === lsHostDrawerTab) btn.classList.add('ha-batch-drawer-type-tab--active');
      else btn.classList.remove('ha-batch-drawer-type-tab--active');
    });

    var subtitle = dayDateStr + '；可用 ' + availH.toFixed(1) + 'h，已分配(计划) ' + allocatedH.toFixed(1) + 'h，剩余 ' + remainingH.toFixed(1) + 'h';
    var subEl = document.getElementById('lsHostDrawerSubtitle');
    if (subEl) subEl.textContent = subtitle;

    var tabHtml = lsHostDrawerTab === 'planned'
      ? renderLiveScheduleHostDrawerPlannedTable()
      : renderLiveScheduleHostDrawerAvailabilityTable();

    var hintBlock = lsHostDrawerTab === 'availability'
      ? '<div style="margin-bottom:12px">' +
        '  <div style="font-size:12px;color:var(--text-subtext)">' + t('ls.drawer.stats_impact_hint') + '</div>' +
        '</div>'
      : '';
    el.innerHTML = hintBlock + tabHtml;
  }

  function renderLiveScheduleTargetsTab() {
    var currentPeriodStart = lsActiveWeekStart || lsTargetsPeriodStartFilter || '';

    function isPastPeriod(periodStart) {
      if (!currentPeriodStart || !periodStart) return false;
      // YYYY-MM-DD lexicographic compare works
      return String(periodStart) < String(currentPeriodStart);
    }

    var sortedTargets = (lsMerchantTargets || []).slice().sort(function (a, b) {
      var ap = a.periodStart || '';
      var bp = b.periodStart || '';
      if (ap !== bp) return String(bp).localeCompare(String(ap));
      return String(a.updatedAt || '').localeCompare(String(b.updatedAt || ''));
    });

    var rows = sortedTargets.map(function (row) {
      var planned = Number(row.plannedHours) || 0;
      var target = Number(row.targetHours) || 0;
      var accepted = Number(row.acceptedHours) || 0;
      var rate = target > 0 ? Math.round((accepted / target) * 100) : 0;

      var past = isPastPeriod(row.periodStart);
      var disabledAttr = past ? ' disabled title="' + lsEscHtml(t('ls.targets.past_locked')) + '"' : '';
      var inputStyle = past ? 'max-width:120px;opacity:0.7' : 'max-width:120px';

      var canCancel = row.status !== '已同步';
      var cancelBtn = canCancel
        ? '<button type="button" class="btn btn-secondary btn-sm ls-target-cancel" data-id="' + (row.id || '') + '"><i class="fas fa-trash"></i> ' + t('ls.targets.cancel') + '</button>'
        : '<button type="button" class="btn btn-secondary btn-sm" disabled><i class="fas fa-trash"></i> ' + t('ls.targets.cancel') + '</button>';

      return '' +
        '<tr>' +
        '<td>' + (row.liveAccountUsername || '-') + '</td>' +
        '<td>' + (row.periodStart + ' ~ ' + row.periodEnd) + '</td>' +
        '<td>' +
        '<input type="number" class="input ls-target-hours-input" data-id="' + (row.id || '') + '" value="' + String(row.targetHours || 0) + '" min="0" step="0.5" style="' + inputStyle + '"' + disabledAttr + ' />' +
        '</td>' +
        '<td>' + (planned ? (planned + 'h') : '-') + '</td>' +
        '<td>' + (accepted ? (accepted + 'h') : '-') + '</td>' +
        '<td>' + (target ? (rate + '%') : '-') + '</td>' +
        '<td>' + (row.updatedAt || '-') + '</td>' +
        '<td>' +
        '<div class="ha-settle-actions" style="display:flex;gap:8px;flex-wrap:wrap">' +
        cancelBtn +
        '</div>' +
        '</td>' +
        '</tr>';
    }).join('');

    // Period options for “自动排期弹窗 / 新增目标弹窗”
    var periodOptions = (function () {
      var set = {};
      (lsMerchantTargets || []).forEach(function (t) {
        if (t && t.periodStart) set[t.periodStart] = t.periodEnd || '';
      });
      if (lsActiveWeekStart && !set[lsActiveWeekStart]) {
        // Try to infer current periodEnd from any existing target in same week range.
        // Fallback: empty endAt.
        set[lsActiveWeekStart] = set[lsActiveWeekStart] || '';
      }
      return Object.keys(set).sort().map(function (ps) { return { startAt: ps, endAt: set[ps] }; });
    })();

    // Keep the last inferred filter for internal logic
    if (periodOptions.length && !lsTargetsPeriodStartFilter) lsTargetsPeriodStartFilter = periodOptions[0].startAt;
    if (!lsTargetsPeriodStartFilter && lsActiveWeekStart) lsTargetsPeriodStartFilter = lsActiveWeekStart;

    var header = '' +
      '<div class="filters-row" style="margin-bottom:0">' +
      '<button type="button" class="btn btn-primary btn-sm" id="lsTargetsSave"><i class="fas fa-save"></i> ' + t('ls.targets.save') + '</button>' +
      '<button type="button" class="btn btn-ghost btn-sm" id="lsTargetsAdd"><i class="fas fa-plus"></i> ' + t('ls.targets.add') + '</button>' +
      '</div>';

    return '' +
      '<div class="card ha-settle-card ls-live-schedule-card">' +
      '<div class="ha-settle-intro">' +
      header +
      '<div class="ls-targets-hint" style="font-size:12px;color:var(--text-subtext);margin-top:10px">' + t('ls.targets.hint') + '</div>' +
      '</div>' +
      '<div class="table-wrap ha-settle-table-wrap">' +
      '<table class="ha-settle-table">' +
      '<thead><tr>' +
      '<th>' + t('ls.targets.th.account') + '</th>' +
      '<th>' + t('ls.targets.th.period') + '</th>' +
      '<th>' + t('ls.targets.th.target_h') + '</th>' +
      '<th>' + t('ls.targets.th.planned_h') + '</th>' +
      '<th>' + t('ls.targets.th.accepted_h') + '</th>' +
      '<th>' + t('ls.targets.th.rate') + '</th>' +
      '<th>' + t('ls.targets.th.updated') + '</th>' +
      '<th>' + t('ls.targets.th.actions') + '</th>' +
      '</tr></thead>' +
      '<tbody>' + (rows || '<tr><td colspan="8" class="ha-settle-empty ha-rules-empty-state"><span class="ha-rules-empty-text">' + t('ls.targets.empty') + '</span></td></tr>') + '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>';
  }

  function renderLiveScheduleBatchesTab() {
    var tabDef = [
      { key: 'draft', label: t('ls.sess.draft') },
      { key: 'pending_confirm', label: t('ls.sess.pending_confirm') },
      { key: 'pending_sync', label: t('ls.sess.pending_sync') },
      { key: 'pending_live', label: t('ls.sess.pending_live') },
      { key: 'live', label: t('ls.sess.live') },
      { key: 'ended', label: t('ls.sess.ended') }
    ];
    var activeTab = lsSessionListFilter.tab || 'draft';
    var showTikTokCol = activeTab === 'pending_live' || activeTab === 'live' || activeTab === 'ended';
    var showTikTokSyncCol = activeTab === 'pending_sync';
    var showCheckCol = activeTab === 'draft' || activeTab === 'pending_sync';
    var showBatchPushToolbar = activeTab === 'draft';
    var showBatchSyncToolbar = activeTab === 'pending_sync';

    var sessTabIcons = {
      draft: 'fa-inbox',
      pending_confirm: 'fa-user-clock',
      pending_sync: 'fa-cloud-upload-alt',
      pending_live: 'fa-calendar-check',
      live: 'fa-broadcast-tower',
      ended: 'fa-flag-checkered'
    };
    var sessStatusCounts = lsCountSessionsByStatus();
    var tabHtml = '<div class="or-tabs" id="lsSessionTabs">' + tabDef.map(function (t) {
      var on = t.key === activeTab;
      var cnt = sessStatusCounts[t.key] != null ? sessStatusCounts[t.key] : 0;
      var ic = sessTabIcons[t.key] || 'fa-circle';
      return '<button type="button" class="or-tab' + (on ? ' or-tab--active' : '') + '" data-ls-session-tab="' + t.key + '">' +
        '<i class="fas ' + ic + '"></i> ' + t.label +
        '<span class="or-tab-count">' + cnt + '</span></button>';
    }).join('') + '</div>';

    var qRaw = (lsSessionListFilter.q || '').trim().toLowerCase();

    var rowHtml = [];
    (lsScheduleBatches || []).forEach(function (b) {
      (b.sessions || []).forEach(function (s) {
        var st = lsComputeSessionRowStatus(b, s);
        if (!st || st !== activeTab) return;
        var ddList = lsSessionDetailDisplay(s);
        if (qRaw) {
          var hay = [
            b.id || '',
            b.periodStart || '',
            s.scheduleId || '',
            lsFormatScheduleIdDisplay(s.scheduleId),
            s.id || '',
            s.liveAccountUsername || '',
            ddList.subject,
            ddList.timeZone,
            ddList.follower,
            ddList.remarkEn,
            s.plannedStartAt || '',
            s.plannedEndAt || '',
            lsSessionHostsLabel(s),
            s.tiktokLiveEventSyncStatus || '',
            s.tiktokSyncFailureCode || '',
            s.tiktokSyncFailureDetail || ''
          ].join(' ').toLowerCase();
          if (hay.indexOf(qRaw) === -1) return;
        }

        var actions = '';

        if (st === 'draft') {
          actions =
            '<button type="button" class="btn btn-primary btn-sm ls-sess-push" data-batch-id="' + (b.id || '') + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-paper-plane"></i> ' + t('ls.btn.push_host') + '</button>' +
            '<button type="button" class="btn btn-ghost btn-sm ls-sess-edit" data-batch-id="' + (b.id || '') + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-edit"></i> ' + t('ls.btn.edit_schedule') + '</button>' +
            '<button type="button" class="btn btn-ghost btn-sm ls-sess-cancel" data-batch-id="' + (b.id || '') + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-ban"></i> ' + t('ls.btn.cancel_schedule') + '</button>';
        } else if (st === 'pending_confirm') {
          actions =
            '<button type="button" class="btn btn-ghost btn-sm ls-sess-edit" data-batch-id="' + (b.id || '') + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-edit"></i> ' + t('ls.btn.edit_schedule') + '</button>' +
            '<button type="button" class="btn btn-ghost btn-sm ls-sess-cancel" data-batch-id="' + (b.id || '') + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-ban"></i> ' + t('ls.btn.cancel_schedule') + '</button>';
        } else if (st === 'pending_sync') {
          actions =
            '<button type="button" class="btn btn-secondary btn-sm ls-sess-sync-tt" data-batch-id="' + (b.id || '') + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-cloud-upload-alt"></i> ' + t('ls.btn.sync_tiktok') + '</button>' +
            '<button type="button" class="btn btn-ghost btn-sm ls-sess-edit" data-batch-id="' + (b.id || '') + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-edit"></i> ' + t('ls.btn.edit_schedule') + '</button>' +
            '<button type="button" class="btn btn-ghost btn-sm ls-sess-cancel" data-batch-id="' + (b.id || '') + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-ban"></i> ' + t('ls.btn.cancel_schedule') + '</button>';
        } else if (st === 'pending_live') {
          actions =
            '<button type="button" class="btn btn-ghost btn-sm ls-sess-edit" data-batch-id="' + (b.id || '') + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-edit"></i> ' + t('ls.btn.edit_schedule') + '</button>' +
            '<button type="button" class="btn btn-ghost btn-sm ls-sess-cancel" data-batch-id="' + (b.id || '') + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-ban"></i> ' + t('ls.btn.cancel_schedule') + '</button>';
        } else if (st === 'live' || st === 'ended') {
          actions =
            '<button type="button" class="btn btn-ghost btn-sm ls-sess-view" data-batch-id="' + (b.id || '') + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-eye"></i> ' + t('ls.btn.view') + '</button>';
        }

        var tikCell = showTikTokCol
          ? '<td>' + (s.tiktokSessionId || s.tiktokEventId || '-') + '</td>'
          : '';

        var tikSyncCell = showTikTokSyncCol
          ? '<td class="ls-sess-col-tiktok-sync">' + lsSessionTikTokLiveEventSyncCell(s) + '</td>'
          : '';

        var subjCell = ddList.subject ? String(ddList.subject).replace(/</g, '&lt;').replace(/>/g, '&gt;') : '<span class="ls-sess-cell-muted">-</span>';
        var followerCell = ddList.follower ? String(ddList.follower).replace(/</g, '&lt;') : '<span class="ls-sess-cell-muted">-</span>';
        var accountLine = String(s.liveAccountUsername || '-').replace(/</g, '&lt;');
        var subjectAccountCell =
          '<td class="ls-sess-col-subject-account">' +
          '<div class="ls-sess-stack">' +
          '<div class="ls-sess-stack__title">' + subjCell + '</div>' +
          '<div class="ls-sess-stack__sub ls-sess-stack__mono">' + accountLine + '</div>' +
          '</div></td>';

        // 列顺序：直播时间 -> 主播(计划分段)
        var hostsCell = lsSessionHostsSegmentsHtml(s);
        var remarkCell = lsSessionRemarkCell(s);

        // 创建人：当前登录用户姓名 + 创建时间（本机时区/本地格式）
        var createdByName = (currentUser && currentUser.name) ? currentUser.name : '-';
        var createdAtStr = b && b.createdAt
          ? (function () {
              if (typeof b.createdAt === 'string') {
                var s = String(b.createdAt);
                // 兼容 "YYYY-MM-DD HH:mm" 这种无时区格式：用本地时间解析并格式化
                var d = new Date(s.replace(' ', 'T'));
                return isNaN(d.getTime()) ? s : d.toLocaleString();
              }
              try {
                return new Date(b.createdAt).toLocaleString();
              } catch (e) {
                return '-';
              }
            })()
          : '-';
        var createdCell =
          '<div class="ha-batch-meta">' +
          '  <span class="ha-batch-meta-name">' + lsEscHtml(createdByName) + '</span>' +
          '  <span class="ha-batch-meta-time">' + lsEscHtml(createdAtStr) + '</span>' +
          '</div>';
        var createdFollowerCell =
          '<td class="ls-sess-col-created-follower">' +
          '<div class="ls-sess-stack">' +
          '<div class="ls-sess-stack__block">' + createdCell + '</div>' +
          '<div class="ls-sess-stack__sub"><span class="ls-sess-stack__label">' + t('ls.th.follower') + '</span> ' + followerCell + '</div>' +
          '</div></td>';

        rowHtml.push(
          '<tr>' +
          (showCheckCol ? '<td><input type="checkbox" class="ls-sess-row-check" data-batch-id="' + (b.id || '') + '" data-session-id="' + (s.id || '') + '" /></td>' : '') +
          '<td class="ls-sess-col-sid">' + lsEscHtml(lsFormatScheduleIdDisplay(s.scheduleId)) + '</td>' +
          subjectAccountCell +
          '<td class="ls-sess-col-time">' + lsSessionTimeCell(s) + '</td>' +
          tikSyncCell +
          '<td class="ls-sess-col-hosts">' + hostsCell + '</td>' +
          tikCell +
          createdFollowerCell +
          '<td class="ls-sess-col-remark">' + remarkCell + '</td>' +
          '<td style="text-align:right"><div class="ha-settle-actions" style="justify-content:flex-end;flex-wrap:wrap">' + actions + '</div></td>' +
          '</tr>'
        );
      });
    });

    var colSpan = 7 + (showTikTokCol ? 1 : 0) + (showTikTokSyncCol ? 1 : 0) + (showCheckCol ? 1 : 0);
    var thead = '<thead><tr>' +
      (showCheckCol ? '<th style="width:44px"><input type="checkbox" id="lsSessSelectAll" title="' + lsEscHtml(t('ls.select_all')) + '" /></th>' : '') +
      '<th>' + t('ls.th.schedule_id') + '</th>' +
      '<th>' + t('ls.th.subject_account') + '</th>' +
      '<th>' + t('ls.th.time') + '</th>' +
      (showTikTokSyncCol ? '<th style="min-width:200px">' + t('ls.th.tiktok_live_event_sync') + '</th>' : '') +
      '<th>' + t('ls.th.hosts_segments') + '</th>' +
      (showTikTokCol ? '<th>' + t('ls.th.tiktok_sid') + '</th>' : '') +
      '<th>' + t('ls.th.created_follower') + '</th>' +
      '<th>' + t('ls.th.remark_en') + '</th>' +
      '<th style="text-align:right">' + t('common.actions') + '</th>' +
      '</tr></thead>';

    return '' +
      '<div class="card ha-settle-card ls-live-schedule-card">' +
      '<div class="ha-settle-intro">' +
      tabHtml +
      '<div class="filters-row" style="margin-bottom:0;align-items:center;gap:10px;flex-wrap:wrap">' +
      (showBatchPushToolbar ? '<button type="button" class="btn btn-primary btn-sm" id="lsSessBatchPush" disabled><i class="fas fa-paper-plane"></i> ' + t('ls.btn.batch_push') + '</button>' : '') +
      (showBatchSyncToolbar ? '<button type="button" class="btn btn-secondary btn-sm" id="lsSessBatchSync" disabled><i class="fas fa-cloud-upload-alt"></i> ' + t('ls.btn.batch_sync_tiktok') + '</button>' : '') +
      '<input class="input" id="lsSessionSearch" placeholder="' + lsEscHtml(t('ls.search.sessions_ph')) + '" style="max-width:420px" value="' + String(lsSessionListFilter.q || '').replace(/"/g, '&quot;') + '" />' +
      '</div>' +
      '</div>' +
      '<div class="table-wrap ha-settle-table-wrap">' +
      '<table class="ha-settle-table ls-sess-table">' +
      thead +
      '<tbody>' + (rowHtml.length ? rowHtml.join('') : '<tr><td colspan="' + colSpan + '" class="ha-settle-empty ls-sess-table-empty-cell">' +
        '<div class="ls-sess-table-empty">' +
        '<div class="ls-sess-table-empty__icon" aria-hidden="true"><i class="fas fa-calendar-alt"></i></div>' +
        '<p class="ls-sess-table-empty__title">' + lsEscHtml(t('ls.empty.sessions')) + '</p>' +
        '<p class="ls-sess-table-empty__hint">' + lsEscHtml(t('ls.empty.sessions_hint')) + '</p>' +
        '</div></td></tr>') + '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>';
  }

  function renderLiveScheduleBatchDrawerMarkup() {
    return '' +
      '<div class="ha-settle-drawer-overlay" id="lsBatchDrawerOverlay"></div>' +
      '<aside class="ha-settle-drawer" id="lsBatchDrawer" aria-hidden="true">' +
      '  <div class="ha-settle-drawer-header">' +
      '    <div>' +
      '      <div class="ha-settle-drawer-title" id="lsBatchDrawerTitle">-</div>' +
      '      <div class="ha-settle-drawer-subtitle" id="lsBatchDrawerSubtitle">-</div>' +
      '    </div>' +
      '    <button type="button" class="ha-settle-drawer-close" id="lsBatchDrawerClose" aria-label="' + lsEscHtml(t('common.close')) + '"><i class="fas fa-times"></i></button>' +
      '  </div>' +
      '  <div class="ha-settle-drawer-body" id="lsBatchDrawerBody">' +
      '    <div class="ha-batch-drawer-tabs-wrap" style="margin-bottom:12px">' +
      '      <div class="ha-batch-drawer-type-tabs" id="lsBatchDrawerTypeTabs">' +
      '        <button type="button" class="ha-batch-drawer-type-tab ha-batch-drawer-type-tab--active" data-ls-drawer-tab="sessions"><span class="ha-batch-drawer-type-tab-label">' + t('ls.drawer.tab.sessions') + '</span></button>' +
      '        <button type="button" class="ha-batch-drawer-type-tab" data-ls-drawer-tab="segments"><span class="ha-batch-drawer-type-tab-label">' + t('ls.drawer.tab.segments') + '</span></button>' +
      '      </div>' +
      '    </div>' +
      '    <div id="lsBatchDrawerContent"></div>' +
      '  </div>' +
      '</aside>';
  }

  function renderLiveScheduleHostDrawerMarkup() {
    return '' +
      '<div class="ha-settle-drawer-overlay" id="lsHostDrawerOverlay"></div>' +
      '<aside class="ha-settle-drawer" id="lsHostDrawer" aria-hidden="true">' +
      '  <div class="ha-settle-drawer-header">' +
      '    <div>' +
      '      <div class="ha-settle-drawer-title" id="lsHostDrawerTitle">-</div>' +
      '      <div class="ha-settle-drawer-subtitle" id="lsHostDrawerSubtitle">-</div>' +
      '    </div>' +
      '    <button type="button" class="ha-settle-drawer-close" id="lsHostDrawerClose" aria-label="' + lsEscHtml(t('common.close')) + '"><i class="fas fa-times"></i></button>' +
      '  </div>' +
      '  <div class="ha-settle-drawer-body" id="lsHostDrawerBody">' +
      '    <div class="ha-batch-drawer-tabs-wrap" style="margin-bottom:12px">' +
      '      <div class="ha-batch-drawer-type-tabs" id="lsHostDrawerTypeTabs">' +
      '        <button type="button" class="ha-batch-drawer-type-tab ha-batch-drawer-type-tab--active" data-ls-drawer-tab="availability"><span class="ha-batch-drawer-type-tab-label">' + t('ls.drawer.host.avail') + '</span></button>' +
      '        <button type="button" class="ha-batch-drawer-type-tab" data-ls-drawer-tab="planned"><span class="ha-batch-drawer-type-tab-label">' + t('ls.drawer.host.planned') + '</span></button>' +
      '      </div>' +
      '    </div>' +
      '    <div id="lsHostDrawerContent"></div>' +
      '  </div>' +
      '</aside>';
  }

  function renderLiveScheduleModalsMarkup() {
    return '' +
      '<div class="modal-overlay" id="lsModalOverlay">' +
      '  <div class="modal" id="lsModal">' +
      '    <button type="button" class="modal-close" id="lsModalClose" aria-label="Close"><i class="fas fa-times"></i></button>' +
      '    <h3 class="modal-title" id="lsModalTitle">-</h3>' +
      '    <div id="lsModalBody"></div>' +
      '    <div class="modal-footer" style="display:flex;justify-content:flex-end;gap:10px;margin-top:18px">' +
      '      <button type="button" class="btn btn-ghost" id="lsModalCancel">取消</button>' +
      '      <button type="button" class="btn btn-primary" id="lsModalOk">确认</button>' +
      '    </div>' +
      '  </div>' +
      '</div>' +
      '<div class="modal-overlay" id="lsEditAvailabilityOverlay">' +
      '  <div class="modal">' +
      '    <button type="button" class="modal-close" id="lsEditAvailabilityClose" aria-label="Close"><i class="fas fa-times"></i></button>' +
      '    <h3 class="modal-title" id="lsEditAvailabilityTitle">' + t('ls.drawer.edit_slot_title') + '</h3>' +
      '    <div class="form-group">' +
      '      <label class="form-label">' + t('ls.drawer.tz_label') + '</label>' +
      '      <select class="select" id="lsEditAvailTimeZone"></select>' +
      '    </div>' +
      '    <div class="form-group">' +
      '      <label class="form-label">开始时间</label>' +
      '      <input class="input" type="text" id="lsEditAvailStart" placeholder="YYYY-MM-DD HH:mm" />' +
      '    </div>' +
      '    <div class="form-group">' +
      '      <label class="form-label">结束时间</label>' +
      '      <input class="input" type="text" id="lsEditAvailEnd" placeholder="YYYY-MM-DD HH:mm" />' +
      '    </div>' +
      '    <div class="modal-footer" style="display:flex;justify-content:flex-end;gap:10px;margin-top:18px">' +
      '      <button type="button" class="btn btn-ghost" id="lsEditAvailabilityCancel">取消</button>' +
      '      <button type="button" class="btn btn-primary" id="lsEditAvailabilitySave">保存</button>' +
      '    </div>' +
      '  </div>' +
      '</div>' +
      '';
  }

  function lsShowModal(title, bodyHtml, okLabel, okHandler, opts) {
    opts = opts || {};
    var overlay = document.getElementById('lsModalOverlay');
    if (!overlay) return;
    var modal = document.getElementById('lsModal');
    var modalTitle = document.getElementById('lsModalTitle');
    var modalBody = document.getElementById('lsModalBody');
    var okBtn = document.getElementById('lsModalOk');
    if (modal) {
      modal.classList.remove('ls-modal--wide');
      if (opts.wide) modal.classList.add('ls-modal--wide');
    }
    if (modalTitle) modalTitle.textContent = title || '';
    if (modalBody) modalBody.innerHTML = bodyHtml || '';
    if (okBtn && okLabel) okBtn.textContent = okLabel;
    if (okBtn) okBtn.onclick = function () { if (typeof okHandler === 'function') okHandler(); };
    if (overlay) overlay.classList.add('active');
  }

  function lsHideModal() {
    var overlay = document.getElementById('lsModalOverlay');
    if (overlay) overlay.classList.remove('active');
    var modal = document.getElementById('lsModal');
    if (modal) modal.classList.remove('ls-modal--wide');
  }

  function lsEscHtml(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }

  /** Wall time "YYYY-MM-DD HH:mm(:ss)" <-> datetime-local */
  function lsWallToDatetimeLocal(s) {
    if (!s) return '';
    var t = String(s).trim().replace(' ', 'T');
    return t.length >= 16 ? t.substring(0, 16) : t;
  }

  function lsDatetimeLocalToWall(v) {
    if (!v) return '';
    return String(v).replace('T', ' ');
  }

  /** TikTok Shop 直播中控台链接（真实环境 session_id 为纯数字） */
  function lsTiktokShopLiveEventDashboardUrl(session) {
    var id = session && (session.tiktokSessionId || session.tiktokEventId);
    if (!id) return '';
    return 'https://shop.tiktok.com/streamer/live/event/dashboard?session_id=' + encodeURIComponent(String(id));
  }

  /** 优先使用 detail 中已填链接，否则用 Session ID 拼 Shop 仪表盘地址 */
  function lsResolveTiktokLiveEventUrl(d, session) {
    var raw = d && d.tiktokLiveEventUrl != null ? String(d.tiktokLiveEventUrl).trim() : '';
    if (raw) return raw;
    return lsTiktokShopLiveEventDashboardUrl(session);
  }

  /**
   * GMV 币种（服务端下发直播间商品币种 ISO 4217）；仅用于展示「货币符号 + 金额」
   */
  function lsGmvCurrencyCode(session, seg) {
    if (seg && seg.gmvCurrency) return String(seg.gmvCurrency).toUpperCase();
    if (session && session.gmvCurrency) return String(session.gmvCurrency).toUpperCase();
    if (session && session.detail && session.detail.gmvCurrency) return String(session.detail.gmvCurrency).toUpperCase();
    return 'USD';
  }

  function lsFormatGmvDisplay(amount, session, seg) {
    var code = lsGmvCurrencyCode(session, seg);
    var n = Number(amount);
    if (!isFinite(n)) n = 0;
    try {
      return new Intl.NumberFormat(typeof navigator !== 'undefined' && navigator.language ? navigator.language : 'en-US', {
        style: 'currency',
        currency: code,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(n);
    } catch (err) {
      return code + ' ' + n.toFixed(2);
    }
  }

  function lsEnsureSessionDetail(session, batch) {
    if (!session) return;
    if (!session.detail) {
      var ps = (session.plannedStartAt || '').split(/\s+/);
      var pe = (session.plannedEndAt || '').split(/\s+/);
      var durH = 2;
      if (session.plannedStartAtMs != null && session.plannedEndAtMs != null) {
        durH = Math.max(0.5, Math.round((session.plannedEndAtMs - session.plannedStartAtMs) / 3600000 * 10) / 10);
      }
      session.detail = {
        liveType: '达播',
        subject: session.eventName || '',
        timeZone: lsDisplayTimeZone || 'America/New_York',
        liveDate: ps[0] || (batch && batch.periodStart) || '',
        liveClock: (ps[1] || '09:00').slice(0, 5),
        durationHours: Math.floor(durH) || 2,
        durationMinutes: Math.round((durH % 1) * 60) || 0,
        follower: '',
        tiktokLiveEventUrl: lsTiktokShopLiveEventDashboardUrl(session),
        remarkEn: ''
      };
    }
    (session.segments || []).forEach(function (seg) {
      if (seg.actualStartAt == null) seg.actualStartAt = '';
      if (seg.actualEndAt == null) seg.actualEndAt = '';
      if (seg.gmv == null) seg.gmv = 0;
      if (seg.gmvRemark == null) seg.gmvRemark = '';
    });
  }

  function lsRenderSessionEditDetailHtml(batch, session, mode) {
    var d = session.detail || {};
    var tzOpts = ['America/New_York', 'America/Los_Angeles', 'Asia/Shanghai', 'UTC'];
    if (tzOpts.indexOf(d.timeZone) === -1) tzOpts.unshift(d.timeZone);
    var dhOpts = [];
    var i;
    for (i = 0; i <= 12; i++) dhOpts.push(i);
    var dmOpts = [0, 15, 30, 45];
    var followerOpts = [
      { v: '', l: '请选择' },
      { v: 'darren.chen', l: 'darren.chen' },
      { v: 'hayleyliang@wahool.live', l: 'hayleyliang@wahool.live' }
    ].map(function (f) {
      return '<option value="' + lsEscHtml(f.v) + '"' + (String(d.follower || '') === f.v ? ' selected' : '') + '>' + lsEscHtml(f.l) + '</option>';
    }).join('');

    var accountRow = '' +
      '<div class="ls-session-edit__row2">' +
      '  <div class="form-group">' +
      '    <label class="form-label"><span class="ls-req">*</span>直播账号</label>' +
      '    <select class="select" id="lsDet_liveAccount"' + (mode === 'streamed' ? ' disabled' : '') + '>' +
      '      <option value="' + lsEscHtml(session.liveAccountUsername || '-') + '">' + lsEscHtml(session.liveAccountUsername || '-') + '</option></select></div>' +
      '  <div class="form-group">' +
      '    <label class="form-label"><span class="ls-req">*</span>直播类型</label>' +
      '    <select class="select" id="lsDet_liveType"' + (mode === 'streamed' ? ' disabled' : '') + '>' +
      '      <option value="达播"' + ((d.liveType || '') === '达播' ? ' selected' : '') + '>达播</option>' +
      '      <option value="店播"' + ((d.liveType || '') === '店播' ? ' selected' : '') + '>店播</option>' +
      '    </select></div>' +
      '</div>';

    var timeRow = '' +
      '<div class="form-group">' +
      '  <label class="form-label"><span class="ls-req">*</span>主题</label>' +
      '  <input class="input" id="lsDet_subject" value="' + lsEscHtml(d.subject || '') + '"' + (mode === 'streamed' ? ' disabled' : '') + ' />' +
      '</div>' +
      '<div class="form-group">' +
      '  <label class="form-label"><span class="ls-req">*</span>直播时间</label>' +
      '  <div class="ls-session-edit__time-row">' +
      '    <select class="select" id="lsDet_tz" style="min-width:160px"' + (mode === 'streamed' ? ' disabled' : '') + '>' +
      tzOpts.map(function (z) { return '<option value="' + lsEscHtml(z) + '"' + (z === d.timeZone ? ' selected' : '') + '>' + lsEscHtml(z) + '</option>'; }).join('') +
      '    </select>' +
      '    <input type="date" class="input" id="lsDet_date" style="max-width:160px"' + (mode === 'streamed' ? ' disabled' : '') + ' value="' + lsEscHtml(d.liveDate || '') + '" />' +
      '    <input type="time" class="input" id="lsDet_time" style="max-width:120px"' + (mode === 'streamed' ? ' disabled' : '') + ' value="' + lsEscHtml(d.liveClock || '09:00') + '" />' +
      '  </div></div>' +
      '<div class="form-group">' +
      '  <label class="form-label"><span class="ls-req">*</span>直播时长</label>' +
      '  <div class="ls-session-edit__time-row">' +
      '    <select class="select" id="lsDet_dh"' + (mode === 'streamed' ? ' disabled' : '') + '>' +
      dhOpts.map(function (h) { return '<option value="' + h + '"' + (Number(d.durationHours) === h ? ' selected' : '') + '>' + h + ' 小时</option>'; }).join('') +
      '    </select>' +
      '    <select class="select" id="lsDet_dm"' + (mode === 'streamed' ? ' disabled' : '') + '>' +
      dmOpts.map(function (m) { return '<option value="' + m + '"' + (Number(d.durationMinutes) === m ? ' selected' : '') + '>' + m + ' 分钟</option>'; }).join('') +
      '    </select></div></div>' +
      '<div class="form-group">' +
      '  <label class="form-label"><span class="ls-req">*</span>直播跟播人</label>' +
      '  <select class="select" id="lsDet_follower"' + (mode === 'streamed' ? ' disabled' : '') + '>' +
      followerOpts +
      '  </select></div>' +
      '<div class="form-group">' +
      '  <label class="form-label">TikTok Live Events</label>' +
      '  <textarea class="input" id="lsDet_tt_url" rows="3" placeholder="请输入TikTok Live Events链接"' + (mode === 'streamed' ? ' disabled' : '') + '>' + lsEscHtml(d.tiktokLiveEventUrl || '') + '</textarea>' +
      '</div>';

    var hostCards;
    if (mode === 'streamed') {
      hostCards = '<div class="ha-abnormal-modal-hosts ls-sess-hosts" id="lsSessionEditHosts">' +
        (session.segments || []).map(function (seg) {
          var acc = (seg.decisionStatus === 'accepted');
          var badge = acc ? '<span class="badge badge-success ls-host-badge"><i class="fas fa-check"></i> 已确认</span>' : '<span class="badge badge-secondary ls-host-badge">待确认</span>';
          return '<div class="ha-abnormal-modal-seg ls-sess-seg-readonly" data-seg-id="' + lsEscHtml(seg.id) + '">' +
            '<div class="ls-sess-seg-meta">' + badge + '</div>' +
            '<div class="ha-abnormal-modal-seg-fields">' +
            '<div class="ha-abnormal-modal-seg-field"><label>实际上播</label><input type="datetime-local" class="ls-sess-seg-act-start" value="' + lsWallToDatetimeLocal(seg.actualStartAt) + '" /></div>' +
            '<div class="ha-abnormal-modal-seg-field"><label>实际下播</label><input type="datetime-local" class="ls-sess-seg-act-end" value="' + lsWallToDatetimeLocal(seg.actualEndAt) + '" /></div>' +
            '<div class="ha-abnormal-modal-seg-field"><label>Live GMV</label><input type="number" class="ha-abnormal-modal-seg-gmv ls-sess-seg-gmv" min="0" step="0.01" value="' + (Number(seg.gmv) || 0) + '" /></div>' +
            '</div>' +
            '<div class="ls-sess-seg-gmv-note-wrap"><textarea class="input ls-sess-seg-gmv-note" rows="2" placeholder="GMV 修改备注">' + lsEscHtml(seg.gmvRemark || '') + '</textarea>' +
            '<div class="ls-session-edit__hint">' + lsEscHtml(lsT('ls.format.gmv_label', lsFormatGmvDisplay(seg.gmv, session, seg))) + '</div></div>' +
            '</div>';
        }).join('') + '</div>';
    } else {
      hostCards = '<div class="ha-abnormal-modal-hosts ls-sess-hosts" id="lsSessionEditHosts">' +
        (session.segments || []).map(function (seg) {
          var acc = (seg.decisionStatus === 'accepted');
          var badge = acc ? '<span class="badge badge-success ls-host-badge"><i class="fas fa-check"></i> 已确认</span>' : '<span class="badge badge-secondary ls-host-badge">待确认</span>';
          var liveExtra = (session.livePhase === 'live')
            ? '<div class="ha-abnormal-modal-seg-field"><label>实际上播</label><input type="datetime-local" class="ls-sess-seg-act-start" value="' + lsWallToDatetimeLocal(seg.actualStartAt) + '" /></div>' +
              '<div class="ha-abnormal-modal-seg-field"><label>实际下播</label><input type="datetime-local" class="ls-sess-seg-act-end" value="' + lsWallToDatetimeLocal(seg.actualEndAt) + '" /></div>' +
              '<div class="ha-abnormal-modal-seg-field"><label>GMV</label><input type="number" class="ha-abnormal-modal-seg-gmv ls-sess-seg-gmv" min="0" step="0.01" value="' + (Number(seg.gmv) || 0) + '" /></div>'
            : '';
          var gmvNoteBlock = (session.livePhase === 'live')
            ? '<div class="ls-sess-seg-gmv-note-wrap"><textarea class="input ls-sess-seg-gmv-note" rows="2" placeholder="GMV 修改备注">' + lsEscHtml(seg.gmvRemark || '') + '</textarea></div>'
            : '';
          return '<div class="ha-abnormal-modal-seg" data-seg-id="' + lsEscHtml(seg.id) + '">' +
            '<div class="ls-sess-seg-meta">' + badge + '</div>' +
            '<div class="ha-abnormal-modal-seg-fields">' +
            '<div class="ha-abnormal-modal-seg-field"><label>主播</label><input type="text" class="ha-abnormal-modal-seg-host ls-sess-seg-host" placeholder="请选择或输入主播" value="' + lsEscHtml(seg.hostName || '') + '" /></div>' +
            '<div class="ha-abnormal-modal-seg-field"><label>计划开始</label><input type="datetime-local" class="ls-sess-seg-plan-start" value="' + lsWallToDatetimeLocal(seg.startAt) + '" /></div>' +
            '<div class="ha-abnormal-modal-seg-field"><label>计划结束</label><input type="datetime-local" class="ls-sess-seg-plan-end" value="' + lsWallToDatetimeLocal(seg.endAt) + '" /></div>' +
            '<button type="button" class="btn btn-ghost btn-xs ha-abnormal-modal-seg-del" aria-label="删除"><i class="fas fa-trash"></i></button>' +
            liveExtra +
            '</div>' +
            gmvNoteBlock +
            '</div>';
        }).join('') + '</div>' +
        (session.livePhase === 'live'
          ? ''
          : '<button type="button" class="btn btn-ghost btn-sm ha-abnormal-modal-add-host" id="lsSessionEditAddHost"><i class="fas fa-plus"></i> ' + t('ls.seg.add_host') + '</button>');
    }

    var bottom = '' +
      '<div class="form-group">' +
      '  <label class="form-label">备注 / 说明（英文）</label>' +
      '  <textarea class="input" id="lsDet_remark" rows="4" placeholder="请输入备注或说明 (英文)"' + (mode === 'streamed' ? ' disabled' : '') + '>' + lsEscHtml(d.remarkEn || '') + '</textarea>' +
      '</div>';

    var hint = mode === 'streamed'
      ? '<p class="ls-session-edit__mode-hint"><i class="fas fa-info-circle"></i> ' + t('ls.edit.hint_streamed') + '</p>'
      : '<p class="ls-session-edit__mode-hint"><i class="fas fa-info-circle"></i> ' + t('ls.edit.hint_full') + '</p>';

    return hint +
      '<div class="ls-session-edit">' +
      '<section class="ls-session-edit__section"><h4 class="ls-session-edit__h4">' + t('ls.section.account') + '</h4>' + accountRow + '</section>' +
      '<section class="ls-session-edit__section"><h4 class="ls-session-edit__h4">' + t('ls.section.schedule') + '</h4>' +
      '<div class="ls-session-edit__grid">' +
      '<div class="ls-session-edit__col">' + timeRow + '</div>' +
      '<div class="ls-session-edit__col ls-session-edit__col--hosts"><h5 class="ls-session-edit__h5">' + t('ls.detail.seg_hosts') + '</h5>' + hostCards + '</div>' +
      '</div></section>' +
      '<section class="ls-session-edit__section"><h4 class="ls-session-edit__h4">' + t('ls.section.remark') + '</h4>' + bottom + '</section>' +
      '</div>';
  }

  /** 排期详情只读：区块与「编辑排期」一致（账号 / 日程 / 主播分段 / 备注） */
  function lsSessionPhaseLabel(phase) {
    if (phase === 'live') return t('ls.phase.live');
    if (phase === 'ended') return t('ls.phase.ended');
    if (phase === 'scheduled') return t('ls.phase.scheduled');
    return phase ? String(phase) : '-';
  }

  function lsRenderSessionDetailReadonlyHtml(batch, session) {
    lsEnsureSessionDetail(session, batch);
    var d = session.detail || {};
    var subj = d.subject || session.eventName || '-';
    var tz = d.timeZone || '-';
    var liveDate = d.liveDate || '-';
    var liveClock = (d.liveClock || '') || '-';
    var durStr = (Number(d.durationHours) || 0) + ' 小时 ' + (Number(d.durationMinutes) || 0) + ' 分钟';
    var follower = d.follower ? String(d.follower) : '';
    var ttUrl = lsResolveTiktokLiveEventUrl(d, session);
    var liveType = d.liveType || '-';
    var la = session.liveAccountUsername || '-';

    var accountRow =
      '<div class="ls-session-edit__row2">' +
      '<div class="form-group"><label class="form-label">直播账号</label><div class="ls-session-edit__readonly">' + lsEscHtml(la) + '</div></div>' +
      '<div class="form-group"><label class="form-label">直播类型</label><div class="ls-session-edit__readonly">' + lsEscHtml(liveType) + '</div></div>' +
      '</div>';

    var timeRow =
      '<div class="form-group"><label class="form-label">主题</label><div class="ls-session-edit__readonly">' + lsEscHtml(subj) + '</div></div>' +
      '<div class="form-group"><label class="form-label">直播时间</label><div class="ls-session-edit__readonly">' + lsEscHtml(tz) + ' · ' + lsEscHtml(liveDate) + ' ' + lsEscHtml(liveClock) + '</div></div>' +
      '<div class="form-group"><label class="form-label">直播时长</label><div class="ls-session-edit__readonly">' + lsEscHtml(durStr) + '</div></div>' +
      '<div class="form-group"><label class="form-label">直播跟播人</label><div class="ls-session-edit__readonly">' + (follower ? lsEscHtml(follower) : '<span class="ls-sess-cell-muted">-</span>') + '</div></div>' +
      '<div class="form-group"><label class="form-label">TikTok Live Events</label><div class="ls-session-edit__readonly" style="white-space:pre-wrap;word-break:break-all">' + (ttUrl ? lsEscHtml(ttUrl) : '<span class="ls-sess-cell-muted">-</span>') + '</div></div>' +
      '<div class="form-group"><label class="form-label">计划起止（场次）</label><div class="ls-session-edit__readonly">' + lsEscHtml((session.plannedStartAt || '-') + ' ~ ' + (session.plannedEndAt || '-')) + '</div></div>';

    var segs = session.segments || [];
    var hostCards = '<div class="ha-abnormal-modal-hosts ls-sess-hosts ls-sess-hosts--detail-readonly">' +
      segs.map(function (seg) {
        var acc = seg.decisionStatus === 'accepted';
        var rej = seg.decisionStatus === 'rejected';
        var statusTag = acc
          ? '<span class="ha-abnormal-host-tag ha-abnormal-host-tag--status ha-abnormal-host-tag--ok">已确认</span>'
          : (rej
            ? '<span class="ha-abnormal-host-tag ha-abnormal-host-tag--status ha-abnormal-host-tag--pending">已拒绝</span>'
            : '<span class="ha-abnormal-host-tag ha-abnormal-host-tag--status ha-abnormal-host-tag--pending">待确认</span>');
        var planLine = lsEscHtml(seg.startAt || '') + ' ~ ' + lsEscHtml(seg.endAt || '');
        var extra = '';
        if (session.livePhase === 'live' || session.livePhase === 'ended') {
          extra =
            '<div class="ls-sess-detail-seg__extra">' +
            '<div class="ls-sess-detail-kv"><span class="ls-sess-detail-kv__lbl">实际上播</span><span class="ls-sess-detail-kv__val">' + lsEscHtml(seg.actualStartAt || '-') + '</span></div>' +
            '<div class="ls-sess-detail-kv"><span class="ls-sess-detail-kv__lbl">实际下播</span><span class="ls-sess-detail-kv__val">' + lsEscHtml(seg.actualEndAt || '-') + '</span></div>' +
            '<div class="ls-sess-detail-kv"><span class="ls-sess-detail-kv__lbl">GMV</span><span class="ls-sess-detail-kv__val">' + lsEscHtml(lsFormatGmvDisplay(seg.gmv, session, seg)) + '</span></div>' +
            (seg.gmvRemark ? '<div class="ls-sess-detail-gmv-note">' + lsEscHtml(seg.gmvRemark) + '</div>' : '') +
            '</div>';
        }
        return '<div class="ls-sess-detail-seg">' +
          '<div class="ls-sess-host-stack-line">' +
          '<span class="ha-abnormal-host-tag">' + lsEscHtml(seg.hostName || seg.hostId || '-') + '</span>' + statusTag +
          '</div>' +
          '<div class="ls-sess-host-stack-plan">' + planLine + '</div>' +
          extra +
          '</div>';
      }).join('') +
      (segs.length ? '' : '<div class="ls-session-edit__readonly"><span class="ls-sess-cell-muted">' + t('ls.seg.empty') + '</span></div>') +
      '</div>';

    var bottom =
      '<div class="form-group">' +
      '<label class="form-label">备注 / 说明（英文）</label>' +
      '<div class="ls-session-edit__readonly" style="white-space:pre-wrap;word-break:break-word">' + (d.remarkEn ? lsEscHtml(d.remarkEn) : '<span class="ls-sess-cell-muted">-</span>') + '</div>' +
      '</div>';

    return '<div class="ls-session-edit ls-session-edit--readonly">' +
      '<section class="ls-session-edit__section"><h4 class="ls-session-edit__h4">' + t('ls.section.account') + '</h4>' + accountRow + '</section>' +
      '<section class="ls-session-edit__section"><h4 class="ls-session-edit__h4">' + t('ls.section.schedule') + '</h4>' +
      '<div class="ls-session-edit__grid">' +
      '<div class="ls-session-edit__col">' + timeRow + '</div>' +
      '<div class="ls-session-edit__col ls-session-edit__col--hosts"><h5 class="ls-session-edit__h5">' + t('ls.detail.seg_hosts') + '</h5>' + hostCards + '</div>' +
      '</div></section>' +
      '<section class="ls-session-edit__section"><h4 class="ls-session-edit__h4">' + t('ls.section.remark') + '</h4>' + bottom + '</section>' +
      '</div>';
  }

  /** 主播分段卡片标题：HostName + Mar 5 19:00–21:15（对齐参考稿） */
  function lsFormatSegCardTitleHtml(hostName, startAt, endAt) {
    var hn = hostName || '-';
    var s = String(startAt || '');
    var e = String(endAt || '');
    var m = s.match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
    var m2 = e.match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (m && m2) {
      var mo = parseInt(m[2], 10) - 1;
      var day = parseInt(m[3], 10);
      return lsEscHtml(hn) + ' <span class="ls-sess-seg-card__title-range">' + months[mo] + ' ' + day + ' ' + m[4] + ':' + m[5] + '–' + m2[4] + ':' + m2[5] + '</span>';
    }
    return lsEscHtml(hn) + ' <span class="ls-sess-seg-card__title-range">' + lsEscHtml(s) + ' – ' + lsEscHtml(e) + '</span>';
  }

  /**
   * 直播中 / 已直播 · 排期详情弹窗：顶部字段全部禁用；主播段为卡片式，仅 Start/End（实际）与 GMV 可编辑
   */
  function lsRenderSessionLiveEndedDetailModalHtml(batch, session) {
    lsEnsureSessionDetail(session, batch);
    var d = session.detail || {};
    var dis = ' disabled';
    var tzOpts = ['America/New_York', 'America/Los_Angeles', 'Asia/Shanghai', 'UTC'];
    if (d.timeZone && tzOpts.indexOf(d.timeZone) === -1) tzOpts.unshift(d.timeZone);
    var dhOpts = [];
    var i;
    for (i = 0; i <= 12; i++) dhOpts.push(i);
    var dmOpts = [0, 15, 30, 45];
    var followerOpts = [
      { v: '', l: '请选择' },
      { v: 'darren.chen', l: 'darren.chen' },
      { v: 'hayleyliang@wahool.live', l: 'hayleyliang@wahool.live' }
    ].map(function (f) {
      return '<option value="' + lsEscHtml(f.v) + '"' + (String(d.follower || '') === f.v ? ' selected' : '') + '>' + lsEscHtml(f.l) + '</option>';
    }).join('');

    var ttLiveResolved = lsResolveTiktokLiveEventUrl(d, session);
    var ttPlaceholder = '示例：https://shop.tiktok.com/streamer/live/event/dashboard?session_id=4026548742';

    var accountRow =
      '<div class="ls-session-edit__row2">' +
      '<div class="form-group"><label class="form-label">直播账号</label><input class="input"' + dis + ' value="' + lsEscHtml(session.liveAccountUsername || '-') + '" /></div>' +
      '<div class="form-group"><label class="form-label">直播类型</label>' +
      '<select class="select"' + dis + '>' +
      '<option value="达播"' + ((d.liveType || '') === '达播' ? ' selected' : '') + '>达播</option>' +
      '<option value="店播"' + ((d.liveType || '') === '店播' ? ' selected' : '') + '>店播</option>' +
      '</select></div>' +
      '</div>';

    var timeRow =
      '<div class="form-group"><label class="form-label">主题</label><input class="input"' + dis + ' value="' + lsEscHtml(d.subject || '') + '" /></div>' +
      '<div class="form-group"><label class="form-label">直播时间</label><div class="ls-session-edit__time-row">' +
      '<select class="select"' + dis + ' style="min-width:160px">' +
      tzOpts.map(function (z) { return '<option value="' + lsEscHtml(z) + '"' + (z === d.timeZone ? ' selected' : '') + '>' + lsEscHtml(z) + '</option>'; }).join('') +
      '</select>' +
      '<input type="date" class="input" style="max-width:160px"' + dis + ' value="' + lsEscHtml(d.liveDate || '') + '" />' +
      '<input type="time" class="input" style="max-width:120px"' + dis + ' value="' + lsEscHtml((d.liveClock || '09:00').slice(0, 5)) + '" />' +
      '</div></div>' +
      '<div class="form-group"><label class="form-label">直播时长</label><div class="ls-session-edit__time-row">' +
      '<select class="select"' + dis + '>' +
      dhOpts.map(function (h) { return '<option value="' + h + '"' + (Number(d.durationHours) === h ? ' selected' : '') + '>' + h + ' 小时</option>'; }).join('') +
      '</select>' +
      '<select class="select"' + dis + '>' +
      dmOpts.map(function (m) { return '<option value="' + m + '"' + (Number(d.durationMinutes) === m ? ' selected' : '') + '>' + m + ' 分钟</option>'; }).join('') +
      '</select></div></div>' +
      '<div class="form-group"><label class="form-label">直播跟播人</label><select class="select"' + dis + '>' + followerOpts + '</select></div>' +
      '<div class="form-group"><label class="form-label">TikTok Live Events</label><textarea class="input" rows="3"' + dis + ' placeholder="' + lsEscHtml(ttPlaceholder) + '">' + lsEscHtml(ttLiveResolved) + '</textarea></div>' +
      '<div class="form-group"><label class="form-label">计划起止（场次）</label><input class="input"' + dis + ' value="' + lsEscHtml((session.plannedStartAt || '-') + ' ~ ' + (session.plannedEndAt || '-')) + '" /></div>';

    var segCards = (session.segments || []).map(function (seg) {
      var titleInner = lsFormatSegCardTitleHtml(seg.hostName || seg.hostId, seg.startAt, seg.endAt);
      return '<div class="ls-sess-seg-card" data-seg-id="' + lsEscHtml(seg.id) + '">' +
        '<div class="ls-sess-seg-card__title">' + titleInner + '</div>' +
        '<div class="ls-sess-seg-card__grid">' +
        '<div class="ls-sess-seg-card__field"><label>' + t('ls.seg.host') + '</label><input type="text" class="input" value="' + lsEscHtml(seg.hostName || '') + '"' + dis + ' /></div>' +
        '<div class="ls-sess-seg-card__field"><label>' + t('ls.seg.start') + '</label><input type="datetime-local" class="input ls-sess-seg-act-start" value="' + lsWallToDatetimeLocal(seg.actualStartAt) + '" /></div>' +
        '<div class="ls-sess-seg-card__field"><label>' + t('ls.seg.end') + '</label><input type="datetime-local" class="input ls-sess-seg-act-end" value="' + lsWallToDatetimeLocal(seg.actualEndAt) + '" /></div>' +
        '<div class="ls-sess-seg-card__field ls-sess-seg-card__field--gmv">' +
        '<label>' + t('ls.seg.gmv') + '</label>' +
        '<div class="ls-sess-seg-card__gmv-row">' +
        '<input type="number" class="input ls-sess-seg-gmv" min="0" step="0.01" placeholder="' + lsEscHtml(t('ls.seg.gmv')) + '" value="' + (Number(seg.gmv) || 0) + '" />' +
        '<button type="button" class="btn btn-ghost btn-xs ls-sess-seg-trash" disabled title="' + lsEscHtml(t('ls.seg.del_disabled')) + '" tabindex="-1"><i class="fas fa-trash-alt"></i></button>' +
        '</div></div>' +
        '<div class="ls-sess-seg-card__field ls-sess-seg-card__field--full"><label>' + t('ls.seg.gmv_note') + '</label><textarea class="input ls-sess-seg-gmv-note" rows="2" placeholder="' + lsEscHtml(t('ls.seg.gmv_note')) + '">' + lsEscHtml(seg.gmvRemark || '') + '</textarea></div>' +
        '</div></div>';
    }).join('');

    var bottom = '<div class="form-group"><label class="form-label">备注 / 说明（英文）</label><textarea class="input" rows="4"' + dis + '>' + lsEscHtml(d.remarkEn || '') + '</textarea></div>';

    return '<p class="ls-sess-live-ended-hint"><i class="fas fa-info-circle"></i> ' + t('ls.live_ended.hint') + '</p>' +
      '<div class="ls-session-edit ls-session-edit--live-ended-modal">' +
      '<section class="ls-session-edit__section"><h4 class="ls-session-edit__h4">' + t('ls.section.account') + '</h4>' + accountRow + '</section>' +
      '<section class="ls-session-edit__section"><h4 class="ls-session-edit__h4">' + t('ls.section.schedule') + '</h4>' +
      '<div class="ls-session-edit__grid">' +
      '<div class="ls-session-edit__col">' + timeRow + '</div>' +
      '<div class="ls-session-edit__col ls-session-edit__col--hosts">' +
      '<div class="ls-sess-live-banner"><i class="fas fa-user-clock"></i> ' + t('ls.banner.host_checkin') + '</div>' +
      '<h5 class="ls-session-edit__h5">' + t('ls.modal.seg_hosts_title') + '</h5>' +
      '<p class="ls-session-edit__hint ls-sess-gmv-ccy-hint">' + lsT('ls.gmv.ccy_hint', lsGmvCurrencyCode(session)) + '</p>' +
      '<div id="lsSessionLiveHosts" class="ls-sess-live-host-cards">' + (segCards || '<div class="ls-session-edit__readonly">' + t('ls.seg.empty') + '</div>') + '</div>' +
      '</div></div></section>' +
      '<section class="ls-session-edit__section"><h4 class="ls-session-edit__h4">' + t('ls.section.remark') + '</h4>' + bottom + '</section>' +
      '</div>';
  }

  function lsCollectLiveEndedDetailSegments(session) {
    var modalBody = document.getElementById('lsModalBody');
    if (!modalBody) return;
    var byId = {};
    (session.segments || []).forEach(function (s) { if (s && s.id) byId[s.id] = s; });
    modalBody.querySelectorAll('#lsSessionLiveHosts .ls-sess-seg-card').forEach(function (el) {
      var sid = el.getAttribute('data-seg-id');
      var seg = byId[sid];
      if (!seg) return;
      seg.actualStartAt = lsDatetimeLocalToWall((el.querySelector('.ls-sess-seg-act-start') || {}).value).trim();
      seg.actualEndAt = lsDatetimeLocalToWall((el.querySelector('.ls-sess-seg-act-end') || {}).value).trim();
      var gmvEl = el.querySelector('.ls-sess-seg-gmv');
      seg.gmv = gmvEl ? parseFloat(gmvEl.value) || 0 : (seg.gmv != null ? seg.gmv : 0);
      var gmvN = el.querySelector('.ls-sess-seg-gmv-note');
      seg.gmvRemark = gmvN ? gmvN.value.trim() : (seg.gmvRemark || '');
    });
  }

  function lsOpenSessionLiveEndedDetailModal(batchId, sessionId) {
    var batch = lsScheduleBatches.find(function (b) { return b.id === batchId; });
    if (!batch) return;
    var session = (batch.sessions || []).find(function (s) { return s.id === sessionId; });
    if (!session) return;
    var overlay = document.getElementById('lsModalOverlay');
    var modal = document.getElementById('lsModal');
    var modalTitle = document.getElementById('lsModalTitle');
    var modalBody = document.getElementById('lsModalBody');
    var okBtn = document.getElementById('lsModalOk');
    if (modal) modal.classList.add('ls-modal--wide');
    if (modalTitle) modalTitle.textContent = t('ls.modal.detail');
    if (modalBody) modalBody.innerHTML = lsRenderSessionLiveEndedDetailModalHtml(batch, session);
    if (okBtn) okBtn.textContent = t('ls.modal.save');
    if (okBtn) okBtn.onclick = function () {
      lsCollectLiveEndedDetailSegments(session);
      batch.updatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
      lsSaveAll();
      lsHideModal();
      if (document.getElementById('lsTabBody')) document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
      if (typeof window.lsRenderBatchDrawerContent === 'function' && lsBatchDrawerBatchId === batchId) {
        window.lsRenderBatchDrawerContent(batchId, 'sessions');
      }
      showToast('已保存', 'success');
    };
    if (overlay) overlay.classList.add('active');
  }

  function lsBindSessionEditHostUi(mode, session) {
    var modalBody = document.getElementById('lsModalBody');
    if (!modalBody || mode !== 'full') return;
    var wrap = modalBody.querySelector('#lsSessionEditHosts');
    var addBtn = modalBody.querySelector('#lsSessionEditAddHost');
    function bindDel(btn) {
      btn.addEventListener('click', function () {
        var row = btn.closest('.ha-abnormal-modal-seg');
        if (row) row.remove();
      });
    }
    modalBody.querySelectorAll('.ha-abnormal-modal-seg-del').forEach(function (btn) { bindDel(btn); });
    if (addBtn && wrap) {
      addBtn.onclick = function () {
        var div = document.createElement('div');
        div.className = 'ha-abnormal-modal-seg';
        div.setAttribute('data-seg-id', 'seg-new-' + Date.now());
        var liveExtra = session.livePhase === 'live'
          ? '<div class="ha-abnormal-modal-seg-field"><label>实际上播</label><input type="datetime-local" class="ls-sess-seg-act-start" /></div>' +
            '<div class="ha-abnormal-modal-seg-field"><label>实际下播</label><input type="datetime-local" class="ls-sess-seg-act-end" /></div>' +
            '<div class="ha-abnormal-modal-seg-field"><label>GMV</label><input type="number" class="ha-abnormal-modal-seg-gmv ls-sess-seg-gmv" min="0" step="0.01" value="0" /></div>'
          : '';
        var gmvNote = session.livePhase === 'live'
          ? '<div class="ls-sess-seg-gmv-note-wrap"><textarea class="input ls-sess-seg-gmv-note" rows="2" placeholder="GMV 修改备注"></textarea></div>'
          : '';
        div.innerHTML =
          '<div class="ha-abnormal-modal-seg-fields">' +
          '<div class="ha-abnormal-modal-seg-field"><label>主播</label><input type="text" class="ha-abnormal-modal-seg-host ls-sess-seg-host" placeholder="请选择或输入主播" /></div>' +
          '<div class="ha-abnormal-modal-seg-field"><label>计划开始</label><input type="datetime-local" class="ls-sess-seg-plan-start" /></div>' +
          '<div class="ha-abnormal-modal-seg-field"><label>计划结束</label><input type="datetime-local" class="ls-sess-seg-plan-end" /></div>' +
          '<button type="button" class="btn btn-ghost btn-xs ha-abnormal-modal-seg-del" aria-label="删除"><i class="fas fa-trash"></i></button>' +
          liveExtra +
          '</div>' +
          gmvNote;
        wrap.appendChild(div);
        var del = div.querySelector('.ha-abnormal-modal-seg-del');
        if (del) bindDel(del);
      };
    }
  }

  function lsCollectSessionSegmentsFromHostForm(session) {
    var modalBody = document.getElementById('lsModalBody');
    var segsOut = [];
    if (!modalBody) return segsOut;
    var oldById = {};
    (session.segments || []).forEach(function (s) { if (s && s.id) oldById[s.id] = s; });
    modalBody.querySelectorAll('#lsSessionEditHosts .ha-abnormal-modal-seg').forEach(function (segEl, idx) {
      var prevId = segEl.getAttribute('data-seg-id') || '';
      var hostName = ((segEl.querySelector('.ls-sess-seg-host') || {}).value || '').trim();
      var planS = lsDatetimeLocalToWall((segEl.querySelector('.ls-sess-seg-plan-start') || {}).value);
      var planE = lsDatetimeLocalToWall((segEl.querySelector('.ls-sess-seg-plan-end') || {}).value);
      var isNew = prevId.indexOf('seg-new-') === 0;
      var oid = isNew ? ('seg-' + Date.now() + '-' + idx + '-' + Math.random().toString(36).slice(2, 7)) : prevId;
      var old = oldById[prevId] || {};
      var hostIdVal = (!isNew && old.hostId) ? old.hostId : (hostName ? ('h-' + hostName.replace(/\s+/g, '-').slice(0, 24)) : ('h-new-' + idx));
      var seg = {
        id: oid,
        hostId: hostIdVal,
        hostName: hostName || old.hostName || '未命名主播',
        startAt: planS,
        endAt: planE,
        startAtMs: lsStrToMs(planS),
        endAtMs: lsStrToMs(planE),
        decisionStatus: old.decisionStatus || 'pending',
        decisionReason: old.decisionReason || ''
      };
      if (session.livePhase === 'live') {
        seg.actualStartAt = lsDatetimeLocalToWall((segEl.querySelector('.ls-sess-seg-act-start') || {}).value);
        seg.actualEndAt = lsDatetimeLocalToWall((segEl.querySelector('.ls-sess-seg-act-end') || {}).value);
        var gmvInp = segEl.querySelector('.ls-sess-seg-gmv');
        seg.gmv = gmvInp ? parseFloat(gmvInp.value) || 0 : (old.gmv != null ? old.gmv : 0);
        var gmvN = segEl.querySelector('.ls-sess-seg-gmv-note');
        seg.gmvRemark = gmvN ? gmvN.value.trim() : (old.gmvRemark || '');
      } else {
        seg.actualStartAt = old.actualStartAt != null ? old.actualStartAt : '';
        seg.actualEndAt = old.actualEndAt != null ? old.actualEndAt : '';
        seg.gmv = old.gmv != null ? old.gmv : 0;
        seg.gmvRemark = old.gmvRemark != null ? old.gmvRemark : '';
      }
      segsOut.push(seg);
    });
    return segsOut;
  }

  function lsOpenSessionEditModal(batchId, sessionId) {
    var batch = lsScheduleBatches.find(function (b) { return b.id === batchId; });
    if (!batch) return;
    var session = (batch.sessions || []).find(function (s) { return s.id === sessionId; });
    if (!session) return;
    lsEnsureSessionDetail(session, batch);
    var mode = session.livePhase === 'ended' ? 'streamed' : 'full';
    var overlay = document.getElementById('lsModalOverlay');
    var modal = document.getElementById('lsModal');
    var modalTitle = document.getElementById('lsModalTitle');
    var modalBody = document.getElementById('lsModalBody');
    var okBtn = document.getElementById('lsModalOk');
    if (modal) modal.classList.add('ls-modal--wide');
    if (modalTitle) modalTitle.textContent = t('ls.modal.edit');
    if (modalBody) modalBody.innerHTML = lsRenderSessionEditDetailHtml(batch, session, mode);
    lsBindSessionEditHostUi(mode, session);
    if (okBtn) okBtn.textContent = t('ls.modal.update');
    if (okBtn) okBtn.onclick = function () {
      if (mode === 'streamed') {
        var rows = document.querySelectorAll('#lsSessionEditHosts .ha-abnormal-modal-seg');
        (session.segments || []).forEach(function (seg, si) {
          var segEl = rows[si];
          if (!segEl || !seg) return;
          var elS = segEl.querySelector('.ls-sess-seg-act-start');
          var elE = segEl.querySelector('.ls-sess-seg-act-end');
          var elG = segEl.querySelector('.ls-sess-seg-gmv');
          var elN = segEl.querySelector('.ls-sess-seg-gmv-note');
          seg.actualStartAt = elS ? lsDatetimeLocalToWall(elS.value).trim() : '';
          seg.actualEndAt = elE ? lsDatetimeLocalToWall(elE.value).trim() : '';
          seg.gmv = elG ? parseFloat(elG.value) || 0 : 0;
          seg.gmvRemark = elN ? elN.value.trim() : '';
        });
      } else {
        var det = session.detail || {};
        det.liveType = document.getElementById('lsDet_liveType') ? document.getElementById('lsDet_liveType').value : det.liveType;
        det.subject = document.getElementById('lsDet_subject') ? document.getElementById('lsDet_subject').value.trim() : '';
        det.timeZone = document.getElementById('lsDet_tz') ? document.getElementById('lsDet_tz').value : det.timeZone;
        det.liveDate = document.getElementById('lsDet_date') ? document.getElementById('lsDet_date').value : '';
        det.liveClock = document.getElementById('lsDet_time') ? document.getElementById('lsDet_time').value : '';
        det.durationHours = document.getElementById('lsDet_dh') ? parseInt(document.getElementById('lsDet_dh').value, 10) || 0 : 0;
        det.durationMinutes = document.getElementById('lsDet_dm') ? parseInt(document.getElementById('lsDet_dm').value, 10) || 0 : 0;
        det.follower = document.getElementById('lsDet_follower') ? document.getElementById('lsDet_follower').value : '';
        det.tiktokLiveEventUrl = document.getElementById('lsDet_tt_url') ? document.getElementById('lsDet_tt_url').value.trim() : '';
        det.remarkEn = document.getElementById('lsDet_remark') ? document.getElementById('lsDet_remark').value.trim() : '';
        session.detail = det;
        session.eventName = det.subject || session.eventName;
        session.liveAccountUsername = document.getElementById('lsDet_liveAccount') ? document.getElementById('lsDet_liveAccount').value : session.liveAccountUsername;
        var clock = (det.liveClock || '09:00').trim();
        if (clock.length === 5) clock = clock + ':00';
        var pStart = det.liveDate + ' ' + clock;
        var startMs = lsStrToMs(pStart);
        if (!isFinite(startMs)) startMs = lsStrToMs(pStart.replace(/\s+/, 'T'));
        var durMs = ((det.durationHours || 0) * 60 + (det.durationMinutes || 0)) * 60 * 1000;
        if (isFinite(startMs) && durMs > 0) {
          session.plannedStartAt = lsMsToStr(startMs);
          session.plannedEndAt = lsMsToStr(startMs + durMs);
          session.plannedStartAtMs = startMs;
          session.plannedEndAtMs = startMs + durMs;
        }
        session.segments = lsCollectSessionSegmentsFromHostForm(session);
      }
      batch.updatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
      lsSaveAll();
      lsHideModal();
      if (document.getElementById('lsTabBody')) document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
      showToast('排期已更新', 'success');
    };
    if (overlay) overlay.classList.add('active');
  }

  function lsResolveHostMetaForDrawer(hostId) {
    var hostName = '';
    var userId = '';
    var liveAccountUsername = '';
    (lsHostAvailabilities || []).forEach(function (s) {
      if (!s || s.hostId !== hostId) return;
      if (s.hostName) hostName = s.hostName;
      if (s.userId) userId = s.userId;
      if (s.liveAccountUsername) liveAccountUsername = s.liveAccountUsername;
    });
    var titleEl = document.getElementById('lsHostDrawerTitle');
    var titleTxt = titleEl && titleEl.textContent ? String(titleEl.textContent).trim() : '';
    if (titleTxt && (!hostName || hostName === hostId)) hostName = titleTxt;
    return { hostName: hostName || hostId, userId: userId || '', liveAccountUsername: liveAccountUsername || '' };
  }

  function lsCollectKnownHostsForAvailPicker() {
    var map = {};
    (lsHostAvailabilities || []).forEach(function (s) {
      if (!s || !s.hostId) return;
      map[s.hostId] = s.hostName || s.hostId;
    });
    return Object.keys(map).sort().map(function (hid) {
      return { hostId: hid, hostName: map[hid] };
    });
  }

  function lsGetBatchTimezoneOptions() {
    var tzList = [
      'UTC',
      'America/Los_Angeles',
      'America/New_York',
      'Europe/London',
      'Europe/Paris',
      'Asia/Shanghai',
      'Asia/Tokyo',
      'Asia/Singapore',
      'Australia/Sydney'
    ];
    if (lsMerchantTimeZone && tzList.indexOf(lsMerchantTimeZone) === -1) tzList.unshift(lsMerchantTimeZone);
    if (lsDisplayTimeZone && tzList.indexOf(lsDisplayTimeZone) === -1) tzList.unshift(lsDisplayTimeZone);
    return tzList;
  }

  function lsAvailBatchRowHtml(hosts, dateVal, startVal, endVal, selectedHostId, selectedTz) {
    var opts = (hosts || []).map(function (h) {
      var sel = h.hostId === selectedHostId ? ' selected' : '';
      return '<option value="' + lsEscHtml(h.hostId) + '"' + sel + '>' + lsEscHtml(h.hostName) + '</option>';
    }).join('');
    var tzOpts = lsGetBatchTimezoneOptions().map(function (tz) {
      var sel = tz === (selectedTz || lsDisplayTimeZone) ? ' selected' : '';
      return '<option value="' + lsEscHtml(tz) + '"' + sel + '>' + lsEscHtml(tz) + '</option>';
    }).join('');
    return '' +
      '<tr class="ls-avail-batch-row">' +
      '<td><select class="select ls-avail-batch-host" style="min-width:160px;max-width:220px">' + opts + '</select></td>' +
      '<td><select class="select ls-avail-batch-tz" style="min-width:190px;max-width:240px">' + tzOpts + '</select></td>' +
      '<td><input type="date" class="input ls-avail-batch-date" value="' + lsEscHtml(dateVal || '') + '" /></td>' +
      '<td><input type="time" class="input ls-avail-batch-start" value="' + lsEscHtml(startVal || '09:00') + '" step="60" /></td>' +
      '<td><input type="time" class="input ls-avail-batch-end" value="' + lsEscHtml(endVal || '18:00') + '" step="60" /></td>' +
      '<td><button type="button" class="btn btn-ghost btn-sm ls-avail-batch-remove" title="' + lsEscHtml(t('ls.host.batch_remove_row')) + '"><i class="fas fa-times"></i></button></td>' +
      '</tr>';
  }

  function lsAvailBatchCommit() {
    var tbody = document.getElementById('lsAvailBatchTbody');
    if (!tbody) return;
    var rowEls = tbody.querySelectorAll('tr.ls-avail-batch-row');
    var nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');
    var toMerge = {};
    var pushed = 0;
    var uid = 0;
    for (var i = 0; i < rowEls.length; i++) {
      var row = rowEls[i];
      var hostSel = row.querySelector('.ls-avail-batch-host');
      var hid = hostSel ? String(hostSel.value || '').trim() : '';
      var dInp = row.querySelector('.ls-avail-batch-date');
      var sInp = row.querySelector('.ls-avail-batch-start');
      var eInp = row.querySelector('.ls-avail-batch-end');
      var tzSel = row.querySelector('.ls-avail-batch-tz');
      var dateStr = dInp ? String(dInp.value || '').trim() : '';
      var sT = sInp ? String(sInp.value || '').trim() : '';
      var eT = eInp ? String(eInp.value || '').trim() : '';
      var rowTz = tzSel ? String(tzSel.value || '').trim() : '';
      var any = !!(hid || dateStr || sT || eT || rowTz);
      if (!any) continue;
      if (!hid || !dateStr || !sT || !eT || !rowTz) {
        showToast(t('ls.host.batch_err_incomplete_row'), 'warn');
        return;
      }
      var meta = lsResolveHostMetaForDrawer(hid);
      var sPart = sT.length === 5 ? sT + ':00' : sT;
      var ePart = eT.length === 5 ? eT + ':00' : eT;
      var startWall = dateStr + ' ' + sPart;
      var endWall = dateStr + ' ' + ePart;
      var sMs = lsWallTimeToMs(startWall, rowTz);
      var eMs = lsWallTimeToMs(endWall, rowTz);
      if (!(sMs < eMs)) {
        showToast(t('ls.host.batch_err_time_order'), 'warn');
        return;
      }
      var dateStart = lsDateStrFromDateTime(startWall);
      if (!dateStart || dateStart !== dateStr) {
        showToast(t('ls.host.batch_err_incomplete_row'), 'warn');
        return;
      }
      uid += 1;
      lsHostAvailabilities.push({
        id: 'ha_' + Date.now() + '_' + uid + '_' + Math.random().toString(36).slice(2, 8),
        hostId: hid,
        hostName: meta.hostName,
        userId: meta.userId,
        liveAccountUsername: meta.liveAccountUsername,
        startAt: lsMsToStr(sMs),
        endAt: lsMsToStr(eMs),
        timeZone: rowTz,
        source: 'merchant_manual',
        updatedAt: nowStr,
        cancelled: false
      });
      pushed += 1;
      toMerge[hid + '|' + dateStart] = { hostId: hid, day: dateStart };
    }
    if (pushed === 0) {
      showToast(t('ls.host.batch_empty'), 'warn');
      return;
    }
    Object.keys(toMerge).forEach(function (k) {
      var x = toMerge[k];
      lsMergeHostAvailabilitiesForDay(x.hostId, x.day);
    });
    (lsMerchantTargets || []).forEach(function (targ) {
      targ.status = 'needs_regen';
      targ.updatedAt = nowStr;
    });
    lsSaveAll();
    lsHideModal();
    document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
    if (lsHostDrawerHostId && lsHostDrawerDayDate) lsRenderHostDrawerContent();
    showToast(lsT('ls.host.batch_saved', String(pushed)), 'success');
  }

  function lsOpenAddAvailabilityBatchModal() {
    var hosts = lsCollectKnownHostsForAvailPicker();
    if (!hosts.length) {
      showToast(t('ls.host.add_slot_no_hosts'), 'warn');
      return;
    }
    var weekStart = lsActiveWeekStart || (lsGetPeriodSeeds().startAt || '');
    var defaultHost0 = hosts[0] ? hosts[0].hostId : '';
    var defaultHost1 = hosts[1] ? hosts[1].hostId : defaultHost0;
    var bodyHtml =
      '<p class="ls-avail-batch-hint" style="font-size:12px;color:var(--text-subtext);line-height:1.45;margin:0 0 12px">' + t('ls.host.batch_hint') + '</p>' +
      '<div class="table-wrap ha-settle-table-wrap" style="max-height:min(52vh,420px);overflow-y:auto;overflow-x:hidden;border-radius:var(--radius-md)">' +
      '  <table class="ha-settle-table ls-avail-batch-table" style="width:100%;table-layout:fixed">' +
      '    <thead><tr>' +
      '      <th style="width:26%">' + t('ls.seg.host') + '</th>' +
      '      <th style="width:24%">' + t('ls.host.batch_tz_label') + '</th>' +
      '      <th style="width:18%">' + t('ls.host.add_slot_date_label') + '</th>' +
      '      <th style="width:14%">' + t('ls.drawer.th.start') + '</th>' +
      '      <th style="width:14%">' + t('ls.drawer.th.end') + '</th>' +
      '      <th style="width:52px"></th>' +
      '    </tr></thead>' +
      '    <tbody id="lsAvailBatchTbody">' +
      lsAvailBatchRowHtml(hosts, weekStart, '09:00', '12:00', defaultHost0, lsDisplayTimeZone) +
      lsAvailBatchRowHtml(hosts, weekStart, '14:00', '18:00', defaultHost1, lsDisplayTimeZone) +
      '</tbody>' +
      '  </table>' +
      '</div>' +
      '<div style="margin-top:12px">' +
      '  <button type="button" class="btn btn-ghost btn-sm" id="lsAvailBatchAddRow"><i class="fas fa-plus"></i> ' + t('ls.host.batch_add_row') + '</button>' +
      '</div>';
    lsShowModal(t('ls.host.batch_modal_title'), bodyHtml, t('ls.host.batch_save'), lsAvailBatchCommit, { wide: true });
  }

  function lsOpenAddAvailabilityHostDayPicker() {
    lsOpenAddAvailabilityBatchModal();
  }

  function lsOpenAddAvailabilityManual() {
    var overlay = document.getElementById('lsEditAvailabilityOverlay');
    if (!overlay) return;
    if (!lsHostDrawerHostId) {
      showToast(t('ls.drawer.add_slot_no_host'), 'warn');
      return;
    }
    if (!lsHostDrawerDayDate) {
      showToast(t('ls.drawer.add_slot_no_day'), 'warn');
      return;
    }
    var titleEl = document.getElementById('lsEditAvailabilityTitle');
    if (titleEl) titleEl.textContent = t('ls.drawer.add_slot_title');
    lsRenderEditAvailTimeZoneOptions(lsDisplayTimeZone);
    var day = lsHostDrawerDayDate;
    document.getElementById('lsEditAvailStart').value = day + ' 09:00';
    document.getElementById('lsEditAvailEnd').value = day + ' 18:00';
    overlay.setAttribute('data-edit-id', '__new__');
    overlay.setAttribute('data-new-host-id', lsHostDrawerHostId);
    overlay.setAttribute('data-new-day', lsHostDrawerDayDate);
    overlay.classList.add('active');
  }

  function lsOpenEditAvailability(availId) {
    var overlay = document.getElementById('lsEditAvailabilityOverlay');
    if (!overlay) return;
    var avail = (lsHostAvailabilities || []).find(function (s) { return s.id === availId; });
    if (!avail) return;
    var titleEl = document.getElementById('lsEditAvailabilityTitle');
    if (titleEl) titleEl.textContent = t('ls.drawer.edit_slot_title');
    var editTz = avail.timeZone || lsDisplayTimeZone;
    lsRenderEditAvailTimeZoneOptions(editTz);
    var sMs = lsStrToMs(avail.startAt);
    var eMs = lsStrToMs(avail.endAt);
    document.getElementById('lsEditAvailStart').value = sMs ? lsFormatMs(sMs, editTz) : (avail.startAt || '');
    document.getElementById('lsEditAvailEnd').value = eMs ? lsFormatMs(eMs, editTz) : (avail.endAt || '');
    overlay.setAttribute('data-edit-id', availId);
    overlay.removeAttribute('data-new-host-id');
    overlay.removeAttribute('data-new-day');
    overlay.classList.add('active');
  }

  function lsCloseEditAvailability() {
    var overlay = document.getElementById('lsEditAvailabilityOverlay');
    if (overlay) overlay.classList.remove('active');
    if (overlay) overlay.removeAttribute('data-edit-id');
    if (overlay) overlay.removeAttribute('data-new-host-id');
    if (overlay) overlay.removeAttribute('data-new-day');
  }

  function lsRenderEditAvailTimeZoneOptions(selectedTz) {
    var tzEl = document.getElementById('lsEditAvailTimeZone');
    if (!tzEl) return;
    var value = selectedTz || lsDisplayTimeZone || lsMerchantTimeZone || 'UTC';
    var options = lsGetBatchTimezoneOptions();
    if (options.indexOf(value) === -1) options.unshift(value);
    tzEl.innerHTML = options.map(function (tz) {
      return '<option value="' + lsEscHtml(tz) + '"' + (tz === value ? ' selected' : '') + '>' + lsEscHtml(tz) + '</option>';
    }).join('');
  }

  /**
   * 自动排期弹窗（「直播目标」与「主播日程」入口共用）。
   * @param {object|null} options
   * @param {string[]|null} options.initialHostIds — 预填主播（如从主播日程勾选）
   * @param {boolean} [options.prefillAllAccounts] — 为 true 时预填全部可选直播账号
   */
  function lsOpenGenerateInitialScheduleModal(options) {
    options = options || {};
    var initialHostIds = options.initialHostIds || null;
    var prefillAllAccounts = !!options.prefillAllAccounts;

    var tzPeriods = (function () {
      var set = {};
      (lsMerchantTargets || []).forEach(function (t) {
        if (!t || !t.periodStart) return;
        set[t.periodStart] = t.periodEnd || '';
      });
      if (lsActiveWeekStart) {
        if (!set[lsActiveWeekStart]) set[lsActiveWeekStart] = lsAddDaysToDateStr(lsActiveWeekStart, 6) || '';
      }
      return Object.keys(set).sort().map(function (ps) { return { startAt: ps, endAt: set[ps] }; });
    })();

    var tzHosts = (function () {
      var map = {};
      (lsHostAvailabilities || []).forEach(function (s) {
        if (!s || s.cancelled) return;
        if (!s.hostId) return;
        map[s.hostId] = s.hostName || s.hostId;
      });
      return Object.keys(map).sort().map(function (hid) { return { hostId: hid, hostName: map[hid] }; });
    })();

    var tzAccounts = (function () {
      var set = {};
      (lsMerchantTargets || []).forEach(function (t) {
        if (t && t.liveAccountUsername) set[t.liveAccountUsername] = true;
      });
      (lsHostAvailabilities || []).forEach(function (s) {
        if (s && s.liveAccountUsername) set[s.liveAccountUsername] = true;
      });
      return Object.keys(set).sort().map(function (a) { return { accountUsername: a }; });
    })();

    var genTzOpts = ['America/New_York', 'America/Los_Angeles', 'Asia/Shanghai', 'UTC'];
    if (genTzOpts.indexOf(lsDisplayTimeZone) === -1) genTzOpts.unshift(lsDisplayTimeZone);
    var genTzHtml = genTzOpts.map(function (z) {
      return '<option value="' + z + '"' + (z === lsDisplayTimeZone ? ' selected' : '') + '>' + z + '</option>';
    }).join('');

    var introHtml = (initialHostIds && initialHostIds.length)
      ? '<div style="font-size:14px;color:var(--text-subtext);margin-bottom:12px">已从主播日程勾选 <strong>' + initialHostIds.length + '</strong> 位主播；可在下方继续增删。直播账号为必填。</div>'
      : '<div style="font-size:14px;color:var(--text-subtext);margin-bottom:12px">主播与直播账号支持多选（下拉搜索标签）。主播为必填。</div>';

    lsShowModal(
      '自动排期',
      introHtml +
      '<div class="form-group">' +
      '  <label class="form-label">主播（必填）</label>' +
      '  <div class="ms-wrap" id="lsGenHostMsWrap">' +
      '    <div class="ms-selected" id="lsGenHostSelected"></div>' +
      '    <input type="text" class="ms-input" id="lsGenHostInput" placeholder="搜索并选择主播..." autocomplete="off" />' +
      '    <div class="ms-dropdown ms-dropdown--hidden" id="lsGenHostDropdown"></div>' +
      '  </div>' +
      '</div>' +
      '<div class="form-group" style="margin-top:14px">' +
      '  <label class="form-label">直播账号</label>' +
      '  <div class="ms-wrap" id="lsGenAccountMsWrap">' +
      '    <div class="ms-selected" id="lsGenAccountSelected"></div>' +
      '    <input type="text" class="ms-input" id="lsGenAccountInput" placeholder="搜索并选择直播账号..." autocomplete="off" />' +
      '    <div class="ms-dropdown ms-dropdown--hidden" id="lsGenAccountDropdown"></div>' +
      '  </div>' +
      '</div>' +
      '<div class="form-group" style="margin-top:14px">' +
      '  <label class="form-label">直播时间段</label>' +
      '  <select class="select" id="lsGenPeriodSelect" style="width:100%">' +
      tzPeriods.map(function (p) {
        var sel = (lsTargetsPeriodStartFilter === p.startAt || (lsActiveWeekStart && lsActiveWeekStart === p.startAt)) ? ' selected' : '';
        return '<option value="' + p.startAt + '"' + sel + '>' + p.startAt + ' ~ ' + p.endAt + '</option>';
      }).join('') +
      '  </select>' +
      '</div>' +
      '<div class="form-group" style="margin-top:14px">' +
      '  <label class="form-label">时区</label>' +
      '  <select class="select" id="lsGenTimeZoneSelect" style="width:100%">' +
      genTzHtml +
      '  </select>' +
      '</div>' +
      '<div style="font-size:12px;color:var(--text-subtext);margin-top:12px">说明：将仅使用所选主播的空闲段进行分配，并仅对所选直播账号生成自动排期；展示时间按所选时区格式化并写入场次。</div>',
      '自动排期',
      function () {
        var hostTags = document.querySelectorAll('#lsGenHostSelected .ms-tag[data-host-id]');
        var hostIds = Array.prototype.map.call(hostTags, function (el) { return el.getAttribute('data-host-id'); }).filter(Boolean);

        var accTags = document.querySelectorAll('#lsGenAccountSelected .ms-tag[data-account-username]');
        var accUsernames = Array.prototype.map.call(accTags, function (el) { return el.getAttribute('data-account-username'); }).filter(Boolean);

        var periodStartEl = document.getElementById('lsGenPeriodSelect');
        var periodStart = periodStartEl ? periodStartEl.value : '';

        var tzEl = document.getElementById('lsGenTimeZoneSelect');
        lsGenerateInitialTimeZone = tzEl && tzEl.value ? tzEl.value : lsDisplayTimeZone;
        try { localStorage.setItem(LS_TIMEZONE_DISPLAY_KEY, lsGenerateInitialTimeZone); } catch (e) {}
        lsDisplayTimeZone = lsGenerateInitialTimeZone;

        if (!hostIds.length) {
          showToast('请选择“主播（必填）”', 'warn');
          return;
        }
        if (!periodStart) {
          showToast('请选择“直播时间段”', 'warn');
          return;
        }
        if (!accUsernames.length) {
          showToast('请选择“直播账号”', 'warn');
          return;
        }

        lsGenerateInitialHostIdsFilter = hostIds;
        lsGenerateInitialAccountUsernamesFilter = accUsernames;
        lsTargetsPeriodStartFilter = periodStart;
        lsHideModal();
        lsGenerateInitialSchedule();
        lsActiveTab = 'batches';
        document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
      }
    );
    setTimeout(function () {
      var hostWrap = document.getElementById('lsGenHostMsWrap');
      var accWrap = document.getElementById('lsGenAccountMsWrap');
      var hostInput = document.getElementById('lsGenHostInput');
      var hostSelectedEl = document.getElementById('lsGenHostSelected');
      var hostDropdownEl = document.getElementById('lsGenHostDropdown');
      var accInput = document.getElementById('lsGenAccountInput');
      var accSelectedEl = document.getElementById('lsGenAccountSelected');
      var accDropdownEl = document.getElementById('lsGenAccountDropdown');

      if (!hostWrap || !accWrap || !hostInput || !hostSelectedEl || !hostDropdownEl || !accInput || !accSelectedEl || !accDropdownEl) return;

      var hostById = {};
      (tzHosts || []).forEach(function (h) {
        if (!h || !h.hostId) return;
        hostById[h.hostId] = h.hostName || h.hostId;
      });
      var accByUsername = {};
      (tzAccounts || []).forEach(function (a) {
        if (!a || !a.accountUsername) return;
        accByUsername[a.accountUsername] = a.accountUsername;
      });

      var selectedHostIds;
      if (initialHostIds && initialHostIds.length) {
        selectedHostIds = initialHostIds.slice();
      } else if (lsGenerateInitialHostIdsFilter && lsGenerateInitialHostIdsFilter.length) {
        selectedHostIds = lsGenerateInitialHostIdsFilter.slice();
      } else {
        selectedHostIds = [];
      }

      var selectedAccUsernames;
      if (prefillAllAccounts && tzAccounts && tzAccounts.length) {
        selectedAccUsernames = tzAccounts.map(function (a) { return a.accountUsername; });
      } else if (lsGenerateInitialAccountUsernamesFilter && lsGenerateInitialAccountUsernamesFilter.length) {
        selectedAccUsernames = lsGenerateInitialAccountUsernamesFilter.slice();
      } else {
        selectedAccUsernames = [];
      }

      function lsRenderHostSelected() {
        hostSelectedEl.innerHTML = (selectedHostIds || []).map(function (hid) {
          var label = hostById[hid] || hid;
          return '<span class="ms-tag" data-host-id="' + hid + '">' +
            label +
            '<i class="fas fa-times ms-tag-remove" data-host-id="' + hid + '"></i>' +
            '</span>';
        }).join('');
        hostSelectedEl.querySelectorAll('.ms-tag-remove').forEach(function (btn) {
          btn.addEventListener('click', function () {
            var hid = btn.getAttribute('data-host-id');
            selectedHostIds = (selectedHostIds || []).filter(function (x) { return x !== hid; });
            hostDropdownEl.classList.add('ms-dropdown--hidden');
            lsRenderHostSelected();
          });
        });
      }

      function lsRenderHostDropdown(q) {
        q = String(q || '').toLowerCase();
        var items = (tzHosts || []).filter(function (h) {
          if (!h || !h.hostId) return false;
          if (selectedHostIds.indexOf(h.hostId) !== -1) return false;
          if (!q) return true;
          var label = String(h.hostName || h.hostId).toLowerCase();
          return label.indexOf(q) !== -1 || String(h.hostId).indexOf(q) !== -1;
        });
        if (!items.length) {
          hostDropdownEl.innerHTML = '<div class="ms-no-result">暂无结果</div>';
          hostDropdownEl.classList.remove('ms-dropdown--hidden');
          return;
        }
        hostDropdownEl.innerHTML = items.map(function (h) {
          return '<div class="ms-option" data-host-id="' + h.hostId + '">' + String(h.hostName || h.hostId) + '</div>';
        }).join('');
        hostDropdownEl.classList.remove('ms-dropdown--hidden');
        hostDropdownEl.querySelectorAll('.ms-option').forEach(function (opt) {
          opt.addEventListener('click', function () {
            var hid = opt.getAttribute('data-host-id');
            if (!hid) return;
            if (selectedHostIds.indexOf(hid) === -1) selectedHostIds.push(hid);
            lsRenderHostSelected();
            hostInput.value = '';
            hostDropdownEl.classList.add('ms-dropdown--hidden');
          });
        });
      }

      function lsRenderAccSelected() {
        accSelectedEl.innerHTML = (selectedAccUsernames || []).map(function (u) {
          return '<span class="ms-tag" data-account-username="' + u + '">' +
            String(accByUsername[u] || u) +
            '<i class="fas fa-times ms-tag-remove" data-account-username="' + u + '"></i>' +
            '</span>';
        }).join('');
        accSelectedEl.querySelectorAll('.ms-tag-remove').forEach(function (btn) {
          btn.addEventListener('click', function () {
            var u = btn.getAttribute('data-account-username');
            selectedAccUsernames = (selectedAccUsernames || []).filter(function (x) { return x !== u; });
            accDropdownEl.classList.add('ms-dropdown--hidden');
            lsRenderAccSelected();
          });
        });
      }

      function lsRenderAccDropdown(q) {
        q = String(q || '').toLowerCase();
        var items = (tzAccounts || []).filter(function (a) {
          if (!a || !a.accountUsername) return false;
          if (selectedAccUsernames.indexOf(a.accountUsername) !== -1) return false;
          if (!q) return true;
          var label = String(a.accountUsername).toLowerCase();
          return label.indexOf(q) !== -1;
        });
        if (!items.length) {
          accDropdownEl.innerHTML = '<div class="ms-no-result">暂无结果</div>';
          accDropdownEl.classList.remove('ms-dropdown--hidden');
          return;
        }
        accDropdownEl.innerHTML = items.map(function (a) {
          return '<div class="ms-option" data-account-username="' + a.accountUsername + '">' + String(a.accountUsername) + '</div>';
        }).join('');
        accDropdownEl.classList.remove('ms-dropdown--hidden');
        accDropdownEl.querySelectorAll('.ms-option').forEach(function (opt) {
          opt.addEventListener('click', function () {
            var u = opt.getAttribute('data-account-username');
            if (!u) return;
            if (selectedAccUsernames.indexOf(u) === -1) selectedAccUsernames.push(u);
            lsRenderAccSelected();
            accInput.value = '';
            accDropdownEl.classList.add('ms-dropdown--hidden');
          });
        });
      }

      lsRenderHostSelected();
      lsRenderAccSelected();

      hostInput.addEventListener('focus', function () { lsRenderHostDropdown(hostInput.value); });
      hostInput.addEventListener('input', function () { lsRenderHostDropdown(hostInput.value); });
      accInput.addEventListener('focus', function () { lsRenderAccDropdown(accInput.value); });
      accInput.addEventListener('input', function () { lsRenderAccDropdown(accInput.value); });

      try {
        if (window.__lsGenMsDocClickHandler) document.removeEventListener('click', window.__lsGenMsDocClickHandler);
        window.__lsGenMsDocClickHandler = function (e) {
          if (hostWrap && !hostWrap.contains(e.target)) hostDropdownEl.classList.add('ms-dropdown--hidden');
          if (accWrap && !accWrap.contains(e.target)) accDropdownEl.classList.add('ms-dropdown--hidden');
        };
        document.addEventListener('click', window.__lsGenMsDocClickHandler);
      } catch (err) {}
    }, 0);
  }

  function bindLiveScheduleEvents() {
    var root = document.getElementById('lsRoot');
    if (!root) return;
    if (root.getAttribute('data-bound') === '1') return;
    root.setAttribute('data-bound', '1');

    // Ensure base modal buttons
    var modalCancel = document.getElementById('lsModalCancel');
    if (modalCancel) modalCancel.addEventListener('click', function () { lsHideModal(); });
    var modalClose = document.getElementById('lsModalClose');
    if (modalClose) modalClose.addEventListener('click', function () { lsHideModal(); });
    var editCancel = document.getElementById('lsEditAvailabilityCancel');
    if (editCancel) editCancel.addEventListener('click', function () { lsCloseEditAvailability(); });
    var editClose = document.getElementById('lsEditAvailabilityClose');
    if (editClose) editClose.addEventListener('click', function () { lsCloseEditAvailability(); });

    var editSave = document.getElementById('lsEditAvailabilitySave');
    if (editSave) {
      editSave.addEventListener('click', function () {
        var overlay = document.getElementById('lsEditAvailabilityOverlay');
        var availId = overlay ? overlay.getAttribute('data-edit-id') : null;
        if (!availId) return;
        var startAt = (document.getElementById('lsEditAvailStart').value || '').trim();
        var endAt = (document.getElementById('lsEditAvailEnd').value || '').trim();
        var tzEl = document.getElementById('lsEditAvailTimeZone');
        var editTz = tzEl && tzEl.value ? String(tzEl.value) : lsDisplayTimeZone;
        var sMs = lsWallTimeToMs(startAt, editTz);
        var eMs = lsWallTimeToMs(endAt, editTz);
        if (!(sMs < eMs)) {
          showToast('时间区间不合法（开始需小于结束）', 'warn');
          return;
        }
        var dateStart = lsDateStrFromDateTime(startAt);
        var dateEnd = lsDateStrFromDateTime(endAt);
        if (!dateStart || dateStart !== dateEnd) {
          showToast('仅支持同一天编辑/合并（开始与结束必须在同一日期）', 'warn');
          return;
        }

        var nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');
        var startAtMerchant = lsMsToStr(sMs);
        var endAtMerchant = lsMsToStr(eMs);

        if (availId === '__new__') {
          var hidNew = overlay.getAttribute('data-new-host-id') || lsHostDrawerHostId;
          var dayExpected = overlay.getAttribute('data-new-day') || lsHostDrawerDayDate;
          if (!hidNew) {
            showToast(t('ls.drawer.add_slot_no_host'), 'warn');
            return;
          }
          if (!dayExpected || dateStart !== dayExpected) {
            showToast(t('ls.drawer.add_slot_day_mismatch'), 'warn');
            return;
          }
          var meta = lsResolveHostMetaForDrawer(hidNew);
          lsHostAvailabilities.push({
            id: 'ha_' + Date.now(),
            hostId: hidNew,
            hostName: meta.hostName,
            userId: meta.userId,
            liveAccountUsername: meta.liveAccountUsername,
            startAt: startAtMerchant,
            endAt: endAtMerchant,
            timeZone: editTz,
            source: 'merchant_manual',
            updatedAt: nowStr,
            cancelled: false
          });
          lsMergeHostAvailabilitiesForDay(hidNew, dateStart);
          (lsMerchantTargets || []).forEach(function (targ) {
            targ.status = 'needs_regen';
            targ.updatedAt = nowStr;
          });
          lsSaveAll();
          document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
          if (lsHostDrawerHostId && lsHostDrawerDayDate) lsRenderHostDrawerContent();
          lsCloseEditAvailability();
          showToast('保存成功：已合并并标记需重新生成初排', 'success');
          return;
        }

        var avail = (lsHostAvailabilities || []).find(function (x) { return x.id === availId; });
        if (!avail) return;
        lsHostAvailabilities = lsHostAvailabilities.map(function (x) {
          if (x.id !== availId) return x;
          return Object.assign({}, x, { startAt: startAtMerchant, endAt: endAtMerchant, timeZone: editTz, cancelled: false, updatedAt: nowStr });
        });

        // Same host + same day: auto-merge overlapping/adjacent segments.
        lsMergeHostAvailabilitiesForDay(avail.hostId, dateStart);

        // Mark targets to require regeneration of planned allocation.
        (lsMerchantTargets || []).forEach(function (t) {
          t.status = 'needs_regen';
          t.updatedAt = nowStr;
        });

        lsSaveAll();
        document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
        if (lsHostDrawerHostId && lsHostDrawerDayDate) lsRenderHostDrawerContent();
        lsCloseEditAvailability();
        showToast('保存成功：已合并并标记需重新生成初排', 'success');
      });
    }

    function lsUpdateHostGenToolbar() {
      var btn = document.getElementById('lsHostAvailGenBtn');
      var cnt = document.getElementById('lsHostAvailGenCount');
      var selAll = document.getElementById('lsHostSelectAllPicks');
      if (!btn && !cnt && !selAll) return;
      var n = document.querySelectorAll('.ls-host-row-pick:checked').length;
      if (btn) btn.disabled = n === 0;
      if (cnt) cnt.textContent = lsT('ls.host.selected_n', String(n));
      if (selAll) {
        var all = document.querySelectorAll('.ls-host-row-pick').length;
        selAll.checked = all > 0 && n === all;
        selAll.indeterminate = n > 0 && n < all;
      }
    }

    function lsUpdateHostBatchBar() {
      var bar = document.getElementById('lsHostBatchBar');
      var lead = document.getElementById('lsHostBatchLead');
      var delBtn = document.getElementById('lsHostBatchDelete');
      if (!bar || !lead || !delBtn) return;
      var selected = Array.prototype.map.call(document.querySelectorAll('.ls-host-row-check:checked'), function (cb) {
        return cb.getAttribute('data-id');
      }).filter(Boolean);
      var n = selected.length;
      bar.style.display = n > 0 ? '' : 'none';
      lead.textContent = n > 0 ? ('已选中 ' + n + ' 条空闲段') : '请选择要作废的空闲段';
      delBtn.disabled = n === 0;

      var selectAll = document.getElementById('lsHostSelectAll');
      if (selectAll) {
        var all = document.querySelectorAll('.ls-host-row-check');
        var allCount = all.length;
        selectAll.checked = allCount > 0 && n === allCount;
        selectAll.indeterminate = n > 0 && n < allCount;
      }
    }

    // Root delegated click handling
    root.addEventListener('click', function (e) {
      var t = e.target;
      var btn = t.closest && t.closest('[data-id],button');
      var target = e.target;

      var batchAddRowBtn = target.closest && target.closest('#lsAvailBatchAddRow');
      if (batchAddRowBtn) {
        var batchTbody = document.getElementById('lsAvailBatchTbody');
        if (batchTbody) {
          var firstHostSel = batchTbody.querySelector('.ls-avail-batch-host');
          var hostsPick = [];
          if (firstHostSel) {
            Array.prototype.forEach.call(firstHostSel.querySelectorAll('option'), function (opt) {
              if (opt.value) hostsPick.push({ hostId: opt.value, hostName: opt.textContent || opt.value });
            });
          }
          var refDateInp = batchTbody.querySelector('.ls-avail-batch-date');
          var defaultDay = refDateInp && refDateInp.value ? refDateInp.value : (lsActiveWeekStart || (lsGetPeriodSeeds().startAt || ''));
          var lastHostSel = batchTbody.querySelector('tr.ls-avail-batch-row:last-child .ls-avail-batch-host');
          var lastTzSel = batchTbody.querySelector('tr.ls-avail-batch-row:last-child .ls-avail-batch-tz');
          var defHost = lastHostSel && lastHostSel.value ? lastHostSel.value : (hostsPick[0] && hostsPick[0].hostId);
          var defTz = lastTzSel && lastTzSel.value ? lastTzSel.value : lsDisplayTimeZone;
          batchTbody.insertAdjacentHTML('beforeend', lsAvailBatchRowHtml(hostsPick, defaultDay, '09:00', '18:00', defHost, defTz));
        }
        return;
      }
      var batchRemoveBtn = target.closest && target.closest('.ls-avail-batch-remove');
      if (batchRemoveBtn) {
        var tr = batchRemoveBtn.closest('tr');
        var pTbody = tr && tr.parentNode;
        if (pTbody && pTbody.querySelectorAll('tr').length > 1) {
          tr.remove();
        } else {
          showToast(t('ls.host.batch_keep_one_row'), 'warn');
        }
        return;
      }

      // Tabs
      var tabBtn = target.closest && target.closest('[data-ls-tab]');
      if (tabBtn) {
        var tab = tabBtn.getAttribute('data-ls-tab');
        if (!tab) return;
        lsActiveTab = tab;
        // Sync tab button active styles (color + underline)
        var lsTabsEl = document.getElementById('lsTabs');
        if (lsTabsEl) {
          var allTabBtns = lsTabsEl.querySelectorAll('[data-ls-tab]');
          allTabBtns.forEach(function (b) {
            var v = b.getAttribute('data-ls-tab');
            var active = v === lsActiveTab;
            b.classList.toggle('or-tab--active', active);
          });
        }
        document.getElementById('lsTabBody').innerHTML = renderLiveScheduleTab(tab);
        return;
      }

      // 主播排期：场次状态 Tab
      var sessTabBtn = target.closest && target.closest('[data-ls-session-tab]');
      if (sessTabBtn) {
        lsSessionListFilter.tab = sessTabBtn.getAttribute('data-ls-session-tab') || 'draft';
        document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
        return;
      }

      // Host matrix: week switching
      var weekPrevBtn = target.closest && target.closest('#lsWeekPrev');
      if (weekPrevBtn) {
        lsActiveWeekStart = lsAddDaysToDateStr(lsActiveWeekStart || lsGetPeriodSeeds().startAt, -7);
        lsHostDrawerHostId = null;
        lsHostDrawerDayDate = null;
        // close drawer if open
        var d = document.getElementById('lsHostDrawer');
        var o = document.getElementById('lsHostDrawerOverlay');
        if (d) d.classList.remove('ha-settle-drawer--open');
        if (o) o.classList.remove('ha-settle-drawer-overlay--open');
        if (d) d.setAttribute('aria-hidden', 'true');
        document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
        return;
      }
      var weekNextBtn = target.closest && target.closest('#lsWeekNext');
      if (weekNextBtn) {
        lsActiveWeekStart = lsAddDaysToDateStr(lsActiveWeekStart || lsGetPeriodSeeds().startAt, 7);
        lsHostDrawerHostId = null;
        lsHostDrawerDayDate = null;
        var d2 = document.getElementById('lsHostDrawer');
        var o2 = document.getElementById('lsHostDrawerOverlay');
        if (d2) d2.classList.remove('ha-settle-drawer--open');
        if (o2) o2.classList.remove('ha-settle-drawer-overlay--open');
        if (d2) d2.setAttribute('aria-hidden', 'true');
        document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
        return;
      }
      var weekThisBtn = target.closest && target.closest('#lsWeekThis');
      if (weekThisBtn) {
        var base = (lsMerchantTargets && lsMerchantTargets.length ? lsMerchantTargets[0].periodStart : '') || lsGetPeriodSeeds().startAt;
        lsActiveWeekStart = base;
        lsHostDrawerHostId = null;
        lsHostDrawerDayDate = null;
        var d3 = document.getElementById('lsHostDrawer');
        var o3 = document.getElementById('lsHostDrawerOverlay');
        if (d3) d3.classList.remove('ha-settle-drawer--open');
        if (o3) o3.classList.remove('ha-settle-drawer-overlay--open');
        if (d3) d3.setAttribute('aria-hidden', 'true');
        document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
        return;
      }

      // Host matrix: open drawer
      var matrixCell = target.closest && target.closest('.ls-host-matrix-cell[data-open-host-drawer="1"]');
      if (matrixCell) {
        var hid = matrixCell.getAttribute('data-host-id');
        var dayDateStr = matrixCell.getAttribute('data-day-date');
        if (hid && dayDateStr && window.lsOpenHostDrawer) {
          window.lsOpenHostDrawer(hid, dayDateStr);
        }
        return;
      }

      // Host import
      var importBtn = target.closest && target.closest('#lsHostImportBtn');
      if (importBtn) {
        var fileEl = document.getElementById('lsHostImportFile');
        if (fileEl) fileEl.click();
        return;
      }

      // Template download (MVP)
      var tplBtn = target.closest && target.closest('#lsHostTemplateBtn');
      if (tplBtn) {
        showToast('模板下载（MVP Mock）', 'info');
        return;
      }

      // Host drawer segment actions (MVP)
      var availRestoreBtn = target.closest && target.closest('.ls-avail-restore');
      if (availRestoreBtn) {
        var restoreId = availRestoreBtn.getAttribute('data-avail-id');
        if (!restoreId) return;
        lsShowModal(
          '确认恢复该空闲段？',
          '<div style="font-size:14px;color:var(--text-subtext)">恢复后该空闲段将重新参与后续初排生成。</div>',
          '恢复',
          function () {
            lsHostAvailabilities = lsHostAvailabilities.map(function (s) {
              if (s.id !== restoreId) return s;
              return Object.assign({}, s, { cancelled: false, updatedAt: new Date().toISOString().slice(0, 16).replace('T', ' ') });
            });
            var restored = (lsHostAvailabilities || []).find(function (s) { return s.id === restoreId; });
            if (restored && restored.hostId) {
              var d = lsDateStrFromDateTime(restored.startAt);
              if (d) lsMergeHostAvailabilitiesForDay(restored.hostId, d);
            }
            var nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');
            (lsMerchantTargets || []).forEach(function (t) {
              t.status = 'needs_regen';
              t.updatedAt = nowStr;
            });
            lsSaveAll();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
            lsRenderHostDrawerContent();
            lsHideModal();
            showToast('已恢复：已标记需重新生成初排', 'success');
          }
        );
        return;
      }

      var availCancelBtn = target.closest && target.closest('.ls-avail-cancel');
      if (availCancelBtn) {
        var cancelId = availCancelBtn.getAttribute('data-avail-id');
        if (!cancelId) return;
        lsShowModal(
          '确认作废该空闲段？',
          '<div style="font-size:14px;color:var(--text-subtext)">作废后该空闲段将不再参与后续初排生成。</div>',
          '作废',
          function () {
            var nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');
            lsHostAvailabilities = lsHostAvailabilities.map(function (s) {
              if (s.id !== cancelId) return s;
              return Object.assign({}, s, { cancelled: true, updatedAt: nowStr });
            });
            (lsMerchantTargets || []).forEach(function (t) {
              t.status = 'needs_regen';
              t.updatedAt = nowStr;
            });
            lsSaveAll();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
            lsRenderHostDrawerContent();
            lsHideModal();
            showToast('已作废：已标记需重新生成初排', 'success');
          }
        );
        return;
      }

      var availAddManualBtn = target.closest && target.closest('#lsAvailAddManual');
      if (availAddManualBtn) {
        lsOpenAddAvailabilityManual();
        return;
      }

      var availEditBtn = target.closest && target.closest('.ls-avail-edit');
      if (availEditBtn) {
        var editAvailId = availEditBtn.getAttribute('data-avail-id');
        if (editAvailId) lsOpenEditAvailability(editAvailId);
        return;
      }

      // Host edit/delete/conflict
      var editBtn = target.closest && target.closest('.ls-host-edit');
      if (editBtn) {
        var id = editBtn.getAttribute('data-id');
        if (id) lsOpenEditAvailability(id);
        return;
      }

      var delBtn = target.closest && target.closest('.ls-host-delete');
      if (delBtn) {
        var delId = delBtn.getAttribute('data-id');
        if (!delId) return;
        lsShowModal(
          '确认作废该空闲段？',
          '<div style="font-size:14px;color:var(--text-subtext)">作废后该空闲段将不再参与后续初排生成。</div>',
          '作废',
          function () {
            lsHostAvailabilities = lsHostAvailabilities.filter(function (s) { return s.id !== delId; });
            lsSaveAll();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
            lsHideModal();
            showToast('已作废', 'success');
          }
        );
        return;
      }

      var bulkDelBtn = target.closest && target.closest('#lsHostBatchDelete');
      if (bulkDelBtn) {
        var selectedIds = Array.prototype.map.call(document.querySelectorAll('.ls-host-row-check:checked'), function (cb) {
          return cb.getAttribute('data-id');
        }).filter(Boolean);
        if (!selectedIds.length) return;
        lsShowModal(
          '确认作废选中空闲段？',
          '<div style="font-size:14px;color:var(--text-subtext)">将移除这 ' + selectedIds.length + ' 条空闲段，并影响后续初排生成。</div>',
          '作废选中',
          function () {
            lsHostAvailabilities = lsHostAvailabilities.filter(function (s) { return selectedIds.indexOf(s.id) === -1; });
            lsSaveAll();
            lsHideModal();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
            showToast('已作废 ' + selectedIds.length + ' 条', 'success');
          }
        );
        return;
      }

      var conflictBtn = target.closest && target.closest('.ls-host-conflict');
      if (conflictBtn) {
        var cid = conflictBtn.getAttribute('data-id');
        var conflictMap = lsComputeAvailabilityConflicts(lsHostAvailabilities);
        var reasons = conflictMap[cid] || [];
        lsShowModal(
          '冲突原因',
          reasons.length ? '<div>' + reasons.map(function (r) { return '<div style="margin:6px 0">• ' + r + '</div>'; }).join('') + '</div>' : '<div style="color:var(--text-subtext)">暂无冲突</div>',
          '知道了',
          function () { lsHideModal(); }
        );
        // hide ok button label on close? handled by okLabel
        return;
      }

      // Targets: generate
      var generateBtn = target.closest && target.closest('.ls-generate-for-account');
      if (generateBtn) {
        lsTargetsPeriodStartFilter = (lsMerchantTargets.find(function (x) { return x.id === generateBtn.getAttribute('data-id'); }) || {}).periodStart || lsTargetsPeriodStartFilter;
        lsShowModal(
          '自动排期？',
          '<div style="font-size:14px;color:var(--text-subtext)">将根据空闲段与目标小时数生成排期（MVP Mock）。</div>',
          '自动排期',
          function () {
            lsHideModal();
            lsGenerateInitialSchedule();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleTargetsTab();
          }
        );
        return;
      }

      var hostAvailGen = target.closest && target.closest('#lsHostAvailGenBtn');
      if (hostAvailGen) {
        var pickIds = Array.prototype.map.call(document.querySelectorAll('.ls-host-row-pick:checked'), function (cb) {
          return cb.getAttribute('data-host-id');
        }).filter(Boolean);
        if (!pickIds.length) {
          showToast('请先勾选主播', 'warn');
          return;
        }
        lsOpenGenerateInitialScheduleModal({ initialHostIds: pickIds, prefillAllAccounts: true });
        return;
      }

      var hostAvailAddSlot = target.closest && target.closest('#lsHostAvailAddSlotBtn');
      if (hostAvailAddSlot) {
        lsOpenAddAvailabilityHostDayPicker();
        return;
      }

      var addTargetBtn = target.closest && target.closest('#lsTargetsAdd');
      if (addTargetBtn) {
        var addAccounts = (function () {
          var set = {};
          (lsMerchantTargets || []).forEach(function (t) { if (t && t.liveAccountUsername) set[t.liveAccountUsername] = true; });
          (lsHostAvailabilities || []).forEach(function (s) { if (s && s.liveAccountUsername) set[s.liveAccountUsername] = true; });
          return Object.keys(set).sort();
        })();

        var addPeriodsMap = (function () {
          var set = {};
          (lsMerchantTargets || []).forEach(function (t) {
            if (t && t.periodStart) set[t.periodStart] = t.periodEnd || '';
          });
          if (lsActiveWeekStart && !set[lsActiveWeekStart]) {
            set[lsActiveWeekStart] = lsAddDaysToDateStr(lsActiveWeekStart, 6) || '';
          }
          return set;
        })();
        var addPeriods = Object.keys(addPeriodsMap).sort().map(function (ps) { return { startAt: ps, endAt: addPeriodsMap[ps] }; });

        lsShowModal(
          '新增直播目标',
          '<div class="form-group">' +
          '  <label class="form-label">直播账号</label>' +
          '  <select class="select" id="lsAddTargetAccountSelect" style="width:100%">' +
          (addAccounts.length
            ? addAccounts.map(function (a) { return '<option value="' + String(a) + '">' + a + '</option>'; }).join('')
            : '<option value="">暂无账号</option>') +
          '  </select>' +
          '</div>' +
          '<div class="form-group" style="margin-top:12px">' +
          '  <label class="form-label">周期</label>' +
          '  <select class="select" id="lsAddTargetPeriodSelect" style="width:100%">' +
          (addPeriods.length
            ? addPeriods.map(function (p) {
              var sel = lsActiveWeekStart && lsActiveWeekStart === p.startAt ? ' selected' : '';
              return '<option value="' + p.startAt + '"' + sel + '>' + p.startAt + ' ~ ' + p.endAt + '</option>';
            }).join('')
            : '<option value="">暂无周期</option>') +
          '  </select>' +
          '</div>' +
          '<div class="form-group" style="margin-top:12px">' +
          '  <label class="form-label">目标小时数</label>' +
          '  <input class="input" type="number" min="0" step="0.5" id="lsAddTargetHoursInput" placeholder="例如 4 或 4.5" style="width:100%" />' +
          '</div>' +
          '<div style="font-size:12px;color:var(--text-subtext);margin-top:12px">说明：同账号同周期会自动合并目标小时数（MVP Mock）。</div>',
          '新增',
          function () {
            var account = document.getElementById('lsAddTargetAccountSelect') ? document.getElementById('lsAddTargetAccountSelect').value : '';
            var periodStart = document.getElementById('lsAddTargetPeriodSelect') ? document.getElementById('lsAddTargetPeriodSelect').value : '';
            var hoursVal = document.getElementById('lsAddTargetHoursInput') ? parseFloat(document.getElementById('lsAddTargetHoursInput').value) : NaN;

            if (!account) { showToast('请选择直播账号', 'warn'); return; }
            if (!periodStart) { showToast('请选择周期', 'warn'); return; }
            if (!(hoursVal >= 0)) { showToast('请输入目标小时数（>=0）', 'warn'); return; }

            var nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');
            var existing = (lsMerchantTargets || []).find(function (t) {
              return t && t.liveAccountUsername === account && t.periodStart === periodStart;
            });

            if (existing) {
              existing.targetHours = (Number(existing.targetHours) || 0) + hoursVal;
              // If already generated, mark needs_regen
              if ((Number(existing.plannedHours) || 0) > 0 && existing.status !== '已同步') existing.status = 'needs_regen';
              existing.updatedAt = nowStr;
            } else {
              lsMerchantTargets.push({
                id: 't_' + Date.now(),
                liveAccountUsername: account,
                periodStart: periodStart,
                periodEnd: addPeriodsMap[periodStart] || '',
                targetHours: hoursVal,
                plannedHours: 0,
                acceptedHours: 0,
                status: '未生成',
                updatedAt: nowStr
              });
            }

            lsSaveAll();
            lsHideModal();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleTargetsTab();
            showToast('新增成功', 'success');
          }
        );
        return;
      }

      var saveTargetsBtn = target.closest && target.closest('#lsTargetsSave');
      if (saveTargetsBtn) {
        // save inline edits
        var curStart = lsActiveWeekStart || '';
        document.querySelectorAll('.ls-target-hours-input').forEach(function (inp) {
          var id = inp.getAttribute('data-id');
          var val = parseFloat(inp.value);
          if (isNaN(val)) val = 0;
          lsMerchantTargets = lsMerchantTargets.map(function (x) {
            if (x.id !== id) return x;
            if (curStart && x.periodStart && String(x.periodStart) < String(curStart)) return x; // past periods are locked
            x.targetHours = val;
            x.updatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
            return x;
          });
        });

        // Same account + same period: auto-merge by summing targetHours.
        (function () {
          var merged = {};
          (lsMerchantTargets || []).forEach(function (t) {
            if (!t) return;
            if (!t.periodStart) return;
            var key = String(t.liveAccountUsername || '') + '|' + String(t.periodStart || '');
            if (!merged[key]) {
              merged[key] = Object.assign({}, t);
              return;
            }
            merged[key].targetHours = (Number(merged[key].targetHours) || 0) + (Number(t.targetHours) || 0);
            merged[key].plannedHours = (Number(merged[key].plannedHours) || 0) + (Number(t.plannedHours) || 0);
            merged[key].acceptedHours = (Number(merged[key].acceptedHours) || 0) + (Number(t.acceptedHours) || 0);
            // Keep latest updatedAt
            merged[key].updatedAt = (merged[key].updatedAt && t.updatedAt) ? merged[key].updatedAt > t.updatedAt ? merged[key].updatedAt : t.updatedAt : (t.updatedAt || merged[key].updatedAt);
            // If already generated (plannedHours>0) but targets changed -> mark needs_regen
            if (Number(merged[key].plannedHours) > 0 && merged[key].status !== '已同步') merged[key].status = 'needs_regen';
          });
          lsMerchantTargets = Object.keys(merged).map(function (k) { return merged[k]; });
        })();

        lsSaveAll();
        showToast('目标已保存', 'success');
        return;
      }

      // Targets: cancel/delete
      var cancelTargetBtn = target.closest && target.closest('.ls-target-cancel');
      if (cancelTargetBtn) {
        var cancelId = cancelTargetBtn.getAttribute('data-id');
        if (!cancelId) return;
        var cur = (lsMerchantTargets || []).find(function (x) { return x.id === cancelId; });
        lsShowModal(
          '确认作废目标？',
          '<div style="font-size:14px;color:var(--text-subtext)">作废后该目标不会出现在当前列表中。该目标已生成的排期数据（MVP）不会自动删除。</div>',
          '作废',
          function () {
            lsMerchantTargets = (lsMerchantTargets || []).filter(function (x) { return x.id !== cancelId; });
            lsSaveAll();
            lsHideModal();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleTargetsTab();
            showToast('已作废目标', 'success');
          }
        );
        return;
      }

      // Batch / session list actions（主播排期）
      var viewBatch = target.closest && target.closest('.ls-batch-view');
      var viewSess = target.closest && target.closest('.ls-sess-view');
      if (viewBatch || viewSess) {
        var bid = viewBatch ? viewBatch.getAttribute('data-id') : (viewSess ? viewSess.getAttribute('data-batch-id') : '');
        var viewSid = viewSess ? viewSess.getAttribute('data-session-id') : '';
        if (viewSid && viewSess) {
          var bView = lsScheduleBatches.find(function (b) { return b.id === bid; });
          var sView = bView && (bView.sessions || []).find(function (s) { return s.id === viewSid; });
          if (sView && (sView.livePhase === 'live' || sView.livePhase === 'ended')) {
            lsOpenSessionLiveEndedDetailModal(bid, viewSid);
            return;
          }
        }
        lsBatchDrawerBatchId = bid;
        if (window.lsOpenBatchDrawer) window.lsOpenBatchDrawer(bid, viewSid || null);
        return;
      }

      var pushBatch = target.closest && target.closest('.ls-batch-push');
      var pushSess = target.closest && target.closest('.ls-sess-push');
      var batchPushToolbar = target.closest && target.closest('#lsSessBatchPush');
      if (batchPushToolbar) {
        var byBatch = {};
        document.querySelectorAll('.ls-sess-row-check:checked').forEach(function (cb) {
          var bid = cb.getAttribute('data-batch-id');
          var sid = cb.getAttribute('data-session-id');
          if (!bid || !sid) return;
          byBatch[bid] = byBatch[bid] || [];
          byBatch[bid].push(sid);
        });
        var keys = Object.keys(byBatch);
        if (!keys.length) return;
        var totalCnt = 0;
        keys.forEach(function (k) { totalCnt += byBatch[k].length; });
        lsShowModal(
          '批量推送给主播？',
          '<div style="font-size:14px;color:var(--text-subtext)">将对选中的 ' + totalCnt + ' 个场次发起主播确认（Relay segments 接受/拒绝）。</div>',
          '确认推送',
          function () {
            keys.forEach(function (bid) {
              var b = lsScheduleBatches.find(function (x) { return x.id === bid; });
              if (b) lsPushSessionsToHost(b, byBatch[bid]);
            });
            lsHideModal();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
            showToast('已推送 ' + totalCnt + ' 个场次（MVP Mock）', 'success');
          }
        );
        return;
      }

      var batchSyncToolbar = target.closest && target.closest('#lsSessBatchSync');
      if (batchSyncToolbar) {
        var byBatchSync = {};
        document.querySelectorAll('.ls-sess-row-check:checked').forEach(function (cb) {
          var bid = cb.getAttribute('data-batch-id');
          var sid = cb.getAttribute('data-session-id');
          if (!bid || !sid) return;
          byBatchSync[bid] = byBatchSync[bid] || [];
          byBatchSync[bid].push(sid);
        });
        var syncKeys = Object.keys(byBatchSync);
        if (!syncKeys.length) return;
        var syncItems = [];
        syncKeys.forEach(function (bid) {
          var bSyncBatch = lsScheduleBatches.find(function (x) { return x.id === bid; });
          if (!bSyncBatch || bSyncBatch.status !== 'waiting_sync') return;
          byBatchSync[bid].forEach(function (sid) {
            var sess = (bSyncBatch.sessions || []).find(function (s) { return s.id === sid; });
            if (!sess || sess.cancelled || sess.syncStatus === 'synced') return;
            var sidx = (bSyncBatch.sessions || []).indexOf(sess);
            syncItems.push({ b: bSyncBatch, s: sess, idx: sidx < 0 ? 0 : sidx });
          });
        });
        if (!syncItems.length) {
          showToast(t('ls.toast.batch_sync_none'), 'warn');
          return;
        }
        lsShowModal(
          t('ls.modal.batch_sync_title'),
          '<div style="font-size:14px;color:var(--text-subtext)">' + t('ls.modal.batch_sync_body').replace('{0}', String(syncItems.length)) + '</div>',
          t('ls.btn.sync_tiktok'),
          function () {
            syncItems.forEach(function (item) {
              lsApplyTikTokSyncToSession(item.b, item.s, item.idx);
            });
            lsSaveAll();
            lsHideModal();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
            showToast(t('ls.toast.batch_sync_done').replace('{0}', String(syncItems.length)), 'success');
          }
        );
        return;
      }

      if (pushBatch || pushSess) {
        var pushId = pushSess ? pushSess.getAttribute('data-batch-id') : pushBatch.getAttribute('data-id');
        var pushSessionId = pushSess ? pushSess.getAttribute('data-session-id') : null;
        var batch = lsScheduleBatches.find(function (b) { return b.id === pushId; });
        if (!batch) return;
        var body = pushSessionId
          ? '<div style="font-size:14px;color:var(--text-subtext)">将仅向该场次的主播发起确认/拒绝请求。</div>'
          : '<div style="font-size:14px;color:var(--text-subtext)">将向该批次内尚未推送的场次全部发起主播确认。</div>';
        lsShowModal(
          '确认推送给主播端？',
          body,
          '确认推送',
          function () {
            if (pushSessionId) {
              lsPushSessionsToHost(batch, [pushSessionId]);
            } else {
              var draftIds = (batch.sessions || []).filter(function (s) {
                return s && !s.cancelled && !s.pushedToHost;
              }).map(function (s) { return s.id; });
              lsPushSessionsToHost(batch, draftIds);
            }
            lsHideModal();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
            showToast('已推送给主播端（MVP Mock）', 'success');
          }
        );
        return;
      }

      var syncBatch = target.closest && target.closest('.ls-batch-sync');
      if (syncBatch) {
        var syncId = syncBatch.getAttribute('data-id');
        var sb = lsScheduleBatches.find(function (b) { return b.id === syncId; });
        if (!sb) return;
        if (!lsIsBatchReadyForSync(sb)) {
          showToast('未满足全部接受条件，无法同步', 'warn');
          return;
        }
        lsShowModal(
          '批量同步 TikTok',
          '<div style="font-size:14px;color:var(--text-subtext)">将为该批次创建 Live Event（MVP Mock）。</div>',
          '开始同步',
          function () {
            (sb.sessions || []).forEach(function (s, idx) {
              if (s.syncStatus === 'synced') return;
              lsApplyTikTokSyncToSession(sb, s, idx);
            });
            sb.status = 'synced';
            sb.updatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
            (lsMerchantTargets || []).forEach(function (t) {
              if (t.periodStart !== sb.periodStart) return;
              if ((Number(t.plannedHours) || 0) > 0) t.status = '已同步';
              t.updatedAt = sb.updatedAt;
            });
            lsSaveAll();
            lsHideModal();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
            showToast('同步完成', 'success');
          }
        );
        return;
      }

      var syncSessBtn = target.closest && target.closest('.ls-sess-sync-tt');
      if (syncSessBtn) {
        var sbid = syncSessBtn.getAttribute('data-batch-id');
        var ssid = syncSessBtn.getAttribute('data-session-id');
        var bSync = lsScheduleBatches.find(function (b) { return b.id === sbid; });
        if (!bSync) return;
        var sessSync = (bSync.sessions || []).find(function (s) { return s.id === ssid; });
        if (!sessSync) return;
        if (bSync.status !== 'waiting_sync') {
          showToast('当前场次不在「待同步」阶段', 'warn');
          return;
        }
        if (sessSync.syncStatus === 'synced') {
          showToast('该场次已同步', 'info');
          return;
        }
        lsShowModal(
          '同步 TikTok',
          '<div style="font-size:14px;color:var(--text-subtext)">将为该直播场次创建 TikTok Live Event（MVP Mock）。</div>',
          '开始同步',
          function () {
            var idx = (bSync.sessions || []).indexOf(sessSync);
            lsApplyTikTokSyncToSession(bSync, sessSync, idx < 0 ? 0 : idx);
            bSync.updatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
            lsSaveAll();
            lsHideModal();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
            showToast('场次已同步', 'success');
          }
        );
        return;
      }

      var editSessBtn = target.closest && target.closest('.ls-sess-edit');
      if (editSessBtn) {
        var ebid = editSessBtn.getAttribute('data-batch-id');
        var esid = editSessBtn.getAttribute('data-session-id');
        lsOpenSessionEditModal(ebid, esid);
        return;
      }

      var cancelSessBtn = target.closest && target.closest('.ls-sess-cancel');
      if (cancelSessBtn) {
        var cbid = cancelSessBtn.getAttribute('data-batch-id');
        var csid = cancelSessBtn.getAttribute('data-session-id');
        var bCan = lsScheduleBatches.find(function (b) { return b.id === cbid; });
        if (!bCan) return;
        var sessCan = (bCan.sessions || []).find(function (s) { return s.id === csid; });
        if (!sessCan) return;
        lsShowModal(
          '取消排期？',
          '<div style="font-size:14px;color:var(--text-subtext)">取消后该场次将不再出现在列表中（MVP Mock）。</div>',
          '取消排期',
          function () {
            sessCan.cancelled = true;
            bCan.updatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
            lsSaveAll();
            lsHideModal();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
            showToast('已取消场次', 'success');
          }
        );
        return;
      }

      var mockLiveBtn = target.closest && target.closest('.ls-sess-mock-live');
      if (mockLiveBtn) {
        var mbid = mockLiveBtn.getAttribute('data-batch-id');
        var msid = mockLiveBtn.getAttribute('data-session-id');
        var bM = lsScheduleBatches.find(function (b) { return b.id === mbid; });
        if (!bM) return;
        var sM = (bM.sessions || []).find(function (s) { return s.id === msid; });
        if (!sM) return;
        sM.livePhase = 'live';
        bM.updatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
        lsSaveAll();
        if (lsActiveTab === 'batches') document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
        if (window.lsRenderBatchDrawerContent) lsRenderBatchDrawerContent(mbid, 'sessions');
        showToast('已模拟开播（MVP）', 'success');
        return;
      }

      var mockEndBtn = target.closest && target.closest('.ls-sess-mock-end');
      if (mockEndBtn) {
        var ebid2 = mockEndBtn.getAttribute('data-batch-id');
        var esid2 = mockEndBtn.getAttribute('data-session-id');
        var bE = lsScheduleBatches.find(function (b) { return b.id === ebid2; });
        if (!bE) return;
        var sE = (bE.sessions || []).find(function (s) { return s.id === esid2; });
        if (!sE) return;
        sE.livePhase = 'ended';
        bE.updatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
        lsSaveAll();
        if (lsActiveTab === 'batches') document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
        if (window.lsRenderBatchDrawerContent) lsRenderBatchDrawerContent(ebid2, 'sessions');
        showToast('已模拟下播（MVP）', 'success');
        return;
      }
    });

    // Root delegated change handling for selects/inputs
    root.addEventListener('change', function (e) {
      var target = e.target;

      if (target && target.id === 'lsSessSelectAll') {
        var on = !!target.checked;
        document.querySelectorAll('.ls-sess-row-check').forEach(function (cb) { cb.checked = on; });
        var nSel = document.querySelectorAll('.ls-sess-row-check:checked').length;
        var bp = document.getElementById('lsSessBatchPush');
        var bs = document.getElementById('lsSessBatchSync');
        if (bp) bp.disabled = nSel === 0;
        if (bs) bs.disabled = nSel === 0;
        return;
      }
      if (target && target.classList && target.classList.contains('ls-sess-row-check')) {
        var bp2 = document.getElementById('lsSessBatchPush');
        var bs2 = document.getElementById('lsSessBatchSync');
        var n = document.querySelectorAll('.ls-sess-row-check:checked').length;
        if (bp2) bp2.disabled = n === 0;
        if (bs2) bs2.disabled = n === 0;
        var all = document.querySelectorAll('.ls-sess-row-check').length;
        var sa = document.getElementById('lsSessSelectAll');
        if (sa) {
          sa.checked = all > 0 && n === all;
          sa.indeterminate = n > 0 && n < all;
        }
        return;
      }

      // Host filters
      if (target && target.id === 'lsHostStatus') {
        lsHostFilter.status = target.value;
        document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
      }
      if (target && target.id === 'lsHostSearch') {
        lsHostFilter.host = target.value;
        document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
      }
      if (target && target.id === 'lsTimeZoneSelect') {
        lsDisplayTimeZone = target.value;
        try { localStorage.setItem(LS_TIMEZONE_DISPLAY_KEY, lsDisplayTimeZone); } catch (e) {}
        document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
        if (lsHostDrawerHostId && lsHostDrawerDayDate) lsRenderHostDrawerContent();
      }
      if (target && target.id === 'lsHostSelectAll') {
        var checkedAll = !!target.checked;
        document.querySelectorAll('.ls-host-row-check').forEach(function (cb) { cb.checked = checkedAll; });
        lsUpdateHostBatchBar();
      }
      if (target && target.classList && target.classList.contains('ls-host-row-check')) {
        lsUpdateHostBatchBar();
      }
      if (target && target.id === 'lsHostSelectAllPicks') {
        var onAll = !!target.checked;
        document.querySelectorAll('.ls-host-row-pick').forEach(function (cb) { cb.checked = onAll; });
        lsUpdateHostGenToolbar();
        return;
      }
      if (target && target.classList && target.classList.contains('ls-host-row-pick')) {
        lsUpdateHostGenToolbar();
        return;
      }
    });

    root.addEventListener('input', function (e) {
      var target = e.target;
      if (target && target.id === 'lsSessionSearch') {
        lsSessionListFilter.q = target.value;
        document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
      }
    });

    // File parsing
    var fileEl = document.getElementById('lsHostImportFile');
    if (fileEl) {
      fileEl.addEventListener('change', function () {
        var file = fileEl.files && fileEl.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function () {
          try {
            var text = String(reader.result || '');
            // Expected columns: hostName, liveAccountUsername(optional), startAt, endAt
            // Optional header is ignored if first row contains 'host'.
            var lines = text.split(/\r?\n/).map(function (l) { return l.trim(); }).filter(Boolean);
            if (!lines.length) { showToast('文件为空', 'warn'); return; }
            var first = lines[0].toLowerCase();
            var startIdx = first.indexOf('host') !== -1 ? 1 : 0;
            var imported = [];
            for (var i = startIdx; i < lines.length; i++) {
              var cols = lines[i].split(',').map(function (c) { return c.trim(); });
              if (cols.length < 3) continue;
              var hostName = cols[0];
              var liveAcc = cols.length >= 4 ? cols[1] : '';
              var startAt = cols.length >= 4 ? cols[2] : cols[1];
              var endAt = cols.length >= 4 ? cols[3] : cols[2];
              imported.push({
                id: 'ha_imp_' + Date.now() + '_' + i,
                hostId: 'imp_' + hostName,
                hostName: hostName,
                liveAccountUsername: liveAcc || null,
                startAt: startAt,
                endAt: endAt,
                source: '导入',
                updatedAt: new Date().toISOString().slice(0, 16).replace('T', ' ')
              });
            }
            if (!imported.length) { showToast('未解析到可用行', 'warn'); return; }
            lsHostAvailabilities = lsHostAvailabilities.concat(imported);
            lsSaveAll();
            document.getElementById('lsTabBody').innerHTML = renderLiveScheduleHostAvailTab();
            showToast('导入成功 ' + imported.length + ' 条', 'success');
          } catch (err) {
            showToast('导入失败：' + err, 'warn');
          }
        };
        reader.readAsText(file);
      });
    }

    // Drawer close
    var closeBtn = document.getElementById('lsBatchDrawerClose');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        lsCloseBatchDrawer();
      });
    }

    var overlay = document.getElementById('lsBatchDrawerOverlay');
    if (overlay) {
      overlay.addEventListener('click', function () { lsCloseBatchDrawer(); });
    }

    // Drawer tab switching
    var drawer = document.getElementById('lsBatchDrawer');
    if (drawer) {
      drawer.addEventListener('click', function (e) {
        var tab = e.target.closest && e.target.closest('[data-ls-drawer-tab]');
        if (!tab) return;
        var val = tab.getAttribute('data-ls-drawer-tab');
        lsRenderBatchDrawerContent(lsBatchDrawerBatchId, val);
      });
    }

    // Host drawer close
    var hostCloseBtn = document.getElementById('lsHostDrawerClose');
    if (hostCloseBtn) {
      hostCloseBtn.addEventListener('click', function () {
        lsCloseHostDrawer();
      });
    }

    var hostOverlay = document.getElementById('lsHostDrawerOverlay');
    if (hostOverlay) {
      hostOverlay.addEventListener('click', function () { lsCloseHostDrawer(); });
    }

    // Host drawer tab switching
    var hostDrawer = document.getElementById('lsHostDrawer');
    if (hostDrawer) {
      hostDrawer.addEventListener('click', function (e) {
        var tab = e.target.closest && e.target.closest('[data-ls-drawer-tab]');
        if (!tab) return;
        var val = tab.getAttribute('data-ls-drawer-tab');
        lsHostDrawerTab = val || 'availability';
        lsRenderHostDrawerContent();
      });
    }

    function lsCloseBatchDrawer() {
      var d = document.getElementById('lsBatchDrawer');
      var o = document.getElementById('lsBatchDrawerOverlay');
      if (d) d.classList.remove('ha-settle-drawer--open');
      if (o) o.classList.remove('ha-settle-drawer-overlay--open');
      if (d) d.setAttribute('aria-hidden', 'true');
    }

    function lsCloseHostDrawer() {
      var d = document.getElementById('lsHostDrawer');
      var o = document.getElementById('lsHostDrawerOverlay');
      if (d) d.classList.remove('ha-settle-drawer--open');
      if (o) o.classList.remove('ha-settle-drawer-overlay--open');
      if (d) d.setAttribute('aria-hidden', 'true');
    }

    // Expose open/close/render helpers to outer functions via closure scope
    window.lsOpenBatchDrawer = function (batchId, scrollToSessionId) {
      var batch = lsScheduleBatches.find(function (b) { return b.id === batchId; });
      if (!batch) return;
      lsBatchDrawerBatchId = batchId;
      var d = document.getElementById('lsBatchDrawer');
      var o = document.getElementById('lsBatchDrawerOverlay');
      if (d) d.classList.add('ha-settle-drawer--open');
      if (o) o.classList.add('ha-settle-drawer-overlay--open');
      if (d) d.setAttribute('aria-hidden', 'false');
      var title = document.getElementById('lsBatchDrawerTitle');
      var subtitle = document.getElementById('lsBatchDrawerSubtitle');
      if (title) title.textContent = (batch.id || '-');
      if (subtitle) subtitle.textContent = batch.periodStart + ' ~ ' + batch.periodEnd;
      lsRenderBatchDrawerContent(batchId, 'sessions');
      if (scrollToSessionId) {
        setTimeout(function () {
          var anchorId = 'lsDrawerSess_' + String(scrollToSessionId).replace(/[^a-zA-Z0-9_-]/g, '_');
          var el = document.getElementById(anchorId);
          if (el && typeof el.scrollIntoView === 'function') el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
      }
    };

    window.lsRenderBatchDrawerContent = function (batchId, drawerTab) {
      lsRenderBatchDrawerContent(batchId, drawerTab);
    };

    window.lsOpenHostDrawer = function (hostId, dayDateStr) {
      lsHostDrawerHostId = hostId;
      lsHostDrawerDayDate = dayDateStr;
      lsHostDrawerTab = 'availability';

      var d = document.getElementById('lsHostDrawer');
      var o = document.getElementById('lsHostDrawerOverlay');
      if (d) d.classList.add('ha-settle-drawer--open');
      if (o) o.classList.add('ha-settle-drawer-overlay--open');
      if (d) d.setAttribute('aria-hidden', 'false');

      var title = document.getElementById('lsHostDrawerTitle');
      var host = (lsHostAvailabilities || []).find(function (s) { return s.hostId === hostId; });
      if (title) title.textContent = (host && host.hostName) ? host.hostName : hostId;

      lsRenderHostDrawerContent();
    };

    function lsRenderBatchDrawerContent(batchId, drawerTab) {
      var batch = lsScheduleBatches.find(function (b) { return b.id === batchId; });
      if (!batch) return;
      var content = '';
      if (drawerTab === 'segments') {
        content = renderLiveScheduleSegmentsTable(batchId);
      } else {
        content = renderLiveScheduleSessionsTable(batchId);
      }
      var el = document.getElementById('lsBatchDrawerContent');
      if (el) el.innerHTML = content;

      // bind segment decision controls (delegated via root change)
      if (drawerTab === 'segments') {
        // delegated via root: find selects inside drawer by attribute
        var selects = document.querySelectorAll('.ls-seg-decision-select');
        selects.forEach(function (sel) {
          sel.addEventListener('change', function () {
            var segId = sel.getAttribute('data-seg-id');
            var val = sel.value;
            var reasonInput = document.getElementById('lsSegReason_' + segId);
            var reason = reasonInput ? reasonInput.value : '';
            (batch.sessions || []).forEach(function (s) {
              (s.segments || []).forEach(function (seg) {
                if (seg.id !== segId) return;
                seg.decisionStatus = val;
                if (val !== 'rejected') seg.decisionReason = '';
                else seg.decisionReason = (reason || '').trim();
              });
            });
            batch.updatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
            lsSaveAll();
            lsRecomputeBatchStatuses();

            // update targets acceptedHours from accepted segments (UI only)
            lsUpdateMerchantAcceptedHours(batch);

            // refresh batch list table if user is on it
            if (lsActiveTab === 'batches') document.getElementById('lsTabBody').innerHTML = renderLiveScheduleBatchesTab();
            // refresh segments table in drawer only
            lsRenderBatchDrawerContent(batchId, 'segments');
          });
        });
      }
    }

    function lsUpdateMerchantAcceptedHours(batch) {
      // acceptedHours per account from accepted segments duration.
      var acceptedByAcc = {};
      (batch.sessions || []).forEach(function (s) {
        (s.segments || []).forEach(function (seg) {
          if (seg.decisionStatus !== 'accepted') return;
          var durH = (lsStrToMs(seg.endAt) - lsStrToMs(seg.startAt)) / 3600000;
          acceptedByAcc[s.liveAccountUsername] = (acceptedByAcc[s.liveAccountUsername] || 0) + (durH || 0);
        });
      });
      lsMerchantTargets.forEach(function (t) {
        if (t.periodStart !== batch.periodStart) return;
        var acc = t.liveAccountUsername;
        var val = acceptedByAcc[acc] || 0;
        t.acceptedHours = Math.round(val * 100) / 100;
        if ((Number(t.plannedHours) || 0) > 0) {
          if (batch.status === 'waiting_sync') t.status = '可同步';
          else if (batch.status === 'waiting_host') t.status = '等待主播确认';
          else if (batch.status === 'synced') t.status = '已同步';
        }
        t.updatedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
      });
      lsSaveAll();
    }

    // Segment table renderer (needs access to global state)
    function renderLiveScheduleSegmentsTable(batchId) {
      var batch = lsScheduleBatches.find(function (b) { return b.id === batchId; });
      if (!batch) return '<div class="ha-rules-empty-state"><span class="ha-rules-empty-text">Not found.</span></div>';

      var segRows = [];
      (batch.sessions || []).forEach(function (s) {
        (s.segments || []).forEach(function (seg, idx) {
          var planned = (seg.startAtMs != null && seg.endAtMs != null)
            ? (lsMsToStrDisplay(seg.startAtMs) + '–' + lsMsToStrDisplay(seg.endAtMs))
            : (seg.startAt + '–' + seg.endAt);
          var decision = seg.decisionStatus || 'pending';
          var reason = seg.decisionReason || '';
          segRows.push(
            '<tr>' +
            '<td>' + seg.id + '</td>' +
            '<td>' + (seg.hostName || seg.hostId || '-') + '</td>' +
            '<td>' + planned + '</td>' +
            '<td>' +
            '<select class="select ls-seg-decision-select" data-seg-id="' + seg.id + '"' + (batch.status === 'synced' || !s.pushedToHost ? ' disabled' : '') + '>' +
            '<option value="pending"' + (decision === 'pending' ? ' selected' : '') + '>待确认</option>' +
            '<option value="accepted"' + (decision === 'accepted' ? ' selected' : '') + '>接受</option>' +
            '<option value="rejected"' + (decision === 'rejected' ? ' selected' : '') + '>拒绝</option>' +
            '</select>' +
            '</td>' +
            '<td>' +
            '<input class="input" style="max-width:240px" id="lsSegReason_' + seg.id + '" value="' + reason.replace(/"/g, '&quot;') + '"' + (decision === 'rejected' && batch.status !== 'synced' ? '' : ' disabled') + ' placeholder="拒绝原因（可选）" />' +
            '</td>' +
            '<td>' + (decision === 'accepted' ? '<span class="badge badge-success">accepted</span>' : decision === 'rejected' ? '<span class="badge badge-warning">rejected</span>' : '<span class="badge badge-secondary">pending</span>') + '</td>' +
            '</tr>'
          );
        });
      });

      return '<div class="ha-settle-table-wrap" style="padding:0"><table class="ha-settle-table"><thead><tr>' +
        '<th>Segment ID</th><th>Host</th><th>计划时间</th><th>决策</th><th>拒绝原因</th><th>状态</th>' +
        '</tr></thead><tbody>' + (segRows.length ? segRows.join('') : '<tr><td colspan="6" class="ha-settle-empty ha-rules-empty-state"><span class="ha-rules-empty-text">暂无 segments</span></td></tr>') + '</tbody></table></div>';
    }

  function renderLiveScheduleSessionsTable(batchId) {
      var batch = lsScheduleBatches.find(function (b) { return b.id === batchId; });
      if (!batch) return '<div class="ha-rules-empty-state"><span class="ha-rules-empty-text">Not found.</span></div>';

      var cards = [];
      (batch.sessions || []).forEach(function (s) {
        if (s.cancelled) return;
        var total = (s.segments || []).length;
        var accepted = (s.segments || []).filter(function (seg) { return seg.decisionStatus === 'accepted'; }).length;
        var rejected = (s.segments || []).filter(function (seg) { return seg.decisionStatus === 'rejected'; }).length;
        var status = rejected > 0 ? '被拒绝' : (accepted === total && total > 0 ? '已接受' : '待主播确认');
        var genHint = (s.conflictReason || s.availabilityReason || '');
        var mockBtns = '';
        if (s.syncStatus === 'synced') {
          if (s.livePhase === 'live') {
            mockBtns = '<button type="button" class="btn btn-ghost btn-sm ls-sess-mock-end" data-batch-id="' + batchId + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-stop-circle"></i> 模拟下播</button>';
          } else if (s.livePhase !== 'ended') {
            mockBtns = '<button type="button" class="btn btn-ghost btn-sm ls-sess-mock-live" data-batch-id="' + batchId + '" data-session-id="' + (s.id || '') + '"><i class="fas fa-broadcast-tower"></i> 模拟开播</button>';
          }
        }
        var jumpSeg = (batch.status !== 'synced'
          ? '<button type="button" class="btn btn-ghost btn-sm" data-jump-tab="segments" data-batch="' + batchId + '"><i class="fas fa-list"></i> Relay segments</button>'
          : '<span class="badge badge-success">synced</span>');
        var safeDomId = String(s.id || 'sess').replace(/[^a-zA-Z0-9_-]/g, '_');
        cards.push(
          '<div class="ls-sess-drawer-session" id="lsDrawerSess_' + safeDomId + '" data-session-id="' + String(s.id || '').replace(/"/g, '&quot;') + '">' +
          '<div class="ls-sess-drawer-session__head">' +
          '<div class="ls-sess-drawer-session__title">' +
          '<span class="ls-sess-drawer-session__sid">' + lsEscHtml(lsFormatScheduleIdDisplay(s.scheduleId)) + '</span>' +
          '<span class="ls-sess-drawer-session__name">' + lsEscHtml(s.eventName || '') + '</span>' +
          '<span class="ls-sess-drawer-session__meta">' + lsEscHtml(lsSessionPhaseLabel(s.livePhase)) + ' · ' + total + ' 段 · ' + lsEscHtml(status) + '</span>' +
          '</div>' +
          '<div class="ls-sess-drawer-session__actions">' + jumpSeg + (mockBtns ? ' ' + mockBtns : '') + '</div>' +
          '</div>' +
          (genHint ? '<p class="ls-sess-drawer-session__hint">生成提示：' + lsEscHtml(genHint) + '</p>' : '') +
          lsRenderSessionDetailReadonlyHtml(batch, s) +
          '</div>'
        );
      });

      return '<div class="ls-sess-drawer-sessions">' + (cards.length ? cards.join('') : '<div class="ha-rules-empty-state"><span class="ha-rules-empty-text">' + t('ls.readonly.empty_sessions') + '</span></div>') + '</div>';
    }
  }

  function renderLiveSettings() {
    return (
      '<div class="live-settings-page">' +
        '<div class="live-settings-header">' +
          '<h1 class="page-title">' + t('live_settings.title') + '</h1>' +
          '<p>' + t('live_settings.desc') + '</p>' +
        '</div>' +
        '<div class="live-settings-grid">' +
          '<a class="live-settings-card" href="#/live/settings/flash-sale">' +
            '<div class="live-settings-card__icon"><i class="fas fa-tags"></i></div>' +
            '<div class="live-settings-card__content">' +
              '<h2>' + t('live_settings.flash_title') + '</h2>' +
              '<p>' + t('live_settings.flash_desc') + '</p>' +
            '</div>' +
            '<div class="live-settings-card__arrow"><i class="fas fa-chevron-right"></i></div>' +
          '</a>' +
          '<div class="live-settings-card live-settings-card--disabled">' +
            '<div class="live-settings-card__icon"><i class="fas fa-comments"></i></div>' +
            '<div class="live-settings-card__content">' +
              '<h2>' + t('live_settings.comments_title') + '</h2>' +
              '<p>' + t('live_settings.comments_desc') + '</p>' +
              '<span class="live-settings-card__badge">' + t('live_settings.existing') + '</span>' +
            '</div>' +
            '<div class="live-settings-card__arrow"><i class="fas fa-chevron-right"></i></div>' +
          '</div>' +
          '<div class="live-settings-card live-settings-card--disabled">' +
            '<div class="live-settings-card__icon"><i class="fas fa-tv"></i></div>' +
            '<div class="live-settings-card__content">' +
              '<h2>' + t('live_settings.cast_title') + '</h2>' +
              '<p>' + t('live_settings.cast_desc') + '</p>' +
              '<span class="live-settings-card__badge">' + t('live_settings.existing') + '</span>' +
            '</div>' +
            '<div class="live-settings-card__arrow"><i class="fas fa-chevron-right"></i></div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderLiveSettingsFlashSale() {
    return (
      '<div class="live-settings-detail-page">' +
        '<div class="live-settings-detail-top">' +
          '<a class="live-settings-back" href="#/live/settings"><i class="fas fa-arrow-left"></i><span>' + t('live_settings.back') + '</span></a>' +
        '</div>' +
        '<div class="live-settings-embed-card">' +
          '<iframe class="live-settings-embed-frame" src="./pages/live/auto-setting-flash-sale.html?embed=1" title="' + t('live_settings.flash_title') + '"></iframe>' +
        '</div>' +
      '</div>'
    );
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
    else if (routeId === 'live_schedule') app.innerHTML = renderLiveSchedule();
    else if (routeId === 'live_settings') app.innerHTML = renderLiveSettings();
    else if (routeId === 'live_settings_flash_sale') app.innerHTML = renderLiveSettingsFlashSale();
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
    if (routeId === 'live_schedule') {
      bindLiveScheduleEvents();
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
      'Dashboard': 'nav.dashboard', 'Live Calendar': 'nav.live_calendar', 'Live Schedule': 'nav.live_schedule', 'Live Console': 'nav.live_console',
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
      if (getRole() === 'live' && path.indexOf('affiliate') === 0 && path !== 'affiliate/analytics') {
        window.location.hash = '#/';
        return;
      }
      var routeId = ROUTES[path];
      if (path === '') routeId = getRole() === 'affiliate' ? 'discover' : 'dashboard';
      if (!routeId) routeId = getRole() === 'affiliate' ? 'creators' : 'dashboard';
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
