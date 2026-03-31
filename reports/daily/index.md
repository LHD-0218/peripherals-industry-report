---
layout: default
title: 外设行业日报
permalink: /reports/daily/
---

<div class="container py-5">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center mb-4">外设行业日报</h1>
            <p class="text-center text-muted mb-5">每日更新的外设市场动态、产品发布和行业新闻</p>
            
            <div class="row g-4">
                {% assign daily_reports = site.posts | where_exp: "post", "post.tags contains '日报'" %}
                {% for post in daily_reports reversed %}
                <div class="col-md-6 col-lg-4">
                    <div class="card report-card h-100">
                        <div class="card-body">
                            <span class="category-badge mb-2">日报</span>
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text text-muted small">{{ post.date | date: "%Y年%m月%d日" }}</p>
                            <p class="card-text">{{ post.excerpt | truncate: 100 }}</p>
                            <a href="{{ post.url }}" class="btn btn-outline-primary btn-sm">阅读详情</a>
                        </div>
                    </div>
                </div>
                {% endfor %}
                
                {% comment %} 如果没有日报，显示占位内容 {% endcomment %}
                {% unless daily_reports.size > 0 %}
                <div class="col-12 text-center">
                    <div class="py-5">
                        <i class="fas fa-file-alt fa-3x text-muted mb-3"></i>
                        <h4>暂无日报内容</h4>
                        <p class="text-muted">日报内容将在此处展示，敬请期待！</p>
                    </div>
                </div>
                {% endunless %}
            </div>
        </div>
    </div>
</div>