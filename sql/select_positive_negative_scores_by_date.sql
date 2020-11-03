SELECT `date` as day,
SUM(CASE WHEN score > 0 then score else 0 end) as num_pos_scores,
SUM(CASE WHEN score < 0 then score else 0 end) as num_neg_scores 
FROM assessment WHERE DATE(date) BETWEEN '2011-03-01%' AND '2011-04-30%' GROUP BY day;