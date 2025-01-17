package com.gzunicorn.operation.dynamic_xml;

import android.content.Context;
import android.graphics.Color;
import android.text.method.DigitsKeyListener;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.LinearLayout.LayoutParams;

import com.HelcPDA.R.color;

public class XmlMissEditBox_Menu extends LinearLayout {
	TextView label;
	public EditText txtBox;
	public Button btn_image, btn_explain;
	
	public XmlMissEditBox_Menu(Context context,String labelText,String initialText) {
		super(context);
		label = new TextView(context);
		label.setText(labelText);
		label.setTextColor(Color.BLACK);
		label.setBackgroundResource(color.color_bg_key);
		txtBox = new EditText(context);
		txtBox.setText(initialText);
		txtBox.setLayoutParams(new LayoutParams(ViewGroup.LayoutParams.FILL_PARENT,ViewGroup.LayoutParams.WRAP_CONTENT));
		btn_image = new Button(context);
		btn_image.setText("指示图");
		btn_image.setLayoutParams(new LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,ViewGroup.LayoutParams.WRAP_CONTENT));
		btn_image.setVisibility(View.GONE);
		btn_explain = new Button(context);
		btn_explain.setText("标准");
		btn_explain.setLayoutParams(new LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,ViewGroup.LayoutParams.WRAP_CONTENT));
//		btn_explain.setVisibility(View.GONE);
		
		LinearLayout ll = new LinearLayout(context);
		ll.addView(txtBox);
		ll.addView(btn_explain);
		ll.addView(btn_image);
		
		this.setOrientation(LinearLayout.VERTICAL);
		this.addView(label);
		this.addView(ll);
	}
	
	public XmlMissEditBox_Menu(Context context, AttributeSet attrs) {
		super(context, attrs);
	}
	
	
	public void makeNumeric()
	{
		DigitsKeyListener dkl = new DigitsKeyListener(true,true);
		txtBox.setKeyListener(dkl);
	}
	
	public void makeDate() {
		txtBox.setText("点击选择时间");
		txtBox.setCursorVisible(false);
		/*txtBox.setFilters(new InputFilter[]{new InputFilter() {
			@Override
			public CharSequence filter(CharSequence source, int start, int end,
					Spanned dest, int dstart, int dend) {
				return source.length()<1?dest.subSequence(dstart, dend):"";
			}
		}});*/
	}
	
	public String getValue()
	{
		return txtBox.getText().toString();
	}
	
	public void setValue(String v)
	{
		txtBox.setText(v);
	}

	

	 

}
