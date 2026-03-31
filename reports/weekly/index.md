---
layout: default
title: 外设行业周报
permalink: /reports/weekly/
---

<div class="container py-5">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center mb-4">外设行业周报</h1>
            <p class="text-center text-muted mb-5">每周汇总的外设市场趋势、重要事件和深度分析</p>
            
            <div class="row g-4">
                {% assign weekly_reports = site.posts | where: "categories", "周报" %}
                {% for post in weekly_reports reversed %}
                <div class="col-md-6 col-lg-4">
                    <div class="card report-card h-100">
                        <div class="card-body">
                            <span class="category-badge mb-2" style="background: linear-gradient(135deg, #4361ee, #f72585);">周报</span>
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text text-muted small">{{ post.date | date: "%Y年%m月%d日" }}</p>
                            <p class="card-text">{{ post.excerpt | truncate: 100 }}</p>
                            <a href="{{ post.url | relative_url }}" class="btn btn-outline-primary btn-sm">阅读详情</a>
                        </div>
                    </div>
                </div>
                {% endfor %}
                
                {% unless weekly_reports.size > 0 %}
                <div class="col-12 text-center">
                    <div class="py-5">
                        <i class="fas fa-calendar-week fa-3x text-muted mb-3"></i>
                        <h4>暂无周报内容</h4>
                        <p class="text-muted">周报内容将在此处展示，敬请期待！</p>
                    </div>
                </div>
                {% endunless %}
            </div>
        </div>
    </div>
</div>