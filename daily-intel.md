---
layout: default
title: 键鼠市场情报日报 - 每日追踪新品、价格、品牌动向
---

<script src="{{ '/kb_intel_data_loader.js' | relative_url }}"></script>

<div class="container">
    <div class="report-section">
        <h2>今日行业动态</h2>
        <div class="findings-grid">
            <!-- 动态内容将通过脚本动态加载 -->
            <div class="finding-card">
                <h3>数据加载中...</h3>
                <p>请稍候，正在获取最新外设行业动态数据。</p>
            </div>
        </div>
    </div>
    
    <div class="report-section">
        <h2>营销建议</h2>
        <ul class="recommendations-list">
            <li>数据加载中，请稍候...</li>
        </ul>
    </div>
    
    <div class="update-info">
        <p>最后更新时间: 正在获取...</p>
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

.findings-grid {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

@media (min-width: 768px) {
    .findings-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.finding-card {
    border-left: 4px solid var(--primary);
    padding: 1.5rem;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 0 16px 16px 0;
    transition: transform 0.3s ease;
}

.finding-card:hover {
    transform: translateX(8px);
}

.finding-card h3 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 700;
}

.recommendations-list {
    list-style: none;
}

.recommendations-list li {
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-secondary);
    line-height: 1.6;
}

.recommendations-list li:last-child {
    border-bottom: none;
}

.recommendations-list li strong {
    color: var(--secondary);
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