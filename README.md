# 🤖 LinkedIn AI AutoPoster

> *Transform breaking news into engaging LinkedIn content with historical wisdom and philosophical insights*

[![Python 3.12.4](https://img.shields.io/badge/python-3.12.4-blue.svg)](https://www.python.org/downloads/release/python-3124/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![LinkedIn API](https://img.shields.io/badge/LinkedIn-API-0077B5.svg)](https://developer.linkedin.com/)
[![OpenAI GPT](https://img.shields.io/badge/OpenAI-GPT--4-412991.svg)](https://openai.com/)

## ✨ What It Does

This intelligent automation bot revolutionizes LinkedIn content creation by:

- 📰 **Fetching Breaking News** from multiple sources via NewsAPI
- 🧠 **AI Analysis** using embeddings to find the most relevant stories
- ✍️ **Content Generation** with OpenAI GPT-4 for professional, engaging posts
- 📚 **Historical Context** weaving current events with historical parallels
- 💭 **Philosophical Insights** adding depth with meaningful quotes
- 🕐 **Smart Scheduling** automated posting every 3 days at 8 AM EST
- 🔄 **Token Management** automatic LinkedIn OAuth token refresh

## 🎯 Sample Output

```
🤖 Automated LinkedIn post - 2025-09-22 08:00:15

🔥 Hot Off the Press: AI Companies Report Record Growth Despite Market Uncertainty

The tech sector's resilience mirrors the railroad boom of the 1860s. 
When uncertainty strikes, innovation accelerates.

Just as the transcontinental railroad connected a divided nation during 
the Civil War, today's AI infrastructure is bridging gaps in productivity 
and human potential.

"The best time to plant a tree was 20 years ago. The second-best time is now." 
- Chinese Proverb

History shows us that periods of disruption create the greatest opportunities 
for those bold enough to build the future.

Follow for more weekly wisdom. Post created automatically by a Python + AI script.

#HistoryRepeats #AI #Innovation #Leadership #TechGrowth
```

## 🚀 Features

### 🧠 **AI-Powered Content Creation**
- **Smart News Analysis**: Cosine similarity matching to find trending topics
- **Historical Parallels**: Connects current events with historical context
- **Philosophical Depth**: Incorporates meaningful quotes and insights
- **Professional Tone**: LinkedIn-optimized content for maximum engagement

### 🤖 **Fully Automated**
- **Zero Manual Intervention**: Runs completely hands-free after initial setup
- **Smart Scheduling**: Day-specific headlines (Monday: "🔥 Hot Off the Press", Tuesday: "🤔 What Do You Think?", etc.)
- **Token Management**: Automatic OAuth refresh and error handling
- **Failure Recovery**: Graceful fallbacks and comprehensive error logging

### 🔧 **Enterprise Ready**
- **GitHub Actions Integration**: Professional CI/CD workflow
- **Environment Variable Security**: No hardcoded credentials
- **Comprehensive Logging**: Full audit trail and debugging information
- **Scalable Architecture**: Easy to extend and customize

## 📋 Prerequisites

- **Python 3.12.4+**
- **LinkedIn Developer App** with "Sign in with LinkedIn" and "Share on LinkedIn" products enabled
- **NewsAPI Account** for news data
- **OpenAI API Key** for content generation
- **GitHub Repository** for automation (optional)

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/linkedin-ai-autoposter.git
cd linkedin-ai-autoposter
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Set Up Environment Variables
```bash
# Create .env file or set environment variables
CLIENT_ID=your_linkedin_client_id
CLIENT_SECRET=your_linkedin_client_secret
NEWSAPI_KEY=your_newsapi_key
OPENAI_API_KEY=your_openai_api_key
```

### 4. Initial Authorization (One-Time)
```bash
python linkedin_automated_auth.py
```
Follow the OAuth flow to authorize the application. Tokens will be automatically saved for future use.

## 🏃‍♂️ Usage

### Local Execution
```bash
python linkedin_automated_auth.py
```

### GitHub Actions (Automated)
1. Add repository secrets for all environment variables
2. Push to main branch
3. Workflow runs automatically every 3 days at 8 AM EST
4. Manual trigger available in Actions tab

## 📁 Project Structure

```
linkedin-ai-autoposter/
├── linkedin_automated_auth.py    # Main application
├── requirements.txt              # Python dependencies
├── .linkedin_tokens.json         # Token storage (auto-generated)
├── .github/
│   └── workflows/
│       └── linkedin-automation.yml  # CI/CD workflow
└── README.md
```

## 🔐 Security

- **No Hardcoded Credentials**: All sensitive data via environment variables
- **Token Encryption**: OAuth tokens securely managed
- **Git Ignore**: Sensitive files excluded from version control
- **GitHub Secrets**: Secure credential storage in CI/CD

## 🎨 Customization

### Day-Specific Headlines
```python
day_headlines = {
    'Monday': f"🔥 Hot Off the Press: {headline}",
    'Tuesday': f"🤔 What Do You Think? {headline}",
    'Wednesday': f"⚡ Mid-Week Spark: {headline}",
    # ... customize as needed
}
```

### Content Prompts
Modify the `prompt_template` in `create_draft_linkedin_post()` to adjust tone, style, or focus areas.

### Scheduling
Update the cron expression in `.github/workflows/linkedin-automation.yml`:
```yaml
# Every day at 9 AM EST
- cron: '0 14 * * *'

# Weekdays only at 8 AM EST  
- cron: '0 13 * * 1-5'
```

## 🐛 Troubleshooting

### Common Issues

**Authentication Errors (403/401)**
- Verify LinkedIn app has required products enabled
- Check that redirect URI matches exactly
- Ensure all OAuth scopes are approved

**API Rate Limits**
- NewsAPI: 1000 requests/day (free tier)
- OpenAI: Check your usage limits
- LinkedIn: 5000 API calls/day

**Token Expiration**
- Access tokens expire after 60 days
- Refresh tokens handle automatic renewal
- Manual re-authorization may be required

## 📊 Monitoring

### GitHub Actions Logs
- View execution logs in the Actions tab
- Error artifacts uploaded on failure
- Email notifications available

### Local Debugging
```bash
# Verbose logging
python linkedin_automated_auth.py --verbose

# Test mode (no actual posting)
python linkedin_automated_auth.py --test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Acknowledgments

- **OpenAI** for GPT-4 language model
- **NewsAPI** for real-time news data
- **LinkedIn** for professional networking API
- **LangChain** for AI orchestration framework

## 🔗 Links

- [LinkedIn Developer Platform](https://developer.linkedin.com/)
- [NewsAPI Documentation](https://newsapi.org/docs)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

<div align="center">

**Made with ❤️ and 🤖 AI**

[⭐ Star this repo](https://github.com/yourusername/linkedin-ai-autoposter) • [🐛 Report Bug](https://github.com/yourusername/linkedin-ai-autoposter/issues) • [✨ Request Feature](https://github.com/yourusername/linkedin-ai-autoposter/issues)

</div>
