---
layout: default
title: 品牌追踪 - 鼠标与键盘市场情报平台
permalink: /brands/
---

{% include data-loader.html %}

<div class="container py-5">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center mb-5">品牌追踪</h1>
            
            <div class="row g-4">
                {% for brand in brands_data.brands %}
                <div class="col-md-6 col-lg-4">
                    <div class="report-card">
                        <div class="report-header">
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <span class="rank-number" style="width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-right: 1rem; font-size: 1.125rem;">{{ brand.rank }}</span>
                                <h4 style="margin: 0; color: var(--text-primary);">{{ brand.name }}</h4>
                            </div>
                            <span class="report-date">{{ brands_data.lastUpdated | date: "%Y/%m/%d" }}</span>
                        </div>
                        
                        <div class="report-excerpt">
                            <p><strong>热度指数:</strong> {{ brand.heatIndex }} 
                            {% if brand.trendType == "up" %}
                            <span style="color: var(--success); font-weight: bold;">↑{{ brand.trend }}</span>
                            {% elsif brand.trendType == "down" %}
                            <span style="color: var(--danger); font-weight: bold;">↓{{ brand.trend }}</span>
                            {% endif %}
                            </p>
                            <p><strong>最新动态:</strong> {{ brand.recentNews }}</p>
                        </div>
                        
                        <div style="margin: 1rem 0;">
                            <h6 style="color: var(--text-primary); margin-bottom: 0.5rem;">相关产品</h6>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                                {% for product in brand.products %}
                                <span style="padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; background: rgba(99, 102, 241, 0.2); color: var(--primary);">{{ product }}</span>
                                {% endfor %}
                            </div>
                        </div>
                        
                        <div style="margin: 1rem 0;">
                            <h6 style="color: var(--text-primary); margin-bottom: 0.5rem;">关键词</h6>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                                {% for keyword in brand.keywords %}
                                <span style="padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; background: rgba(99, 102, 241, 0.2); color: var(--primary);">{{ keyword }}</span>
                                {% endfor %}
                            </div>
                        </div>
                        
                        <a href="{{ '/brands/' | append: brand.id | append: '/' | relative_url }}" class="read-more">查看详情 <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                {% endfor %}
            </div>
            
            <div class="mt-5 text-center">
                <p style="color: var(--text-secondary); font-size: 0.95rem;">
                    <em>数据更新: {{ brands_data.lastUpdated | date: "%Y-%m-%d %H:%M" }} | 来源: {{ brands_data.dataSource }}</em>
                </p>
            </div>
        </div>
    </div>
</div>