---
layout: default
title: 鼠标与键盘市场情报平台 - 每日追踪新品、价格、品牌动向与渠道趋势
---

<!-- 第一屏：Hero + 情报总览 -->
<div class="hero-section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <h1 class="display-4 fw-bold">鼠标与键盘市场情报平台</h1>
                <p class="lead mb-4">每日追踪新品、价格、品牌动向与渠道趋势</p>
                <div class="d-flex flex-wrap gap-3">
                    <a href="/reports/daily/" class="btn btn-light btn-lg">查看今日日报</a>
                    <a href="#intelligence-overview" class="btn btn-outline-light btn-lg">进入情报总览</a>
                </div>
            </div>
            <div class="col-lg-6">
                <!-- 情报概览面板 -->
                <div class="card bg-white shadow-sm p-4">
                    <h3 class="mb-4">情报概览面板</h3>
                    <div class="row g-3">
                        <div class="col-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-bolt text-primary me-2"></i>
                                <div>
                                    <div class="fw-bold">127</div>
                                    <div class="text-muted small">今日抓取动态数</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-tag text-success me-2"></i>
                                <div>
                                    <div class="fw-bold">8</div>
                                    <div class="text-muted small">新品数</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-chart-line text-warning me-2"></i>
                                <div>
                                    <div class="fw-bold">23</div>
                                    <div class="text-muted small">价格异动数</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-fire text-danger me-2"></i>
                                <div>
                                    <div class="fw-bold">Keychron</div>
                                    <div class="text-muted small">热门品牌</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <h6 class="mb-2">过去7天热度趋势</h6>
                        <div class="bg-light rounded p-2 text-center">
                            <small>📈 趋势图占位符 - 实际部署时集成Chart.js</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 第二屏：4个核心KPI卡 -->
<div class="container py-5" id="intelligence-overview">
    <div class="row mb-5">
        <div class="col-12 text-center">
            <h2 class="mb-4">核心市场指标</h2>
            <p class="text-muted">实时数据驱动的市场洞察</p>
        </div>
    </div>
    <div class="row g-4">
        <div class="col-md-6 col-lg-3">
            <div class="stats-card text-center h-100">
                <i class="fas fa-keyboard fa-2x text-primary mb-3"></i>
                <h3>¥586</h3>
                <p class="text-muted mb-2">机械键盘均价</p>
                <span class="badge bg-success">较昨日 +2.1%</span>
            </div>
        </div>
        <div class="col-md-6 col-lg-3">
            <div class="stats-card text-center h-100">
                <i class="fas fa-mouse fa-2x text-primary mb-3"></i>
                <h3>63%</h3>
                <p class="text-muted mb-2">无线鼠标占比</p>
                <span class="badge bg-info">近30天新高</span>
            </div>
        </div>
        <div class="col-md-6 col-lg-3">
            <div class="stats-card text-center h-100">
                <i class="fas fa-tv fa-2x text-primary mb-3"></i>
                <h3>240Hz</h3>
                <p class="text-muted mb-2">高刷电竞显示器</p>
                <div class="small text-muted mt-2">热门关键词：<br><span class="badge bg-secondary">高刷</span> <span class="badge bg-secondary">低延迟</span></div>
            </div>
        </div>
        <div class="col-md-6 col-lg-3">
            <div class="stats-card text-center h-100">
                <i class="fas fa-chart-bar fa-2x text-primary mb-3"></i>
                <h3>15.3%</h3>
                <p class="text-muted mb-2">市场增长率</p>
                <span class="badge bg-success">季度趋势向上</span>
            </div>
        </div>
    </div>
</div>

<!-- 第三屏：报告模块 -->
<div class="container py-5 bg-light">
    <div class="row mb-5">
        <div class="col-12 text-center">
            <h2 class="mb-4">情报报告中心</h2>
            <p class="text-muted">多维度深度分析报告</p>
        </div>
    </div>
    
    <div class="row">
        <div class="col-12">
            <ul class="nav nav-tabs justify-content-center mb-4" id="reportTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="daily-tab" data-bs-toggle="tab" data-bs-target="#daily" type="button" role="tab">日报</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="weekly-tab" data-bs-toggle="tab" data-bs-target="#weekly" type="button" role="tab">周报</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role="tab">月报</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="summary-tab" data-bs-toggle="tab" data-bs-target="#summary" type="button" role="tab">总结</button>
                </li>
            </ul>
            
            <div class="tab-content" id="reportTabContent">
                <!-- 日报 Tab -->
                <div class="tab-pane fade show active" id="daily" role="tabpanel">
                    <div class="row g-4">
                        {% assign daily_reports = site.posts | where_exp: "post", "post.tags contains '日报'" | reverse %}
                        {% for post in daily_reports limit:3 %}
                        <div class="col-md-6 col-lg-4">
                            <div class="card report-card h-100">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-start mb-2">
                                        <span class="category-badge">日报</span>
                                        <small class="text-muted">{{ post.date | date: "%m/%d" }}</small>
                                    </div>
                                    <h5 class="card-title">{{ post.title | replace: "2026年", "" | replace: "外设行业日报", "" }}</h5>
                                    <p class="card-text">{{ post.excerpt | strip_html | truncate: 100 }}</p>
                                    <a href="{{ post.url | relative_url }}" class="btn btn-outline-primary btn-sm">查看详情</a>
                                </div>
                            </div>
                        </div>
                        {% endfor %}
                        {% if daily_reports.size > 3 %}
                        <div class="col-12 text-center">
                            <a href="/reports/daily/" class="btn btn-primary">查看更多日报</a>
                        </div>
                        {% endif %}
                    </div>
                </div>
                
                <!-- 周报 Tab -->
                <div class="tab-pane fade" id="weekly" role="tabpanel">
                    <div class="text-center py-5">
                        <i class="fas fa-calendar-week fa-3x text-muted mb-3"></i>
                        <h4>一周趋势分析</h4>
                        <p class="text-muted">重点品牌表现与市场趋势</p>
                        <div class="row justify-content-center mt-4">
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h6>热门品牌</h6>
                                        <ul class="list-unstyled">
                                            <li>Keychron (+12%)</li>
                                            <li>VGN (+8%)</li>
                                            <li>Ducky (+5%)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h6>趋势关键词</h6>
                                        <ul class="list-unstyled">
                                            <li>无线化</li>
                                            <li>客制化</li>
                                            <li>Mini-LED</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 月报 Tab -->
                <div class="tab-pane fade" id="monthly" role="tabpanel">
                    <div class="text-center py-5">
                        <i class="fas fa-calendar-alt fa-3x text-muted mb-3"></i>
                        <h4>月度市场格局</h4>
                        <p class="text-muted">品牌份额变化与价格区间分析</p>
                        <div class="row justify-content-center mt-4">
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h6>价格区间分布</h6>
                                        <div class="progress mb-2">
                                            <div class="progress-bar bg-success" style="width: 45%">300-600元 (45%)</div>
                                        </div>
                                        <div class="progress mb-2">
                                            <div class="progress-bar bg-info" style="width: 32%">600-1000元 (32%)</div>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" style="width: 18%">1000+元 (18%)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 总结 Tab -->
                <div class="tab-pane fade" id="summary" role="tabpanel">
                    <div class="text-center py-5">
                        <i class="fas fa-chart-line fa-3x text-muted mb-3"></i>
                        <h4>专题研究报告</h4>
                        <p class="text-muted">深度分析与战略洞察</p>
                        <div class="row g-4 mt-4">
                            <div class="col-md-6">
                                <div class="card report-card">
                                    <div class="card-body">
                                        <span class="category-badge" style="background: linear-gradient(135deg, #4361ee, #06d6a0);">Q1总结</span>
                                        <h5 class="card-title">2026年Q1外设市场回顾</h5>
                                        <p class="card-text">全面分析第一季度市场表现</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card report-card">
                                    <div class="card-body">
                                        <span class="category-badge" style="background: linear-gradient(135deg, #4361ee, #06d6a0);">专题研究</span>
                                        <h5 class="card-title">无线技术对市场的影响</h5>
                                        <p class="card-text">深度分析无线化趋势</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 第四屏：市场情报分栏 -->
<div class="container py-5">
    <div class="row mb-5">
        <div class="col-12 text-center">
            <h2 class="mb-4">细分市场动态</h2>
            <p class="text-muted">精准捕捉各品类市场脉搏</p>
        </div>
    </div>
    
    <div class="row g-4">
        <div class="col-md-6 col-lg-3">
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <i class="fas fa-mouse fa-2x text-primary me-3"></i>
                        <h5 class="mb-0">鼠标市场动态</h5>
                    </div>
                    <ul class="list-unstyled small">
                        <li>• 罗技G Pro X Superlight 2即将发布</li>
                        <li>• 国产电竞鼠标VGN销量增长45%</li>
                        <li>• 无线鼠标占比达63%新高</li>
                    </ul>
                    <a href="#" class="btn btn-outline-primary btn-sm mt-2">查看更多</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-6 col-lg-3">
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <i class="fas fa-keyboard fa-2x text-primary me-3"></i>
                        <h5 class="mb-0">键盘市场动态</h5>
                    </div>
                    <ul class="list-unstyled small">
                        <li>• Keychron Q5 Pro新品发布</li>
                        <li>• Cherry股价下跌3.2%</li>
                        <li>• 客制化需求持续火热</li>
                    </ul>
                    <a href="#" class="btn btn-outline-primary btn-sm mt-2">查看更多</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-6 col-lg-3">
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <i class="fas fa-chart-pie fa-2x text-primary me-3"></i>
                        <h5 class="mb-0">渠道价格监测</h5>
                    </div>
                    <ul class="list-unstyled small">
                        <li>• 机械键盘均价¥586 (+2.1%)</li>
                        <li>• 23款产品价格异动</li>
                        <li>• 促销活动监测中</li>
                    </ul>
                    <a href="#" class="btn btn-outline-primary btn-sm mt-2">查看更多</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-6 col-lg-3">
            <div class="card h-100">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <i class="fas fa-fire fa-2x text-primary me-3"></i>
                        <h5 class="mb-0">品牌热度变化</h5>
                    </div>
                    <ul class="list-unstyled small">
                        <li>• Keychron热度第一</li>
                        <li>• VGN国产崛起</li>
                        <li>• Ducky稳定增长</li>
                    </ul>
                    <a href="#" class="btn btn-outline-primary btn-sm mt-2">查看更多</a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 第五屏：信任与方法论 -->
<div class="container py-5 bg-light">
    <div class="row">
        <div class="col-12 text-center mb-5">
            <h2 class="mb-4">数据可信度与方法论</h2>
        </div>
        
        <div class="col-lg-8 mx-auto">
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5><i class="fas fa-database me-2"></i>数据来源</h5>
                            <p class="small">官方销售数据、财报、电商平台、社交媒体、行业展会</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5><i class="fas fa-clock me-2"></i>更新时间</h5>
                            <p class="small">日报：每日9:00更新<br>周报：每周一10:00更新<br>月报：每月1日12:00更新</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5><i class="fas fa-sync me-2"></i>抓取频率</h5>
                            <p class="small">实时监控：每小时<br>深度分析：每日<br>趋势预测：每周</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5><i class="fas fa-flask me-2"></i>分析方法</h5>
                            <p class="small">数据挖掘、趋势分析、竞品对比、消费者行为分析</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5><i class="fas fa-layer-group me-2"></i>覆盖范围</h5>
                            <p class="small mb-2"><strong>品牌：</strong>Cherry, Keychron, Ducky, Varmilo, VGN, Razer, Logitech, ASUS, MSI等50+品牌</p>
                            <p class="small"><strong>平台：</strong>京东、天猫、淘宝、拼多多、抖音电商、小红书、微博、B站等</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>