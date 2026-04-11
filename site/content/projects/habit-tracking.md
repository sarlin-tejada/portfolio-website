---
title: 'From Routine to Insight: Building a Habit Tracking Data Pipeline'
description: 'A personal analytics pipeline for tracking habits and understanding how time is spent each week, with a focus on identifying patterns in consistency, time allocation, and recurring blockers.'
tags: ['python', 'mongodb', 'mysql', 'google calendar api', 'etl']
order: 1
image: '/projects/charting-goals-and-progress.jpg'
---

## Project Overview
I've spent countless hours each week reviewing my calendar to understand where my time went and how to plan my week. 

To solve this, I built a habit tracking pipeline that **transforms calendar events into structured data for analysis**. This creates a foundation for tracking completion rates, time allocation, and recurring blockers over time.

The system extracts data from my Google Calendar, stages it in MongoDB, transforms it into structured `Activity` records, and loads it into MySQL for analysis and visualization. 

## The Problem
Weekly reflection required manually reviewing my calendar to understand how time was spent. This process involved scanning each day, comparing planned versus completed activities, and identifying blockers or gaps in focus. 

Each review was guided by questions like:
- **What went well?**
- **What didn’t go well?**
- **What blocked progress?**
- **What should I focus on next?**

It was time-consuming and difficult to maintain consistently. If I missed a week, the backlog quickly built up, making it harder to reconstruct what happened and identify patterns over time.

I needed a more reliable and scalable way to track habits, measure consistency, and generate insights without relying on manual review.

## The System
To automate this process, I designed a data pipeline that transforms raw calendar events into structured data for analysis.
- **Extract:** Event data is pulled from the Google Calendar API, capturing activity across tracked time blocks.
- **Stage (MongoDB):** Raw calendar events are stored in MongoDB, allowing for flexible ingestion and initial data validation before applying transformation logic.
- **Transform (Python):** The data is cleaned and converted into structured `Activity` records for analysis.
    - Each `Activity` is structured with `category`, `summary`, `start`, `end`, and `status` fields, which represent a single unit of tracked behavior.
- **Load & Analyze (MySQL + Tableau):** The transformed data is loaded into MySQL, where it is structured for querying, aggregation, and visualization in Tableau.

This pipeline establishes a foundation for analyzing behavior over time, including tracking completion rates, comparing planned versus actual time allocation, and identifying recurring patterns across habits.

**System Design Decisions**

The pipeline is designed around a few key principles:

- **Separation of concerns:** Configuration, data access, pipeline logic, and utilities are separated to keep responsibilities clear
- **Staging before structuring:** Raw data is stored in MongoDB before transformation to allow inspection, validation, and iteration before enforcing structure
- **Structured activity model:** Calendar events are converted into a consistent `Activity` format to support downstream analysis
- **Status inference:** Completion is derived from markers in the event title to distinguish completed versus incomplete activities
- **Modular design:** The system is organized into pipelines, repositories, models, services, and utilities, making it easier to maintain and extend

## Next Steps
Next steps focus on building out the analysis layer on top of the existing pipeline. This includes descriptive analysis to track completion rates, time allocation, and recurring blockers, followed by diagnostic analysis to better understand why patterns occur, supported by Tableau dashboards.

As the system evolves, this will extend into dashboard improvements and more automated feedback to support consistent, data-informed decision-making over time.