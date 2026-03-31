---
layout: default
title: 价格趋势 - 鼠标与键盘市场情报平台
permalink: /trends/
---

{% include data-loader.html %}

<div class="container py-5">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center mb-5">价格趋势分析</h1>
            
            <div class="row g-5">
                {% for trend in trends_data.trends %}
                <div class="col-md-6">
                    <div class="report-card">
                        <h3 style="color: var(--text-primary); margin-bottom: 1.5rem;">{{ trend.title }}</h3>
                        
                        <div style="margin-bottom: 2rem;">
                            <h4 style="color: var(--text-primary); margin-bottom: 1rem;">当前数据</h4>
                            <p><strong>最新值:</strong> 
                                {% if trend.currentPrice %}
                                ¥{{ trend.currentPrice }}
                                {% elsif trend.currentPercentage %}
                                {{ trend.currentPercentage }}%
                                {% endif %}
                            </p>
                            <p><strong>变化:</strong> {{ trend.change }}</p>
                        </div>
                        
                        <div style="margin-bottom: 2rem;">
                            <h4 style="color: var(--text-primary); margin-bottom: 1rem;">历史数据</h4>
                            <div style="background: rgba(0, 0, 0, 0.2); border-radius: 12px; padding: 1.5rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                                    {% for point in trend.data %}
                                    <div style="text-align: center; font-size: 0.85rem; color: var(--text-secondary);">
                                        <div>{{ point.date | split: "-" | last }}</div>
                                        <div style="margin-top: 0.5rem; font-weight: bold; color: var(--text-primary);">
                                            {% if point.price %}
                                            ¥{{ point.price }}
                                            {% elsif point.percentage %}
                                            {{ point.percentage }}%
                                            {% endif %}
                                        </div>
                                    </div>
                                    {% endfor %}
                                </div>
                                <div style="height: 80px; display: flex; align-items: flex-end; gap: 1rem; padding: 0 1rem;">
                                    {% for point in trend.data %}
                                    <div style="flex: 1; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 4px; min-height: 20px;" 
                                         title="{% if point.price %}¥{{ point.price }}{% elsif point.percentage %}{{ point.percentage }}%{% endif %}">
                                    </div>
                                    {% endfor %}
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 1rem;">
                            <h4 style="color: var(--text-primary); margin-bottom: 1rem;">品类分析</h4>
                            <p><strong>类别:</strong> {{ trend.category }}</p>
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
            
            <div class="mt-5 text-center">
                <p style="color: var(--text-secondary); font-size: 0.95rem;">
                    <em>数据更新: {{ trends_data.lastUpdated | date: "%Y-%m-%d %H:%M" }} | 来源: {{ trends_data.dataSource }}</em>
                </p>
            </div>
        </div>
    </div>
</div>