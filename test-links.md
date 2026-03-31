---
layout: default
title: 链接测试页面
---

<div class="container py-5">
    <h1>链接测试</h1>
    
    <h2>日报链接测试</h2>
    {% assign daily_reports = site.posts | where: "categories", "daily" | reverse %}
    {% for post in daily_reports limit:3 %}
    <p>
        <strong>{{ post.title }}</strong><br>
        URL: {{ post.url }}<br>
        Relative URL: {{ post.url | relative_url }}<br>
        <a href="{{ post.url | relative_url }}">测试链接</a>
    </p>
    {% endfor %}
    
    <h2>周报链接测试</h2>
    {% assign weekly_reports = site.posts | where: "categories", "weekly" | reverse %}
    {% for post in weekly_reports limit:3 %}
    <p>
        <strong>{{ post.title }}</strong><br>
        URL: {{ post.url }}<br>
        Relative URL: {{ post.url | relative_url }}<br>
        <a href="{{ post.url | relative_url }}">测试链接</a>
    </p>
    {% endfor %}
</div>