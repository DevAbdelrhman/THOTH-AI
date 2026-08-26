package cli

import "github.com/THOTH-AI/THOTH-Chat/backend/internal/app"

// Run 启动默认 HTTP 服务。
func Run() error {
	instance, err := app.NewApp()
	if err != nil {
		return err
	}
	defer instance.Close()

	return instance.Run()
}
