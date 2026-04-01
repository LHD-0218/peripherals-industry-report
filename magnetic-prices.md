---
layout: default
title: 中国磁轴键盘价格监测 - 专注中国市场磁轴键盘价格趋势
---

<script src="{{ '/magnetic_prices.js' | relative_url }}"></script>

<div class="container">
    <div class="report-section">
        <h2>中国磁轴键盘价格指数</h2>
        <div class="price-index">
            <div class="index-card">
                <h3>7天价格指数</h3>
                <div class="index-value" id="weekly-index">100.00</div>
                <div class="index-change" id="weekly-change">+0.00%</div>
            </div>
            <div class="index-card">
                <h3>30天价格指数</h3>
                <div class="index-value" id="monthly-index">100.00</div>
                <div class="index-change" id="monthly-change">+0.00%</div>
            </div>
        </div>
    </div>
    
    <div class="report-section">
        <h2>今日价格异动榜</h2>
        <table class="price-changes-table">
            <thead>
                <tr>
                    <th>品牌</th>
                    <th>型号</th>
                    <th>配列</th>
                    <th>当前价</th>
                    <th>昨日价</th>
                    <th>7日最低</th>
                    <th>变化幅度</th>
                    <th>渠道</th>
                    <th>状态</th>
                </tr>
            </thead>
            <tbody id="price-changes-body">
                <tr>
                    <td colspan="9" style="text-align: center;">数据加载中...</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="report-section">
        <h2>新品首发价追踪</h2>
        <ul class="new-launches-list" id="new-launches-list">
            <li>数据加载中...</li>
        </ul>
    </div>
    
    <div class="report-section">
        <h2>价格带热度分布</h2>
        <div class="tier-distribution" id="tier-distribution">
            <!-- 动态生成 -->
        </div>
    </div>
    
    <div class="update-info">
        <p id="update-time">最后更新时间: 正在获取...</p>
        <p id="data-sources">数据来源: 官方网站、京东、淘宝、科技媒体</p>
    </div>
</div>

<style>
.report-section {
    background: var(--bg-card);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--glow-primary);
}

.report-section h2 {
    color: var(--primary);
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    font-weight: 800;
}

.price-index {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.index-card {
    flex: 1;
    min-width: 200px;
    text-align: center;
    padding: 1.5rem;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 16px;
    border-left: 4px solid var(--primary);
    transition: transform 0.3s ease;
}

.index-card:hover {
    transform: translateY(-4px);
}

.index-value {
    font-size: 2rem;
    font-weight: 800;
    color: var(--text-primary);
    margin: 0.5rem 0;
    line-height: 1.2;
}

.index-change {
    color: var(--success);
    font-weight: 700;
    font-size: 1.1rem;
}

.index-change.negative {
    color: var(--danger);
}

.price-changes-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
}

.price-changes-table th,
.price-changes-table td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-secondary);
}

.price-changes-table th {
    background: rgba(99, 102, 241, 0.1);
    color: var(--primary);
    font-weight: 700;
    font-size: 1.1rem;
}

.status-down {
    color: var(--success);
    font-weight: 700;
}

.status-up {
    color: var(--danger);
    font-weight: 700;
}

.status-out-of-stock {
    color: var(--warning);
    font-weight: 700;
}

.status-launch {
    color: var(--accent);
    font-weight: 700;
}

.tier-distribution {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.tier-item {
    text-align: center;
    padding: 1.5rem;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 16px;
    transition: transform 0.3s ease;
}

.tier-item:hover {
    transform: translateY(-4px);
}

.tier-percentage {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--text-primary);
    margin-top: 0.8rem;
    line-height: 1.2;
}

.new-launches-list {
    list-style: none;
}

.new-launches-list li {
    padding: 1.2rem 0;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-secondary);
    line-height: 1.6;
}

.new-launches-list li:last-child {
    border-bottom: none;
}

.new-launches-list li strong {
    color: var(--primary);
    font-weight: 700;
}

.update-info {
    text-align: center;
    color: var(--text-secondary);
    font-style: italic;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
    font-size: 1rem;
}
</style>