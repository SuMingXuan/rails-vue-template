class PagesController < ApplicationController

  # GET /pages or /pages.json
  def index
    @pages = Page.all
  end

  # POST /pages or /pages.json
  def create
    @page = Page.new(page_params)

    if @page.save
      render json: { success: true }
    else
      render json: { success: false, message: @page.errors.full_messages.join(' ') }
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def page_params
      params.require(:page).permit(:title, :description, :content, :user_id)
    end
end
