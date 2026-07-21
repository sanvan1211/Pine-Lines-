//@version=6
//©pinelines

//Note: GitHub doesn't currently support Pine Script syntax highlighting, so all .pine files are formatted as JavaScript (.js) since it's the closest supported language and provides the most readable syntax highlighting.
//This (JavaScript) format leaves current Pine Script unchanged

//SMA- Simple Moving Average
indicator("Simple Moving Average", overlay=true)

length = input.int(20, title="SMA Length")
smaValue = ta.sma(close, length)

plot(smaValue, color = color.blue, title="SMA")

//EMA- Exponential Moving Average
indicator("Exponential Moving Average", overlay=true)

length = input.int(20, title="EMA Length")
emaValue = ta.ema(close, length)

plot(emaValue, color=color.orange, title="EMA")

//RMA- Rolling Moving Average 
indicator("Rolling Moving Average (Wilder's)", overlay=true)

length = input.int(14, title="RMA Length")
rmaValue = ta.rma(close, length)

plot(rmaValue, color=color.purple, title="RMA")

//MACD- Moving Average Convergence Divergence
indicator("MACD", overlay=false)

fastLength   = input.int(12, title="Fast EMA")
slowLength   = input.int(26, title="Slow EMA")
signalLength = input.int(9, title="Signal EMA")

fastEMA    = ta.ema(close, fastLength)
slowEMA    = ta.ema(close, slowLength)
macdLine   = fastEMA - slowEMA
signalLine = ta.ema(macdLine, signalLength)
histogram  = macdLine - signalLine

plot(macdLine, color=color.blue, title="MACD Line")
plot(signalLine, color=color.red, title="Signal Line")
plot(histogram, color=color.gray, style=plot.style_columns, title="Histogram")

// Arnaud Legoux Moving Average (ALMA) - Uses gaussian distribution to reduce noise while minimizing latency 
alma = ta.alma(close, 20, 0.85, 6)
plot(alma, color=color.purple)
