///////////////////////
//                   //
// Genuine constants //
//                   //
///////////////////////

// Just used below
function map(list) {
    var res = {};
    for (i in list) {
        res[list[i]] = '';
    }
    return res;
}

// Extension arguments that we know about and present specially in the UI.
var KNOWN_ARGS = {'alternate-exchange':        {'short': 'AE',  'type': 'string'},
                  'x-message-ttl':             {'short': 'TTL', 'type': 'int'},
                  'x-expires':                 {'short': 'Exp', 'type': 'int'},
                  'x-max-length':              {'short': 'Lim', 'type': 'int'},
                  'x-max-length-bytes':        {'short': 'Lim B', 'type': 'int'},
                  'x-overflow':                {'short': 'Ovfl', 'type': 'string'},
                  'x-dead-letter-exchange':    {'short': 'DLX', 'type': 'string'},
                  'x-dead-letter-routing-key': {'short': 'DLK', 'type': 'string'},
                  'x-queue-master-locator':    {'short': 'ML', 'type': 'string'},
                  'x-max-priority':            {'short': 'Pri', 'type': 'int'}};

// Things that are like arguments that we format the same way in listings.
var IMPLICIT_ARGS = {'durable':         {'short': 'D',    'type': 'boolean'},
                     'auto-delete':     {'short': 'AD',   'type': 'boolean'},
                     'internal':        {'short': 'I',    'type': 'boolean'},
                     'exclusive':       {'short': 'Excl', 'type': 'boolean'},
                     'messages delayed':{'short': 'DM',   'type': 'int'}};

// Both the above
var ALL_ARGS = {};
for (var k in IMPLICIT_ARGS) ALL_ARGS[k] = IMPLICIT_ARGS[k];
for (var k in KNOWN_ARGS)    ALL_ARGS[k] = KNOWN_ARGS[k];

var NAVIGATION = {'概览':    ['#/',            "management"],
                  '连接': ['#/connections', "management"],
                  '频道':    ['#/channels',    "management"],
                  '交换机':   ['#/exchanges',   "management"],
                  '队列':      ['#/queues',      "management"],
                  '管理':
                    [{'用户':         ['#/users',              "administrator"],
                      '虚拟主机': ['#/vhosts',             "administrator"],
                      '策略':      ['#/policies',           "management"],
                      '限制':        ['#/limits',   "management"],
                      '集群':       ['#/cluster-name',       "administrator"]},
                     "管理员"]
                 };

var CHART_PERIODS = {'60|5':       '过去一分钟',
                     '600|5':      '过去十分钟',
                     '3600|60':    '过去一小时',
                     '28800|600':  '过去八小时',
                     '86400|1800': '过去一天'};

var COLUMNS =
    {'exchanges' :
     {'概览': [['type',                 'Type',                   true],
                   ['features',             '特征 (策略)', true],
                   ['features_no_policy',   '特征 (无策略)',   false],
                   ['policy',               '策略',                 false]],
      '消息速率': [['rate-in',         '入速率',                true],
                        ['rate-out',        '出速率',               true]]},
     'queues' :
     {'概览': [['features',             '特征 (策略)', true],
                   ['features_no_policy',   '特征 (无策略)',   false],
                   ['policy',               '策略',                 false],
                   ['consumers',            '消费者总数',         false],
                   ['consumer_utilisation', '消费者利用',   false],
                   ['state',                '状态',                  true]],
      '消息': [['msgs-ready',      '就绪',          true],
                   ['msgs-unacked',    '等待', true],
                   ['msgs-ram',        '内存中',      false],
                   ['msgs-persistent', '持久化',     false],
                   ['msgs-total',      '总数',          true]],
      '消息字节': [['msg-bytes-ready',      '就绪',          false],
                        ['msg-bytes-unacked',    '等待', false],
                        ['msg-bytes-ram',        '内存中',      false],
                        ['msg-bytes-persistent', '持久化',     false],
                        ['msg-bytes-total',      '总数',          false]],
      '消息速率': [['rate-incoming',  '进入',      true],
                        ['rate-deliver',   '传输 / 获取', true],
                        ['rate-redeliver', '重发',   false],
                        ['rate-ack',       '命令正确应答',           true]]},
     'channels' :
     {'概览': [['user',  '用户名', true],
                   ['mode',  '模式',      true],
                   ['state', '状态',     true]],
      '细节': [['msgs-unconfirmed', '未验证的', true],
                  ['prefetch',         '预取',    true],
                  ['msgs-unacked',     '未应答',     true]],
      '事务': [['msgs-uncommitted', '未提交信息', false],
                       ['acks-uncommitted', '未提交应答', false]],
      '消息速率': [['rate-publish',   '发布',            true],
                        ['rate-confirm',   '验证',            true],
                        ['rate-return',    '强制退回', false],
                        ['rate-deliver',   '传输 / 获取',      true],
                        ['rate-redeliver', '重发',        false],
                        ['rate-ack',       '命令应答',                true]]},
     'connections':
     {'概览': [['user',   '用户名', true],
                   ['state',  '状态',     true]],
      '信息': [['ssl',            'SSL / TLS',      true],
                  ['ssl_info',       'SSL 信息',    false],
                  ['protocol',       '协议',       true],
                  ['channels',       '频道',       true],
                  ['channel_max',    '最大通道',    false],
                  ['frame_max',      '帧最大值',      false],
                  ['auth_mechanism', 'Auth机制', false],
                  ['client',         '客户端',         false]],
      '网络': [['from_client',  '来源客户端',  true],
                  ['to_client',    '目的客户端',    true],
                  ['heartbeat',    '心跳检测',    false],
                  ['connected_at', '连接目标', false]]},

     'vhosts':
     {'概览': [['cluster-state',   '集群状态',  false]],
      '信息': [['msgs-ready',      '就绪',          true],
                   ['msgs-unacked',    '未确认', true],
                   ['msgs-total',      '总数',          true]],
      '网络': [['from_client',  '来源客户端',  true],
                  ['to_client',    '目的客户端',    true]],
      '消息速率': [['rate-publish', '发布',       true],
                        ['rate-deliver', '传输 / 获取', true]]},
     'overview':
     {'Statistics': [['file_descriptors',   '文件描述',   true],
                     ['socket_descriptors', '套接字描述符', true],
                     ['erlang_processes',   '进程',   true],
                     ['memory',             '内存',             true],
                     ['disk_space',         '磁盘空间',         true]],
      'General': [['uptime',    '正常运行时间',       true],
                  ['info',      '信息',         true],
                  ['reset_stats',     '重置统计',        true]]}};

// All help ? popups
var HELP = {
    'exchange-auto-delete':
      '如果是，则在至少一个队列或交换机绑定到该交换机之后，Exchange将自行删除，然后所有队列或交换机都未绑定。',

    'exchange-internal':
      '如果是，客户不能直接向该交换机发布，它只能与交换机一起使用绑定来进行消息交换。',

    'exchange-alternate':
      '如果交换机消息无法发送，则将它们发送到这里指定的备用交换机。<br/>',

    'queue-message-ttl':
    '发布到队列中的消息可以在被丢弃之前生存多长时间（毫秒）。<br/>',

    'queue-expires':
      '在自动删除队列（毫秒）之前，该队列不能被使用多长时间。 <br/>',

    'queue-max-length':
      '队列中能包含多少就绪消息在它开始从头部分发消息之前。<br/>',

    'queue-max-length-bytes':
      '队列中能包含就绪消息大小的总合在它开始从头部分发消息之前。<br/>',

    'queue-auto-delete':
      '如果是，则在至少一个用户连接后，队列将自行删除，然后所有用户已断开连接。',

    'queue-dead-letter-exchange':
      '一个可选名称的交换机的消息将重新发布，如果它们拒绝或终止。 <br/>',

    'queue-dead-letter-routing-key':
      '当出现服务总线死信队列时可选的替换路由密钥，如果未设置，就使用消息的原始路由密钥。<br/>',

    'queue-max-priority':
      '持队列的最大优先级数量；如果未设置，队列将不支持消息优先级。<br/>',

    'queue-lazy':
      '将队列设置为懒惰模式，保留尽可能多的消息在磁盘上的以减少内存的使用；如果没有设置，队列将保持内存中的缓存以尽可能快地传递消息。<br/>',

    'queue-overflow':
      '设置队列溢出行为，当一个消息队列达到最大长度时这个行为被触发，有效值为<code>丢掉头部< /code>或<code>拒绝发布</code>',

    'queue-master-locator':
       '设置队列为主定位模式，定义规则通过主要的队列当在节点簇上声明时<br/>',

    'queue-messages':
      '<p>消息统计。</p><p>注意，“内存”和“持久”不是互斥的；持久的消息可以在内存中，也可以在磁盘上，如果内存紧，可以将临时消息分出。非持久队列将认为所有消息都是暂时的。</p>',

    'queue-message-body-bytes':
      '<p>对该队列中的消息体的大小的总和。这只包括消息体；它不包括消息属性（包括标题）或元数据通过队列使用。</p > <br>注意“记忆”和“持久性”并不是相互排斥的；持续的信息可以在内存以及光盘，和短暂的消息可以调出如果存储器感觉很紧。非持久消息队列将考虑都是短暂的。</p > <p>如果消息路由到发布的多个队列，它的身体将只存储一次（内存和硬盘）和共享队列。这里显示的值不考虑这个影响。</p>',

    'queue-process-memory':
      '此队列进程使用的总内存。这不包括内存消息主体（可以在队列之间共享，并且将出现在全局的二进制文件内存中），但包含其他所有内容。',

    'queue-consumer-utilisation':
      '队列能够立即发送信息给消费者的部分的时间。如果这个数字小于100%你可以传递信息快。如果： \
        <ul> \
          <li>有更多的消费者或</li> \
          <li> 消费者更快或 </li> \
          <li>消费者有较高的预取数</li> \
        </ul>',

    'internal-users-only':
      '这里只显示了内部数据库中的用户。其他用户将不会出现。 ',

    'export-definitions':
    '定义包括用户、虚拟主机、权限、参数、交换、队列和绑定，它们不包括队列内容或群集名称，将不导出排他性队列。',

    'export-definitions-vhost':
    '为单个虚拟主机导出的定义包括交换、队列、绑定和策略。 ',

    'import-definitions':
      '导入的定义将与当前定义合并，如果在导入过程中发生错误，则所做的任何更改都不会被回滚。',

    'import-definitions-vhost':
    '一个单一的虚拟主机，只有交换机、队列、绑定和政策都是的定义的。',

    'exchange-rates-incoming':
      'The incoming rate is the rate at which messages are published directly to this exchange.',

    'exchange-rates-outgoing':
      '传入速率是消息直接发布到该交换机的速率。',

    'channel-mode':
      '渠道保障模式。可以是下列之一，或者两者都不 :<br/> \
      <dl> \
        <dt><abbr title="确认">C</abbr></dt> \
        <dd>频道将发送流式发布确认。</dd> \
        <dt><abbr title="事务型">T</abbr></dt> \
        <dd>频道是事务型的。</dd> \
      </dl>',

    'channel-prefetch':
      '信道预取计数。\
       <p> \
         每个通道有两个预取数：一是每个消费者的计数，这\
          将限制每个新的消费者在渠道上的创建，和全局\
          计数，在这个频道上的所有消费者之间共享。\
       </p> \
       <p> \
       如果限制被设置，此列显示一个、另一个或两个限制。\
       </p>',

    'file-descriptors':
      '<p>文件描述符计数和限制，如操作系统的报告。计数包括网络套接字和文件句柄。</p >\
      <P>优化磁盘访问,使用尽可能多的自由描述符\
      可用，所以计数可以安全地接近极限。\
      但是，如果大多数文件描述符都由套接字使用，则\
      持久的性能将受到负面影响。</P >',

    'socket-descriptors':
      '网络套接字数量和当受到限制将停止接受新的网络连接',

    'memory-alarm':
      '<P>此节点的内存报警了。它会阻止传入的网络流量，直到内存使用量低于水位. </p>\
      <p>请注意，在这种情况下，苍白的线表示高水位在关系到多少一共用了多少内存。</p> ',

    'disk-free-alarm':
      '这个节点的磁盘空闲空间告警已经关闭。它会阻止进入网络流量，直到自由空间的数量超过极限。 ',

    'message-get-requeue':
      '<p>点击“获取消息（S）”将从队列消费消息，如果重新设置的消息将被放回的地方排队，\
      但是“重发”将被设置在消息上。</p><p>如果队列未设置消息将从队列中删除。</p> \
      <p>此外，消息有效载荷将被截断为50000字节。</p >',

    'message-publish-headers':
      '标题可以有任何名字。这里只能设置长字符串标题。 ',

    'message-publish-properties':
      '<p>您可以在此处设置其他消息属性（传递模式和标题）。</p>\
      <p>无效的属性将被忽略。有效属性为：</p>\
      <ul>\
      <li>内容类型</li>\
      <li>内容编码</li>\
      <li>优先级</li>\
      <li>相关关系</li>\
      <li>回复对象</li>\
      <li>到期</li>\
      <li>消息标识</li>\
      <li>时间戳</li>\
      <li>类型</li>\
      <li>用户标识</li>\
      <li>应用标识</li>\
      <li>集群标识</li>\
      </ul>',

    'string-base64':
    '<p>消息有效载荷可以包含任何二进制内容。他们可以因此很难在浏览器中显示。这里的选项具有以下含义：</p> \
     <dl> \
       <dt>自动</dt> \
       <dd>如果消息有效载荷可以被解释为UTF-8中的字符串编码，这样做。否则返回编码为Base64的有效载荷。</dd> \
       <dt>base64</dt> \
       <dd>返回编码为base64的载荷条件。</dd> \
     </dl>',

    'user-tags':
      '目前，由管理插件支持应用于用户的以逗号分隔的列表标签: \
      <dl> \
        <dt>管理</dt> \
        <dd> \
          用户可以访问管理插件 \
        </dd> \
        <dt>决策</dt> \
        <dd> \
        用户可以访问管理插件和管理策略，和它们可以访问的虚拟主机的参数。 \
        </dd> \
        <dt>监控</dt> \
        <dd> 用户可以访问管理插件，看到所有的连接和通道以及节点相关信息。</dd> \
        <dt>管理员</dt> \
        <dd> 用户可以做一切监测可以做，管理用户，虚拟主机和权限，关闭其他用户的连接，并管理所有虚拟主机策略参数。\
        </dd> \
      </dl> \
      <p> \
      注意，您可以在这里设置任何标记；以上四个标签的链接是为了方便。\
      </p>',

    'queued-messages':
      '<dl>                          \
        <dt>就绪</dt>\
        <dd>可以传递的消息数。</dd>\
        <dt>等待</dt>\
        <dd>服务器等待确认的消息数。</dd>\
        <dt>全部</dt>\
        <dd>就绪消息数和等待消息数的总和。</dd>\
      </dl>',

    'message-rates':
    '只有一些活动发生的地方速率会显示。\
      <dl>\
        <dt>发布</dt>\
        <dd>消息进入服务器的速率。</dd>\
        <dt>发布者认证</dt>\
        <dd>服务器确认发布的速率。</dd>\
        <dt>传输 (手动响应)</dt>\
        <dd>消息传递给消费者，使用手动确认的速率</dd>\
        <dt>传输 (自动响应)</dt>\
        <dd>将消息传递给使用自动确认的消费者的速率。 </dd>\
        <dt>消费者自动响应</dt>\
        <dd>消费者正在接受消息的速率。</dd>\
        <dt>重发</dt>\
        <dd>标识‘重发’标签的消息的传输速率。注意这些消息也能被计入以上传输速率之一</dd>\
        <dt>获取 (手动响应)</dt>\
        <dd>消息需要响应</dd>\
        <dt>获取 (自动响应)</dt>\
        <dd>基本获取消息并且有消息的回复不需要确认的消息传输的速率。</dd>\
        <dt>退回</dt>\
        <dd>基本退回消息的速率，将不可路由的消息发送给发布者，并设置“强制”的标签</dd>\
        <dt>读硬盘</dt>\
        <dd>队列从磁盘读取消息的速率。/dd>\
        <dt>写入磁盘</dt>\
        <dd>队列将消息写入硬盘的速率。</dd>\
      </dl>\
      <p>注意，最后两项是在队列中而不是频道因此，它们可能与其他的有点不同步统计量。\
      </p>',

    'disk-monitoring-no-watermark' : '没有磁盘空间的低水位设置。它不会采取任何行动来避免用尽磁盘空间。',

    'resource-counts' : '显示当前用户可以访问的所有虚拟主机的对象总数。',

    'memory-use' : '<p>注意，内存信息的显示更新只在被要求的时候-他们每隔几秒钟计算一个繁忙的服务器花费太昂贵。</p>',

    'memory-calculation-strategy-breakdown' : '<p>设置 <code>虚拟内存计算策略</code> 定义以下内存值中的哪一个用来检查内存使用是否达到界限或需要对磁盘进行分页。</p>',

    'memory-calculation-strategy' : '<p> 这个值可以用不同的策略来计算 <code>虚拟内存计算策略</code> 配置设置。</p>',

    'binary-use' : '<p>二进制记账是不精确的；二进制文件在进程之间共享（因此，相同的二进制数可以被计算在一个以上的部分中），并且虚拟主机不允许我们跟踪与进程不相关的二进制文件（因此，一些二进制使用可能根本不出现）。</p>',

    'policy-ha-mode' : '<code>全部</code>(镜像到集群中的所有节点 ), <code>准确的</code> (镜像到一些节点) 或 <code>节点</code> (镜像到节点的显式列表).如果你选择后两个的其中之一, 你必须设置 <code>参数</code>.',

    'policy-ha-params' : '如果 <code>模式</code> 是<code>全部</code>, 一个数字\
    如何 <code>模式</code> 是 <code>准确的</code>, 或 一个字符串列表\
    如果 <code>模式</code> 是<code>节点</code>.',

    'policy-ha-sync-mode' : '<code>手动的</code> 或 <code>自动的</code>其中之一。',

    'policy-ha-promote-on-shutdown' : '<code>异步的</code> 或<code>一直</code>其中之一。',

    'policy-ha-promote-on-failure' : '<code>异步的</code> 或<code>一直</code>其中之一。',

    'policy-federation-upstream-set' :
    '一个字符串; 只有启用了插件才可用。选择一系列上传流的名称和插件一起使用，或“全部”来使用全部的上传流。',

    'policy-federation-upstream' :
    '一个字符串; 只有启用了插件才可用。选择一系列上传流的名称和插件一起使用，或“全部”来使用全部的上传流。',

    'handle-exe' : '为了监测在操作系统上使用文件描述符的数量，它需要一个工具解决。',

    'filter-regex' :
    '是否启用正则表达式匹配,两个字符串文字\
    正则表达式以不区分大小写的方式进行匹配。<br/></br/> ',

    'plugins' :
    '注意，这里只显示了显式启用和运行的插件。',

    'io-operations':
    '输入输出操作速率。只有消息执行的操作在这里显示（例如元数据更改或写入日志文件没有显示）。 \
      <dl>\
        <dt>读取</dt>\
        <dd>从磁盘读取数据的速率</dd>\
        <dt>写入</dt>\
        <dd>写入磁盘的速率</dd>\
        <dt>搜索</dt>\
        <dd>在读或写磁盘时切换位置的速率</dd>\
        <dt>同步</dt>\
        <dd>调用同步方法的速率，以便数据刷新到磁盘</dd>\
        <dt>重新开放</dt>\
        <dd>回收文件句柄的速率，以便支持更多的文件句柄，如果这个操作频繁发生，你能提升可用文件句柄的数量来提高性能。</dd>\
      </dl>',

    'mnesia-transactions':
    '在该节点上发起事务的速率（此节点也将参与在其他节点上发起的事务）。\
      <dl>\
        <dt>内存</dt>\
        <dd>只发生内存事务的速率（例如瞬态队列的创建或删除）</dd>\
        <dt>磁盘</dt>\
        <dd>磁盘（和RAM）事务发生的速率（例如创建/删除持久队列）。</dd>\
      </dl>',

    'persister-operations-msg':
    '在每个消息的持久化操作发生在这个节点速率 。\
      <dl>\
        <dt>日志</dt>\
        <dd>消息信息（发布、交付和确认）被写入队列索引日志的速率</dd>\
        <dt>存储读取 </dt>\
        <dd>消息从消息存储中读取的速率</dd>\
        <dt>存储写入</dt>\
        <dd>消息从消息存储中写入的速率</dd>\
      </dl>',

    'persister-operations-bulk':
    '在这个节点上发生整个文件持久化操作的速率。\
      <dl>\
        <dt>日志读取</dt>\
        <dd>队列索引段文件的读取速率。</dd>\
        <dt>日志写入</dt>\
        <dd>队列索引段文件的写入速率。 </dd>\
      </dl>',

    'gc-operations':
    '在该节点上进行垃圾收集操作的速率。',

    'gc-bytes':
    '此节点上的垃圾回收器回收内存的速率。',

    'context-switches-operations':
    '在运行时上下文切换发生在这个节点速率。',

    'process-reductions':
    '在此过程中发生还原的速率。'
};

///////////////////////////////////////////////////////////////////////////
//                                                                       //
// Mostly constant, typically get set once at startup (or rarely anyway) //
//                                                                       //
///////////////////////////////////////////////////////////////////////////

// All these are to do with hiding UI elements if
var rates_mode;                  // ...there are no fine stats
var user_administrator;          // ...user is not an admin
var is_user_policymaker;         // ...user is not a policymaker
var user_monitor;                // ...user cannot monitor
var nodes_interesting;           // ...we are not in a cluster
var vhosts_interesting;          // ...there is only one vhost
var rabbit_versions_interesting; // ...all cluster nodes run the same version

// Extensions write to this, the dispatcher maker reads it
var dispatcher_modules = [];

// We need to know when all extension script files have loaded
var extension_count;

// The dispatcher needs access to the Sammy app
var app;

// Used for the new exchange form, and to display broken exchange types
var exchange_types;

// Used for access control
var user_tags;
var user;

// Set up the above vars
function setup_global_vars() {
    var overview = JSON.parse(sync_get('/overview'));
    rates_mode = overview.rates_mode;
    user_tags = expand_user_tags(user.tags.split(","));
    user_administrator = jQuery.inArray("administrator", user_tags) != -1;
    is_user_policymaker = jQuery.inArray("policymaker", user_tags) != -1;
    user_monitor = jQuery.inArray("monitoring", user_tags) != -1;
    exchange_types = overview.exchange_types.map(function(xt) { return xt.name; });

    cluster_name = fmt_escape_html(overview.cluster_name);
    $('#logout').before(
      '<li>集群 ' + (user_administrator ?  '<a href="#/cluster-name">' + cluster_name + '</a>' : cluster_name) + '</li>'
    );

    user_name = fmt_escape_html(user.name);
    $('#header #logout').prepend(
      '用户 ' + (user_administrator ?  '<a href="#/users/' + user_name + '">' + user_name + '</a>' : user_name)
    );

    $('#versions').html(
      '<abbr title="Available exchange types: ' + exchange_types.join(", ") + '">' + fmt_escape_html(overview.rabbitmq_version) + '</abbr>' +
      '<abbr title="' + fmt_escape_html(overview.erlang_full_version) + '">Erlang ' + fmt_escape_html(overview.erlang_version) + '</abbr>'
    );
    nodes_interesting = false;
    rabbit_versions_interesting = false;
    if (user_monitor) {
        var nodes = JSON.parse(sync_get('/nodes'));
        if (nodes.length > 1) {
            nodes_interesting = true;
            var v = '';
            for (var i = 0; i < nodes.length; i++) {
                var v1 = fmt_rabbit_version(nodes[i].applications);
                if (v1 != 'unknown') {
                    if (v != '' && v != v1) rabbit_versions_interesting = true;
                    v = v1;
                }
            }
        }
    }
    vhosts_interesting = JSON.parse(sync_get('/vhosts')).length > 1;
    current_vhost = get_pref('vhost');
    exchange_types = overview.exchange_types;
}

function expand_user_tags(tags) {
    var new_tags = [];
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        new_tags.push(tag);
        switch (tag) { // Note deliberate fall-through
            case "administrator": new_tags.push("monitoring");
                                  new_tags.push("policymaker");
            case "monitoring":    new_tags.push("management");
                                  break;
            case "policymaker":   new_tags.push("management");
            default:              break;
        }
    }
    return new_tags;
}

////////////////////////////////////////////////////
//                                                //
// Change frequently (typically every "new page") //
//                                                //
////////////////////////////////////////////////////

// Which top level template we're showing
var current_template;

// Which JSON requests do we need to populate it
var current_reqs;

// And which of those have yet to return (so we can cancel them when
// changing current_template).
var outstanding_reqs = [];

// Which tab is highlighted
var current_highlight;

// Which vhost are we looking at
var current_vhost = '';

// What is our current sort order
var current_sort;
var current_sort_reverse = false;

var current_filter = '';
var current_filter_regex_on = false;

var current_filter_regex;
var current_truncate;

// The timer object for auto-updates, and how often it goes off
var timer;
var timer_interval;

// When did we last connect successfully (for the "could not connect" error)
var last_successful_connect;

// Every 200 updates without user interaction we do a full refresh, to
// work around memory leaks in browser DOM implementations.
// TODO: maybe we don't need this any more?
var update_counter = 0;

// Holds chart data in between writing the div in an ejs and rendering
// the chart.
var chart_data = {};

// whenever a UI requests a page that doesn't exist
// because things were deleted between refreshes
var last_page_out_of_range_error = 0;
